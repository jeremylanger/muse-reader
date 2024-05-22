import { openDuneEpub } from "../../utils/epubParser";

export { data }
 
async function data() {
  const chapters = await openDuneEpub();
	console.log({ chapters });
	const sentences = chapters?.flat() ?? [];
 
  return {
    sentences
  }
}