import { useCallback, useEffect, useState } from "react";
import { NextWord } from "./NextWord";
import { openDuneEpub } from "./epubReader";

const xmlData = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?><html xmlns="http://www.w3.org/1999/xhtml" xmlns:svg="http://www.w3.org/2000/svg">
   
   <head>
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/>
      
      <title>
         Dune
      </title>
      <link href="css/stylesheet.css" rel="stylesheet" type="text/css"/>
<meta name="Adept.resource" value="urn:uuid:15559dc9-fb29-4a72-ba06-8394ef3816fe"/>
      
      
   </head>
   
   <body>


      

      
      <p class="indent"><a id="page150"/>Halleck’s music still wafted over the room, but it had come out of its minor key, lilting and lively now as though he were
         trying to lift the mood.
      </p>
      
      <p class="indent">‘Let the dinner commence,’ the Duke said, and sank into his chair.</p>
      
      <p class="indent"><em>He’s angry and uncertain,</em> Jessica thought. <em>The loss of that factory crawler hit him more deeply than it should have. It must be something more than that loss. He acts
            like a desperate man.</em> She lifted her fork, hoping in the motion to hide her own sudden bitterness. <em>Why not? He is desperate.</em></p>
      
      <p class="indent">Slowly at first, then with increasing animation, the dinner got under way. The stillsuit manufacturer complimented Jessica
         on her chef and wine.
      </p>
      
      <p class="indent">‘We brought both from Caladan,’ she said.</p>
      
      <p class="indent">‘Superb!’ he said, tasting the chukka. ‘Simply superb! And not a hint of melange in it. One gets so tired of the spice in
         everything.’
      </p>
      
      <p class="indent">The Guild Bank representative looked across at Kynes. ‘I understand, Doctor Kynes, that another factory crawler has been lost
         to a worm.’
      </p>
      
      <p class="indent">‘News travels fast,’ the Duke said.</p>
      
      <p class="indent">‘Then it’s true?’ the banker asked, shifting his attention to Leto.</p>
      
      <p class="indent">‘Of course, it’s true!’ the Duke snapped. ‘The blasted carryall disappeared. It shouldn’t be possible for anything that big
         to disappear!’
      </p>
      
      <p class="indent">‘When the worm came, there was nothing to recover the crawler,’ Kynes said.</p>
      
      <p class="indent">‘It should <em>not</em> be possible!’ the Duke repeated.
      </p>
      
      <p class="indent">‘No one saw the carryall leave?’ the banker asked.</p>
      
      <p class="indent">‘Spotters customarily keep their eyes on the sand,’ Kynes said. ‘They’re primarily interested in wormsign. A carryall’s complement
         usually is four men – two pilots and two journeymen attachers. If one – or even two of this crew were in the pay of the Duke’s
         foes—’
      </p>
      
      <p class="indent">‘A-h-h, I see,’ the banker said. And you, as Judge of the Change, do you challenge this?’</p>
      
      <p class="indent">‘I shall have to consider my position carefully,’ Kynes said, <a id="page151"/>‘and I certainly will not discuss it at table.’ And he thought: <em>That pale skeleton of a man! He knows this is the kind of infraction I was instructed to ignore.</em></p>
      
      <p class="indent">The banker smiled, returned his attention to his food.</p>
      
      <p class="indent">Jessica sat remembering a lecture from her Bene Gesserit schooldays. The subject had been espionage and counterespionage.
         A plump, happy-faced Reverend Mother had been the lecturer, her jolly voice contrasting weirdly with the subject matter.
      </p>
      
      <p class="indent"><em>A thing to note about any espionage and/or counter-espionage school is the similar basic reaction pattern of all its graduates.
            Any enclosed discipline sets its stamp, its pattern, upon its students. That pattern is susceptible to analysis and prediction.</em></p>
      
      <p class="indent"><em>‘Now, motivational patterns are going to be similar among all espionage agents. That is to say: there will be certain types
            of motivation that are similar despite differing schools or opposed aims. You will study first how to separate this element
            for your analysis – in the beginning, through interrogation patterns that betray the inner orientation of the interrogators;
            secondly, by close observation of language-thought orientation of those under analysis. You will find it fairly simple to
            determine the root languages of your subjects, of course, both through voice inflection and speech pattern.’</em></p>
      
      <p class="indent">Now, sitting at table with her son and her Duke and their guests, hearing the Guild Bank representative, Jessica felt a chill
         of realization: the man was a Harkonnen agent. He had the Giedi Prime speech pattern – subtly masked, but exposed to her trained
         awareness as though he had announced himself.
      </p>
      
      <p class="indent"><em>Does this mean the Guild itself has taken sides against House Atreides?</em> she asked herself. The thought shocked her, and she masked her emotion by calling for a new dish, all the while listening
         for the man to betray his purpose. <em>He will shift the conversation next to something innocent, but with ominous overtones,</em> she told herself. <em>It’s his pattern.</em></p>
      
      <p class="indent">The banker swallowed, took a sip of wine, smiled at something said to him by the woman on his right. He seemed to listen for
         a moment to a man down the table who was explaining to the Duke that native Arrakeen plants had no thorns.
      </p>
      
      <p class="indent">‘I enjoy watching the flights of birds on Arrakis,’ the banker said, directing his words at Jessica. All of our birds, of
         course, are <a id="page152"/>carrion-eaters, and many exist without water, having become blood-drinkers.’
      </p>
      
      <p class="indent">The stillsuit manufacturer’s daughter, seated between Paul and his father at the other end of the table, twisted her pretty
         face into a frown, said: ‘Oh, Soo-Soo, you say the most disgusting things.’
      </p>
      
      <p class="indent">The banker smiled. ‘They call me Soo-Soo because I’m financial adviser to the Water Peddlers’ Union.’ And, as Jessica continued
         to look at him without comment, he added: ‘Because of the water-sellers’ cry – “Soo-Soo Sook!” ‘And he imitated the call
         with such accuracy that many around the table laughed.
      </p>
      
      <p class="indent">Jessica heard the boastful tone of voice, but noted most that the young woman had spoken on cue – a set piece. She had produced
         the excuse for the banker to say what he had said. She glanced at Lingar Bewt. The water magnate was scowling, concentrating
         on his dinner. It came to Jessica that the banker had said: ‘<em>I, too, control that ultimate source of power on Arrakis – water.’</em></p>
      
      <p class="indent">Paul had marked the falseness in his dinner companion’s voice, saw that his mother was following the conversation with Bene
         Gesserit intensity. On impulse, he decided to play the foil, draw the exchange out. He addressed himself to the banker.
      </p>
      
      <p class="indent">‘Do you mean, sir, that these birds are cannibals?’</p>
      
      <p class="indent">‘That’s an odd question, young Master,’ the banker said. ‘I merely said the birds drink blood. It doesn’t have to be the blood
         of their own kind, does it?’
      </p>
      
      <p class="indent">‘It was <em>not</em> an odd question,’ Paul said, and Jessica noted the brittle riposte quality of her training exposed in his voice. ‘Most educated
         people know that the worst potential competition for any young organism can come from its own kind.’ He deliberately forked
         a bite of food from his companion’s plate, ate it. ‘They are eating from the same bowl. They have the same basic requirements.’
      </p>
      
      <p class="indent">The banker stiffened, scowled at the Duke.</p>
      
      <p class="indent">‘Do not make the error of considering my son a child,’ the Duke said. And he smiled.</p>
      
      <p class="indent">Jessica glanced around the table, noted that Bewt had brightened, that both Kynes and the smuggler, Tuek, were grinning.</p>
      
      <p class="indent">‘It’s a rule of ecology,’ Kynes said, ‘that the young Master <a id="page153"/>appears to understand quite well. The struggle between life elements is the struggle for the free energy of a system. Blood’s
         an efficient energy source.’
      </p>
      
      <p class="indent">The banker put down his fork, spoke in an angry voice: ‘It’s said that the Fremen scum drink the blood of their dead.’</p>
      
      <p class="indent">Kynes shook his head, spoke in a lecturing tone: ‘Not the blood, sir. But all of a man’s water, ultimately, belongs to his
         people – to his tribe. It’s a necessity when you live near the Great Flat. All water’s precious there, and the human body
         is composed of some seventy per cent water by weight. A dead man, surely, no longer requires that water.’
      </p>
      
      <p class="indent">The banker put both hands against the table beside his plate, and Jessica thought he was going to push himself back, leave
         in a rage.
      </p>
      
      <p class="indent">Kynes looked at Jessica. ‘Forgive me, my Lady, for elaborating on such an ugly subject at table, but you were being told falsehood
         and it needed clarifying.’
      </p>
      
      <p class="indent">‘You’ve associated so long with Fremen that you’ve lost all sensibilities,’ the banker rasped.</p>
      
      <p class="indent">Kynes looked at him calmly, studied the pale, trembling face. ‘Are you challenging me, sir?’</p>
      
      <p class="indent">The banker froze. He swallowed, spoke stiffly: ‘Of course not. I’d not so insult our host and hostess.’</p>
      
      <p class="indent">Jessica heard the fear in the man’s voice, saw it in his face, in his breathing, in the pulse of a vein at his temple. The
         man was terrified of Kynes!
      </p>
      
      <p class="indent">‘Our host and hostess are quite capable of deciding for themselves when they’ve been insulted,’ Kynes said. ‘They’re brave
         people who understand defense of honor. We all may attest to their courage by the fact that they are here … now … on Arrakis.’
      </p>
      
      <p class="indent">Jessica saw that Leto was enjoying this. Most of the others were not. People all around the table sat poised for flight, hands
         out of sight under the table. Two notable exceptions were Bewt, who was openly smiling at the banker’s discomfiture, and the
         smuggler, Tuek, who appeared to be watching Kynes for a cue. Jessica saw that Paul was looking at Kynes in admiration.
      </p>
      
      <p class="indent">‘Well?’ Kynes said.</p>
      
      <p class="indent"><a id="page154"/>‘I meant no offense,’ the banker muttered. ‘If offense was taken, please accept my apologies.’
      </p>
      
      <p class="indent">‘Freely given, freely accepted,’ Kynes said. He smiled at Jessica, resumed eating as though nothing had happened.</p>
      
      <p class="indent">Jessica saw that the smuggler, too, had relaxed. She marked this: the man had shown every aspect of an aide ready to leap
         to Kynes’ assistance. There existed an accord of some sort between Kynes and Tuek.
      </p>
      
      <p class="indent">Leto toyed with a fork, looked speculatively at Kynes. The ecologist’s manner indicated a change in attitude toward the House
         of Atreides. Kynes had seemed colder on their trip over the desert.
      </p>
      
      <p class="indent">Jessica signaled for another course of food and drink. Servants appeared with <em>langues de lapins de garenne –</em> red wine and a sauce of mushroom-yeast on the side.
      </p>
      
      <p class="indent">Slowly, the dinner conversation resumed, but Jessica heard the agitation in it, the brittle quality, saw that the banker ate
         in sullen silence. <em>Kynes would have killed him without hesitating,</em> she thought. And she realized that there was an offhand attitude toward killing in Kynes’ manner. He was a casual killer,
         and she guessed that this was a Fremen quality.
      </p>
      
      <p class="indent">Jessica turned to the stillsuit manufacturer on her left, said: ‘I find myself continually amazed by the importance of water
         on Arrakis.’
      </p>
      
      <p class="indent">‘Very important,’ he agreed. ‘What is this dish? It’s delicious.’</p>
      
      <p class="indent">‘Tongues of wild rabbit in a special sauce,’ she said. ‘A very old recipe.’</p>
      
      <p class="indent">‘I must have that recipe,’ the man said.</p>
      
      <p class="indent">She nodded. ‘I’ll see that you get it.’</p>
      
      <p class="indent">Kynes looked at Jessica, said: ‘The newcomer to Arrakis frequently underestimates the importance of water here. You are dealing,
         you see, with the Law of the Minimum.’
      </p>
      
      <p class="indent">She heard the testing quality in his voice, said, ‘Growth is limited by that necessity which is present in the least amount.
         And, naturally, the least favorable condition controls the growth rate.’
      </p>
      
      <p class="indent">‘It’s rare to find members of a Great House aware of <a id="page155"/>planetological problems,’ Kynes said. ‘Water is the least favorable condition for life on Arrakis. And remember that <em>growth</em> itself can produce unfavorable conditions unless treated with extreme care.’
      </p>
      
      <p class="indent">Jessica sensed a hidden message in Kynes’ words, but knew she was missing it. ‘Growth,’ she said. ‘Do you mean Arrakis can
         have an orderly cycle of water to sustain human life under more favorable conditions?’
      </p>
      
      <p class="indent">‘Impossible!’ The water magnate barked.</p>
      
      <p class="indent">Jessica turned her attention to Bewt. ‘Impossible?’</p>
      
      <p class="indent">‘Impossible on Arrakis,’ he said. ‘Don’t listen to this dreamer. All the laboratory evidence is against him.’</p>
      
      <p class="indent">Kynes looked at Bewt, and Jessica noted that the other conversations around the table had stopped while people concentrated
         on this new interchange.
      </p>
      
      <p class="indent">‘Laboratory evidence tends to blind us to a very simple fact,’ Kynes said. ‘That fact is this: we are dealing here with matters
         that originated and exist out-of-doors where plants and animals carry on their normal existence.’
      </p>
      
      <p class="indent">‘Normal!’ Bewt snorted. ‘Nothing about Arrakis is normal!’</p>
      
      <p class="indent">‘Quite the contrary,’ Kynes said. ‘Certain harmonies could be set up here along self-sustaining lines. You merely have to
         understand the limits of the planet and the pressures upon it.’
      </p>
      
      <p class="indent">‘It’ll never be done,’ Bewt said.</p>
      
      <p class="indent">The Duke came to a sudden realization, placing the point where Kynes’ attitude had changed – it had been when Jessica had
         spoken of holding the conservatory plants in trust for Arrakis.
      </p>
      
      <p class="indent">‘What would it take to set up the self-sustaining system, Doctor Kynes?’ Leto asked.</p>
      
      <p class="indent">‘If we can get three per cent of the green plant element on Arrakis involved in forming carbon compounds as foodstuffs, we’ve
         started the cyclic system,’ Kynes said.
      </p>
      
      <p class="indent">‘Water’s the only problem?’ the Duke asked. He sensed Kynes’ excitement, felt himself caught up in it.</p>
      
      <p class="indent">‘Water overshadows the other problems,’ Kynes said. ‘This planet has much oxygen without its usual concomitants – widespread
         plant life and large sources of free carbon dioxide from <a id="page156"/>such phenomena as volcanoes. There are unusual chemical interchanges over large surface areas here.’
      </p>
      
      <p class="indent">‘Do you have pilot projects?’ the Duke asked.</p>
      
      <p class="indent">‘We’ve had a long time in which to build up the Tansley Effect – small-unit experiments on an amateur basis from which my
         science may now draw its working facts,’ Kynes said.
      </p>
      
      <p class="indent">‘There isn’t enough water,’ Bewt said. ‘There just isn’t enough water.’</p>
      
      <p class="indent">‘Master Bewt is an expert on water,’ Kynes said. He smiled, turned back to his dinner.</p>
      
      <p class="indent">The Duke gestured sharply down with his right hand, barked: ‘No, I want an answer! Is there enough water, Doctor Kynes?’</p>
      
      <p class="indent">Kynes stared at his plate.</p>
      
      <p class="indent">Jessica watched the play of emotion on his face. <em>He masks himself well,</em> she thought, but she had him registered now and read that he regretted his words.
      </p>
      
      <p class="indent">‘Is there enough water?’ the Duke demanded.</p>
      
      <p class="indent">‘There … may be,’ Kynes said.</p>
      
      <p class="indent"><em>He’s faking uncertainty!</em>Jessica thought.
      </p>
      
      <p class="indent">With his deeper truthsense, Paul caught the underlying motive, had to use every ounce of his training to mask his excitement.
         <em>There is enough water! But Kynes doesn’t wish it to be known.</em></p>
      
      <p class="indent">‘Our planetologist has many interesting dreams,’ Bewt said. ‘He dreams with the Fremen – of prophecies and messiahs.’</p>
      
      <p class="indent">Chuckles sounded at odd places around the table. Jessica marked them – the smuggler, the stillsuit manufacturer’s daughter,
         Duncan Idaho, the woman with the mysterious escort service.
      </p>
      
      <p class="indent"><em>Tensions are oddly distributed here tonight,</em> Jessica thought. <em>There’s too much going on of which I’m not aware. I’ll have to develop new information sources.</em></p>
      
      <p class="indent">The Duke passed his gaze from Kynes to Bewt to Jessica. He felt oddly let down, as though something vital had passed him here.
         <em>‘May</em> be,’ he muttered.
      </p>
      
      <p class="indent">Kynes spoke quickly: ‘Perhaps we should discuss this another time, my Lord. There are so many—’</p>
      
      <p class="indent">The planetologist broke off as a uniformed Atreides trooper hurried in through the service door, was passed by the guard <a id="page157"/>and rushed to the Duke’s side. The man bent, whispering into Leto’s ear.
      </p>
      
      <p class="indent">Jessica recognized the capsign of Hawat’s corps, fought down uneasiness. She addressed herself to the stillsuit manufacturer’s
         feminine companion – a tiny, dark-haired woman with a doll face, a touch of epicanthic fold to the eyes.
      </p>
      
      <p class="indent">‘You’ve hardly touched your dinner, my dear,’ Jessica said. ‘May I order you something?’</p>
      
      <p class="indent">The woman looked at the stillsuit manufacturer before answering, then: ‘I’m not very hungry.’</p>
      
      <p class="indent">Abruptly, the Duke stood up beside his trooper, spoke in a harsh tone of command: ‘Stay seated, everyone. You will have to
         forgive me, but a matter has arisen that requires my personal attention.’ He stepped aside. ‘Paul, take over as host for me,
         if you please.’
      </p>
      
      <p class="indent">Paul stood, wanting to ask why his father had to leave, knowing he had to play this with the grand manner. He moved around
         to his father’s chair, sat down at it.
      </p>
      
      <p class="indent">The Duke turned to the alcove where Halleck sat, said: ‘Gurney, please take Paul’s place at table. We mustn’t have an odd
         number here. When the dinner’s over, I may want you to bring Paul to the field C.P. Wait for my Call.’
      </p>
      
      <p class="indent">Halleck emerged from the alcove in dress uniform, his lumpy ugliness seeming out of place in the glittering finery. He leaned
         his baliset against the wall, crossed to the chair Paul had occupied, sat down.
      </p>
      
      <p class="indent">‘There’s no need for alarm,’ the Duke said, ‘but I must ask that no one leave until our house guard says it’s safe. You will
         be perfectly secure as long as you remain here, and we’ll have this little trouble cleared up very shortly.’
      </p>
      
      <p class="indent">Paul caught the code words in his father’s message – <em>guard-safe-secure-shortly.</em> The problem was security, not violence. He saw that his mother had read the same message. They both relaxed.
      </p>
      
      <p class="indent">The Duke gave a short nod, wheeled and strode through the service door followed by his trooper.</p>
      
      <p class="indent">Paul said: ‘Please go on with your dinner. I believe Doctor Kynes was discussing water.’</p>
      
      <p class="indent">‘May we discuss it another time?’ Kynes asked.</p>
      
      <p class="indent"><a id="page158"/>‘By all means,’ Paul said.
      </p>
      
      <p class="indent">And Jessica noted with pride her son’s dignity, the mature sense of assurance.</p>
      
      <p class="indent">The banker picked up his water flagon, gestured with it at Bewt. ‘None of us here can surpass Master Lingar Bewt in flowery
         phrases. One might almost assume he aspired to Great House status. Come, Master Bewt, lead us in a toast. Perhaps you’ve a
         dollop of wisdom for the boy who must be treated like a man.’
      </p>
      
      <p class="indent">Jessica clenched her right hand into a fist beneath the table. She saw a hand signal pass from Halleck to Idaho, saw the house
         troopers along the walls move into positions of maximum guard.
      </p>
      
      <p class="indent">Bewt cast a venomous glare at the banker.</p>
      
      <p class="indent">Paul glanced at Halleck, took in the defensive positions of his guards, looked at the banker until the man lowered the water
         flagon. He said: ‘Once, on Caladan, I saw the body of a drowned fisherman recovered. He—’
      </p>
      
      <p class="indent">‘Drowned?’ It was the stillsuit manufacturer’s daughter.</p>
      
      <p class="indent">Paul hesitated, then: ‘Yes. Immersed in water until dead. Drowned.’</p>
      
      <p class="indent">‘What an interesting way to die,’ she murmured.</p>
      
      <p class="indent">Paul’s smile became brittle. He returned his attention to the banker. ‘The interesting thing about this man was the wounds
         on his shoulders – made by another fisherman’s claw-boots. This fisherman was one of several in a boat – a craft for travelling
         on water – that foundered … sank beneath the water. Another fisherman helping recover the body said he’d seen marks like this
         man’s wounds several times. They meant another drowning fisherman had tried to stand on this poor fellow’s shoulders in the
         attempt to reach up to the surface – to reach air.’
      </p>
      
      <p class="indent">‘Why is this interesting?’ the banker asked.</p>
      
      <p class="indent">‘Because of an observation made by my father at the time. He said the drowning man who climbs on your shoulders to save himself
         is understandable – except when you see it happen in the drawing room.’ Paul hesitated just long enough for the banker to
         see the point coming, then: ‘And, I should add, except when you see it at the dinner table.’
      </p>
      
      <p class="indent">A sudden stillness enfolded the room.</p>
      
      <p class="indent"><a id="page159"/><em>That was rash,</em> Jessica thought. <em>This banker might have enough rank to call my son out.</em> She saw that Idaho was poised for instant action. The House troopers were alert. Gurney Halleck had his eyes on the men opposite
         him.
      </p>
      
      <p class="indent">‘Ho-ho-ho-o-o-o!’ It was the smuggler, Tuek, head thrown back, laughing with complete abandon.</p>
      
      <p class="indent">Nervous smiles appeared around the table.</p>
      
      <p class="indent">Bewt was grinning.</p>
      
      <p class="indent">The banker had pushed his chair back, was glaring at Paul.</p>
      
      <p class="indent">Kynes said: ‘One baits an Atreides at his own risk.’</p>
      
      <p class="indent">‘Is it Atreides custom to insult their guests?’ the banker demanded.</p>
      
      <p class="indent">Before Paul could answer, Jessica leaned forward, said: ‘Sir!’ And she thought: <em>We must learn this Harkonnen creature’s game. Is he here to try for Paul? Does he have help?</em></p>
      
      <p class="indent">‘My son displays a general garment and you claim it’s cut to your fit?’Jessica asked. ‘What a fascinating revelation.’ She
         slid a hand down her leg to the crysknife she had fastened in a calf-sheath.
      </p>
      
      <p class="indent">The banker turned his glare at Jessica. Eyes shifted away from Paul and she saw him ease himself back from the table, freeing
         himself for action. He had focused on the code word: <em>garment. ‘Prepare for violence.’</em></p>
      
      <p class="indent">Kynes directed a speculative look at Jessica, gave a subtle hand signal to Tuek.</p>
      
      <p class="indent">The smuggler lurched to his feet, lifted his flagon. ‘I’ll give you a toast,’ he said. ‘To young Paul Atreides, still a lad
         by his looks, but a man by his actions.’
      </p>
      
      <p class="indent"><em>Why do they intrude?</em>Jessica asked herself.
      </p>
      
      <p class="indent">The banker stared now at Kynes, and Jessica saw terror return to the agent’s face.</p>
      
      <p class="indent">People began responding all around the table.</p>
      
      <p class="indent"><em>Where Kynes leads, people follow,</em> Jessica thought. <em>He has told us he sides with Paul. What’s the secret of his power? It can’t be because he’s Judge of the Change. That’s temporary.
            And certainly not because he’s a civil servant.</em></p>
      
      <p class="indent">She removed her hand from the crysknife hilt, lifted her flagon to Kynes, who responded in kind.</p>
      
      <p class="indent"><a id="page160"/>Only Paul and the banker – <em>(Soo-Soo! What an idiotic nickname!</em> Jessica thought.) – remained empty-handed. The banker’s attention stayed fixed on Kynes. Paul stared at his plate.
      </p>
      
      <p class="indent"><em>I was handling it correctly,</em> Paul thought. <em>Why do they interfere?</em> He glanced covertly at the male guests nearest him. <em>Prepare for violence? From whom? Certainly not from that banker fellow.</em></p>
      
      <p class="indent">Halleck stirred, spoke as though to no one in particular, directing his words over the heads of the guests across from him:
         ‘In our society, people shouldn’t be quick to take offense. It’s frequently suicidal.’ He looked at the stillsuit manufacturer’s
         daughter beside him. ‘Don’t you think so, miss?’
      </p>
      
      <p class="indent">‘Oh, yes. Yes. Indeed I do,’ she said. ‘There’s too much violence. It makes me sick. And lots of times no offense is meant,
         but people die anyway. It doesn’t make sense.’
      </p>
      
      <p class="indent">‘Indeed it doesn’t,’ Halleck said.</p>
      
      <p class="indent">Jessica saw the near perfection of the girl’s act, realized: <em>That empty-headed little female is not an empty-headed little female.</em> She saw then the pattern of the threat and understood that Halleck, too, had detected it. They had planned to lure Paul with
         sex. Jessica relaxed. Her son had probably been first to see it – his training hadn’t overlooked the obvious gambit.
      </p>
      
      <p class="indent">Kynes spoke to the banker: ‘Isn’t another apology in order?’</p>
      
      <p class="indent">The banker turned a sickly grin toward Jessica, said: ‘My Lady, I fear I’ve overindulged in your wines. You serve potent drink
         at table, and I’m not accustomed to it.’
      </p>
      
      <p class="indent">Jessica heard the venom beneath his tone, spoke sweetly: ‘When strangers meet, great allowance should be made for differences
         of custom and training.’
      </p>
      
      <p class="indent">‘Thank you, my Lady,’ he said.</p>
      
      <p class="indent">The dark-haired companion of the stillsuit manufacturer leaned toward Jessica, said: ‘The Duke spoke of our being secure here.
         I do hope that doesn’t mean more fighting.’
      </p>
      
      <p class="indent"><em>She was directed to lead the conversation this way,</em> Jessica thought.
      </p>
      
      <p class="indent">‘Likely this will prove unimportant,’Jessica said. ‘But there’s so much detail requiring the Duke’s personal attention in
         these times. As long as enmity continues between Atreides and Harkonnen we cannot be too careful. The Duke has sworn kanly.
         He will leave no Harkonnen agent alive on Arrakis, of course.’ She <a id="page161"/>glanced at the Guild Bank agent. ‘And the Conventions, naturally, support him in this.’ She shifted her attention to Kynes.
         ‘Is this not so, Dr Kynes?’
      </p>
      
      <p class="indent">‘Indeed it is,’ Kynes said.</p>
      
      <p class="indent">The stillsuit manufacturer pulled his companion back. She looked at him, said: ‘I do believe I’ll eat something now. I’d like
         some of that bird dish you served earlier.’
      </p>
      
      <p class="indent">Jessica signaled a servant, turned to the banker: ‘And you, sir, were speaking of birds earlier and of their habits. I find
         so many interesting things about Arrakis. Tell me, where is the spice found? Do the hunters go deep into the desert?’
      </p>
      
      <p class="indent">‘Oh, no, my Lady,’ he said. ‘Very little’s known of the deep desert. And almost nothing of the southern regions.’</p>
      
      <p class="indent">‘There’s a tale that a great Mother Lode of spice is to be found in the southern reaches,’ Kynes said, ‘but I suspect it was
         an imaginative invention made solely for purposes of a song. Some daring spice hunters do, on occasion, penetrate into the
         edge of the central belt, but that’s extremely dangerous – navigation is uncertain, storms are frequent. Casualties increase
         dramatically the farther you operate from Shield Wall bases. It hasn’t been found profitable to venture too far south. Perhaps
         if we had a weather satellite …’
      </p>
      
      <p class="indent">Bewt looked up, spoke around a mouthful of food: ‘It’s said the Fremen travel there, that they go anywhere and have hunted
         out soaks and sip-wells even in the southern latitudes.’
      </p>
      
      <p class="indent">‘Soaks and sip-wells?’Jessica asked.</p>
      
      <p class="indent">Kynes spoke quickly: ‘Wild rumors, my Lady. These are known on other planets, not on Arrakis. A soak is a place where water
         seeps to the surface or near enough to the surface to be found by digging according to certain signs. A sip-well is a form
         of soak where a person draws water through a straw … so it is said.’
      </p>
      
      <p class="indent"><em>There’s deception in his</em> words, Jessica thought.
      </p>
      
      <p class="indent"><em>Why is he lying?</em> Paul wondered.
      </p>
      
      <p class="indent">‘How very interesting,’ Jessica said. And she thought: <em>‘It is said</em> …’ <em>What a curious speech mannerism they have here. If they only knew what it reveals about their dependence on superstitions.</em></p>
      
      <p class="indent"><a id="page162"/>‘I’ve heard you have a saying,’ Paul said, ‘that polish comes from the cities; wisdom from the desert.’
      </p>
      
      <p class="indent">‘There are many sayings on Arrakis,’ Kynes said.</p>
      
      <p class="indent">Before Jessica could frame a new question, a servant bent over her with a note. She opened it, saw the Duke’s handwriting
         and code signs, scanned it.
      </p>
      
      <p class="indent">‘You’ll all be delighted to know,’ she said, ‘that our Duke sends his reassurances. The matter which called him away has been
         settled. The missing carryall has been found. A Harkonnen agent in the crew overpowered the others and flew the machine to
         a smugglers’ base, hoping to sell it there. Both man and machine were turned over to our forces.’ She nodded to Tuek.
      </p>
      
      <p class="indent">The smuggler nodded back.</p>
      
      <p class="indent">Jessica refolded the note, tucked it into her sleeve.</p>
      
      <p class="indent">‘I’m glad it didn’t come to open battle,’ the banker said. ‘The people have such hopes the Atreides will bring peace and prosperity.’</p>
      
      <p class="indent">‘Especially prosperity,’ Bewt said.</p>
      
      <p class="indent">‘Shall we have our dessert now?’Jessica asked. ‘I’ve had our chef prepare a Caladan sweet: pongi rice in sauce dolsa.’</p>
      
      <p class="indent">‘It sounds wonderful,’ the stillsuit manufacturer said. ‘Would it be possible to get the recipe?’</p>
      
      <p class="indent">‘Any recipe you desire,’ Jessica said, <em>registering</em> the man for later mention to Hawat. The stillsuit manufacturer was a fearful little climber and could be bought.
      </p>
      
      <p class="indent">Small talk resumed around her: ‘Such a lovely fabric …’ ‘He is having a setting made to match the jewel …’ ‘We might try for
         a production increase next quarter …’
      </p>
      
      <p class="indent">Jessica stared down at her plate, thinking of the coded part of Leto’s message: <em>‘The Harkonnens tried to get a shipment of lasguns. We captured them. This may mean they’ve succeeded with other shipments.
            It certainly means they don’t place much store in shields. Take appropriate precautions.’</em></p>
      
      <p class="indent">Jessica focused her mind on lasguns, wondering. The white-hot beams of disruptive light could cut through any known substance,
         provided that substance was not shielded. The fact that feedback from a shield would explode both lasgun and shield did not
         bother the Harkonnens. Why? A lasgun-shield <a id="page163"/>explosion was a dangerous variable, could be more powerful than atomics, could kill only the gunner and his shielded target.
      </p>
      
      <p class="indent">The unknowns here filled her with uneasiness.</p>
      
      <p class="indent">Paul said: ‘I never doubted we’d find the carryall. Once my father moves to solve a problem, he solves it. This is a fact
         the Harkonnens are beginning to discover.’
      </p>
      
      <p class="indent"><em>He’s boasting,</em> Jessica thought. <em>He shouldn’t boast. No person who’ll be sleeping far below ground level this night as a precaution against lasguns has the
            right to boast.</em></p>
      
      <blockquote class="blockquote">
         <p class="noindent">‘There is no escape – we pay for the violence of our ancestors.’</p>
         <p class="right">—from ‘The Collected Sayings of Muad’Dib’ by the Princess Irulan</p>
      </blockquote>
      
      <p class="noindent">Jessica heard the disturbance in the great hall, turned on the light beside her bed. The clock there had not been properly
         adjusted to local time, and she had to subtract twenty-one minutes to determine that it was about 2 <span class="small-caps">A.M.</span></p>
      
      <p class="indent">The disturbance was loud and incoherent.</p>
      
      <p class="indent"><em>Is this the Harkonnen attack?</em> she wondered.
      </p>
      
      <p class="indent">She slipped out of bed, checked the screen monitors to see where her family was. The screen showed Paul asleep in the deep
         cellar room they’d hastily converted to a bedroom for him. The noise obviously wasn’t penetrating to his quarters. There was
         no one in the Duke’s room, his bed was unrumpled. Was he still at the field C.P.?
      </p>
      
      <p class="indent">There were no screens yet to the front of the house.</p>
      
      <p class="indent">Jessica stood in the middle of her room, listening.</p>
      
      <p class="indent">There was one shouting, incoherent voice. She heard someone call for Dr Yueh. Jessica found a robe, pulled it over her shoulders,
         pushed her feet into slippers, strapped the crysknife to her leg.
      </p>
      
      <p class="indent">Again, a voice called out for Yueh.</p>
      
      <p class="indent">Jessica belted the robe around her, stepped into the hallway. Then the thought struck her: <em>What if Leto’s hurt?</em></p>
      
      <p class="indent">The hall seemed to stretch out forever under her running feet. She turned through the arch at the end, dashed past the dining
         hall and down the passage to the Great Hall, finding the place brightly lighted, all the wall suspensors glowing at maximum.
      </p>
      
      <p class="indent"><a id="page164"/>To her right near the front entry, she saw two house guards holding Duncan Idaho between them. His head lolled forward, and
         there was an abrupt, panting silence to the scene.
      </p>
      
      <p class="indent">One of the house guards spoke accusingly to Idaho: ‘You see what you did? You woke the Lady Jessica.’</p>
      
      <p class="indent">The great draperies billowed behind the men, showing that the front door remained open. There was no sign of the Duke or Yueh.
         Mapes stood to one side staring coldly at Idaho. She wore a long brown robe with serpentine design at the hem. Her feet were
         pushed into unlaced desert boots.
      </p>
      
      <p class="indent">‘So I woke the Lady Jessica,’ Idaho muttered. He lifted his face toward the ceiling, bellowed: ‘My sword was firs’ blooded
         on Grumman!’
      </p>
      
      <p class="indent"><em>Great Mother! He’s drunk!Jessica</em> thought.
      </p>
      
      <p class="indent">Idaho’s dark, round face was drawn into a frown. His hair, curling like the fur of a black goat, was plastered with dirt.
         A jagged rent in his tunic exposed an expanse of the dress shirt he had worn at the dinner party earlier.
      </p>
      
      <p class="indent">Jessica crossed to him.</p>
      
      <p class="indent">One of the guards nodded to her without releasing his hold on Idaho. ‘We didn’t know what to do with him, my Lady. He was
         creating a disturbance out front, refusing to come inside. We were afraid locals might come along and see him. That wouldn’t
         do at all. Give us a bad name here.’
      </p>
      
      <p class="indent">‘Where has he been?’Jessica asked.</p>
      
      <p class="indent">‘He escorted one of the young ladies home from the dinner, my Lady. Hawat’s orders.’</p>
      
      <p class="indent">‘Which young lady?’</p>
      
      <p class="indent">‘One of the escort wenches. You understand, my Lady?’ He glanced at Mapes, lowered his voice. ‘They’re always calling on Idaho
         for special surveillance of the ladies.’
      </p>
      
      <p class="indent">And Jessica thought: <em>So they are. But why is he drunk?</em></p>
      
      <p class="indent">She frowned, turned to Mapes. ‘Mapes, bring a stimulant. I’d suggest caffeine. Perhaps there’s some of the spice coffee left.’</p>
      
      <p class="indent">Mapes shrugged, headed for the kitchen. Her unlaced desert boots slap-slapped against the stone floor.</p>
      
      <p class="indent">Idaho swung his unsteady head around to peer at an angle <a id="page165"/>toward Jessica. ‘Killed more’n three hunner’ men f‘r the Duke,’ he muttered. ‘Whadduh wanna know is why’m mere? Can’t live
         unner th’ groun’ here. Can’t live onna groun’ here. Wha’ kinna place is ’iss, huh?’
      </p>
      
      <p class="indent">A sound from the side hall entry caught Jessica’s attention. She turned, saw Yueh crossing to them, his medical kit swinging
         in his left hand. He was fully dressed, looked pale, exhausted. The diamond tattoo stood out sharply on his forehead.
      </p>
      
      <p class="indent">‘Th’ good docker!’ Idaho shouted. ‘Whad’re you, Doc? Splint ’n’ pill man?’ He turned blearily toward Jessica. ‘Makin’ uh damn
         fool uh m’self, huh?’
      </p>
      
      <p class="indent">Jessica frowned, remained silent, wondering: <em>Why would Idaho get drunk? Was he drugged?</em></p>
      
      <p class="indent">‘Too much spice beer,’ Idaho said, attempting to straighten.</p>
      
      <p class="indent">Mapes returned with a steaming cup in her hands, stopped uncertainly behind Yueh. She looked at Jessica, who shook her head.</p>
      
      <p class="indent">Yueh put his kit on the floor, nodded greeting to Jessica, said: ‘Spice beer, eh?’</p>
      
      <p class="indent">‘Bes’ damn stuff ever tas’ed,’ Idaho said. He tried to pull himself to attention. ‘My sword was firs’ blooded on Grumman!
         Killed a Harkon … Harkon … killed ’im f’r th’ Duke.’
      </p>
      
      <p class="indent">Yueh turned, looked at the cup in Mapes’ hand. ‘What is that?’</p>
      
      <p class="indent">‘Caffeine,’Jessica said.</p>
      
      <p class="indent">Yueh took the cup, held it toward Idaho. ‘Drink this, lad.’</p>
      
      <p class="indent">‘Don’ wan’ any more t’ drink.’</p>
      
      <p class="indent">‘Drink it, I say!’</p>
      
      <p class="indent">Idaho’s head wobbled toward Yueh, and he stumbled one step ahead, dragging the guards with him. ‘I’m almighdy fed up with
         pleasin’ th’ ‘Mperial Universe, Doc. Jus’ once, we’re gonna do th’ thing my way.’
      </p>
      
      <p class="indent">‘After you drink this,’ Yueh said. ‘It’s just caffeine.’</p>
      
      <p class="indent">‘ ’Sprolly like all res’ uh this place! Damn’ sun ‘stoo brighd. Nothin’ has uh righd color. Ever’thing’s wrong or …’</p>
      
      <p class="indent">‘Well, it’s nighttime now,’ Yueh said. He spoke reasonably. ‘Drink this like a good lad. It’ll make you feel better.’</p>
      
      <p class="indent">‘Don’ wanna feel bedder!’</p>
      
      <p class="indent"><a id="page166"/>‘We can’t argue with him all night,’ Jessica said. And she thought: <em>This calls for shock treatment.</em></p>
      
      <p class="indent">‘There’s no reason for you to stay, my Lady,’ Yueh said. ‘I can take care of this.’</p>
      
      <p class="indent">Jessica shook her head. She stepped forward, slapped Idaho sharply across the cheek.</p>
      
      <p class="indent">He stumbled back with his guards, glaring at her.</p>
      
      <p class="indent">‘This is no way to act in your Duke’s home,’ she said. She snatched the cup from Yueh’s hands, spilling part of it, thrust
         the cup toward Idaho. ‘Now drink this! That’s an order!’
      </p>
      
      <p class="indent">Idaho jerked himself upright, scowling down at her. He spoke slowly, with careful and precise enunciation: ‘I do not take
         orders from a damn’ Harkonnen spy.’
      </p>
      
      <p class="indent">Yueh stiffened, whirled to face Jessica.</p>
      
      <p class="indent">Her face had gone pale, but she was nodding. It all became clear to her – the broken stems of meaning she had seen in words
         and actions around her these past few days could now be translated. She found herself in the grip of anger almost too great
         to contain. It took the most profound of her Bene Gesserit training to quiet her pulse and smooth her breathing. Even then
         she could feel the blaze flickering.
      </p>
      
      <p class="indent"><em>They were always calling on Idaho for surveillance of the ladies!</em></p>
      
      <p class="indent">She shot a glance at Yueh. The doctor lowered his eyes.</p>
      
      <p class="indent">‘You knew this?’ she demanded.</p>
      
      <p class="indent">‘I … heard rumors, my Lady. But I didn’t want to add to your burdens.’</p>
      
      <p class="indent">‘Hawat!’ she snapped. ‘I want Thufir Hawat brought to me immediately!’</p>
      
      <p class="indent">‘But, my Lady …’</p>
      
      <p class="indent">‘Immediately!’</p>
      
      <p class="indent"><em>It has to be Hawat,</em> she thought. <em>Suspicion such as this could come from no other source without being discarded immediately.</em></p>
      
      <p class="indent">Idaho shook his head, mumbled: ‘Chuck th’ whole damn thing.’</p>
      
      <p class="indent">Jessica looked down at the cup in her hand, abruptly dashed its contents across Idaho’s face. ‘Lock him in one of the guest
         rooms of the east wing,’ she ordered. ‘Let him <em>sleep</em> it off.’
      </p>
      
      <p class="indent">The two guards stared at her unhappily. One ventured: <a id="page167"/>‘Perhaps we should take him someplace else, m’Lady. We could …’
      </p>
      
      <p class="indent">‘He’s supposed to be here!’Jessica snapped. ‘He has a job to do here.’ Her voice dripped bitterness. ‘He’s so good at watching
         the ladies.’
      </p>
      
      <p class="indent">The guard swallowed.</p>
      
      <p class="indent">‘Do you know where the Duke is?’ she demanded.</p>
      
      <p class="indent">‘He’s at the command post, my Lady.’</p>
      
      <p class="indent">‘Is Hawat with him?’</p>
      
      <p class="indent">‘Hawat’s in the city, my Lady.’</p>
      
      <p class="indent">‘You will bring Hawat to me at once,’Jessica said. ‘I will be in my sitting room when he arrives.’</p>
      
      <p class="indent">‘But, my Lady …’</p>
      
      <p class="indent">‘If necessary, I will call the Duke,’ she said. ‘I hope it will not be necessary. I would not want to disturb him with this.’</p>
      
      <p class="indent">‘Yes, my Lady.’</p>
      
      <p class="indent">Jessica thrust the empty cup into Mapes’ hands, met the questioning stare of the blue-within-blue eyes. You may return to
         bed, Mapes.’
      </p>
      
      <p class="indent">You’re sure you’ll not need me?’</p>
      
      <p class="indent">Jessica smiled grimly. ‘I’m sure.’</p>
      
      <p class="indent">‘Perhaps this could wait until tomorrow,’ Yueh said. ‘I could give you a sedative and …’</p>
      
      <p class="indent">You will return to your quarters and leave me to handle this my way,’ she said. She patted his arm to take the sting out of
         her command. ‘This is the only way.’
      </p>
      
      <p class="indent">Abruptly, head high, she turned and stalked off through the house to her rooms. Cold walls … passages … a familiar door …
         She jerked the door open, strode in, and slammed it behind her. Jessica stood there glaring at the shield-blanked windows
         of her sitting room. <em>Hawat! Could he be the one the Harkonnens bought? We shall see.</em></p>
      
      <p class="indent">Jessica crossed to the deep, old-fashioned armchair with an embroidered cover of schlag skin, moved the chair into position
         to command the door. She was suddenly very conscious of the crysknife in its sheath on her leg. She removed the sheath and
         strapped it to her arm, tested the drop of it. Once more, she glanced around the room, placing everything precisely in her
         <a id="page168"/>mind against any emergency: the chaise near the corner, the straight chairs along the wall, the two low tables, her stand-mounted
         zither beside the door to her bedroom.
      </p>
      
      <p class="indent">Pale rose light glowed from the suspensor lamps. She dimmed them, sat down in the armchair, patting the upholstery, appreciating
         the chair’s regal heaviness for this occasion.
      </p>
      
      <p class="indent"><em>Now, let him come,</em> she thought. <em>We shall see what we shall see.</em> And she prepared herself in the Bene Gesserit fashion for the wait, accumulating patience, saving her strength.
      </p>
      
      <p class="indent">Sooner than she had expected, a rap sounded at the door and Hawat entered at her command.</p>
      
      <p class="indent">She watched him without moving from the chair, seeing the crackling sense of drug-induced energy in his movements, seeing
         the fatigue beneath. Hawat’s rheumy old eyes glittered. His leathery skin appeared faintly yellow in the room’s light, and
         there was a wide, wet stain on the sleeve of his knife arm.
      </p>
      
      <p class="indent">She smelled blood there.</p>
      
      <p class="indent">Jessica gestured to one of the straight-backed chairs, said: ‘Bring that chair and sit facing me.’</p>
      
      <p class="indent">Hawat bowed, obeyed. <em>That drunken fool of an Idaho!</em> he thought. He studied Jessica’s face, wondering how he could save this situation.
      </p>
      
      <p class="indent">‘It’s long past time to clear the air between us,’Jessica said.</p>
      
      <p class="indent">‘What troubles my Lady?’ He sat down, placed hands on knees.</p>
      
      <p class="indent">‘Don’t play coy with me!’ she snapped. ‘If Yueh didn’t tell you why I summoned you, then one of your spies in my household
         did. Shall we be at least that honest with each other?’
      </p>
      
      <p class="indent">‘As you wish, my Lady.’</p>
      
      <p class="indent">‘First, you will answer me one question,’ she said. Are you now a Harkonnen agent?’</p>
      
      <p class="indent">Hawat surged half out of his chair, his face dark with fury, demanding: ‘You dare insult me so?’</p>
      
      <p class="indent">‘Sit down,’ she said. ‘You insulted me so.’</p>
      
      <p class="indent">Slowly, he sank back into the chair.</p>
      
      <p class="indent">And Jessica, reading the signs on this face that she knew so well, allowed herself a deep breath. <em>It isn’t Hawat.</em></p>
      
      <p class="indent"><a id="page169"/>‘Now I know you remain loyal to my Duke,’ she said. ‘I’m prepared, therefore, to forgive your affront to me.’
      </p>
      
      <p class="indent">‘Is there something to forgive?’</p>
      
      <p class="indent">Jessica scowled, wondering: <em>Shall I play my trump? Shall I tell him of the Duke’s daughter I’ve carried within me these few weeks? No … Leto himself doesn’t
            know. This would only complicate his life, divert him in a time when he must concentrate on our survival. There is yet time
            to use this.</em></p>
      
      <p class="indent">‘A Truthsayer would solve this,’ she said, ‘but we have no Truthsayer qualified by the High Board.’</p>
      
      <p class="indent">‘As you say. We’ve no Truthsayer.’</p>
      
      <p class="indent">‘Is there a traitor among us?’ she asked. ‘I’ve studied our people with great care. Who could it be? Not Gurney. Certainly
         not Duncan. <em>Their</em> lieutenants are not strategically enough placed to consider. It’s not you, Thufir. It cannot be Paul. I <em>know</em> it’s not me. Dr Yueh, then? Shall I call him in and put him to the test?’
      </p>
      
      <p class="indent">‘You know that’s an empty gesture,’ Hawat said. ‘He’s conditioned by the High College. <em>That</em> I know for certain.’
      </p>
      
      <p class="indent">‘Not to mention that his wife was a Bene Gesserit slain by the Harkonnens,’Jessica said.</p>
      
      <p class="indent">‘So that’s what happened to her,’ Hawat said.</p>
      
      <p class="indent">‘Haven’t you heard the hate in his voice when he speaks the Harkonnen name?’</p>
      
      <p class="indent">‘You know I don’t have the ear,’ Hawat said.</p>
      
      <p class="indent">‘What brought this base suspicion on me?’ she asked.</p>
      
      <p class="indent">Hawat frowned. ‘My Lady puts her servant in an impossible position. My first loyalty is to the Duke.’</p>
      
      <p class="indent">‘I’m prepared to forgive much because of that loyalty,’ she said.</p>
      
      <p class="indent">‘And again I must ask: Is there something to forgive?’</p>
      
      <p class="indent">‘Stalemate?’ she asked.</p>
      
      <p class="indent">He shrugged.</p>
      
      <p class="indent">‘Let us discuss something else for a minute, then,’ she said. ‘Duncan Idaho, the admirable fighting man whose abilities at
         guarding and surveillance are so esteemed. Tonight, he overindulged in something called spice beer. I hear reports that others
         among our people have been stupefied by this concoction. Is that true?’
      </p>
      
      <p class="indent"><a id="page170"/>‘You have your reports, my Lady.’
      </p>
      
      <p class="indent">‘So I do. Don’t you see this drinking as a symptom, Thufir?’</p>
      
      <p class="indent">‘My Lady speaks riddles.’</p>
      
      <p class="indent">‘Apply your Mentat abilities to it!’ she snapped. ‘What’s the problem with Duncan and the others? I can tell you in four words
         – they have no home.’
      </p>
      
      <p class="indent">He jabbed a finger at the floor. ‘Arrakis, that’s their home.’</p>
      
      <p class="indent">‘Arrakis is an unknown! Caladan was their home, but we’ve uprooted them. They have no home. And they fear the Duke’s failing
         them.’
      </p>
      
      <p class="indent">He stiffened. ‘Such talk from one of the men would be cause for—’</p>
      
      <p class="indent">‘Oh, stop that, Thufir. Is it defeatist or treacherous for a doctor to diagnose a disease correctly? My only intention is
         to cure the disease.’
      </p>
      
      <p class="indent">‘The Duke gives me charge over such matters.’</p>
      
      <p class="indent">‘But you understand I have a certain natural concern over the progress of this disease,’ she said. ‘And perhaps you’ll grant
         I have certain abilities along these lines.’
      </p>
      
      <p class="indent"><em>Will I have to shock him severely?</em> she wondered. <em>He needs shaking up – something to break him from routine.</em></p>
      
      <p class="indent">‘There could be many interpretations for your concern,’ Hawat said. He shrugged.</p>
      
      <p class="indent">‘Then you’ve already convicted me?’</p>
      
      <p class="indent">‘Of course not, my Lady. But I cannot afford to take <em>any</em> chances, the situation being what it is.’
      </p>
      
      <p class="indent">‘A threat to my son got past you right here in this house,’ she said. ‘Who took that chance?’</p>
      
      <p class="indent">His face darkened. ‘I offered my resignation to the Duke.’</p>
      
      <p class="indent">‘Did you offer your resignation to me … or to Paul?’</p>
      
      <p class="indent">Now he was openly angry, betraying it in quickness of breathing, in dilation of nostrils, a steady stare. She saw a pulse
         beating at his temple.
      </p>
      
      <p class="indent">‘I’m the Duke’s man,’ he said, biting off the words.</p>
      
      <p class="indent">‘There is no traitor,’ she said. ‘The threat’s something else. Perhaps it has to do with the lasguns. Perhaps they’ll risk
         secreting a few lasguns with timing mechanisms aimed at house shields. Perhaps they’ll …’
      </p>
      
      <p class="indent"><a id="page171"/>‘And who could tell after the blast if the explosion wasn’t atomic?’ he asked. ‘No, my Lady. They’ll not risk anything <em>that</em> illegal. Radiation lingers. The evidence is hard to erase. No. They’ll observe <em>most</em> of the forms. It has to be a traitor.’
      </p>
      
      <p class="indent">‘You’re the Duke’s man,’ she sneered. ‘Would you destroy him in the effort to save him?’</p>
      
      <p class="indent">He took a deep breath, then: ‘If you’re innocent, you’ll have my most abject apologies.’</p>
      
      <p class="indent">‘Look at you now, Thufir,’ she said. ‘Humans live best when each has his own place, when each knows where he belongs in the
         scheme of things. Destroy the place and destroy the person. You and I, Thufir, of all those who love the Duke, are most ideally
         situated to destroy the other’s place. Could I not whisper suspicions about you into the Duke’s ear at night? When would he
         be most susceptible to such whispering, Thufir? Must I draw it for you more clearly?’
      </p>
      
      <p class="indent">‘You threaten me?’ he growled.</p>
      
      <p class="indent">‘Indeed not. I merely point out to you that someone is attacking us through the basic arrangement of our lives. It’s clever,
         diabolical. I propose to negate this attack by so ordering our lives that there’ll be no chinks for such barbs to enter.’
      </p>
      
      <p class="indent">‘You accuse me of whispering baseless suspicions?’</p>
      
      <p class="indent">‘Baseless, yes.’</p>
      
      <p class="indent">‘You’d meet this with your own whispers?’</p>
      
      <p class="indent"><em>‘Your</em> life is compounded of whispers, not mine, Thufir.’
      </p>
      
      <p class="indent">‘Then you question my abilities?’</p>
      
      <p class="indent">She sighed. ‘Thufir, I want you to examine your own emotional involvement in this. The <em>natural</em> human’s an animal without logic. Your projection of logic onto all affairs is <em>un</em>natural, but suffered to continue for its usefulness. You’re the embodiment of logic – a Mentat. Yet, your problem solutions
         are concepts that, in a very real sense, are projected outside yourself, there to be studied and rolled around, examined from
         all sides.’
      </p>
      
      <p class="indent">‘You think now to teach me my trade?’ he asked, and he did not try to hide the disdain in his voice.</p>
      
      <p class="indent">‘Anything outside yourself, this you can see and apply your <a id="page172"/>logic to it,’ she said. ‘But it’s a human trait that when we encounter personal problems, those things most deeply personal
         are the most difficult to bring out for our logic to scan. We tend to flounder around, blaming everything but the actual,
         deep-seated thing that’s really chewing on us.’
      </p>
      
      <p class="indent">‘You’re deliberately attempting to undermine my faith in my abilities as a Mentat,’ he rasped. ‘Were I to find one of our
         people attempting thus to sabotage any other weapon in our arsenal, I should not hesitate to denounce and destroy him.’
      </p>
      
      <p class="indent">‘The finest Mentats have a healthy respect for the error factor in their computations,’ she said.</p>
      
      <p class="indent">‘I’ve never said otherwise!’</p>
      
      <p class="indent">‘Then apply yourself to these symptoms we’ve both seen: drunkenness among the men, quarrels – they gossip and exchange wild
         rumors about Arrakis; they ignore the most simple—’
      </p>
      
      <p class="indent">‘Idleness, no more,’ he said. ‘Don’t try to divert my attention by trying to make a simple matter appear mysterious.’</p>
      
      <p class="indent">She stared at him, thinking of the Duke’s men rubbing their woes together in the barracks until you could almost smell the
         charge there, like burnt insulation. <em>They’re becoming like the men of the pre-Guild legend,</em> she thought: <em>Like the men of the lost star-searcher, Ampoliros – sick at their guns –forever seeking, forever prepared and forever unready.</em></p>
      
      <p class="indent">‘Why have you never made full use of my abilities in your service to the Duke?’ she asked. ‘Do you fear a rival <em>for your</em> position?’
      </p>
      
      <p class="indent">He glared at her, the old eyes blazing. ‘I know some of the training they give you Bene Gesserit …’ He broke off, scowling.</p>
      
      <p class="indent">‘Go ahead, say it,’ she said. ‘Bene Gesserit <em>witches,’</em></p>
      
      <p class="indent">‘I know something of the <em>real</em> training they give you,’ he said. ‘I’ve seen it come out in Paul. I’m not fooled by what your schools tell the public: you
         exist only to serve.’
      </p>
      
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
      
      <p class="indent">‘The Duke and I are father and mother surrogates to our people,’ she said. ‘The position—’</p>
      
      <p class="indent">‘He hasn’t married you,’ Hawat said.</p>
      
      <p class="indent">She forced herself to calmness, thinking: <em>A good riposte, that.</em></p>
      
      <p class="indent">‘But he’ll not marry anyone else,’ she said. ‘Not as long as I live. And we are surrogates, as I’ve said. To break up this
         natural order in our affairs, to disturb, disrupt, and confuse us – which target offers itself most enticingly to the Harkonnens?’
      </p>
      
      <p class="indent">He sensed the direction she was taking, and his brows drew down in a lowering scowl.</p>
      
      <p class="indent">‘The Duke?’ she asked. ‘Attractive target, yes, but no one with the possible exception of Paul is better guarded. Me? I tempt
         them, surely, but they must know the Bene Gesserit make difficult targets. And there’s a better target, one whose duties create,
         necessarily, a monstrous blind spot. One to whom <a id="page174"/>suspicion is as natural as breathing. One who builds his entire life on innuendo and mystery.’ She darted her right hand toward
         him. ‘You!’
      </p>
      
      <p class="indent">Hawat started to leap from his chair.</p>
      
      <p class="indent">‘I have not dismissed you, Thufir!’ she flared.</p>
      
      <p class="indent">The old Mentat almost fell back into the chair, so quickly did his muscles betray him.</p>
      
      <p class="indent">She smiled without mirth.</p>
      
      <p class="indent">‘Now you know something of the <em>real</em> training they give us,’ she said.
      </p>
      
      <p class="indent">Hawat tried to swallow in a dry throat. Her command had been regal, peremptory – uttered in a tone and manner he had found
         completely irresistible. His body had obeyed her before he could think about it. Nothing could have prevented his response
         – not logic, not passionate anger … nothing. To do what she had done spoke of a sensitive, intimate knowledge of the person
         thus commanded, a depth of control he had not dreamed possible.
      </p>
      
      <p class="indent">‘I have said to you before that we should understand each other,’ she said. ‘I meant <em>you</em> should understand <em>me.</em> I already understand you. And I tell you now that your loyalty to the Duke is all that guarantees your safety with me.’
      </p>
      
      <p class="indent">He stared at her, wet his lips with his tongue.</p>
      
      <p class="indent">‘If I desired a puppet, the Duke would marry me,’ she said. ‘He might even think he did it of his own free will.’</p>
      
      <p class="indent">Hawat lowered his head, looked upward through his sparse lashes. Only the most rigid control kept him from calling the guard.
         Control … and the suspicion now that the woman might not permit it. His skin crawled with the memory of how she had controlled
         him. In the moment of hesitation, she could have drawn a weapon and killed him!
      </p>
      
      <p class="indent"><em>Does every human have this blind spot?</em> he wondered. <em>Can any of us be ordered into action before he can resist?</em> The idea staggered him. <em>Who could stop a person with such power?</em></p>
      
      <p class="indent">‘You’ve glimpsed the fist within the Bene Gesserit glove,’ she said. ‘Few glimpse it and live. And what I did was a relatively
         simple thing for us. You’ve not seen my entire arsenal. Think on that.’
      </p>
      
      <p class="indent"><a id="page175"/>‘Why aren’t you out destroying the Duke’s enemies?’ he asked.
      </p>
      
      <p class="indent">‘What would you have me destroy?’ she asked. Would you have me make a weakling of our Duke, have him forever leaning on me?’</p>
      
      <p class="indent">‘But, with such power …’</p>
      
      <p class="indent">‘Power’s a two-edged sword, Thufir,’ she said. ‘You think: “How easy for her to shape a human tool to thrust into an enemy’s
         vitals.” True, Thufir; even into your vitals. Yet, what would I accomplish? If enough of us Bene Gesserit did this, wouldn’t
         it make all Bene Gesserit suspect? We don’t want that, Thufir. We do not wish to destroy ourselves.’ She nodded. We truly
         exist only to serve.’
      </p>
      
      <p class="indent">‘I cannot answer you,’ he said. You know I cannot answer.’</p>
      
      <p class="indent">You’ll say nothing about what has happened here to anyone,’ she said. ‘I know you, Thufir.’</p>
      
      <p class="indent">‘My Lady …’ Again the old man tried to swallow in a dry throat.</p>
      
      <p class="indent">And he thought: <em>She has great powers, yes. But would these not make her an even more formidable tool for the Harkonnens?</em></p>
      
      <p class="indent">‘The Duke could be destroyed as quickly by his friends as by his enemies,’ she said. ‘I trust now you’ll get to the bottom
         of this suspicion and remove it.’
      </p>
      
      <p class="indent">‘If it proves baseless,’ he said.</p>
      
      <p class="indent"><em>‘If</em>’ she sneered.
      </p>
      
      <p class="indent">‘If,’ he said.</p>
      
      <p class="indent">‘You <em>are</em> tenacious,’ she said.
      </p>
      
      <p class="indent">‘Cautious,’ he said, ‘and aware of the error factor.’</p>
      
      <p class="indent">‘Then I’ll pose another question for you: What does it mean to you that you stand before another human, that you are bound
         and helpless and the other human holds a knife at your throat – yet this other human refrains from killing you, frees you
         from your bonds and gives you the knife to use as you will?’
      </p>
      
      <p class="indent">She lifted herself out of the chair, turned her back on him. ‘You may go now, Thufir.’</p>
      
      <p class="indent">The old Mentat arose, hesitated, hand creeping toward the deadly weapon beneath his tunic. He was reminded of the bull ring
         and of the Duke’s father (who’d been brave, no matter what <a id="page176"/>his other failings) and one day of the <em>corrida</em> long ago: The fierce black beast had stood there, head bowed, immobilized and confused. The Old Duke had turned his back
         on the horns, cape thrown flamboyantly over one arm, while cheers rained down from the stands.
      </p>
      
      <p class="indent"><em>I am the bull and she the matador,</em> Hawat thought. He withdrew his hand from the weapon, glanced at the sweat glistening in his empty palm.
      </p>
      
      <p class="indent">And he knew that whatever the facts proved to be in the end, he would never forget this moment nor lose this sense of supreme
         admiration for the Lady Jessica.
      </p>
      
      <p class="indent">Quietly, he turned and left the room.</p>
      
      <p class="indent">Jessica lowered her gaze from the reflection in the windows, turned, and stared at the closed door.</p>
      
      <p class="indent">‘Now we’ll see some proper action,’ she whispered.</p>
      
      <blockquote class="linegroup">
         <p class="line1">Do you wrestle with dreams?</p>
         
         <p class="line1">Do you contend with shadows?</p>
         
         <p class="line1">Do you move in a kind of sleep?</p>
         
         <p class="line1">Time has slipped away.</p>
         
         <p class="line1">Your life is stolen.</p>
         
         <p class="line1">You tarried with trifles,</p>
         
         <p class="line1">Victim of your folly.</p>
         
         <p class="line1">—Dirge for Jamis on the Funeral Plain,</p>
      <p class="line">from ‘Songs of Muad’Dib’ by the Princess Irulan</p>
         
      </blockquote>
      
      
      <p class="noindent">Leto stood in the foyer of his house, studying a note by the light of a single suspensor lamp. Dawn was yet a few hours away,
         and he felt his tiredness. A Fremen messenger had brought the note to the outer guard just now as the Duke arrived from his
         command post.
      </p>
      
      <p class="indent">The note read: ‘A column of smoke by day, a pillar of fire by night.’</p>
      
      <p class="indent">There was no signature.</p>
      
      <p class="indent"><em>What does it mean?</em> he wondered.
      </p>
      
      <p class="indent">The messenger had gone without waiting for an answer and before he could be questioned. He had slipped into the night like
         some smoky shadow.
      </p>
      
      <p class="indent"><a id="page177"/>Leto pushed the paper into a tunic pocket, thinking to show it to Hawat later. He brushed a lock of hair from his forehead,
         took a sighing breath. The antifatigue pills were beginning to wear thin. It had been a long two days since the dinner party
         and longer than that since he had slept.
      </p>
      
      <p class="indent">On top of all the military problems, there’d been the disquieting session with Hawat, the report on his meeting with Jessica.</p>
      
      <p class="indent"><em>Should I waken Jessica?</em> he wondered. <em>There’s no reason to play the secrecy game with her any longer. Or is there?</em></p>
      
      <p class="indent"><em>Blast and damn that Duncan Idaho!</em></p>
      
      <p class="indent">He shook his head. <em>No, not Duncan. I was wrong not to take Jessica into my confidence from the first. I must do it now, before more damage is
            done.</em></p>
      
      <p class="indent">The decision made him feel better, and he hurried from the foyer through the Great Hall and down the passages toward the family
         wing.
      </p>
      
      <p class="indent">At the turn where the passages split to the service area, he paused. A strange mewling came from somewhere down the service
         passage. Leto put his left hand to the switch on his shield belt, slipped his kindjal into his right hand. The knife conveyed
         a sense of reassurance. That strange sound had sent a chill through him.
      </p>
      
      <p class="indent">Softly, the Duke moved down the service passage, cursing the inadequate illumination. The smallest of suspensors had been
         spaced about eight meters apart along here and tuned to their dimmest level. The dark stone walls swallowed the light.
      </p>
      
      <p class="indent">A dull blob stretching across the floor appeared out of the gloom ahead.</p>
      
      <p class="indent">Leto hesitated, almost activated his shield, but refrained because that would limit his movements, his hearing … and because
         the captured shipment of lasguns had left him filled with doubts.
      </p>
      
      <p class="indent">Silently, he moved toward the gray blob, saw that it was a human figure, a man face down on the stone. Leto turned him over
         with a foot, knife poised, bent close in the dim light to see the face. It was the smuggler, Tuek, a wet stain down his chest.
         <a id="page178"/>The dead eyes stared with empty darkness. Leto touched the stain – warm.
      </p>
      
      <p class="indent"><em>How could this man be dead here?</em> Leto asked himself. <em>Who killed him?</em></p>
      
      <p class="indent">The mewling sound was louder here. It came from ahead and down the side passage to the central room where they had installed
         the main shield generator for the house.
      </p>
      
      <p class="indent">Hand on belt switch, kindjal poised, the Duke skirted the body, slipped down the passage and peered around the corner toward
         the shield generator room.
      </p>
      
      <p class="indent">Another gray blob lay stretched on the floor a few paces away, and he saw at once this, was the source of the noise. The shape
         crawled toward him with painful slowness, gasping, mumbling.
      </p>
      
      <p class="indent">Leto stilled his sudden constriction of fear, darted down the passage, crouched beside the crawling figure. It was Mapes,
         the Fremen housekeeper, her hair tumbled around her face, clothing disarrayed. A dull shininess of dark stain spread from
         her back along her side. He touched her shoulder and she lifted herself on her elbows, head tipped up to peer at him, the
         eyes black-shadowed emptiness.
      </p>
      
      <p class="indent">‘S’you,’ she gasped. ‘Killed … guard … sent … get … Tuek … escape … m’Lady … you … you … here … no …’ She flopped forward,
         her head thumping against the stone.
      </p>
      
      <p class="indent">Leto felt for pulse at the temples. There was none. He looked at the stain: she’d been stabbed in the back. Who? His mind
         raced. Did she mean someone had killed a guard? And Tuek – had Jessica sent for him? Why?
      </p>
      
      <p class="indent">He started to stand up. A sixth sense warned him. He flashed a hand toward the shield switch – too late. A numbing shock slammed
         his arm aside. He felt pain there, saw a dart protruding from the sleeve, sensed paralysis spreading from it up his arm. It
         took an agonizing effort to lift his head and look down the passage.
      </p>
      
      <p class="indent">Yueh stood in the open door of the generator room. His face reflected yellow from the light of a single, brighter suspensor
         above the door. There was stillness from the room behind him – no sound of generators.
      </p>
      
      <p class="indent"><a id="page179"/><em>Yueh!</em> Leto thought. <em>He’s sabotaged the house generators! We’re wide open!</em></p>
      
      <p class="indent">Yueh began walking toward him, pocketing a dartgun.</p>
      
      <p class="indent">Leto found he could still speak, gasped: ‘Yueh! How?’ Then the paralysis reached his legs and he slid to the floor with his
         back propped against the stone wall.
      </p>
      
      <p class="indent">Yueh’s face carried a look of sadness as he bent over, touched Leto’s forehead. The Duke found he could feel the touch, but
         it was remote … dull.
      </p>
      
      <p class="indent">‘The drug on the dart is selective,’ Yueh said. ‘You can speak, but I’d advise against it.’ He glanced down the hall, and
         again bent over Leto, pulled out the dart, tossed it aside. The sound of the dart clattering on the stones was faint and distant
         to the Duke’s ears.
      </p>
      
      <p class="indent"><em>It can’t be Yueh,</em> Leto thought. <em>He’s conditioned.</em></p>
      
      <p class="indent">‘How?’ Leto whispered.</p>
      
      <p class="indent">‘I’m sorry, my dear Duke, but there <em>are</em> things which will make greater demands than this.’ He touched the diamond tattoo on his forehead. ‘I find it very strange,
         myself – an override on my pyretic conscience – but I wish to kill a man. Yes, I actually wish it. I will stop at nothing
         to do it.’
      </p>
      
      <p class="indent">He looked down at the Duke. ‘Oh, not you, my dear Duke. The Baron Harkonnen. I wish to kill the Baron.’</p>
      
      <p class="indent">‘Bar … on Har …’</p>
      
      <p class="indent">‘Be quiet, please, my poor Duke. You haven’t much time. That peg tooth I put in your mouth after the tumble at Narcal – that
         tooth must be replaced. In a moment, I’ll render you unconscious and replace that tooth.’ He opened his hand, stared at something
         in it. ‘An exact duplicate, its core shaped most exquisitely like a nerve. It’ll escape the usual detectors, even a fast scanning.
         But if you bite down hard on it, the cover crushes. Then, when you expel your breath sharply, you fill the air around you
         with a poison gas – most deadly.’
      </p>
      
      <p class="indent">Leto stared up at Yueh, seeing madness in the man’s eyes, the perspiration along brow and chin.</p>
      
      <p class="indent">‘You were dead anyway, my poor Duke,’ Yueh said. ‘But you will get close to the Baron before you die. He’ll believe you’re
         stupefied by drugs beyond any dying effort to attack him. And <a id="page180"/>you will be drugged – and tied. But attack can take strange forms. And <em>you</em> will remember the tooth. The <em>tooth,</em> Duke Leto Atreides. You will remember the tooth.’
      </p>
      
      <p class="indent">The old doctor leaned closer and closer until his face and drooping mustache dominated Leto’s narrowing vision.</p>
      
      <p class="indent">‘The tooth,’ Yueh muttered.</p>
      
      <p class="indent">‘Why?’ Leto whispered.</p>
      
      <p class="indent">Yueh lowered himself to one knee beside the Duke. ‘I made a shaitan’s bargain with the Baron. And I must be certain he has
         fulfilled his half of it. When I see him, I’ll know. When I look at the Baron, then I <em>will</em> know. But I’ll never enter his presence without the price. You’re the price, my poor Duke. And I’ll know when I see him.
         My poor Wanna taught me many things, and one is to see certainty of truth when the stress is great. I cannot do it always,
         but when I see the Baron – then, I <em>will</em> know.’
      </p>
      
      <p class="indent">Leto tried to look down at the tooth in Yueh’s hand. He felt this was happening in a nightmare – it could not be.</p>
      
      <p class="indent">Yueh’s purple lips turned up in a grimace. ‘I’ll not get close enough to the Baron, or I’d do this myself. No. I’ll be detained
         at a safe distance. But you … ah, now! You, my lovely weapon! He’ll want you close to him – to gloat over you, to boast a
         little.’
      </p>
      
      <p class="indent">Leto found himself almost hypnotized by a muscle on the left side of Yueh’s jaw. The muscle twisted when the man spoke.</p>
      
      <p class="indent">Yueh leaned closer. ‘And you, my good Duke, my precious Duke, you must remember this tooth.’ He held it up between thumb and
         forefinger. ‘It will be all that remains to you.’
      </p>
      
      <p class="indent">Leto’s mouth moved without sound, then: ‘Refuse.’</p>
      
      <p class="indent">‘Ah-h, no! You mustn’t refuse. Because, in return for this small service, I’m doing a thing for you. I will save your son
         and your woman. No other can do it. They can be removed to a place where no Harkonnen can reach them.’
      </p>
      
      <p class="indent">‘How … save … them?’ Leto whispered.</p>
      
      <p class="indent">‘By making it appear they’re dead, by secreting them among people who draw knife at hearing the Harkonnen name, who hate the
         Harkonnens so much they’ll burn a chair in which a Harkonnen has sat, salt the ground over which a Harkonnen has <a id="page181"/>walked.’ He touched Leto’s jaw. ‘Can you feel anything in your jaw?’
      </p>
      
      <p class="indent">The Duke found that he could not answer. He sensed distant tugging, saw Yueh’s hand come up with the ducal signet ring.</p>
      
      <p class="indent">‘For Paul,’ Yueh said. ‘You’ll be unconscious presently. Goodbye, my poor Duke. When we next meet we’ll have no time for conversation.’</p>
      
      <p class="indent">Cool remoteness spread upward from Leto’s jaw, across his cheeks. The shadowy hall narrowed to a pinpoint with Yueh’s purple
         lips centered in it.
      </p>
      
      <p class="indent">‘Remember the tooth!’ Yueh hissed. ‘The tooth!’</p>
      
      <blockquote class="blockquote">
         <p class="noindent">There should be a science of discontent. People need hard times and oppression to develop psychic muscles.</p>
         <p class="right">—from ‘Collected Sayings of Muad’Dib’ by the Princess Irulan</p>
      </blockquote>
      
      <p class="noindent">Jessica awoke in the dark, feeling premonition in the stillness around her. She could not understand why her mind and body
         felt so sluggish. Skin raspings of fear ran along her nerves. She thought of sitting up and turning on a light, but something
         stayed the decision. Her mouth felt … strange.
      </p>
      
      <p class="indent"><em>Lump-lump-lump-lump!</em></p>
      
      <p class="indent">It was a dull sound, directionless in the dark. Somewhere.</p>
      
      <p class="indent">The waiting moment was packed with time, with rustling needle-stick movements.</p>
      
      <p class="indent">She began to feel her body, grew aware of bindings on wrists and ankles, a gag in her mouth. She was on her side, hands tied
         behind her. She tested the bindings, realized they were krimskell fiber, would only claw tighter as she pulled.
      </p>
      
      <p class="indent">And now, she remembered.</p>
      
      <p class="indent">There had been movement in the darkness of her bedroom, something wet and pungent slapped against her face, filling her mouth,
         hands grasping for her. She had gasped – one indrawn breath – sensing the narcotic in the wetness. Consciousness had receded,
         sinking her into a black bin of terror.
      </p>
      
      <p class="indent"><em>It has come,</em> she thought. <em>How simple it was to subdue the Bene Gesserit. All it took was treachery. Hawat was right.</em></p>
      
      <p class="indent">She forced herself not to pull on her bindings.</p>
      
      <p class="indent"><a id="page182"/><em>This is not my bedroom,</em> she thought. <em>They’ve taken me someplace else.</em></p>
      
      <p class="indent">Slowly, she marshaled the inner calmness.</p>
      
      <p class="indent">She grew aware of the smell of her own stale sweat with its chemical infusion of fear.</p>
      
      <p class="indent"><em>Where is Paul?</em> she asked herself. <em>My son – what have they done to him?</em></p>
      
      <p class="indent"><em>Calmness.</em></p>
      
      <p class="indent">She forced herself to it, using the ancient routines.</p>
      
      <p class="indent">But terror remained so near.</p>
      
      <p class="indent"><em>Leto? Where are you, Leto?</em></p>
      
      <p class="indent">She sensed a diminishing in the dark. It began with shadows. Dimensions separated, became new thorns of awareness. White.
         A line under a door.
      </p>
      
      <p class="indent"><em>‘I’m on the floor.</em></p>
      
      <p class="indent">People walking. She sensed it through the floor. Jessica squeezed back the memory of terror. <em>I must remain calm, alert, and prepared. I may get only one chance.</em> Again, she forced the inner calmness.
      </p>
      
      <p class="indent">The ungainly thumping of her heartbeats evened, shaping out time. She counted back. <em>I was unconscious about an hour.</em> She closed her eyes, focused her awareness onto the approaching footsteps.
      </p>
      
      <p class="indent"><em>Four people.</em></p>
      
      <p class="indent">She counted the differences in their steps.</p>
      
      <p class="indent"><em>I must pretend I’m still unconscious.</em> She relaxed against the cold floor, testing her body’s readiness, heard a door open, sensed increased light through her eyelids.
      </p>
      
      <p class="indent">Feet approached: someone standing over her.</p>
      
      <p class="indent">‘You are awake,’ rumbled a basso voice. ‘Do not pretend.’</p>
      
      <p class="indent">She opened her eyes.</p>
      
      <p class="indent">The Baron Vladimir Harkonnen stood over her. Around them, she recognized the cellar room where Paul had slept, saw his cot
         at one side – empty. Suspensor lamps were brought in by guards, distributed near the open door. There was a glare of light
         in the hallway beyond that hurt her eyes.
      </p>
      
      <p class="indent">She looked up at the Baron. He wore a yellow cape that bulged over his portable suspensors. The fat cheeks were two cherubic
         mounds beneath spider-black eyes.
      </p>
      
      <p class="indent"><a id="page183"/>‘The drug was timed,’ he rumbled. ‘We knew to the minute when you’d be coming out of it.’
      </p>
      
      <p class="indent"><em>How could that be?</em> she wondered. <em>They’d have to know my exact weight, my metabolism, my … Yueh!</em></p>
      
      <p class="indent">‘Such a pity you must remain gagged,’ the Baron said. ‘We could have such an interesting conversation.’</p>
      
      <p class="indent"><em>Yueh’s the only one it could be,</em> she thought. <em>How?</em></p>
      
      <p class="indent">The Baron glanced behind him at the door. ‘Come in, Piter.’</p>
      
      <p class="indent">She had never before seen the man who entered to stand beside the Baron, but the face was known – and the man: <em>Piter de Vries, the Mentat-Assassin.</em> She studied him – hawk features, blue-ink eyes that suggested he was a native of Arrakis, but subtleties of movement and
         stance told her he was not. And his flesh was too well firmed with water. He was tall, though slender, and something about
         him suggested effeminacy.
      </p>
      
      <p class="indent">‘Such a pity we cannot have our conversation, my dear Lady Jessica,’ the Baron said. ‘However, I’m aware of your abilities.’
         He glanced at the Mentat. ‘Isn’t that true, Piter?’
      </p>
      
      <p class="indent">As you say, Baron,’ the man said.</p>
      
      <p class="indent">The voice was tenor. It touched her spine with a wash of coldness. She had never heard such a chill voice. To one with the
         Bene Gesserit training the voice screamed: <em>Killer!</em></p>
      
      <p class="indent">‘I have a surprise for Piter,’ the Baron said. ‘He thinks he has come here to collect his reward – you, Lady Jessica. But
         I wish to demonstrate a thing: that he does not really want you.’
      </p>
      
      <p class="indent">‘You play with me, Baron?’ Piter asked, and he smiled.</p>
      
      <p class="indent">Seeing that smile, Jessica wondered that the Baron did not leap to defend himself from this Piter. Then she corrected herself.
         The Baron could not read that smile. He did not have the Training.
      </p>
      
      <p class="indent">‘In many ways, Piter is quite naive,’ the Baron said. ‘He doesn’t admit to himself what a deadly creature you are, Lady Jessica.
         I’d show him, but it’d be a foolish risk.’ The Baron smiled at Piter, whose face had become a waiting mask. ‘I know what Piter
         really wants. Piter wants power.’
      </p>
      
      <p class="indent">‘You promised I could have <em>her,’</em> Piter said. The tenor voice had lost some of its cold reserve. Jessica heard the clue-tones in the man’s voice, allowed herself
         <a id="page184"/>an inward shudder. <em>How could the Baron have made such an animal out of a Mentat?</em></p>
      
      <p class="indent">‘I give you a choice, Piter,’ the Baron said.</p>
      
      <p class="indent">‘What choice?’</p>
      
      <p class="indent">The Baron snapped fat fingers. ‘This woman and exile from the Imperium, or the Duchy of Atreides on Arrakis to rule as you
         see fit in my name.’ Jessica watched the Baron’s spider eyes study Piter.
      </p>
      
      <p class="indent">‘You could be Duke here in all but name,’ the Baron said.</p>
      
      <p class="indent"><em>Is my Leto dead, then?</em> Jessica asked herself. She felt a silent wail begin somewhere in her mind.
      </p>
      
      <p class="indent">The Baron kept his attention on the Mentat. ‘Understand yourself, Piter. You want her because she was a Duke’s woman, a symbol
         of his power – beautiful, useful, exquisitely trained for her role. But an entire duchy, Piter! That’s more than a symbol;
         that’s the reality. With it you could have many women … and more.’
      </p>
      
      <p class="indent">‘You do not joke with Piter?’</p>
      
      <p class="indent">The Baron turned with that dancing lightness the suspensors gave him. ‘Joke? I? Remember – I am giving up the boy. You heard
         what the traitor said about the lad’s training. They are alike, this mother and son – deadly.’ The Baron smiled. ‘I must go
         now. I will send in the guard I’ve reserved for this moment. He’s stone deaf. His orders will be to convey you on the first
         leg of your journey into exile. He will subdue this woman if he sees her gain control of you. He’ll not permit you to untie
         her gag until you’re off Arrakis. If you choose not to leave … he has other orders.’
      </p>
      
      <p class="indent">‘You don’t have to leave,’ Piter said. ‘I’ve chosen.’</p>
      
      <p class="indent">‘Ah, hah!’ the Baron chortled. ‘Such quick decision can mean only one thing.’</p>
      
      <p class="indent">‘I will take the duchy,’ Piter said.</p>
      
      <p class="indent">And Jessica thought: <em>Doesn’t Piter know the Baron’s lying to him? But – how could he know? He’s a twisted Mentat.</em></p>
      
      <p class="indent">The Baron glanced down at Jessica. ‘Is it not wonderful that I know Piter so well? I wagered with my Master at Arms that this
         would be Piter’s choice. Hah! Well, I leave now. This is much better. Ah-h, much better. You understand, Lady Jessica? I <a id="page185"/>hold no rancor toward you. It’s a necessity. Much better this way. Yes. And I’ve not <em>actually</em> ordered you destroyed. When it’s asked of me what happened to you, I can shrug it off in all truth.’
      </p>
      
      <p class="indent">‘You leave it to me then?’ Piter asked.</p>
      
      <p class="indent">‘The guard I send you will take your orders,’ the Baron said. ‘Whatever’s done I leave to you.’ He stared at Piter. ‘Yes.
         There will be no blood on my hands here. It’s your decision. Yes. I know nothing of it. You will wait until I’ve gone before
         doing whatever you must do. Yes. Well … ah, yes. Yes. Good.’
      </p>
      
      <p class="indent"><em>He fears the questioning of a Truthsayer,</em> Jessica thought. <em>Who? Ah-h-h, the Reverend Mother Gaius Helen, of course! If he knows he must face her questions, then the Emperor is in on
            this for sure. Ah-h-h-h, my poor Leto.</em></p>
      
      <p class="indent">With one last glance at Jessica, the Baron turned, went out the door. She followed him with her eyes, thinking: <em>It’s as the Reverend Mother warned – too potent an adversary.</em></p>
      
      <p class="indent">Two Harkonnen troopers entered. Another, his face a scarred mask, followed and stood in the doorway with drawn lasgun.</p>
      
      <p class="indent"><em>The deaf one,</em> Jessica thought, studying the scarred face. <em>The Baron knows I could use the Voice on any other man.</em></p>
      
      <p class="indent">Scarface looked at Piter. ‘We’ve the boy on a litter outside. What are your orders?’</p>
      
      <p class="indent">Piter spoke to Jessica. ‘I’d thought of binding you by a threat held over your son, but I begin to see that would not have
         worked. I let emotion cloud reason. Bad policy for a Mentat.’ He looked at the first pair of troopers, turning so the deaf
         one could read his lips: ‘Take them into the desert as the traitor suggested for the boy. His plan is a good one. The worms
         will destroy all evidence. Their bodies must never be found.’
      </p>
      
      <p class="indent">‘You don’t wish to dispatch them yourself?’ Scarface asked.</p>
      
      <p class="indent"><em>He reads lips,</em> Jessica thought.
      </p>
      
      <p class="indent">‘I follow my Baron’s example,’ Piter said. ‘Take them where the traitor said.’</p>
      
      <p class="indent">Jessica heard the harsh Mentat control in Piter’s voice, thought: <em>He, too, fears the Truthsayer.</em></p>
      
      <p class="indent">Piter shrugged, turned, and went through the doorway. He hesitated there, and Jessica thought he might turn back for a last
         look at her, but he went out without turning.
      </p>
      
      <p class="indent"><a id="page186"/>‘Me, I wouldn’t like the thought of facing that Truthsayer after this night’s work,’ Scarface said.
      </p>
      
      <p class="indent">‘You ain’t likely ever to run into that old witch,’ one of the other troopers said. He went around to Jessica’s head, bent
         over her. ‘It ain’t getting our work done standing around here chattering. Take her feet and—’
      </p>
      
      <p class="indent">‘Why’n’t we kill ‘em here?’ Scarface asked.</p>
      
      <p class="indent">‘Too messy,’ the first one said. ‘Unless you wants to strangle ‘em. Me, I likes a nice straightforward job. Drop ‘em on the
         desert like that traitor said, cut ‘em once or twice, leave the evidence for the worms. Nothing to clean up afterward.’
      </p>
      
      <p class="indent">‘Yeah … well, I guess you’re right,’ Scarface said.</p>
      
      <p class="indent">Jessica listened to them, watching, registering. But the gag blocked her Voice, and there was the deaf one to consider.</p>
      
      <p class="indent">Scarface holstered his lasgun, took her feet. They lifted her like a sack of grain, maneuvered her through the door and dumped
         her onto a suspensor-buoyed litter with another bound figure. As they turned her, fitting her to the litter, she saw her companion’s
         face – Paul! He was bound, but not gagged. His face was no more than ten centimeters from hers, eyes closed, his breathing
         even.
      </p>
      
      <p class="indent"><em>Is he drugged?</em> she wondered.
      </p>
      
      <p class="indent">The troopers lifted the litter, and Paul’s eyes opened the smallest fraction – dark slits staring at her.</p>
      
      <p class="indent"><em>He mustn’t try the Voice!</em> she prayed. <em>The deaf guard!</em></p>
      
      <p class="indent">Paul’s eyes closed.</p>
      
      <p class="indent">He had been practicing the awareness-breathing, calming his mind, listening to their captors. The deaf one posed a problem,
         but Paul contained his despair. The mind-calming Bene Gesserit regimen his mother had taught him kept him poised, ready to
         expand any opportunity.
      </p>
      
      <p class="indent">Paul allowed himself another slit-eyed inspection of his mother’s face. She appeared unharmed. Gagged, though.</p>
      
      <p class="indent">He wondered who could’ve captured her. His own captivity was plain enough – to bed with a capsule prescribed by Yueh, awaking
         to find himself bound to this litter. Perhaps a similar thing had befallen her. Logic said the traitor was Yueh, but he <a id="page187"/>held final decision in abeyance. There was no understanding it – a Suk doctor a traitor.
      </p>
      
      <p class="indent">The litter tipped slightly as the Harkonnen troopers maneuvered it through a doorway into starlit night. A suspensor-buoy
         rasped against the doorway. Then they were on sand, feet grating in it. A ’thopter wing loomed overhead, blotting the stars.
         The litter settled to the ground.
      </p>
      
      <p class="indent">Paul’s eyes adjusted to the faint light. He recognized the deaf trooper as the man who opened the ’thopter door, peered inside
         at the green gloom illuminated by the instrument panel.
      </p>
      
      <p class="indent">‘This the ’thopter we’re supposed to use?’ he asked, and turned to watch his companion’s lips.</p>
      
      <p class="indent">‘It’s the one the traitor said was fixed for desert work,’ the other said.</p>
      
      <p class="indent">Scarface nodded. ‘But it’s one of them little liaison jobs. Ain’t room in there for more’n them an’ two of us.’</p>
      
      <p class="indent">‘Two’s enough,’ said the litter-bearer, moving up close and presenting his lips for reading. ‘We can take care of it from
         here on, Kinet.’
      </p>
      
      <p class="indent">‘The Baron he told me to make sure what happened to them two,’ Scarface said.</p>
      
      <p class="indent">‘What you so worried about?’ asked another trooper from behind the litter-bearer.</p>
      
      <p class="indent">‘She is a Bene Gesserit witch,’ the deaf one said. ‘They have powers.’</p>
      
      <p class="indent">‘Ah-h-h …’ The litter-bearer made the sign of the fist at his ear. ‘One of them, eh? Know whatcha mean.’</p>
      
      <p class="indent">The trooper behind him grunted. ‘She’ll be worm meat soon enough. Don’t suppose even a Bene Gesserit witch has powers over
         one of them big worms. Eh, Czigo?’ He nudged the litter-bearer.
      </p>
      
      <p class="indent">‘Yee-up,’ the litter-bearer said. He returned to the litter, took Jessica’s shoulders. ‘C’mon, Kinet. You can go along if
         you wants to make sure what happens.’
      </p>
      
      <p class="indent">‘It is nice of you to invite me, Czigo,’ Scarface said.</p>
      
      <p class="indent">Jessica felt herself lifted, the wing shadow spinning – stars. She was pushed into the rear of the ’thopter, her <em>krimskell</em> fiber bindings examined, and she was strapped down. Paul was <a id="page188"/>jammed in beside her, strapped securely, and she noted his bonds were simple rope.
      </p>
      
      <p class="indent">Scarface, the deaf one they called Kinet, took his place in front. The litter-bearer, the one they called Czigo, came around
         and took the other front seat.
      </p>
      
      <p class="indent">Kinet closed his door, bent to the controls. The ’thopter took off in a wing-tucked surge, headed south over the Shield Wall.
         Czigo tapped his companion’s shoulder, said: ‘Whyn’t you turn around and keep an eye on them two?’
      </p>
      
      <p class="indent">‘Sure you know the way to go?’ Kinet watched Czigo’s lips.</p>
      
      <p class="indent">‘I listened to the traitor same’s you.’</p>
      
      <p class="indent">Kinet swiveled his seat. Jessica saw the glint of starlight on a lasgun in his hand. The ’thopter’s light-walled interior
         seemed to collect illumination as her eyes adjusted, but the guard’s scarred face remained dim. Jessica tested her seat belt,
         found it loose. She felt roughness in the strap against her left arm, realized the strap had been almost severed, would snap
         at a sudden jerk.
      </p>
      
      <p class="indent"><em>Has someone been at this ’thopter, preparing it for us?</em> she wondered. <em>Who?</em> Slowly, she twisted her bound feet clear of Paul’s.
      </p>
      
      <p class="indent">‘Sure do seem a shame to waste a good-looking woman like this,’ Scarface said. ‘You ever have any highborn types?’ He turned
         to look at the pilot.
      </p>
      
      <p class="indent">‘Bene Gesserit ain’t all highborn,’ the pilot said.</p>
      
      <p class="indent">‘But they all look heighty.’</p>
      
      <p class="indent"><em>He can see me plain enough,</em> Jessica thought. She brought her bound legs up onto the seat, curled into a sinuous ball, staring at Scarface.
      </p>
      
      <p class="indent">‘Real pretty, she is,’ Kinet said. He wet his lips with his tongue. ‘Sure do seem a shame.’ He looked at Czigo.</p>
      
      <p class="indent">‘You thinking what I think you’re thinking?’ the pilot asked.</p>
      
      <p class="indent">‘Who’d be to know?’ the guard asked. ‘Afterward …’ He shrugged. ‘I just never had me no highborns. Might never got a chance
         like this one again.’
      </p>
      
      <p class="indent">You lay a hand on my mother …’ Paul grated. He glared at Scarface.</p>
      
      <p class="indent">‘Hey!’ the pilot laughed. ‘Cub’s got a bark. Ain’t got no bite, though.’</p>
      
      <p class="indent"><a id="page189"/>And Jessica thought: <em>Paul’s pitching his voice too high. It may work, though.</em></p>
      
      <p class="indent">They flew on in silence.</p>
      
      <p class="indent"><em>These poor fools,</em> Jessica thought, studying her guards and reviewing the Baron’s words. <em>They’ll be killed as soon as they report success on their mission. The Baron wants no witnesses.</em></p>
      
      <p class="indent">The ’thopter banked over the southern rim of the Shield Wall, and Jessica saw a moonshadowed expanse of sand beneath them.</p>
      
      <p class="indent">‘This oughta be far enough,’ the pilot said. ‘The traitor said to put ‘em on the sand anywhere near the Shield Wall.’ He dipped
         the craft toward the dunes in a long, falling stoop, brought it up stiffly over the desert surface.
      </p>
      
      <p class="indent">Jessica saw Paul begin taking the rhythmic breaths of the calming exercise. He closed his eyes, opened them. Jessica stared,
         helpless to aid him. <em>He hasn’t mastered the Voice yet,</em> she thought, <em>if he fails …</em></p>
      
      <p class="indent">The ’thopter touched sand with a soft lurch, and Jessica, looking north back across the Shield Wall, saw a shadow of wings
         settle out of sight up there.
      </p>
      
      <p class="indent"><em>Someone’s following us!</em> she thought. <em>Who! Then: The ones the Baron set to watch this pair. And there’ll be watchers for the watchers, too.</em></p>
      
      <p class="indent">Czigo shut off his wing rotors. Silence flooded in upon them.</p>
      
      <p class="indent">Jessica turned her head. She could see out the window beyond Scarface a dim glow of light from a rising moon, a frosted rim
         of rock rising from the desert. Sandblast ridges streaked its sides.
      </p>
      
      <p class="indent">Paul cleared his throat.</p>
      
      <p class="indent">The pilot said: ‘Now, Kinet?’</p>
      
      <p class="indent">‘I dunno, Czigo.’</p>
      
      <p class="indent">Czigo turned, said: ‘Ah-h-h, look.’ He reached out for Jessica’s skirt.</p>
      
      <p class="indent">‘Remove her gag,’ Paul commanded.</p>
      
      <p class="indent">Jessica felt the words rolling in the air. The tone, the timbre excellent – imperative, very sharp. A slightly lower pitch
         would have been better, but it could still fall within this man’s spectrum.
      </p>
      
      <p class="indent">Czigo shifted his hand up to the band around Jessica’s mouth, slipped the knot on the gag.</p>
      
      <p class="indent"><a id="page190"/>‘Stop that!’ Kinet ordered.
      </p>
      
      <p class="indent">‘Ah, shut your trap,’ Czigo said. ‘Her hands’re tied.’ He freed the knot and the binding dropped. His eyes glittered as he
         studied Jessica.
      </p>
      
      <p class="indent">Kinet put a hand on the pilot’s arm. ‘Look, Czigo, no need to …’</p>
      
      <p class="indent">Jessica twisted her neck, spat out the gag. She pitched her voice in low, intimate tones. ‘Gentlemen! No need <em>to fight</em> over me.’ At the same time, she writhed sinuously for Kinet’s benefit.
      </p>
      
      <p class="indent">She saw them grow tense, knowing that in this instant they were convinced of the need to fight over her. Their disagreement
         required no other reason. In their minds, they <em>were</em> fighting over her.
      </p>
      
      <p class="indent">She held her face high in the instrument glow to be sure Kinet would read her lips, said: ‘You mustn’t disagree.’ They drew
         farther apart, glanced warily at each other. ‘Is any woman worth fighting over?’ she asked.
      </p>
      
      <p class="indent">By uttering the words, by being there, she made herself infinitely worth their fighting.</p>
      
      <p class="indent">Paul clamped his lips tightly closed, forced himself to be silent. There had been the one chance for him to succeed with the
         Voice. Now – everything depended on his mother whose experience went so far beyond his own.
      </p>
      
      <p class="indent">‘Yeah,’ Scarface said. ‘No need to fight over …’</p>
      
      <p class="indent">His hand flashed toward the pilot’s neck. The blow was met by a splash of metal that caught the arm and in the same motion
         slammed into Kinet’s chest.
      </p>
      
      <p class="indent">Scarface groaned, sagged backward against the door.</p>
      
      <p class="indent">‘Thought I was some dummy didn’t know that trick,’ Czigo said. He brought back his hand, revealing the knife. It glittered
         in reflected moonlight.
      </p>
      
      <p class="indent">‘Now for the cub,’ he said and leaned toward Paul.</p>
      
      <p class="indent">‘No need for that,’Jessica murmured.</p>
      
      <p class="indent">Czigo hesitated.</p>
      
      <p class="indent">‘Wouldn’t you rather have me cooperative?’ Jessica asked. ‘Give the boy a chance.’ Her lip curled in a sneer. ‘Little enough
         chance he’d have out there in that sand. Give him that and …’ She smiled. ‘You could find yourself well rewarded.’
      </p>
      
      <p class="indent"><a id="page191"/>Czigo glanced left, right, returned his attention to Jessica. ‘I’ve heard me what can happen to a man in this desert,’ he
         said. ‘Boy might find the knife a kindness.’
      </p>
      
      <p class="indent">‘Is it so much I ask?’Jessica pleaded.</p>
      
      <p class="indent">‘You’re trying to trick me,’ Czigo muttered.</p>
      
      <p class="indent">‘I don’t want to see my son die,’Jessica said. ‘Is that a trick?’</p>
      
      <p class="indent">Czigo moved back, elbowed the door latch. He grabbed Paul, dragged him across the seat, pushed him half out the door and held
         the knife poised. ‘What’ll y’ do, cub, if I cut y’r bonds?’
      </p>
      
      <p class="indent">‘He’ll leave here immediately and head for those rocks,’ Jessica said.</p>
      
      <p class="indent">‘Is that what y’ll do, cub?’ Czigo asked.</p>
      
      <p class="indent">Paul’s voice was properly surly. ‘Yes.’</p>
      
      <p class="indent">The knife moved down, slashed the bindings of his legs. Paul felt the hand on his back to hurl him down onto the sand, feigned
         a lurch against the door-frame for purchase, turned as though to catch himself, lashed out with his right foot.
      </p>
      
      <p class="indent">The toe was aimed with a precision that did credit to his long years of training, as though all of that training focused on
         this instant. Almost every muscle of his body cooperated in the placement of it. The tip struck the soft part of Czigo’s abdomen
         just below the sternum, slammed upward with terrible force over the liver and through the diaphragm to crush the right ventricle
         of the man’s heart.
      </p>
      
      <p class="indent">With one gurgling scream, the guard jerked backward across the seats. Paul, unable to use his hands, continued his tumble
         onto the sand, landing with a roll that took up the force and brought him back to his feet in one motion. He drove back into
         the cabin, found the knife and held it in his teeth while his mother sawed her bonds. She took the blade and freed his hands.
      </p>
      
      <p class="indent">‘I could’ve handled him,’ she said. ‘He’d have had to cut my bindings. That was a foolish risk.’</p>
      
      <p class="indent">‘I saw the opening and used it,’ he said.</p>
      
      <p class="indent">She heard the harsh control in his voice, said: Yueh’s house sign is scrawled on the ceiling of this cabin.’</p>
      
      <p class="indent">He looked up, saw the curling symbol.</p>
      
      <p class="indent"><a id="page192"/>‘Get out and let us study the craft,’ she said. ‘There’s a bundle under the pilot’s seat. I felt it when we got in.’
      </p>
      
      <p class="indent">‘Bomb?’</p>
      
      <p class="indent">‘Doubt it. There’s something peculiar here.’</p>
      
      <p class="indent">Paul leaped out to the sand and Jessica followed. She turned, reached under the seat for the strange bundle, seeing Czigo’s
         feet close to her face, feeling dampness on the bundle as she removed it, realizing the dampness was the pilot’s blood.
      </p>
      
      <p class="indent"><em>Waste of moisture,</em> she thought, knowing that this was Arrakeen thinking.
      </p>
      
      <p class="indent">Paul stared around them, saw the rock scarp lifting out of the desert like a beach rising from the sea, wind-carved palisades
         beyond. He turned back as his mother lifted the bundle from the ’thopter, saw her stare across the dunes toward the Shield
         Wall. He looked to see what drew her attention, saw another ’thopter swooping toward them, realized they’d not have time to
         clear the bodies out of this ’thopter and escape.
      </p>
      
      <p class="indent">‘Run, Paul!’Jessica shouted. ‘It’s Harkonnens!’</p>
      
      <blockquote class="blockquote">
         <p class="noindent">Arrakis teaches the attitude of the knife – chopping off what’s incomplete and saying: ‘Now, it’s complete because it’s ended
            here.’
         </p>
         <p class="right">—from ‘Collected Sayings of Muad’Dib’ by the Princess Irulan</p>
      </blockquote>
      
      <p class="noindent">A man in Harkonnen uniform skidded to a stop at the end of the hall, stared in at Yueh, taking in at a single glance Mapes’
         body, the sprawled form of the Duke, Yueh standing there. The man held a lasgun in his right hand. There was a casual air
         of brutality about him, a sense of toughness and poise that sent a shiver through Yueh.
      </p>
      
      <p class="indent"><em>Sardaukar,</em> Yueh thought. <em>A Bashar by the look of him. Probably one of the Emperor’s own sent here to keep an eye on things. No matter what the uniform,
            there’s no disguising them.</em></p>
      
      <p class="indent">‘You’re Yueh,’ the man said. He looked speculatively at the Suk School ring on the Doctor’s hair, stared once at the diamond
         tattoo and then met Yueh’s eyes.
      </p>
      
      <p class="indent">‘I am Yueh,’ the Doctor said.</p>
      
      <p class="indent">‘You can relax, Yueh,’ the man said. ‘When you dropped <a id="page193"/>the house shields we came right in. Everything’s under control here. Is this the Duke?’
      </p>
      
      <p class="indent">‘This is the Duke.’</p>
      
      <p class="indent">‘Dead?’</p>
      
      <p class="indent">‘Merely unconscious. I suggest you tie him.’</p>
      
      <p class="indent">‘Did you do for these others?’ He glanced back down the hall where Mapes’ body lay.</p>
      
      <p class="indent">‘More’s the pity,’ Yueh muttered.</p>
      
      <p class="indent">‘Pity!’ the Sardaukar sneered. He advanced, looked down at Leto. ‘So that’s the great Red Duke.’</p>
      
      <p class="indent"><em>If I had doubts about what this man is, that would end them,</em> Yueh thought. <em>Only the Emperor calls the Atreides the Red Dukes.</em></p>
      
      <p class="indent">The Sardaukar reached down, cut the red hawk insignia from Leto’s uniform. ‘Little souvenir,’ he said. ‘Where’s the ducal
         signet ring?’
      </p>
      
      <p class="indent">‘He doesn’t have it on him,’ Yueh said.</p>
      
      <p class="indent">‘I can see that!’ the Sardaukar snapped.</p>
      
      <p class="indent">Yueh stiffened, swallowed. <em>If they press me, bring in a Truthsayer, they’ll find out about the ring, about the ’thopter I prepared – all will fail.</em></p>
      
      <p class="indent">‘Sometimes the Duke sent the ring with a messenger as surety that an order came directly from him,’ Yueh said.</p>
      
      <p class="indent">‘Must be damned trusted messengers,’ the Sardaukar muttered.</p>
      
      <p class="indent">‘Aren’t you going to tie him?’ Yueh ventured.</p>
      
      <p class="indent">‘How long’ll he be unconscious?’</p>
      
      <p class="indent">‘Two hours or so. I wasn’t as precise with his dosage as I was for the woman and boy.’</p>
      
      <p class="indent">The Sardaukar spurned the Duke with his toe. ‘This was nothing to fear even when awake. When will the woman and boy awaken?’</p>
      
      <p class="indent">‘About ten minutes.’</p>
      
      <p class="indent">‘So soon?’</p>
      
      <p class="indent">‘I was told the Baron would arrive immediately behind his men.’</p>
      
      <p class="indent">‘So he will. You’ll wait outside, Yueh.’ He shot a hard glance at Yueh. ‘Now!’</p>
      
      <p class="indent">Yueh glanced at Leto. ‘What about …’</p>
      
      <p class="indent">‘He’ll be delivered all properly trussed like a roast for the <a id="page194"/>oven.’ Again, the Sardaukar looked at the diamond tattoo on Yueh’s forehead. ‘You’re known; you’ll be safe enough in the halls.
         We’ve no more time for chit-chat, traitor. I hear the others coming.’
      </p>
      
      <p class="indent"><em>Traitor,</em> Yueh thought. He lowered his gaze, pressed past the Sardaukar, knowing this as a foretaste of how history would remember
         him: <em>Yueh the traitor.</em></p>
      
      <p class="indent">He passed more bodies on his way to the front entrance and glanced at them, fearful that one might be Paul or Jessica. All
         were house troopers or wore Harkonnen uniform.
      </p>
      
      <p class="indent">Harkonnen guards came alert, staring at him as he emerged from the front entrance into flame-lighted night. The palms along
         the road had been fired to illuminate the house. Black smoke from the flammables used to ignite the trees poured upward through
         orange flames.
      </p>
      
      <p class="indent">‘It’s the traitor,’ someone said.</p>
      
      <p class="indent">‘The Baron will want to see you soon,’ another said.</p>
      
      <p class="indent"><em>I must get to the ’thopter,</em> Yueh thought. <em>I must put the ducal signet where Paul will find it.</em> And fear struck him: <em>If Idaho suspects me or grows impatient – if he doesn’t wait and go exactly where I told him – Jessica and Paul will not be
            saved from the carnage. I’ll be denied even the smallest relief from my act.</em></p>
      
      <p class="indent">The Harkonnen guard released his arm, said: ‘Wait over there out of the way.’</p>
      
      <p class="indent">Abruptly, Yueh saw himself as cast away in this place of destruction, spared nothing, given not the smallest pity. <em>Idaho must not fail!</em></p>
      
      <p class="indent">Another guard bumped into him, barked: ‘Stay out of the way, you!’</p>
      
      <p class="indent"><em>Even when they’ve profited by me they despise me,</em> Yueh thought. He straightened himself as he was pushed aside, regained some of his dignity.
      </p>
      
      <p class="indent">‘Wait for the Baron!’ a guard officer snarled.</p>
      
      <p class="indent">Yueh nodded, walked with controlled casualness along the front of the house, turned the corner into shadows out of sight of
         the burning palms. Quickly, every step betraying his anxiety, Yueh made for the rear yard beneath the conservatory where <a id="page195"/>the ’thopter waited – the craft they had placed there to carry away Paul and his mother.
      </p>
      
      <p class="indent">A guard stood at the open rear door of the house, his attention focused on the lighted hall and men banging through there,
         searching from room to room.
      </p>
      
      <p class="indent">How confident they were!</p>
      
      <p class="indent">Yueh hugged the shadows, worked his way around the ’thopter, eased open the door on the side away from the guard. He felt
         under the front seats for the Fremkit he had hidden there, lifted a flap and slipped in the ducal signet. He felt the crinkling
         of the spice paper there, the note he had written, pressed the ring into the paper. He removed his hand, resealed the pack.
      </p>
      
      <p class="indent">Softly, Yueh closed the ’thopter door, worked his way back to the corner of the house and around toward the flaming trees.</p>
      
      <p class="indent"><em>Now, it is done,</em> he thought.
      </p>
      
      <p class="indent">Once more, he emerged into the light of the blazing palms. He pulled his cloak around him, stared at the flames. <em>Soon I will know. Soon I will see the Baron and I will know. And the Baron – he will encounter a small tooth.</em></p>
      
      <blockquote class="blockquote">
         <p class="noindent">There is a legend that the instant the Duke Leto Atreides died a meteor streaked across the skies above his ancestral palace
            on Caladan.
         </p>
         <p class="right">—from ‘Introduction to A Child’s History of Muad’Dib’ by the Princess Irulan</p>
      </blockquote>
      
      <p class="noindent">The Baron Vladimir Harkonnen stood at a viewport of the grounded lighter he was using as a command post. Out the port he saw
         the flame-lighted night of Arrakeen. His attention focused on the distant Shield Wall where his secret weapon was doing its
         work.
      </p>
      
      <p class="indent">Explosive artillery.</p>
      
      <p class="indent">The guns nibbled at the caves where the Duke’s fighting men had retreated for a last-ditch stand. Slowly measured bites of
         orange glare, showers of rock and dust in the brief illumination – and the Duke’s men were being sealed off to die by starvation,
         caught like animals in their burrows.
      </p>
      
      <p class="indent">The Baron could feel the distant chomping – a drumbeat <a id="page196"/>carried to him through the ship’s metal: <em>broomp … broomp.</em> Then: <em>BROOMP-broomp!</em></p>
      
      <p class="indent"><em>Who would think of reviving artillery in this day of shields?</em> The thought was a chuckle in his mind. <em>But it was predictable the Duke’s men would run for those caves. And the Emperor will appreciate my cleverness in preserving
            the lives of our mutual force.</em></p>
      
      <p class="indent">He adjusted one of the little suspensors that guarded his fat body against the pull of gravity. A smile creased his mouth,
         pulled at the lines of his jowls.
      </p>
      
      <p class="indent"><em>A pity to waste such fighting men as the Duke’s,</em> he thought. He smiled more broadly, laughing at himself. <em>Pity should be cruel!</em> He nodded. Failure was, by definition, expendable. The whole universe sat there, open to the man who could make the right
         decisions. The uncertain rabbits had to be exposed, made to run for their burrows. Else how could you control them and breed
         them? He pictured his fighting men as bees routing the rabbits. And he thought: <em>The day hums sweetly when you have enough bees working for you.</em></p>
      
      <p class="indent">A door opened behind him. The Baron studied the reflection in the night-blackened viewport before turning.</p>
      
      <p class="indent">Piter de Vries advanced into the chamber followed by Umman Kudu, the captain of the Baron’s personal guard. There was a motion
         of men just outside the door, the mutton faces of his guard, their expressions carefully sheeplike in his presence.
      </p>
      
      <p class="indent">The Baron turned.</p>
      
      <p class="indent">Piter touched finger to forelock in his mocking salute. ‘Good news, m’Lord. The Sardaukar have brought in the Duke.’</p>
      
      <p class="indent">‘Of course they have,’ the Baron rumbled.</p>
      
      <p class="indent">He studied the somber mask of villainy on Piter’s effeminate face. And the eyes: those shaded slits of bluest blue-in-blue.</p>
      
      <p class="indent"><em>Soon I must remove him,</em> the Baron thought. <em>He has almost outlasted his usefulness, almost reached the point of positive danger to my person. First, though, he must make
            the people of Arrakis hate him. Then – they will welcome my darling Feyd-Rautha as a savior.</em></p>
      
      <p class="indent">The Baron shifted his attention to the guard captain – Umman Kudu: scissors line of jaw muscles, chin like a boot toe – a
         man to be trusted because the captain’s vices were known.
      </p>
      
      <p class="indent"><a id="page197"/>‘First, where is the traitor who gave me the Duke?’ the Baron asked. ‘I must give the traitor his reward.’
      </p>
      
      <p class="indent">Piter turned on one toe, motioned to the guard outside.</p>
      
      <p class="indent">A bit of black movement there and Yueh walked through. His motions were stiff and stringy. The mustache drooped beside his
         purple lips. Only the old eyes seemed alive. Yueh came to a stop three paces into the room, obeying a motion from Piter, and
         stood there staring across the open space at the Baron.
      </p>
      
      <p class="indent">‘Ah-h-h, Dr Yueh.’</p>
      
      <p class="indent">‘M’Lord Harkonnen.’</p>
      
      <p class="indent">‘You’ve given us the Duke, I hear.’</p>
      
      <p class="indent">‘My half of the bargain, m’Lord.’</p>
      
      <p class="indent">The Baron looked at Piter.</p>
      
      <p class="indent">Piter nodded.</p>
      
      <p class="indent">The Baron looked back at Yueh. ‘The letter of the bargain, eh? And I …’ He spat the words out: ‘What was I to do in return?’</p>
      
      <p class="indent">‘You remember quite well, m’Lord Harkonnen.’</p>
      
      <p class="indent">And Yueh allowed himself to think now, hearing the loud silence of clocks in his mind. He had seen the subtle betrayals in
         the Baron’s manner. Wanna was indeed dead – gone far beyond their reach. Otherwise, there’d still be a hold on the weak doctor.
         The Baron’s manner showed there was no hold; it was ended.
      </p>
      
      <p class="indent">‘Do I?’ the Baron asked.</p>
      
      <p class="indent">‘You promised to deliver my Wanna from her agony.’</p>
      
      <p class="indent">The Baron nodded. ‘Oh, yes. Now, I remember. So I did. That was my promise. That was how we bent the Imperial Conditioning.
         You couldn’t endure seeing your Bene Gesserit witch grovel in Piter’s pain amplifiers. Well, the Baron Vladimir Harkonnen
         always keeps his promises. I told you I’d free her from the agony and permit you to join her. So be it.’ He waved a hand at
         Piter.
      </p>
      
      <p class="indent">Piter’s blue eyes took on a glazed look. His movement was catlike in its sudden fluidity. The knife in his hand glistened
         like a claw as it flashed into Yueh’s back.
      </p>
      
      <p class="indent">The old man stiffened, never taking his attention from the Baron.</p>
      
      <p class="indent"><a id="page198"/>‘So join her!’ the Baron spat.
      </p>
      
      <p class="indent">Yueh stood, swaying. His lips moved with careful precision, and his voice came in oddly measured cadence: ‘You … think … you
         … de … feated … me. You … think … I … did … not … know … what … I … bought … for … my … Wanna.’
      </p>
      
      <p class="indent">He toppled. No bending or softening. It was like a tree falling.</p>
      
      <p class="indent">‘So join her,’ the Baron repeated. But his words were like a weak echo.</p>
      
      <p class="indent">Yueh had filled him with a sense of foreboding. He whipped his attention to Piter, watched the man wipe the blade on a scrap
         of cloth, watched the creamy look of satisfaction in the blue eyes.
      </p>
      
      <p class="indent"><em>So that’s how he kills by his own hand,</em> the Baron thought. <em>It’s well to know.</em></p>
      
      <p class="indent">‘He <em>did</em> give us the Duke?’ the Baron asked.
      </p>
      
      <p class="indent">‘Of a certainty, my Lord,’ Piter said.</p>
      
      <p class="indent">‘Then get him in here!’</p>
      
      <p class="indent">Piter glanced at the guard captain, who whirled to obey.</p>
      
      <p class="indent">The Baron looked down at Yueh. From the way the man had fallen, you could suspect oak in him instead of bones.</p>
      
      <p class="indent">‘I never could bring myself to trust a traitor,’ the Baron said. ‘Not even a traitor I created.’</p>
      
      <p class="indent">He glanced at the night-shrouded viewport. That black bag of stillness out there was his, the Baron knew. There was no more
         crump of artillery against the Shield Wall caves; the burrow traps were sealed off. Quite suddenly, the Baron’s mind could
         conceive of nothing more beautiful than that utter emptiness of black. Unless it were white on the black. Plated white on
         the black. Porcelain white.
      </p>
      
      <p class="indent">But there was still the feeling of doubt.</p>
      
      <p class="indent">What had the old fool of a doctor meant? Of course, he’d probably known what would happen to him in the end. But that bit
         about thinking he’d been defeated: <em>‘You think you defeated me.’</em></p>
      
      <p class="indent">What had he meant?</p>
      
      <p class="indent">The Duke Leto Atreides came through the door. His arms were bound in chains, the eagle face streaked with dirt. His <a id="page199"/>uniform was torn where someone had ripped off his insignia. There were tatters at his waist where the shield belt had been
         removed without first freeing the uniform ties. The Duke’s eyes held a glazed insane look.
      </p>
      
      <p class="indent">‘Wel-l-l-l,’ the Baron said. He hesitated, drawing in a deep breath. He knew he had spoken too loudly. This moment, long-envisioned,
         had lost some of its savor.
      </p>
      
      <p class="indent"><em>Damn that cursed doctor through all eternity!</em></p>
      
      <p class="indent">‘I believe the good Duke is drugged,’ Piter said. ‘That’s how Yueh caught him for us.’ Piter turned to the Duke. ‘Aren’t you
         drugged, my dear Duke?’
      </p>
      
      <p class="indent">The voice was far away. Leto could feel the chains, the ache of muscles, his cracked lips, his burning cheeks, the dry taste
         of thirst whispering its grit in his mouth. But sounds were dull, hidden by a cottony blanket. And he saw only dim shapes
         through the blanket.
      </p>
      
      <p class="indent">‘What of the woman and the boy, Piter?’ the Baron asked. ‘Any word yet?’</p>
      
      <p class="indent">Piter’s tongue darted over his lips.</p>
      
      <p class="indent">‘You’ve heard something!’ the Baron snapped. ‘What?’</p>
      
      <p class="indent">Piter glanced at the guard captain, back to the Baron. ‘The men who were sent to do the job, m’Lord – they’ve … ah … been
         … ah … found.’
      </p>
      
      <p class="indent">‘Well, they report everything satisfactory?’</p>
      
      <p class="indent">‘They’re dead, m’Lord.’</p>
      
      <p class="indent">‘Of course they are! What I want to know is—’</p>
      
      <p class="indent">‘They were dead when found, m’Lord.’</p>
      
      <p class="indent">The Baron’s face went livid. ‘And the woman and boy?’</p>
      
      <p class="indent">‘No sign, m’Lord, but there was a worm. It came while the scene was being investigated. Perhaps it’s as we wished – an accident.
         Possibly—’
      </p>
      
      <p class="indent">‘We do not deal in possibilities, Piter. What of the missing ’thopter? Does that suggest anything to my Mentat?’</p>
      
      <p class="indent">‘One of the Duke’s men obviously escaped in it, m’Lord. Killed our pilot and escaped.’</p>
      
      <p class="indent">‘Which of the Duke’s men?’</p>
      
      <p class="indent">‘It was a clean, silent killing, m’Lord. Hawat, perhaps, or that Halleck one. Possibly Idaho. Or any top lieutenant.’</p>
      
      <p class="indent"><a id="page200"/>‘Possibilities,’ the Baron muttered. He glanced at the swaying, drugged figure of the Duke.
      </p>
      
      <p class="indent">‘The situation is in hand, m’Lord,’ Piter said.</p>
      
      <p class="indent">‘No, it isn’t! Where is that stupid planetologist? Where is this man Kynes?’</p>
      
      <p class="indent">‘We’ve word where to find him and he’s been sent for, m’Lord.’</p>
      
      <p class="indent">‘I don’t like the way the Emperor’s servant is helping us,’ the Baron muttered.</p>
      
      <p class="indent">They were words through a cottony blanket, but some of them burned in Leto’s mind. <em>Woman and boy – no sign.</em> Paul and Jessica had escaped. And the fate of Hawat, Halleck, and Idaho remained an unknown. There was still hope.
      </p>
      
      <p class="indent">‘Where is the ducal signet ring?’ the Baron demanded. ‘His finger is bare.’</p>
      
      <p class="indent">‘The Sardaukar say it was not on him when he was taken, my Lord,’ the guard captain said.</p>
      
      <p class="indent">‘You killed the doctor too soon,’ the Baron said. ‘That was a mistake. You should’ve warned me, Piter. You moved too precipitately
         for the good of our enterprise.’ He scowled. ‘Possibilities!’
      </p>
      
      <p class="indent">The thought hung like a sine wave in Leto’s mind: <em>Paul and Jessica have escaped!</em> And there was something else in his memory: a bargain. He could almost remember it.
      </p>
      
      <p class="indent"><em>The tooth!</em></p>
      
      <p class="indent">He remembered part of it now: <em>a pill of poison gas shaped into a false tooth.</em></p>
      
      <p class="indent">Someone had told him to remember the tooth. The tooth was in his mouth. He could feel its shape with his tongue. All he had
         to do was bite sharply on it.
      </p>
      
      <p class="indent"><em>Not yet!</em></p>
      
      <p class="indent">The someone had told him to wait until he was near the Baron. Who had told him? He couldn’t remember.</p>
      
      <p class="indent">‘How long will he remain drugged like this?’ the Baron asked.</p>
      
      <p class="indent">‘Perhaps another hour, m’Lord.’</p>
      
      <p class="indent">‘Perhaps,’ the Baron muttered. Again, he turned to the night-blackened window. ‘I am hungry.’</p>
      
      <p class="indent"><em>That’s the Baron, that fuzzy gray shape there,</em> Leto thought. The <a id="page201"/>shape danced back and forth, swaying with the movement of the room. And the room expanded and contracted. It grew brighter
         and darker. It folded into blackness and faded.
      </p>
      
      <p class="indent">Time became a sequence of layers for the Duke. He drifted up through them. <em>I must wait.</em></p>
      
      <p class="indent">There was a table. Leto saw the table quite clearly. And a gross, fat man on the other side of the table, the remains of a
         meal in front of him. Leto felt himself sitting in a chair across from the fat man, felt the chains, the straps that held
         his tingling body in the chair. He was aware there had been a passage of time, but its length escaped him.
      </p>
      
      <p class="indent">‘I believe he’s coming around, Baron.’</p>
      
      <p class="indent"><em>A silky voice, that one. That was Piter.</em></p>
      
      <p class="indent">‘So I see, Piter.’</p>
      
      <p class="indent"><em>A rumbling basso: the Baron.</em></p>
      
      <p class="indent">Leto sensed increasing definition in his surroundings. The chair beneath him took on firmness, the bindings were sharper.</p>
      
      <p class="indent">And he saw the Baron clearly now. Leto watched the movements of the man’s hands: compulsive touchings – the edge of a plate,
         the handle of a spoon, a finger tracing the fold of a jowl.
      </p>
      
      <p class="indent">Leto watched the moving hand, fascinated by it.</p>
      
      <p class="indent">‘You can hear me, Duke Leto,’ the Baron said. ‘I know you can hear me. We want to know from you where to find your concubine
         and the child you sired on her.’
      </p>
      
      <p class="indent">No sign escaped Leto, but the words were a wash of calmness through him. <em>It’s true, then: they don’t have Paul and Jessica.</em></p>
      
      <p class="indent">‘This is not a child’s game we play,’ the Baron rumbled. ‘You must know that.’ He leaned toward Leto, studying the face. It
         pained the Baron that this could not be handled privately, just between the two of them. To have others see royalty in such
         straits – it set a bad precedent.
      </p>
      
      <p class="indent">Leto could feel strength returning. And now, the memory of the false tooth stood out in his mind like a steeple in a flat
         landscape. The nerve-shaped capsule within that tooth – the poison gas – he remembered who had put the deadly weapon in his
         mouth.
      </p>
      
      <p class="indent"><em>Yueh.</em></p>
      
      <p class="indent">Drug-fogged memory of seeing a limp corpse dragged past <a id="page202"/>him in this room hung like a vapor in Leto’s mind. He knew it had been Yueh.
      </p>
      
      <p class="indent">‘Do you hear that noise, Duke Leto?’ the Baron asked.</p>
      
      <p class="indent">Leto grew conscious of a frog sound, the burred mewling of someone’s agony.</p>
      
      <p class="indent">‘We caught one of your men disguised as a Fremen,’ the Baron said. ‘We penetrated the disguise quite easily: the eyes, you
         know. He insists he was sent among the Fremen to spy on them. I’ve lived for a time on this planet, cher cousin. One does
         not spy on those ragged scum of the desert. Tell me, did you buy their help? Did you send your woman and son to them?’
      </p>
      
      <p class="indent">Leto felt fear tighten his chest. <em>If Yueh sent them to the desert folk … the search won’t stop until they’re found.</em></p>
      
      <p class="indent">‘Come, come,’ the Baron said. We don’t have much time and pain is quick. Please don’t bring it to this, my dear Duke.’ The
         Baron looked up at Piter who stood at Leto’s shoulder. ‘Piter doesn’t have all his tools here, but I’m sure he could improvise.’
      </p>
      
      <p class="indent">‘Improvisation is sometimes the best, Baron.’</p>
      
      <p class="indent"><em>That silky, insinuating voice!</em> Leto heard it at his ear.
      </p>
      
      <p class="indent">‘You had an emergency plan,’ the Baron said. ‘Where have your woman and the boy been sent?’ He looked at Leto’s hand. ‘Your
         ring is missing. Does the boy have it?’
      </p>
      
      <p class="indent">The Baron looked up, stared into Leto’s eyes.</p>
      
      <p class="indent">‘You don’t answer,’ he said. Will you force me to do a thing I do not want to do? Piter will use simple, direct methods. I
         agree they’re sometimes the best, but it’s not good that <em>you</em> should be subjected to such things.’
      </p>
      
      <p class="indent">‘Hot tallow on the back, perhaps, or on the eyelids,’ Piter said. ‘Perhaps on other portions of the body. It’s especially
         effective when the subject doesn’t know where the tallow will fall next. It’s a good method and there’s a sort of beauty in
         the pattern of pus-white blisters on naked skin, eh, Baron?’
      </p>
      
      <p class="indent">‘Exquisite,’ the Baron said, and his voice sounded sour.</p>
      
      <p class="indent"><em>Those touching fingers!</em> Leto watched the fat hands, the glittering jewels on baby-fat hands – their compulsive wandering.
      </p>
      
      <p class="indent">The sounds of agony coming through the door behind him gnawed at the Duke’s nerves. <em>Who is it they caught?</em> he wondered. <em>Could it have been Idaho?</em></p>
      
      <p class="indent"><a id="page203"/>‘Believe me, cher cousin,’ the Baron said. ‘I do not want it to come to this.’
      </p>
      
      <p class="indent">‘You think of nerve couriers racing to summon help that cannot come,’ Piter said. ‘There’s artistry in this, you know.’</p>
      
      <p class="indent">‘You’re a superb artist,’ the Baron growled. ‘Now, have the decency to be silent.’</p>
      
      <p class="indent">Leto suddenly recalled a thing Gurney Halleck had said once, seeing a picture of the Baron: ‘“ <em>And I stood upon the sand of the sea and saw a beast rise up out of the sea … and upon his heads the name of blasphemy</em>.”’
      </p>
      
      <p class="indent">‘We waste time, Baron,’ Piter said.</p>
      
      <p class="indent">‘Perhaps.’</p>
      
      <p class="indent">The Baron nodded. You know, my dear Leto, you’ll tell us in the end where they are. There’s a level of pain that’ll buy you.’</p>
      
      <p class="indent"><em>He’s most likely correct,</em> Leto thought. <em>Were it not for the tooth … and the fact that I truly don’t know where they are.</em></p>
      
      <p class="indent">The Baron picked up a sliver of meat, pressed the morsel into his mouth, chewed slowly, swallowed. <em>We must try a new tack,</em> he thought.
      </p>
      
      <p class="indent">‘Observe this prize person who denies he’s for hire,’ the Baron said. ‘Observe him, Piter.’</p>
      
      <p class="indent">And the Baron thought: <em>Yes! See him there, this man who believes he cannot be bought. See him detained there by a million shares of himself sold
            in dribbles every second of his life! If you took him up now and shook him, he’d rattle inside. Emptied! Sold out! What difference
            how he dies now?</em></p>
      
      <p class="indent">The frog sounds in the background stopped.</p>
      
      <p class="indent">The Baron saw Umman Kudu, the guard captain, appear in the doorway across the room, shake his head. The captive hadn’t produced
         the needed information. Another failure. Time to quit stalling with this fool Duke, this stupid soft fool who didn’t realize
         how much hell there was so near him – only a nerve’s thickness away.
      </p>
      
      <p class="indent">This thought calmed the Baron, overcoming his reluctance to have a royal person subjected to pain. He saw himself suddenly
         as a surgeon exercising endless supple scissor dissections – cutting away the masks from fools, exposing the hell beneath.
      </p>
      
      <p class="indent"><em>Rabbits, all of them!</em></p>
      
      <p class="indent">And how they cowered when they saw the carnivore!</p>
      
      <p class="indent"><a id="page204"/>Leto stared across the table, wondering why he waited. The tooth would end it all quickly. Still – it had been good, much
         of this life. He found himself remembering an antenna kite up-dangling in the shell-blue sky of Caladan, and Paul laughing
         with joy at the sight of it. And he remembered sunrise here on Arrakis – colored strata of the Shield Wall mellowed by dust
         haze.
      </p>
      
      <p class="indent">‘Too bad,’ the Baron muttered. He pushed himself back from the table, stood up lightly in his suspensors and hesitated, seeing
         a change come over the Duke. He saw the man draw in a deep breath, the jawline stiffen, the ripple of a muscle there as the
         Duke clamped his mouth shut.
      </p>
      
      <p class="indent"><em>How he fears me!</em> the Baron thought.
      </p>
      
      <p class="indent">Shocked by fear that the Baron might escape him, Leto bit hard on the capsule tooth, felt it break. He opened his mouth, expelled
         the biting vapor he could taste as it formed on his tongue. The Baron grew smaller, a figure seen in a tightening tunnel.
         Leto heard a gasp beside his ear – the silky-voiced one: Piter.
      </p>
      
      <p class="indent"><em>It got him, too!</em></p>
      
      <p class="indent">‘Piter! What’s wrong?’</p>
      
      <p class="indent">The rumbling voice was far away.</p>
      
      <p class="indent">Leto sensed memories rolling in his mind – the old toothless mutterings of hags. The room, the table, the Baron, a pair of
         terrified eyes – blue within blue, the eyes – all compressed around him in ruined symmetry.
      </p>
      
      <p class="indent">There was a man with a boot-toe chin, a toy man falling. The toy man had a broken nose slanted to the left: an offbeat metronome
         caught forever at the start of an upward stroke. Leto heard the crash of crockery – so distant – a roaring in his ears. His
         mind was a bin without end, catching everything. Everything that had ever been: every shout, every whisper, every … silence.
      </p>
      
      <p class="indent">One thought remained to him. Leto saw it in formless light on rays of black: <em>The day the flesh shapes and the flesh the day shapes.</em> The thought struck him with a sense of fullness he knew he could never explain.
      </p>
      
      <p class="indent">Silence.</p>
      
      <p class="indent"><a id="page205"/>The Baron stood with his back against his private door, his own bolt hole behind the table. He had slammed it on a room full
         of dead men. His senses took in guards swarming around him. <em>Did I breathe it?</em> he asked himself. <em>Whatever it was in there, did it get me, too?</em></p>
      
      <p class="indent">Sounds returned to him … and reason. He heard someone shouting orders – gas masks … keep a door closed … get blowers going.</p>
      
      <p class="indent"><em>The others fell quickly,</em> he thought. I’m still standing. I’m still breathing. <em>Merciless hell! That was close!</em></p>
      
      <p class="indent">He could analyze it now. His shield had been activated, set low but still enough to slow molecular interchange across the
         field barrier. And he had been pushing himself away from the table … that and Piter’s shocked gasp which had brought the guard
         captain darting forward into his own doom.
      </p>
      
      <p class="indent">Chance and the warning in a dying man’s gasp – these had saved him.</p>
      
      <p class="indent">The Baron felt no gratitude to Piter. The fool had got himself killed. And that stupid guard captain! He’d said he scoped
         everyone before bringing them into the Baron’s presence! How had it been possible for the Duke … ? No warning. Not even from
         the poison snooper over the table – until it was too late. How?
      </p>
      
      <p class="indent"><em>Well, no matter now,</em> the Baron thought, his mind firming. <em>The next guard captain will begin by finding answers to these questions.</em></p>
      
      <p class="indent">He grew aware of more activity down the hall – around the corner at the other door to that room of death. The Baron pushed
         himself away from his own door, studied the lackeys around him. They stood there staring, silent, waiting for the Baron’s
         reaction.
      </p>
      
      <p class="indent"><em>Would the Baron be angry?</em></p>
      
      <p class="indent">And the Baron realized only a few seconds had passed since his flight from that terrible room.</p>
      
      <p class="indent">Some of the guards had weapons leveled at the door. Some were directing their ferocity toward the empty hall that stretched
         away toward the noises around the corner to their right.
      </p>
      
      <p class="indent">A man came striding around that corner, gas mask dangling by its straps at his neck, his eyes intent on the overhead poison
         <a id="page206"/>snoopers that lined this corridor. He was yellow-haired, flat of face with green eyes. Crisp lines radiated from his thick-lipped
         mouth. He looked like some water creature misplaced among those who walked the land.
      </p>
      
      <p class="indent">The Baron stared at the approaching man, recalling the name: Nefud. Iakin Nefud. Guard corporal. Nefud was addicted to semuta,
         the drug-music combination that played itself in the deepest consciousness. A useful item of information, that.
      </p>
      
      <p class="indent">The man stopped in front of the Baron, saluted. ‘Corridor’s clear, m’Lord. I was outside watching and saw that it must be
         poison gas. Ventilators in your room were pulling air in from these corridors.’ He glanced up at the snooper over the Baron’s
         head. ‘None of the stuff escaped. We have the room cleaned out now. What are your orders?’
      </p>
      
      <p class="indent">The Baron recognized the man’s voice – the one who’d been shouting orders. <em>Efficient, this corporal,</em> he thought.
      </p>
      
      <p class="indent">‘They’re all dead in there?’ the Baron asked.</p>
      
      <p class="indent">‘Yes, m’Lord.’</p>
      
      <p class="indent"><em>Well, we must adjust,</em> the Baron thought.
      </p>
      
      <p class="indent">‘First,’ he said, ‘let me congratulate you, Nefud. You’re the new captain of my guard. And I hope you’ll take to heart the
         lesson to be learned from the fate of your predecessor.’
      </p>
      
      <p class="indent">The Baron watched the awareness grow in his newly promoted guardsman. Nefud knew he’d never again be without his semuta.</p>
      
      <p class="indent">Nefud nodded. ‘My Lord knows I’ll devote myself entirely to his safety.’</p>
      
      <p class="indent">‘Yes. Well, to business. I suspect the Duke had something in his mouth. You will find out what that something was, how it
         was used, who helped him put it there. You’ll take every precaution—’
      </p>
      
      <p class="indent">He broke off, his chain of thought shattered by a disturbance in the corridor behind him – guards at the door to the lift
         from the lower levels of the frigate trying to hold back a tall colonel bashar who had just emerged from the lift.
      </p>
      
      <p class="indent">The Baron couldn’t place the colonel bashar’s face: thin with mouth like a slash in leather, twin ink spots for eyes.</p>
      
      <p class="indent"><a id="page207"/>‘Get your hands off me, you pack of carrion-eaters!’ the man roared, and he dashed the guards aside.
      </p>
      
      <p class="indent"><em>Ak-h-h, one of the Sardaukar,</em> the Baron thought.
      </p>
      
      <p class="indent">The colonel bashar came striding toward the Baron, whose eyes went to slits of apprehension. The Sardaukar officers filled
         him with unease. They all seemed to look like relatives of the Duke … the late Duke. And their manners with the Baron!
      </p>
      
      <p class="indent">The colonel bashar planted himself half a pace in front of the Baron, hands on hips. The guard hovered behind him in twitching
         uncertainty.
      </p>
      
      <p class="indent">The Baron noted the absence of salute, the disdain in the Sardaukar’s manner, and his unease grew. There was only the one
         legion of them locally – ten brigades – reinforcing the Harkonnen legions, but the Baron did not fool himself. That one legion
         was perfectly capable of turning on the Harkonnens and overcoming them.
      </p>
      
      <p class="indent">‘Tell your men they are not to prevent me from seeing you, Baron,’ the Sardaukar growled. ‘My men brought you the Atreides
         Duke before I could discuss his fate with you. We will discuss it now.’
      </p>
      
      <p class="indent"><em>I must not lose face before my men,</em> the Baron thought.
      </p>
      
      <p class="indent">‘So?’ It was a coldly controlled word, and the Baron felt proud of it.</p>
      
      <p class="indent">‘My Emperor has charged me to make certain his royal cousin dies cleanly without agony,’ the colonel bashar said.</p>
      
      <p class="indent">‘Such were the Imperial orders to me,’ the Baron lied. ‘Did you think I’d disobey?’</p>
      
      <p class="indent">‘I’m to report to my Emperor what I see with my own eyes,’ the Sardaukar said.</p>
      
      <p class="indent">‘The Duke’s already dead,’ the Baron snapped, and he waved a hand to dismiss the fellow.</p>
      
      <p class="indent">The colonel bashar remained planted facing the Baron. Not by flicker of eye or muscle did he acknowledge he had been dismissed,
         ‘How?’ he growled.
      </p>
      
      <p class="indent"><em>Really!</em> the Baron thought. <em>This is too much.</em></p>
      
      <p class="indent">‘By his own hand, if you must know,’ the Baron said. ‘He took poison.’</p>
      
      <p class="indent">‘I will see the body now,’ the colonel bashar said.</p>
      
      <p class="indent"><a id="page208"/>The Baron raised his gaze to the ceiling in feigned exasperation while his thoughts raced. <em>Damnation! This sharp-eyed Sardaukar will see the room before a thing’s been changed!</em></p>
      
      <p class="indent">‘Now,’ the Sardaukar growled. ‘I’ll see it with my own eyes.’</p>
      
      <p class="indent">There was no preventing it, the Baron realized. The Sardaukar would see all. He’d know the Duke had killed Harkonnen men …
         that the Baron most likely had escaped by a narrow margin. There was the evidence of the dinner remnants on the table, and
         the dead Duke across from it with destruction around him.
      </p>
      
      <p class="indent">No preventing it at all.</p>
      
      <p class="indent">‘I’ll not be put off,’ the colonel bashar snarled.</p>
      
      <p class="indent">‘You’re not being put off,’ the Baron said, and he stared into the Sardaukar’s obsidian eyes. ‘I hide nothing from my Emperor.’
         He nodded to Nefud. ‘The colonel bashar is to see everything, at once. Take him in by the door where you stood, Nefud.’
      </p>
      
      <p class="indent">‘This way, sir,’ Nefud said.</p>
      
      <p class="indent">Slowly, insolently, the Sardaukar moved around the Baron, shouldered a way through the guardsmen.</p>
      
      <p class="indent"><em>Insufferable,</em> the Baron thought. <em>Now, the Emperor will know how I slipped up. He’ll recognize it as a sign of weakness.</em></p>
      
      <p class="indent">And it was agonizing to realize that the Emperor and his Sardaukar were alike in their disdain for weakness. The Baron chewed
         at his lower lip, consoling himself that the Emperor, at least, had not learned of the Atreides raid on Giedi Prime, the destruction
         of the Harkonnen spice stores there.
      </p>
      
      <p class="indent"><em>Damn that slippery Duke!</em></p>
      
      <p class="indent">The Baron watched the retreating backs – the arrogant Sardaukar and the stocky, efficient Nefud.</p>
      
      <p class="indent"><em>We must adjust,</em> the Baron thought. <em>I‘ll have to put Rabban over this damnable planet once more. Without restraint. I must spend my own Harkonnen blood to put
            Arrakis into a proper condition for accepting Feyd-Rautha. Damn that Piter! He would get himself killed before I was through
            with him.</em></p>
      
      <p class="indent">The Baron sighed.</p>
      
      <p class="indent"><em>And I must send at once to Tleilax for a new Mentat. They undoubtedly have the new one ready for me by now.</em></p>
      
      <p class="indent"><a id="page209"/>One of the guardsmen beside him coughed.
      </p>
      
      <p class="indent">The Baron turned toward the man. ‘I am hungry.’</p>
      
      <p class="indent">‘Yes, m’Lord.’</p>
      
      <p class="indent">‘And I wish to be diverted while you’re clearing out that room and studying its secrets for me,’ the Baron rumbled.</p>
      
      <p class="indent">The guardsman lowered his eyes. ‘What diversion does m’Lord wish?’</p>
      
      <p class="indent">‘I’ll be in my sleeping chambers,’ the Baron said. ‘Bring me that young fellow we bought on Gamont, the one with the lovely
         eyes. Drug him well. I don’t feel like wrestling.’
      </p>
      
      <p class="indent">‘Yes, m’Lord.’</p>
      
      <p class="indent">The Baron turned away, began moving with his bouncing, suspensor-buoyed pace toward his chambers. <em>Yes,</em> he thought. <em>The one with the lovely eyes, the one who looks so much like the young Paul Atreides.</em></p>
      
      <blockquote class="linegroup">
         <p class="line1">O Seas of Caladan,</p>
         
         <p class="line1">O people of Duke Leto—</p>
         
         <p class="line1">Citadel of Leto fallen,</p>
         
         <p class="line1">Fallen forever …</p>
      <p class="line">—from ‘Songs of Muad’Dib’ by the Princess Irulan</p>
         
      </blockquote>
      
      
      <p class="noindent">Paul felt that all his past, every experience before this night, had become sand curling in an hourglass. He sat near his
         mother hugging his knees within a small fabric and plastic hutment – a stilltent – that had come, like the Fremen clothing
         they now wore, from the pack left in the ’thopter.
      </p>
      
      <p class="indent">There was no doubt in Paul’s mind who had put the Fremkit there, who had directed the course of the ’thopter carrying them
         captive.
      </p>
      
      <p class="indent"><em>Yueh.</em></p>
      
      <p class="indent">The traitor doctor had sent them directly into the hands of Duncan Idaho.</p>
      
      <p class="indent">Paul stared out the transparent end of the stilltent at the moonshadowed rocks that ringed this place where Idaho had hidden
         them.
      </p>
      
      <p class="indent"><em>Hiding like a child when I’m now the Duke,</em> Paul thought. He felt <a id="page210"/>the thought gall him, but could not deny the wisdom in what they did.
      </p>
      
      <p class="indent">Something had happened to his awareness this night – he saw with sharpened clarity every circumstance and occurrence around
         him. He felt unable to stop the inflow of data or the cold precision with which each new item was added to his knowledge and
         the computation was centered in his awareness. It was Mentat power and more.
      </p>
      
      <p class="indent">Paul thought back to the moment of impotent rage as the strange ’thopter dived out of the night onto them, stooping like a
         giant hawk above the desert with wind screaming through its wings. The thing in Paul’s mind had happened then. The ’thopter
         had skidded and slewed across a sand ridge toward the running figures – his mother and himself. Paul remembered how the smell
         of burned sulfur from abrasion of ’thopter skids against sand had drifted across them.
      </p>
      
      <p class="indent">His mother, he knew, had turned, expected to meet a lasgun in the hands of Harkonnen mercenaries, and had recognized Duncan
         Idaho leaning out the ’thopter’s open door shouting: ‘Hurry! There’s wormsign south of you!’
      </p>
      
      <p class="indent">But Paul had known as he turned who piloted the ’thopter. An accumulation of minutiae in the way it was flown, the dash of
         the landing – clues so small even his mother hadn’t detected them – had told Paul <em>precisely</em> who sat at those controls.
      </p>
      
      <p class="indent">Across the stilltent from Paul, Jessica stirred, said: ‘There can be only one explanation. The Harkonnens held Yueh’s wife.
         He hated the Harkonnens! I cannot be wrong about that. You read his note. But why has he saved us from the carnage?’
      </p>
      
      <p class="indent"><em>She is only now seeing it and that poorly,</em> Paul thought. The thought was a shock. He had known this fact as a by-the-way thing while reading the note that had accompanied
         the ducal signet in the pack.
      </p>
      
      <p class="indent">‘Do not try to forgive me,’ Yueh had written. ‘I do not want your forgiveness. I already have enough burdens. What I have
         done was done without malice or hope of another’s understanding. It is my own tahaddi al-burhan, my ultimate test. I give
         you the Atreides ducal signet as token that I write truly. By the time you read this, Duke Leto will be dead. Take consolation
         <a id="page211"/>from my assurance that he did not die alone, that one we hate above all others died with him.’
      </p>
      
      <p class="indent">It had not been addressed or signed, but there’d been no mistaking the familiar scrawl – Yueh’s.</p>
      
      <p class="indent">Remembering the letter, Paul re-experienced the distress of that moment – a thing sharp and strange that seemed to happen
         outside his new mental alertness. He had read that his father was dead, known the truth of the words, but had felt them as
         no more than another datum to be entered in his mind and used.
      </p>
      
      <p class="indent"><em>I loved my father,</em> Paul thought, and knew this for truth. <em>I should mourn him. I should feel something.</em></p>
      
      <p class="indent">But he felt nothing except: <em>Here’s an important fact.</em></p>
      
      <p class="indent">It was one with all the other facts.</p>
      
      <p class="indent">All the while his mind was adding sense impressions, extrapolating, computing.</p>
      
      <p class="indent">Halleck’s words came back to Paul: <em>‘Mood’s a thing for cattle or for making love. You fight when the necessity arises, no matter your mood.’</em></p>
      
      <p class="indent"><em>Perhaps that’s it,</em> Paul thought. <em>I’ll mourn my father later … when there’s time.</em></p>
      
      <p class="indent">But he felt no letup in the cold precision of his being. He sensed that his new awareness was only a beginning, that it was
         growing. The sense of terrible purpose he’d first experienced in his ordeal with the Reverend Mother Gaius Helen Mohiam pervaded
         him. His right hand – the hand of remembered pain – tingled and throbbed.
      </p>
      
      <p class="indent"><em>Is this what it is to be their Kwisatz Haderach?</em> he wondered.
      </p>
      
      <p class="indent">‘For a while, I thought Hawat had failed us again,’ Jessica said. ‘I thought perhaps Yueh wasn’t a Suk doctor.’</p>
      
      <p class="indent">‘He was everything we thought him … and more,’ Paul said. And he thought: <em>Why is she so slow seeing these things?</em> He said, ‘If Idaho doesn’t get through to Kynes, we’ll be—
      </p>
      
      <p class="indent">‘He’s not our only hope,’ she said.</p>
      
      <p class="indent">‘Such was not my suggestion,’ he said.</p>
      
      <p class="indent">She heard the steel in his voice, the sense of command, and stared across the grey darkness of the stilltent at him. Paul
         was a silhouette against moonfrosted rocks seen through the tent’s transparent end.
      </p>
      
      <p class="indent"><a id="page212"/>‘Others among your father’s men will have escaped,’ she said. ‘We must regather them, find—’
      </p>
      
      <p class="indent">‘We will depend upon ourselves,’ he said. ‘Our immediate concern is our family atomics. We must get them before the Harkonnens
         can search them out.
      </p>
      
      <p class="indent">‘Not likely they’ll be found,’ she said, ‘the way they were hidden.’</p>
      
      <p class="indent">‘It must not be left to chance.’</p>
      
      <p class="indent">And she thought: <em>Blackmail with the family atomics as a threat to the planet and its spice – that’s what he has in mind. But all he can hope
            for then is escape into renegade anonymity.</em></p>
      
      <p class="indent">His mother’s words had provoked another train of thought in Paul – a duke’s concern for all the people they’d lost this night.
         <em>People are the true strength of a Great House,</em> Paul thought. And he remembered Hawat’s words: <em>‘Parting with people is a sadness; a place is only a place.’</em></p>
      
      <p class="indent">‘They’re using Sardaukar,’ Jessica said. ‘We must wait until the Sardaukar have been withdrawn.’</p>
      
      <p class="indent">‘They think us caught between the desert and the Sardaukar,’ Paul said. ‘They intend that there be no Atreides survivors –
         total extermination. Do not count on any of our people escaping.’
      </p>
      
      <p class="indent">‘They cannot go on indefinitely risking exposure of the Emperor’s part in this.’</p>
      
      <p class="indent">‘Can’t they?’</p>
      
      <p class="indent">‘Some of our people are bound to escape.’</p>
      
      <p class="indent">‘Are they?’</p>
      
      <p class="indent">Jessica turned away, frightened of the bitter strength in her son’s voice, hearing the precise assessment of chances. She
         sensed that his mind had leaped ahead of her, that it now saw more in some respects than she did. She had helped train the
         intelligence which did this, but now she found herself fearful of it. Her thoughts turned, seeking toward the lost sanctuary
         of her Duke, and tears burned her eyes.
      </p>
      
      <p class="indent"><em>This is the way it had to be, Leto,</em> she thought. <em>‘A time of love and a time of grief.’</em> She rested her hand on her abdomen, awareness focused on the embryo there. <em>I have the Atreides daughter I was ordered to produce, but the Reverend Mother was wrong: a daughter</em> <a id="page213"/><em>wouldn’t have saved my Leto. This child is only life reaching for the future in the midst of death. I conceived out of instinct
            and not out of obedience.</em></p>
      
      <p class="indent">‘Try the communinet receiver again,’ Paul said.</p>
      
      <p class="indent"><em>The mind goes on working no matter how we try to hold it back,</em> she thought.
      </p>
      
      <p class="indent">Jessica found the tiny receiver Idaho had left for them, flipped its switch. A green light glowed on the instrument’s face.
         Tinny screeching came from its speaker. She reduced the volume, hunted across the bands. A voice speaking Atreides battle
         language came into the tent.
      </p>
      
      <p class="indent">‘… back and regroup at the ridge. Fedor reports no survivors in Carthag and the Guild Bank has been sacked.’</p>
      
      <p class="indent"><em>Carthag!</em>Jessica thought. <em>That was a Harkonnen hotbed.</em></p>
      
      <p class="indent">‘They’re Sardaukar,’ the voice said. ‘Watch out for Sardaukar in Atreides uniforms. They’re …’</p>
      
      <p class="indent">A roaring filled the speaker, then silence.</p>
      
      <p class="indent">‘Try the other bands,’ Paul said.</p>
      
      <p class="indent">‘Do you realize what that means?’Jessica asked.</p>
      
      <p class="indent">‘I expected it. They want the Guild to blame us for destruction of their bank. With the Guild against us, we’re trapped on
         Arrakis. Try the other bands.’
      </p>
      
      <p class="indent">She weighed his words: <em>‘I expected it.’</em> What had happened to him? Slowly, Jessica returned to the instrument. As she moved the bandslide, they caught glimpses of
         violence in the few voices calling out in Atreides battle language: ‘… fall back …’ ‘… try to regroup at …’’… trapped in a
         cave at …’
      </p>
      
      <p class="indent">And there was no mistaking the victorious exultation in the Harkonnen gibberish that poured from the other bands. Sharp commands,
         battle reports. There wasn’t enough of it for Jessica to register and break the language, but the tone was obvious.
      </p>
      
      <p class="indent">Harkonnen victory.</p>
      
      <p class="indent">Paul shook the pack beside him, hearing the two literjons of water gurgle there. He took a deep breath, looked up through
         the transparent end of the tent at the rock escarpment outlined against the stars. His left hand felt the sphincter-seal of
         the tent’s entrance. ‘It’ll be dawn soon,’ he said. ‘We can wait through the day for Idaho, but not through another night.
         In the desert, you must travel by night and rest in shade through the day.’
      </p>
      
      <p class="indent"><a id="page214"/>Remembered lore insinuated itself into Jessica’s mind: <em>Without a stillsuit, a man sitting in shade on the desert needs five liters of water a day to maintain body weight.</em> She felt the slick-soft skin of the stillsuit against her body, thinking how their lives depended on these garments.
      </p>
      
      <p class="indent">‘If we leave here, Idaho can’t find us,’ she said.</p>
      
      <p class="indent">‘There are ways to make any man talk,’ he said. ‘If Idaho hasn’t returned by dawn, we must consider the possibility he has
         been captured. How long do you think he could hold out?’
      </p>
      
      <p class="indent">The question required no answer, and she sat in silence.</p>
      
      <p class="indent">Paul lifted the seal on the pack, pulled out a tiny micromanual with glowtab and magnifier. Green and orange letters leaped
         up at him from the pages: ‘literjons, stilltent, energy caps, recaths, sandsnork, binoculars, stillsuit repkit, baradye pistol,
         sinkchart, filt-plugs, paracompass, maker hooks, thumpers, Fremkit, fire pillar …’
      </p>
      
      <p class="indent">So many things for survival on the desert.</p>
      
      <p class="indent">Presently, he put the manual aside on the tent floor.</p>
      
      <p class="indent">‘Where can we possibly go?’Jessica asked.</p>
      
      <p class="indent">‘My father spoke <em>of desert power,’</em> Paul said. ‘The Harkonnens cannot rule this planet without it. They’ve never ruled this planet, nor shall they. Not even
         with ten thousand legions of Sardaukar.’
      </p>
      
      <p class="indent">‘Paul, you can’t think that—’</p>
      
      <p class="indent">‘We’ve all the evidence in our hands,’ he said. ‘Right here in this tent – the tent itself, this pack and its contents, these
         stillsuits. We know the Guild wants a prohibitive price for weather satellites. We know that—’
      </p>
      
      <p class="indent">‘What’ve weather satellites to do with it?’ she asked. ‘They couldn’t possibly …’ She broke off.</p>
      
      <p class="indent">Paul sensed the hyperalertness of his mind reading her reactions, computing on minutiae. ‘You see it now,’ he said. ‘Satellites
         watch the terrain below. There are things in the deep desert that will not bear frequent inspection.’
      </p>
      
      <p class="indent">‘You’re suggesting the Guild itself controls this planet?’</p>
      
      <p class="indent">She was so slow.</p>
      
      <p class="indent">‘No!’ he said. ‘The Fremen! They’re paying the Guild for privacy, paying in a coin that’s freely available to anyone with
         <a id="page215"/>desert power – spice. This is more than a second-approximation answer; it’s the straight-line computation. Depend on it.’
      </p>
      
      <p class="indent">‘Paul,’ Jessica said, ‘you’re not a Mentat yet; you can’t know for sure how—’</p>
      
      <p class="indent">‘I’ll never be a Mentat,’ he said. ‘I’m something else … a freak.’</p>
      
      <p class="indent">‘Paul! How can you say such—’</p>
      
      <p class="indent">‘Leave me alone!’</p>
      
      <p class="indent">He turned away from her, looking out into the night. <em>Why can’t I mourn?</em> he wondered. He felt that every fiber of his being craved this release, but it would be denied him forever.
      </p>
      
      <p class="indent">Jessica had never heard such distress in her son’s voice. She wanted to reach out to him, hold him, comfort him, help him
         – but she sensed there was nothing she could do. He had to solve this problem by himself.
      </p>
      
      <p class="indent">The glowing tab of the Fremkit manual between them on the tent floor caught her eye. She lifted it, glanced at the flyleaf,
         reading: ‘Manual of “The Friendly Desert,” the place full of life. Here are the ayat and burhan of Life. Believe, and al-Lat
         shall never burn you.’
      </p>
      
      <p class="indent"><em>It reads like the Azhar Book,</em> she thought, recalling her studies of the Great Secrets. <em>Has a Manipulator of Religions been on Arrakis?</em></p>
      
      <p class="indent">Paul lifted the paracompass from the pack, returned it, said: ‘Think of all these special-application Fremen machines. They
         show unrivaled sophistication. Admit it, the culture that made these things betrays depths no one suspected.’
      </p>
      
      <p class="indent">Hesitating, still worried by the harshness in his voice, Jessica returned to the book, studied an illustrated constellation
         from the Arrakeen sky: ‘Muad’Dib: The Mouse,’ and noted that the tail pointed north.
      </p>
      
      <p class="indent">Paul stared into the tent’s darkness at the dimly discerned movements of his mother revealed by the manual’s glowtab. <em>Now is the time to carry out my father ‘s wish,</em> he thought. <em>I must give her his message now while she has time for grief. Grief would inconvenience us later.</em> And he found himself shocked by precise logic.
      </p>
      
      <p class="indent">‘Mother,’ he said.</p>
      
      <p class="indent">‘Yes?’</p>
      
      <p class="indent"><a id="page216"/>She heard the change in his voice, felt coldness in her entrails at the sound. Never had she heard such harsh control.
      </p>
      
      <p class="indent">‘My father is dead,’ he said.</p>
      
      <p class="indent">She searching within herself for the coupling of fact and fact and fact – the Bene Gesserit way of assessing data – and it
         came to her: the sensation of terrifying loss. Jessica nodded, unable to speak.
      </p>
      
      <p class="indent">‘My father charged me once,’ Paul said, ‘to give you a message if anything happened to him. He feared you might believe he
         distrusted you.’
      </p>
      
      <p class="indent"><em>That useless suspicion,</em> she thought.
      </p>
      
      <p class="indent">‘He wanted you to know he never suspected you,’ Paul said, and explained the deception, adding: ‘He wanted you to know he
         always trusted you completely, always loved you and cherished you. He said he would sooner have mistrusted himself and he
         had but one regret – that he never made you his Duchess.’
      </p>
      
      <p class="indent">She brushed the tears coursing down her cheeks, thought: <em>What a stupid waste of the body’s water!</em> But she knew this thought for what it was – the attempt to retreat from grief into anger. <em>Leto, my Leto,</em> she thought. <em>What terrible things we do to those we love!</em> With a violent motion, she extinguished the little manual’s glowtab.
      </p>
      
      <p class="indent">Sobs shook her.</p>
      
      <p class="indent">Paul heard his mother’s grief and felt the emptiness within himself. <em>I have no grief,</em> he thought. <em>Why? Why?</em> He felt the inability to grieve as a terrible flaw.
      </p>
      
      <p class="indent"><em>A time to get and a time to lose,’</em> Jessica thought, quoting to herself from the O.C. Bible. <em>‘A time to keep and a time to cast away; a time for love and a time to hate; a time of war and a time of peace.’</em></p>
      
      <p class="indent">Paul’s mind had gone on in its chilling precision. He saw the avenues ahead of them on this hostile planet. Without even the
         safety valve of dreaming, he focused his prescient awareness, seeing it as a computation of most probable futures, but with
         something more, an edge of mystery – as though his mind dipped into some timeless stratum and sampled the winds of the future.
      </p>
      
      <p class="indent">Abruptly, as though he had found a necessary key, Paul’s <a id="page217"/>mind climbed another notch in awareness. He felt himself clinging to this new level, clutching at a precarious hold and peering
         about. It was as though he existed within a globe with avenues radiating away in all directions … yet this only approximated
         the sensation.
      </p>
      
      <p class="indent">He remembered once seeing a gauze kerchief blowing in the wind and now he sensed the future as though it twisted across some
         surface as undulant and impermanent as that of the windblown kerchief.
      </p>
      
      <p class="indent">He saw people.</p>
      
      <p class="indent">He felt the heat and cold of uncounted probabilities.</p>
      
      <p class="indent">He knew names and places, experienced emotions without number, reviewed data of innumerable unexplored crannies. There was
         time to probe and test and taste, but no time to shape.
      </p>
      
      <p class="indent">The thing was a spectrum of possibilities from the most remote past to the most remote future – from the most probable to
         the most improbable. He saw his own death in countless ways. He saw new planets, new cultures.
      </p>
      
      <p class="indent">People.</p>
      
      <p class="indent">People.</p>
      
      <p class="indent">He saw them in such swarms they could not be listed, yet his mind catalogued them.</p>
      
      <p class="indent">Even the Guildsmen.</p>
      
      <p class="indent">And he thought: <em>The Guild – there’d be a way for us, my strangeness accepted as a familiar thing of high value, always with an assured supply
            of the now-necessary spice.</em></p>
      
      <p class="indent">But the idea of living out his life in the mind-groping-ahead-through-possible-futures that guided hurtling spaceships appalled
         him. It <em>was</em> a way, though. And in meeting the <em>possible future</em> that contained Guildsmen he recognized his own strangeness.
      </p>
      
      <p class="indent"><em>I have another kind of sight. I see another kind of terrain: the available paths.</em></p>
      
      <p class="indent">The awareness conveyed both reassurance and alarm – so many places on that other kind of terrain dipped or turned out of his
         sight.
      </p>
      
      <p class="indent"><a id="page218"/>As swiftly as it had come, the sensation slipped away from him, and he realized the entire experience had taken the space
         of a heartbeat.
      </p>
      
      <p class="indent">Yet, his own personal awareness had been turned over, illuminated in a terrifying way. He stared around him.</p>
      
      <p class="indent">Night still covered the stilltent within its rock-enclosed hideaway. His mother’s grief could still be heard.</p>
      
      <p class="indent">His own lack of grief could still be felt … that hollow place somewhere separated from his mind, which went on in its steady
         pace – dealing with data, evaluating, computing, submitting answers in something like the Mentat way.
      </p>
      
      <p class="indent">And now he saw that he had a wealth of data few such minds ever before had encompassed. But this made the empty place within
         him no easier to bear. He felt that something must shatter. It was as though a clockwork control for a bomb had been set to
         ticking within him. It went on about its business no matter what he wanted. It recorded minuscule shadings of difference around
         him – a slight change in moisture, a fractional fall in temperature, the progress of an insect across their stilltent roof,
         the solemn approach of dawn in the starlight patch of sky he could see out the tent’s transparent end.
      </p>
      
      <p class="indent">The emptiness was unbearable. Knowing how the clockwork had been set in motion made no difference. He could look to his own
         past and see the start of it – the training, the sharpening of talents, the refined pressures of sophisticated disciplines,
         even exposure to the O.C. Bible at a critical moment … and, lastly, the heavy intake of spice. And he could look ahead – the
         most terrifying direction – to see where it all pointed.
      </p>
      
      <p class="indent"><em>‘I’m a monster!</em> he thought. <em>A freak!</em></p>
      
      <p class="indent">‘No,’ he said. Then: ‘No. No! NO!’</p>
      
      <p class="indent">He found that he was pounding the tent floor with his fists. (The implacable part of him recorded this as an interesting emotional
         datum and fed it into computation.)
      </p>
      
      <p class="indent">‘Paul!’</p>
      
      <p class="indent">His mother was beside him, holding his hands, her face a gray blob peering at him. ‘Paul, what’s wrong?’</p>
      
      <p class="indent">‘You!’ he said.</p>
      
      <p class="indent">‘I’m here, Paul,’ she said. ‘It’s all right.’</p>
      
      <p class="indent"><a id="page219"/>‘What have you done to me?’ he demanded.
      </p>
      
      <p class="indent">In a burst of clarity, she sensed some of the roots in the question, said: ‘I gave birth to you.’</p>
      
      <p class="indent">It was, from instinct as much as her own subtle knowledge, the precisely correct answer to calm him. He felt her hands holding
         him, focused on the dim outline of her face. (Certain gene traces in her facial structure were noted in the new way by his
         onflowing mind, the clues added to other data, and a final-summation answer put forward.)
      </p>
      
      <p class="indent">‘Let go of me,’ he said.</p>
      
      <p class="indent">She heard the iron in his voice, obeyed. ‘Do you want to tell me what’s wrong, Paul?’</p>
      
      <p class="indent">‘Did you know what you were doing when you trained me?’ he asked.</p>
      
      <p class="indent"><em>There’s no more childhood in his voice,</em> she thought. And she said: ‘I hoped the thing any parent hopes – that you’d be … superior, different.’
      </p>
      
      <p class="indent">‘Different?’</p>
      
      <p class="indent">She heard the bitterness in his tone, said: ‘Paul, I—’</p>
      
      <p class="indent">‘You didn’t want a son!’ he said. ‘You wanted a Kwisatz Haderach! You wanted a male Bene Gesserit!’</p>
      
      <p class="indent">She recoiled from his bitterness. ‘But Paul …’</p>
      
      <p class="indent">‘Did you ever consult my father in this?’</p>
      
      <p class="indent">She spoke gently out of the freshness of her grief: ‘Whatever you are, Paul, the heredity is as much your father as me.’</p>
      
      <p class="indent">‘But not the training,’ he said. ‘Not the things that … awakened … the sleeper.’</p>
      
      <p class="indent">‘Sleeper?’</p>
      
      <p class="indent">‘It’s here.’ He put a hand on his head and then to his breast. ‘In me. It goes on and on and on and on and—’</p>
      
      <p class="indent">‘Paul!’</p>
      
      <p class="indent">She had heard the hysteria edging his voice.</p>
      
      <p class="indent">‘Listen to me,’ he said. ‘You wanted the Reverend Mother to hear about my dreams? You listen in her place now. I’ve just had
         a <em>waking</em> dream. Do you know why?’
      </p>
      
      <p class="indent">‘You must calm yourself,’ she said. ‘If there’s—’</p>
      
      <p class="indent">‘The spice,’ he said. ‘It’s in everything here – the air, the soil, <a id="page220"/>the food. The <em>geriatric</em> spice. It’s like the Truthsayer drug. It’s a poison!’
      </p>
      
      <p class="indent">She stiffened.</p>
      
      <p class="indent">His voice lowered and he repeated: ‘A poison – so subtle, so insidious … so irreversible. It won’t even kill you unless you
         stop taking it. We can’t leave Arrakis unless we take part of Arrakis with us.’
      </p>
      
      <p class="indent">The terrifying <em>presence</em> of his voice brooked no dispute.
      </p>
      
      <p class="indent">‘You and the spice,’ Paul said. ‘The spice changes anyone who gets this much of it, but thanks to <em>you,</em> I could bring the change to consciousness. I don’t get to leave it in the unconscious where its disturbance can be blanked
         out. I can <em>see</em> it.’
      </p>
      
      <p class="indent">‘Paul, you—’</p>
      
      <p class="indent">‘I <em>see</em> it!’ he repeated.
      </p>
      
      <p class="indent">She heard madness in his voice, didn’t know what to do.</p>
      
      <p class="indent">But he spoke again, and she heard the iron control return to him: ‘We’re trapped here.’</p>
      
      <p class="indent"><em>We’re trapped here,</em> she agreed.
      </p>
      
      <p class="indent">And she accepted the truth of his words. No pressure of the Bene Gesserit, no trickery or artifice could pry them completely
         free from Arrakis: the spice was addictive. Her body had known the fact long before her mind awakened to it.
      </p>
      
      <p class="indent"><em>So here we live out our lives,</em> she thought, <em>on this hell planet. The place is prepared for us, if we can evade the Harkonnens. And there’s no doubt of my course: a broodmare
            preserving an important bloodline for the Bene Gesserit Plan.</em></p>
      
      <p class="indent">‘I must tell you about my waking dream,’ Paul said. (Now there was fury in his voice.) ‘To be sure you accept what I say,
         I’ll tell you first I know you’ll bear a daughter, my sister, here on Arrakis.’
      </p>
      
      <p class="indent">Jessica placed her hands against the tent floor, pressed back against the curving fabric wall to still a pang of fear. She
         knew her pregnancy could not show yet. Only her own Bene Gesserit training had allowed her to read the first faint signals
         of her body, to know of the embryo only a few weeks old.
      </p>
      
      <p class="indent">‘Only to serve,’ Jessica whispered, clinging to the Bene Gesserit motto. ‘We exist only to serve.’</p>
      
      <p class="indent"><a id="page221"/>‘We’ll find a home among the Fremen,’ Paul said, ‘where your Missionaria Protectiva has bought us a bolt hole.’
      </p>
      
      <p class="indent"><em>They’ve prepared a way for us in the desert,</em> Jessica told herself. <em>But how can he know of the Missionaria Protectiva?</em> She found it increasingly difficult to subdue her terror at the overpowering strangeness in Paul.
      </p>
      
      <p class="indent">He studied the dark shadow of her, seeing her fear and every reaction with his new awareness as though she were outlined in
         blinding light. A beginning of compassion for her crept over him.
      </p>
      
      <p class="indent">‘The things that can happen here, I cannot begin to tell you,’ he said. ‘I cannot even begin to tell myself, although I’ve
         seen them. This <em>sense</em> of the future – I seem to have no control over it. The thing just happens. The immediate future – say, a year – I can see
         some of that … a <em>road</em> as broad as our Central Avenue on Caladan. Some places I don’t see … shadowed places … as though it went behind a hill’ (and
         again he thought of the surface of a blowing kerchief) ‘… and there are branchings …’
      </p>
      
      <p class="indent">He fell silent as memory of that <em>seeing</em> filled him. No prescient dream, no experience of his life had quite prepared him for the totality with which the veil had
         been ripped away to reveal naked time.
      </p>
      
      <p class="indent">Recalling the experience, he recognized his own terrible purpose – the pressure of his life spreading outward like an expanding
         bubble … time retreating before it …
      </p>
      
      <p class="indent">Jessica found the tent’s glowtab control, activated it.</p>
      
      <p class="indent">Dim green light drove back the shadows, easing her fear. She looked at Paul’s face, his eyes – the inward stare. And she knew
         where she had seen such a look before: pictured in records of disasters – on the faces of children who experienced starvation
         or terrible injury. The eyes were like pits, mouth a straight line, cheeks indrawn.
      </p>
      
      <p class="indent"><em>It’s the look of terrible awareness,</em> she thought, <em>of someone forced to the knowledge of his own mortality.</em></p>
      
      <p class="indent">He was, indeed, no longer a child.</p>
      
      <p class="indent">The underlying import of his words began to take over in her <a id="page222"/>mind, pushing all else aside. Paul could see ahead, a way of escape for them.
      </p>
      
      <p class="indent">‘There’s a way to evade the Harkonnens,’ she said.</p>
      
      <p class="indent">‘The Harkonnens!’ he sneered. ‘Put those twisted humans out of your mind.’ He stared at his mother, studying the lines of
         her face in the light of the glowtab. The lines betrayed her.
      </p>
      
      <p class="indent">She said: ‘You shouldn’t refer to people as humans without—’</p>
      
      <p class="indent">‘Don’t be so sure you know where to draw the line,’ he said. ‘We carry our past with us. And, mother mine, there’s a thing
         you don’t know and should – <em>we</em> are Harkonnens.’
      </p>
      
      <p class="indent">Her mind did a terrifying thing: it blanked out as though it needed to shut off all sensation. But Paul’s voice went on at
         that implacable pace, dragging her with it.
      </p>
      
      <p class="indent">‘When next you find a mirror, study your face – study mine now. The traces are there if you don’t blind yourself. Look at
         my hands, the set of my bones. And if none of this convinces you, then take my word for it. I’ve walked the future, I’ve looked
         at a record, I’ve seen a place, I have all the data. We’re Harkonnens.’
      </p>
      
      <p class="indent">‘A … renegade branch of the family,’ she said. ‘That’s it, isn’t it? Some Harkonnen cousin who—’</p>
      
      <p class="indent">‘You’re the Baron’s own daughter,’ he said, and watched the way she pressed her hands to her mouth. ‘The Baron sampled many
         pleasures in his youth, and once permitted himself to be seduced. But it was for the genetic purposes of the Bene Gesserit,
         by one of <em>you.’</em></p>
      
      <p class="indent">The way he said <em>you</em> struck her like a slap. But it set her mind to working and she could not deny his words. So many blank ends of meaning in
         her past reached out now and linked. The daughter the Bene Gesserit wanted – it wasn’t to end the old Atreides-Harkonnen feud,
         but to fix some genetic factor in their lines. <em>What?</em> She groped for an answer.
      </p>
      
      <p class="indent">As though he saw inside her mind, Paul said: ‘They thought they were reaching for me. But I’m not what they expected, and
         I’ve arrived before my time. And <em>they</em> don’t know it.’
      </p>
      
      <p class="indent">Jessica pressed her hands to her mouth.</p>
      
      <p class="indent"><em>Great Mother! He’s the Kwisatz Haderach!</em></p>
      
      <p class="indent">She felt exposed and naked before him, realizing then that he <a id="page223"/>saw her with eyes from which little could be hidden. And <em>that,</em> she knew, was the basis of her fear.
      </p>
      
      <p class="indent">‘You’re thinking I’m the Kwisatz Haderach,’ he said. ‘Put that out of your mind. I’m something unexpected.’</p>
      
      <p class="indent"><em>I must get word out to one of the schools,</em> she thought. <em>The mating index may show what has happened.</em></p>
      
      <p class="indent">‘They won’t learn about me until it’s too late,’ he said.</p>
      
      <p class="indent">She sought to divert him, lowered her hands and said: ‘We’ll find a place among the Fremen?’</p>
      
      <p class="indent">‘The Fremen have a saying they credit to Shai-hulud, Old Father Eternity,’ he said. ‘They say: “Be prepared to appreciate
         what you meet.”’
      </p>
      
      <p class="indent">And he thought: <em>Yes, mother mine – among the Fremen. You’ll acquire the blue eyes and a callus beside your lovely nose from the filter tube
            to your stillsuit … and you’ll bear my sister: St Alia of the Knife.</em></p>
      
      <p class="indent">‘If you’re not the Kwisatz Haderach,’Jessica said, ‘what—’</p>
      
      <p class="indent">‘You couldn’t possibly know,’ he said. ‘You won’t believe it until you see it.’</p>
      
      <p class="indent">And he thought: <em>I’m a seed.</em></p>
      
      <p class="indent">He suddenly saw how fertile was the ground into which he had fallen, and with this realization, the terrible purpose filled
         him, creeping through the empty place within, threatening to choke him with grief.
      </p>
      
      <p class="indent">He had seen two main branchings along the way ahead – in one he confronted an evil old Baron and said: ‘Hello, Grandfather.’
         The thought of that path and what lay along it sickened him.
      </p>
      
      <p class="indent">The other path held long patches of gray obscurity except for peaks of violence. He had seen a warrior religion there, a fire
         spreading across the universe with the Atreides green and black banner waving at the head of fanatic legions drunk on spice
         liquor. Gurney Halleck and a few others of his father’s men – a pitiful few – were among them, all marked by the hawk symbol
         from the shrine of his father’s skull.
      </p>
      
      <p class="indent">‘I can’t go that way,’ he muttered. ‘That’s what the old witches of your schools really want.’</p>
      
      <p class="indent">‘I don’t understand you, Paul,’ his mother said.</p>
      
      <p class="indent">He remained silent, thinking like the seed he was, thinking <a id="page224"/>with the race consciousness he had first experienced as terrible purpose. He found that he no longer could hate the Bene Gesserit
         or the Emperor or even the Harkonnens. They were all caught up in the need of their race to renew its scattered inheritance,
         to cross and mingle and infuse their bloodlines in a great new pooling of genes. And the race knew only one sure way for this
         – the ancient way, the tried and certain way that rolled over everything in its path: jihad.
      </p>
      
      <p class="indent"><em>Surely I cannot choose that way,</em> he thought.
      </p>
      
      <p class="indent">But he saw again in his mind’s eye the shrine of his father’s skull and the violence with the green and black banner waving
         in its midst.
      </p>
      
      <p class="indent">Jessica cleared her throat, worried by his silence. ‘Then … the Fremen will give us sanctuary?’</p>
      
      <p class="indent">He looked up, staring across the green-lighted tent at the inbred, patrician lines of her face. ‘Yes,’ he said. ‘That’s one
         of the ways.’ He nodded. ‘Yes. They’ll call me … Muad’Dib, “The One Who Points the Way.” Yes that’s what they’ll call me.’
      </p>
      
      <p class="indent">And he closed his eyes, thinking: <em>Now, my father, I can mourn you.</em> And he felt the tears coursing down his cheeks.
      </p>
   </body>
</html>
`

const parser = new DOMParser();
const htmlDoc = parser.parseFromString(xmlData.replaceAll(/<\?xml (.*)\?>/g, ""), 'text/xml');
const sentences = Array.from(htmlDoc.body.children);

openDuneEpub();

function App() {
  const savedSentenceIndex = +(localStorage.getItem("sentenceIndex") || 0);
  const [sentenceIndex, setSentenceIndex] = useState(savedSentenceIndex);

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

  useEffect(() => {
    localStorage.setItem("sentenceIndex", sentenceIndex.toString());
  }, [sentenceIndex]);

  const calculateDelay = (word: string) => {
    const basePause = 150;
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

  const getWordsFromElement = (el: Element) => {
    if (el.nodeName === "p") return formatParagraph(el.innerHTML);
    if (el.nodeName === "blockquote") {
      const paragraphs = Array.from(el.children).map((child: Element) => formatParagraph(child.innerHTML));
      return paragraphs.join("<br> ");
    }

    return el.innerHTML;
  };

  const formatParagraph = (paragraph: string) => paragraph
    .replaceAll("…", ". . .")
    .replaceAll(/<em xmlns=["'].*["']>/g, "<em>")
    .replaceAll(/<a xmlns=["'].*["'] id=["'].*["']><\/a>/g, "");

  let delay = 0;
  let italicMode = false;
  const words = getWordsFromElement(sentences[sentenceIndex]).split(" ").filter(x => x !== "");

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-[url('/dune-wallpaper.jpg')] bg-center text-center text-white font-dm-serif p-8 text-2xl leading-normal sm:text-5xl sm:leading-tight">
      <div className="flex content-center h-full">
        <div className={`max-w-[800px] m-auto select-none node-${sentences[sentenceIndex].nodeName}`}>
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
