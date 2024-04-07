const parser = new DOMParser();

const parseAsXml = (data: string): Document =>
  parser.parseFromString(data.replaceAll(/<\?xml (.*)\?>/g, ""), "text/xml");

const getFullPath = (data: string): string => {
  const container = parseAsXml(data);
  const fullPath = container.querySelector("rootfile")?.getAttribute("full-path");

  if (!fullPath) {
    throw new Error("No full-path attribute found in container.xml");
  }

  return fullPath;
};

const readFile = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const result = e?.target?.result as string;
      if (!result) {
        console.log("File is empty");
        reject(new Error("File is empty"));
        return;
      }
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsText(blob);
  });
};

const openFile = async (url: string): Promise<Blob> => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`File does not exist: ${url}`);
      }
      return response.blob();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};

const getRootFilePathFromContainerFile = async (): Promise<string | undefined> => {
  const blob = await openFile("epub/dune-v2/META-INF/container.xml");
  try {
    const result = await readFile(blob);
    return getFullPath(result);
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

const getManifestFromRootFile = async (rootFilePath: string): Promise<HTMLCollection | undefined> => {
  const blob = await openFile(`epub/dune-v2/${rootFilePath}`);
  try {
    const result = await readFile(blob);
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
  const chapterPaths = chapterFilenames.map(filename => `${chapterDirectory}/${filename}`);

  const chapterPromises = chapterPaths.map(path => openFile(`epub/dune-v2/${path}`));
  const chapters = await Promise.all(chapterPromises);
  const chapterTextPromises = chapters.map(readFile);
  const chapterTexts = await Promise.all(chapterTextPromises);

  const chapterSentences = chapterTexts.map(text => Array.from(parseAsXml(text).body.children));

  return chapterSentences;
};
