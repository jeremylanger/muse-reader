import { useCallback, useEffect, useState } from "react";
import { NextWord } from "./NextWord";

const xmlData = `
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:svg="http://www.w3.org/2000/svg">
<head>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/>

<title>
   Dune
</title>
<link href="css/stylesheet.css" rel="stylesheet" type="text/css"/>
<meta name="Adept.resource" value="urn:uuid:15559dc9-fb29-4a72-ba06-8394ef3816fe"/>


</head>
<body>
<p class="indent"><em>The shock must be severe and he’s almost ready for it,</em> she thought.
</p>

<p class="indent">‘You listen respectfully to me in Council,’ she said, ‘yet you seldom heed my advice. Why?’</p>

<p class="indent">‘I don’t trust your Bene Gesserit motives,’ he said. You may <a id="page173"/>think you can look through a man; you may <em>think</em> you can make a man do exactly what you—’
</p>

<p class="indent">‘You poor <em>fool,</em> Thufir!’ she raged.
</p>

<p class="indent">He scowled, pushing himself back in the chair.</p>

<p class="indent">‘Whatever rumors you’ve heard about our schools,’ she said, ‘the truth is far greater. If I wished to destroy the Duke … or
   you, or any other person within my reach, you could not stop me.’
</p>

<p class="indent">And she thought: <em>Why do I let pride drive such words out of me? This is not the way I was trained. This is not how I must shock him.</em></p>

<p class="indent">Hawat slipped a hand beneath his tunic where he kept a tiny projector of poison darts. <em>She wears no shield,</em> he thought. <em>Is this just a brag she makes? I could slay her now … but, ah-h-h-h, the consequences if I’m wrong.</em></p>

<p class="indent">Jessica saw the gesture toward his pocket, said: ‘Let us pray violence shall never be necessary between us.’</p>

<p class="indent">‘A worthy prayer,’ he agreed.</p>

<p class="indent">‘Meanwhile, the sickness spreads among us,’ she said. ‘I must ask you again: Isn’t it more reasonable to suppose the Harkonnens
have planted this suspicion to pit the two of us against each other?’
</p>

<p class="indent">‘We appear to’ve returned to stalemate,’ he said.</p>

<p class="indent">She sighed, thinking: <em>He’s almost ready for it.</em></p>
</body>
</html>
`

const parser = new DOMParser();
const htmlDoc = parser.parseFromString(xmlData, 'text/xml');
const sentences = Array.from(htmlDoc.body.children).map(x =>
  x.innerHTML
    .replaceAll(/<em xmlns=["'].*["']>/g, "<em>")
    .replaceAll(/<a xmlns=["'].*["'] id=["'].*["']><\/a>/g, "")
);

function App() {
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === " ") {
      setSentenceIndex(curr => Math.min(sentences.length - 1, curr + 1));
    }
    if (event.key === "ArrowLeft") {
      setSentenceIndex(curr => Math.max(0, curr - 1));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  const calculateDelay = (word: string) => {
    const basePause = 100;
    const wordLengthPause = word.length * 40;
    const commaPause = word.endsWith(",") ? 200 : 0;
    const endOfSentencePause = word.endsWith(";")
      || word.endsWith(".")
      || word.endsWith('."')
      || word.endsWith('.’')
      || word.endsWith('!')
      || word.endsWith('!"')
      || word.endsWith('!’')
      || word.endsWith('?')
      || word.endsWith('?"')
      || word.endsWith('?’')
      ? 350 : 0;
    const ellipsisPause = word.endsWith("…") ? 1000 : 0;

    return basePause + wordLengthPause + commaPause + endOfSentencePause + ellipsisPause;
  };

  const startOfItalicPhrase = (word: string) => word.startsWith("<em>");
  const endOfItalicPhrase = (word: string) => (word.endsWith("</em>") || word.endsWith("</em>,") || word.endsWith("</em>."));

  let delay = 0;
  let italicMode = false;
  const words = sentences[sentenceIndex].split(" ").filter(x => x !== "");

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-[url('/dune-wallpaper.jpg')] bg-center text-center text-white font-dm-serif p-8 text-2xl leading-normal sm:text-5xl sm:leading-tight">
      <div className="flex content-center h-full">
        <div className="max-w-[800px] m-auto select-none">
          {words.map((word, i) => {
            let displayedWord = word;

            if (startOfItalicPhrase(word)) italicMode = true;
            if (italicMode) displayedWord = `<em>${word}</em>`;
            if (endOfItalicPhrase(word)) italicMode = false;

            const prevWord = i === 0 ? "" : words[i - 1];
            delay += calculateDelay(prevWord);

            return <NextWord key={`${sentenceIndex}-${i}-${word}`} delay={delay} word={displayedWord} />;
          })}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-1">
        <div className="h-full bg-white opacity-50 transition-all rounded" style={{ width: `${(sentenceIndex / (sentences.length - 1)) * 100}%` }} />
      </div>
    </div>
  );
}

export default App
