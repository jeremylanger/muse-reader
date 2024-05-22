import { JSDOM } from "jsdom";

import fs from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(import.meta.url).replace("file://", "");

export const parseAsXml = (data: string) => {
  // Remove the XML declaration if present
  const cleanedData = data.replace(/<\?xml (.*)\?>/g, "");
  const dom = new JSDOM(cleanedData, { contentType: "text/xml" });
  return dom.window.document;
};

const getFullPath = (data: string): string => {
  const container = parseAsXml(data);
  const fullPath = container.querySelector("rootfile")?.getAttribute("full-path");

  if (!fullPath) {
    throw new Error("No full-path attribute found in container.xml");
  }

  return fullPath;
};

const readFile2 = (url: string): string => {
  const data = fs.readFileSync(
    `${__dirname}${url}`,
    "utf8",
  );
  return data;
};

const getRootFilePathFromContainerFile = async (): Promise<string | undefined> => {
  try {
    const data = readFile2("/../../client/epub/dune-v2/META-INF/container.xml");
    return getFullPath(data);
  } catch (error) {
    console.error("Error reading file:", error);
    return undefined;
  }
};

const getManifestFromRootFile = async (rootFilePath: string): Promise<HTMLCollection | undefined> => {
  try {
    const result = readFile2(`/../../client/epub/dune-v2/${rootFilePath}`);
    const rootFile = parseAsXml(result);
    const manifest = rootFile.querySelector("manifest")?.children;

    if (!manifest) {
      throw new Error(`No manifest found in ${rootFilePath}`);
    }

    return manifest;
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

interface SerializedNode {
  nodeType: number;
  nodeName: string;
  textContent: string | null;
  childNodes?: SerializedNode[];
}

// Recursive function to serialize a DOM node
const serializeNode = (node: ChildNode): SerializedNode => {
  return {
    nodeType: node.nodeType,
    nodeName: node.nodeName,
    textContent: node.textContent,
    childNodes: Array.from(node.childNodes).map(serializeNode)
  };
};

export const openDuneEpub = async () => {
  const rootFilePath = await getRootFilePathFromContainerFile();
  if (!rootFilePath) {
    console.error("No root file path found");
    return;
  }

  const manifest = await getManifestFromRootFile(rootFilePath);
  if (!manifest) {
    console.error("No manifest found");
    return;
  }

  const chapterFilenames = Array.from(manifest)
    .filter((el: Element) => el.getAttribute("media-type") === "application/xhtml+xml")
    .map((el: Element) => el.getAttribute("href"));
  const chapterDirectory = rootFilePath.split("/").slice(0, -1).join("/");
  const chapterPaths = chapterFilenames.map(filename => `/../../client/epub/dune-v2/${chapterDirectory}/${filename}`);

  const chapterTexts = chapterPaths.map(readFile2);
  // const chapterTextPromises = chapterPaths.map(readFile2);
  // const chapterTexts = await Promise.all(chapterTextPromises);

  const chapterSentences = chapterTexts.map(text => Array.from(parseAsXml(text).body.children));

  const serializedChapterSentences: SerializedNode[][] = chapterSentences.map(chapter =>
    chapter.map(serializeNode)
  );

  return serializedChapterSentences;
};
