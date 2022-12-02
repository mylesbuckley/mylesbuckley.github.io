---
title: "Incremental Chinese (App)"
categories:
excerpt: "Download it now, and use it to effortlessly learn Chinese by watching your favorite movies!"
header:
  teaser: "/assets/images/incrementalchinesethumbnail.png"
  videoSelfHosted: "/assets/images/ContinualSwitchingSmallSampleClip.mp4" 
---

The way we learn second languages sucks, but I think I've hit on a revolutionary way forward!

I've wanted to learn Chinese for a long time now, but it's a slog! You have to do years (if being learnt in your spare time) of memorization to learn enough of the common words and sentences to start engaging in anything other than *more* flashcards (🤮).

I wanted learning Chinese to be more fun, so I could learn it as a way of relaxing and not as a chore!

Paradoxically, there was plenty of reward from my learning Chinese when I got to experience my comprehension of Chinese working in a context which wasn't an app or flashcard. For example, when I briefly understood the conversation in a group of people who speaking Chinese, or some dialogue in a [Chinese TV show](https://en.wikipedia.org/wiki/Reset_(Chinese_TV_series)). The problem is.. this is a *delayed* and *unreliable* source of reward, so it doesn't make the process of learning feel any less of a chore!

But it did get me thinking.. what if I could find a way of utilizing this kind of rewarding exposure to spoken Chinese, where I understood what was being said and it was also interesting because unlike flashcards or an app it corresponded to a context more meaningful than "correctly remembered". 

My initial thought was to watch progressively more advanced TV shows, and increase my comprehension "naturally". This would mean starting at TV shows for babies and working my way up. Unfortunately, TV shows for babies are still actually quite hard and also not very interesting! I would be able to understand about 20-30% of what was being said, but it never made any sense because the sentences I did understand were interspersed with sentences that meant nothing to me. So the context of the sentences I did understand was lost, so I was actually at level of reward *worse* than the "you got it right" the flash cards and apps were able to provide.

# TL;DR: The Idea

I cant learn Chinese by just watching Movies/TV shows in Chinese, I wouldn't understand what was being said and it would just be another painful slog. But what if I could watch a TV show or movie and have the characters talk in English most of the time, and talk in Chinese when I would understand what they would say? I would be reinforcing my understanding of the Chinese I did know and it would also present a natural way to learn new Chinese words, grammars and turns of phrase. For example, if I was watching a movie about submarines, the Chinese word for submarine "潜艇", "Qiántǐng" would be a good candidate for a word to learn.

It would be very rewarding because I would have those moments where I comprehend what people were saying in Chinese, in a context that was interesting, and the rest of the time I would just be watching the same movie or TV show that I wanted to watch anyway!

So, I wrote the software! It's called ["Incremental Chinese"](https://github.com/mylesbuckley/incremental-chinese), because the movies and TV shows you watch will _incrementally_ contain more and more Chinese, until they are 100% Chinese and you are fluent!

# I'll Notice The Switching!

See for yourself: here's an example using ["Castle In The Sky"](https://en.wikipedia.org/wiki/Castle_in_the_Sky) where the software switches between English and Chinese vocals as fast as it can! While this is not a particularly meaningful use case for learning, it does stress test the ability of the software to create a 'pleasant to watch' clip.

<figure>
  <video controls class="page__hero-image">
    <source src="/assets/images/ContinualSwitchingSmallSampleClip.mp4" 
            type="video/mp4">
  </video>
</figure>

It's cliche among developers, but there *are* fixes in the works to improve the quality of this significantly! This will definitely be needed for genuine "using this for fun" users, and not just the "hey that's interesting" crowd.

# What Would a First Time User See?

Here's an excerpt of what you would see if you were just starting your journey of learning Chinese (i.e. you know nothing!) with ['Castle in the Sky'](https://en.wikipedia.org/wiki/Castle_in_the_Sky) and chose to learn the words: 
 - 巴鲁 "Bālǔ" (main character "Pazu")
 - 希达 "Xīdá" (main character "Sheeta")
 - 拉普达 "Lāpǔdá" (Laputa, *The* 'Castle in the Sky')
 - 等一下 "Děng yīxià" ("wait a moment")
 - 好 "Hǎo" (used in this context as "okay"/"yes")
 - 我也要   "Wǒ yě yào" ("I also want")

<figure>
  <video controls class="page__hero-image">
    <source src="/assets/images/FirstLessonForSomeoneWhoDoesntKnowChinese.mp4" 
            type="video/mp4">
  </video>
</figure>

# What's It Like To Use The Software?

You run the program from the command line, and once it's finished constructing the building blocks it will prompt you to check whether you want to add some words which are very common in the movie but are not in your set of 'Known Words'. Here I'm entering answers suitable for a complete newbie who knows nothing (so just punctuation).

<figure>
	<a href="/assets/images/IncrementalChineseUI/2_AddWordsYouAlreadyUnderstand.png">
    <img src="/assets/images/IncrementalChineseUI/2_AddWordsYouAlreadyUnderstand.png">
  </a>
</figure>
Here I selected these "words" that a complete novice would already know (PU stands for punctuation).
 - 0: 。-PU
 - 35: ...-PU
 - 82: （-PU
 - 83: ）-PU
 - 475: ，-PU


You can press enter at any time to see a new round of candidate words based on a more up to date 'Known Words' set which incorporates the latest selection of words.

In this case, the latest selection of words didn't reveal any good new results, so we type 'done' and press enter to go to the next phase.

<figure>
	<a href="/assets/images/IncrementalChineseUI/3_SelectDone.png">
    <img src="/assets/images/IncrementalChineseUI/3_SelectDone.png">
  </a>
</figure>

In this next phase, you select words you *don't* currently understand but that you would like to learn through watching this movie (using the software).

<figure>
	<a href="/assets/images/IncrementalChineseUI/4_AddWordsYouWouldLikeToLearn.png">
    <img src="/assets/images/IncrementalChineseUI/4_AddWordsYouWouldLikeToLearn.png">
  </a>
</figure>

You might be a bit confused by what these rows mean, e.g.:

3 -&gt;   6  if  1    which are:好-VA-3  https://translate.google.com/?sl=zh-CN&tl=en&text=好。

Let's break down what you're seeing here, it's:

A -&gt; B if C which are: D-E-F G
 - A: The number you will enter into the terminal to select this group of words
 - B: The number of words you will newly hear if you learn this group of words
 - C: The number of words in the group of words you are considering to learn
 - D: The 'Token' (this just means "The Chinese characters which are used to write the word")
 - E: The 'Tag' for the 'Token'. This indicates how the token is being used. 
   - It helps the program differentiate different uses of the same token.
   - For example, consider the English word 'bark', it can be used multiple ways "a dog can bark" and "a tree has bark". The 'Tag' means the software will never take your understanding of "a dog can bark" and mistakenly assume you know what 'bark' is with regard to trees!
 - F: The number of times the word (word='Token'+'Tag') will be heard if you learn this group of words.
 - G: The shortest example sentence from the movie which uses all the words in the group of new words.


As you can see by the list of numbers entered separated by a comma ("0,1,10,2,3"), in this phase we select:
 - 巴鲁 "Bālǔ" (main character "Pazu")
 - 希达 "Xīdá" (main character "Sheeta")
 - 拉普达 "Lāpǔdá" (Laputa, *The* 'Castle in the Sky')
 - 等一下 "Děng yīxià" ("wait a moment")
 - 好 "Hǎo" (used in this context as "okay"/"yes")

We then press enter to see the an updated list of suggestions:

<figure>
	<a href="/assets/images/IncrementalChineseUI/5_AddingWordsYouWouldLikeToLearnSecondRound.png">
    <img src="/assets/images/IncrementalChineseUI/5_AddingWordsYouWouldLikeToLearnSecondRound.png">
  </a>
</figure>

In this phase we then just select one word group to learn:
 - 好美哦。"Hǎoměi ó" ("it's so pretty")

I then press enter to see a refreshed view of the options. I decided to call it at this point because it is meant to me a "first lesson" after all.

I simply enter the word "done", followed by pressing the enter key to end the new word selection phase.

<figure>
	<a href="/assets/images/IncrementalChineseUI/6_SelectingDone.png">
    <img src="/assets/images/IncrementalChineseUI/6_SelectingDone.png">
  </a>
</figure>

The software will now generate the output movie in about a minute. This is possible because it generated all of the necessary 'building blocks' for the final movie beforehand, which was quite computationally intensive *and* lengthy (about 3 hours!).

Congratulations! You can now watch the movie ("FinalProduct.mp4") and hopefully learn something while you do!🎉🎉

# Can I Use This To Learn Language X?
Yes! ...If X=Chinese and your native language is English, otherwise *not yet*! This will likely become a real possibility if/when I change the NLP engine from being a local one to something more like Googles NLP API.

# What's Happening Internally
Roughly speaking, it uses the subtitles for a movie to determine what sentences (well, whatever you call the length of speech that fits in a subtitle) you will understand. It then switches to the Chinese audio for the movie when it gets to a subtitle you would understand, and then afterwards switches back, easy! Or so you would think! (😭)

It turns out there's a lot more to making this into a *quality* experience you would both *want* to participate in and which will *optimally* teach you Chinese. Spoiler alert, the software isn't there yet, but it has come a long way!

Read on for the gorey details about the technical challenges (this is the fun part)..


# Interesting Technical Challenges

These are in order of "most interesting", not chronological.

## Interactively Determining Words to Learn
This was a tricky problem, let me set the scene:
We want to be able to switch between Chinese and English, but we can't always do that at the sentence/subtitle level because there is not a clean break to switch from one to the other. 
( | = talking and . = not talking)
Chinese Vocal Track (1)
English Vocal Track (2)
``1:.....|||||||..|||||..||....|||||.||||||.||....``
``2:....|||||..||||||.||.......||||..||||.|||.....``

As you can see, even though there are tons of breaks in the original audio of each, there are far less common breaks.
( | = talking in at least one track and . = not talking in both tracks)

Chinese Vocal Track (1)
English Vocal Track (2)
Chi&Eng Vocal Track (3)
``1:.....|||||||..|||||..||....|||||.||||||.||....``
``2:....|||||..||||||.||.......||||..||||.|||.....``
``3:....||||||||||||||||.||....|||||.|||||||||....``

This matters for our problem, because we can no longer think of understanding an entire single subtitle/sentence as the smallest unit, instead the smallest unit is actually a "talking-period". So, if you want to show any of the Chinese in a talking-period, the user must be able to understand all of the Chinese in that talking-period.

Back to our problem of helping the user choose new words to learn for a specific movie. The first approach is to simply go through all the sentences in the movie and find all the words that the user does not understand. Then, for each of these words determine how many times the user would hear the new word in this movie if they decided to learn it. The user could then choose from the words that which would be heard to most, which words they would like to learn before watching this movie.

This looks like a good idea, but it has a subtle flaw. Often two words will get very low scores by themselves, but will get a good score when combine. For example "That bastard Billy", the two words "bastard" and "Billy" might be said many times together because "Billy" is often refereed to as "That bastard Billy", but neither "Billy" nor "bastard" are said very often on their own during the movie, and so they wouldn't really be on your radar. In 'Castle In The Sky' there were many of these, though they often had more coincidental reasons for being codependent. For example 穆斯卡 (mù sī kǎ) "Muska" the main villain and 快 (Kuài) "quick" both scored fairly low by themselves but scored quite well together. This was because the General just happened to very often be hasty and impulsive when talking about or to Muska (hence the 快 "quick"), this was by the creators of the film to bring into contrast Muska's cold and calculating persona. 

So, we've determined that simply choosing words one at a time is not optimal, so what shall we do?

The first thought is simply to do the same thing for two words as you did for one: for each pair of words, go through and find the number of times they would be heard if they were both enabled. 
For one word the cost is: (num unknown words) * (number of sentences)
For two words the cost is: (num unknown words)^2 * (number of sentences)
For three words the cost is: (num unknown words)^3 * (number of sentences) 

This is no good and is slow *even* for two words, what if there is a case where four words can only be learnt together, we're doomed!

Lets be even crazier, what if we wanted to test all possible combinations of all unknown words, it would be literally impossible! ..using *this* method, that is.

We can achieve incredible performance gains if we think about the problem a little more mathematically.

Let's consider a given set of three words you do not yet know, chances are there is not a talking-period which contains all three, so you go through all the talking periods and yet the whole computation doesn't generate a result.

Now let's consider a combination of three words which does complete one or more talking periods, by definition, that talking period is a either the exact set of words not known in that talking period, or a superset of them.

Uno reverse!

<figure>
	<a href="/assets/images/del--FJvAm6FosY-unsplash.jpg">
    <img src="/assets/images/del--FJvAm6FosY-unsplash.jpg">
  </a>
</figure>

We can just go the other direction, starting with each of the talking periods we make a set of the unknown words in that talking period. Then for each of these sets you can go through and determine how it scores on the entire movie and thus whether you would want to learn the words in that word set!

When this is then combined with caching the results of computations that would otherwise be repeated, it gives all the word-sets you could possibly learn (and scores them in the various ways), *in less than a millisecond!* 

## Getting Better NLP Results

In order to get the unique words in a Chinese sentence, I need to run the sentences through an NLP engine (a neural net, NN) to get information about it. The problem is, if I do the subtitles one at a time I get somewhat poor results. The neural networks (in part) use the contents of the input sentence to determine the results. If a word that was not in the NN's training set occurs in the input, it has to be able to determine what it is. Thus, it helps the NN to see the largest possible chunk of text possible when making a prediction. This way it can see more uses of the unknown word and make a more accurate guess.

The problem is, the text I want to analyze comes in sentence form and giving these sentences one by one to the NN makes life easier code-wise, but gives poor results. What I want to be able to do is combine all the sentences into one super long string and then feed that string to the NN and then take the output and associate it with each input sentence. Unfortunately, running the neural net to process such a long string of characters at once is not possible on my GPU as it overwhelms the 12Gb of memory.

The compromise is to send the *longest possible* string of characters to the GPU. Let's take a moment to visualize the process.

We start with essentially a file full of consecutive sentences (the subtitles file).

``|aaaaa._____________________|``

``|bbbbbbb.___________________|``

``|ccc._______________________|``

``|dddddd.____________________|``

``|eeeee._____________________|``

``|ffffffff.__________________|``

``|gggg.______________________|``

``|hhhhhh.____________________|``

``|iiii.______________________|``

``|jjjjjjjjj._________________|``

``|kk.________________________|``

``|llllll.____________________|``

``|m._________________________|``

``|nnnn.______________________|``

This is the limit of how long a sentence can be in the GPU:

``|<-_______________________->|``

If we just naively start building long sentences to fit into the GPU we will run into an issue as we get these four sentences:

``|<-_______________________->|``

``|aaaaa.bbbbbbb.ccc.dddddd.__|``

``|eeeee.ffffffff.gggg.hhhhhh.|``

``|iiii.jjjjjjjjj.kk.llllll.m.|``

``|nnnn.______________________|``

The first three are fine, but the fourth is just the same as if we had processed the sentence by itself, and the results will be poorer than they need to be. The solution is that instead of "folding" the input sentence into four pieces like we just did, we instead use a kind of "moving window" to make sure all of the inputs are as long as possible, and thus produce the best results. This is what that would look like:

``|<-_______________________->|``

``|aaaaa.bbbbbbb.ccc.dddddd.__|``

``|eeeee.ffffffff.gggg.hhhhhh.|``

``|iiii.jjjjjjjjj.kk.llllll.m.|``

``|jjjjjjjjj.kk.llllll.m.nnnn.|``

In the case of 'Castle In The Sky', this approach generated a total of six moving window sentences, each approximately 2048 characters long. Most importantly, it noticeably improved the NLP results and thus the user experience.

While this looks simple when written like this, it's actually quite tedious to make all these transitions:

sentences -&gt; moving window sentences
moving window sentences -&gt; NLP output for moving window sentences
NLP output for moving window sentences -&gt; NLP output for sentences
NLP output for sentences -&gt; Objects representing sentences and words

## Detecting When People Are Speaking
This was a strange problem, in that I had assumed going in that it should have already been solved. The solutions which advertised as "state of the art" or "99.9999% awesome" all failed rather spectacularly. I did however manage to find a DIY solution. I normalized the audio with ffmpeg-normalize, then I separated out the vocal track with spleeter and finally I ran that through WebRTC-VAD (VAD stands for voice activity detection). The result was a VAD which picked up on a lot basically all the speech but also would not accidentally signal speech was somewhere it was not.

# Less Sexy Problems
## Finding utilities to do the fundamental media operations of cutting and concatenating audio clips reliably. 
This required the use of sox for the concatenation of audio clips and ffmpeg for everything else.
For the overlaying of two audio tracks (e.g. English verbals on Chinese background audio) it looked like this:
```csharp
sh.RunCommandWithZsh
(
    $"ffmpeg" +
    $" -i {FirstInputAudioFilePath}" +
    $" -i {SecondInputAudioFilePath}" +
    $" -filter_complex" +
    $" amix=inputs=2:duration=longest" +
    $" {tempOutputAudioFilePath}"
);
```
For slicing of audio into chunks (e.g. Talking and Silence) it looked like this:
```csharp
sh.RunCommandWithZsh
(
    $"ffmpeg" +
    $" -i { InputAudioFilePath }" +
    $" -f { audioFormat }" +
    $" -ss { sub.StartTime*1.0 / 1000.0 }" +
    $" -to { sub.EndTime*1.0 / 1000.0 }" +
    $" -ar 44100" +
    $" {tempOutputFilePath}"
);
```
For the creation of transition clips (e.g. change from English to Chinese during a period of non-talking) it looked like this:
```csharp
sh.RunCommandWithZsh
(
    $"ffmpeg" +
    $" -i { clipA }" +
    $" -af \"afade=t=out:st=0:d={ durationClipA }\"" +
    $" {outputDirectory}/{i}_fadeout.flac"
);
sh.RunCommandWithZsh
(
    $"ffmpeg" +
    $" -i { clipB }" +
    $" -af \"afade=t=in:st=0:d={ durationClipB }\"" +
    $" {outputDirectory}/{i}_fadein.flac"
);
sh.RunCommandWithZsh
(
    $"ffmpeg" +
    $" -i {outputDirectory}/{i}_fadeout.flac" +
    $" -i {outputDirectory}/{i}_fadein.flac" +
    $" -filter_complex amix=inputs=2:duration=longest" +
    $" {outputDirectory}/{i}At50%Volume.flac"
);
//The Volume of both clips were halved in the overlay process, now double it!
sh.RunCommandWithZsh
(
    $"ffmpeg" +
    $" -i {outputDirectory}/{i}At50%Volume.flac" +
    $" -filter:a \"volume=6dB\"" +
    $" -ar 44100" +
    $" {outputDirectory}/{i}.flac"
);
```
For the final concatenation of all the audio files together into the audio for the movie it looked like this:
```csharp
sh.RunCommandWithZsh
(
    $"ulimit -s 65536;" +
    $"sox {string.Join(" ", audioFilesToConcatenate)}" +
    $" {StaticChecker.TempMixedMovieAudioFlac};"
);
```
This also required extending the limit of the length of the arguments to sox (ulimit -s \[newLimit\]), as there were so many files to concatenate.

## Changing between the two versions of the movie was noticeable because one of them was louder than the other.
The audio for both movies was extracted from the movies with ffmpeg and then normalized with the ffmpeg-normalize python package.
```csharp
sh.RunCommandWithZsh
(
    $"ffmpeg" +
    $" -i { InputMoviePath }" +
    $" -f flac" +
    $" -vn" +
    $" {InputOriginalAudioPath}"
);
sh.RunCommandWithZsh
(
    $"source venv/bin/activate;"+
    $"ffmpeg-normalize" +
    $" {InputOriginalAudioPath}" +
    $" -o" +
    $" {tempNormalizedWav}"
);
sh.RunCommandWithZsh
(
    $"ffmpeg" +
    $" -i {tempNormalizedWav}" + 
    $" {OutputFileLocationFlac}"
);
```

## Changing between the two versions of the movie was noticeable because the background music was different for each.
This was fixed by using spleeter to separate the vocals (i.e. people speaking) from the background (explosions, music, chewing sounds etc). Then the vocals for the english track were overlaid onto the background audio track for the Chinese. This eliminated this problem with the switching, although it did introduce an occasional distortion, which is why it was applied to the English track and not the Chinese track, as my brain deals much better with distortions to English than it does with distortions to Chinese.
```csharp
sh.RunCommandWithZsh
(
    $"source venv/bin/activate;" +
    $"spleeter separate" +
    $" -o {outputFolder}" +
    $" --offset {offset}" +
    $" --duration {duration}" +
    $" -p spleeter:2stems" +
    $" --codec wav" +
    $" {InputAudioFilePath}"
);
```

## The subtitles weren't synchronized with the movies they came with
This one (like spleeter) was a nice and easy one to fix as there was an available solution in ffs (ffsubsync).
```csharp
sh.RunCommandWithZsh
(
    $"source ./venv/bin/activate;" +
    $"ffs" +
    $" {InputAudioFilePath}" +
    $" -i {InputSubtitleFilePath}" +
    $" -o {OutputSubtitleFilePath}"
);
```

## The Subtitles Ran Too Long
This problem was that the subtitles tended to have "long tails", i.e. they lasted longer than the period of time the person was talking (this would help someone watching the movie have time to read them). The solution to this was to use my custom VAD (ffmpeg-normalize + spleeter + WebRTC-VAD) to "shrink-wrap" the subtitles down to only the period of time where the person was actually talking.

## Testing the Code
It's hard to test this code for correct output because the output isn't a number or something similarly simple, but an entire movie! A workaround I have for this is to log the hash of all the media files created at all the different stages. This enables me to differentiate a functional and nonfunctional change to the code. This is great, because the easy to write, hard to maintain, spaghetti-code way of programming something is rarely the same as the performant and easy to maintain way of programming the same thing. This means I can code safely on my first pass at a problem and then code cleanly on my second pass.

## Debugging is Slow
I had the problem of the different stages in my program taking a long time to run each time I ran the program from scratch. What I did to solve this problem was to keep the output of each stage in a file, so if I didn't want to debug that stage it's output could simply be loaded by the next stage which I could then debug. This meant my debug loop was essentially instant and not 2 hours or something crazy like that.

## Hashing is Slow
This became a problem when I wanted to re-run the code from scratch to debug something fairly far down the pipeline, but all the outputted media files from earlier in the pipeline will need to be hashed and their hashes logged before my code can be run! The solution was to simply save the hashes of the hashed files along with the file meta-data (when the file was last written to, how many bytes in the file, etc.). If the meta-data of the file changed then the hash would be recomputed, otherwise the saved version of the hash was used.

# What The Future Holds
## Forgetting Curves
Once the fundamental "mixed movie" making ability of this software is mature enough the next step will be to add the ability to track the users comprehension and exposure to Chinese words (and maybe other aspects of the language) over time. The clear winner for this as I currently understand it is to track each fundamental unit (currently these are just words), with a forgetting curve. This will help the software be more sure as to whether the user actually understands a given word. Forgetting curves are also different for each person and for each thing being remembered, so the code that tracks this will adapt to both with the primary objective always being the user experience.
## Voice Conversion
Currently, when the language changes the voice of the character changes too. This isn't really ideal as it would be better if the voice of the character sounded the same no matter which language they were speaking. There is currently one example of 'Voice Conversion' (VC) from Tencent which looks good enough that is would potentially be an improvement to use VC, all other examples are unfortunately not yet mature enough though. 
## Multiple Languages!
This will likely become a real possibility if/when I change NLP engine from being a local one to something more like Googles NLP API. This would then let you set any language as your source language and any language as your target. The most exciting possibility here to me is that you could potentially learn multiple languages while watching one movie. Simply put, many of your exposures to a language you are learning will be extremely redundant (as described by how they change the state of your forgetting curves in that language), and so, those exposures could instead be substituted with exposures to one or more other languages you wish to learn. The software would be able to utilize the forgetting curves and how you weigh the value of your learning of each language to optimize your learning experience. Meanwhile, Voice Conversion makes the co-existence of multiples languages feel seamless. It is also worthwhile to point out that the softwares ability to track the forgetting curve of each word will mean that it is able to carefully tune and personalize the maximum difficulty of recall the user is happy experiencing.

This might all sound like it would be overwhelming, but how do you feel when someone says "aoy vey" (אוי ואבוי, "Woe") or "très bien" ("very good") in a movie, overwhelmed? I don't because I know what this means, there's no effort expended guessing, and if the software carefully tracks the effort expended (through the forgetting curves), it won't detract from the viewing experience.

## Interaction During Watching
I sometimes notice while watching a movie that a phrase is said in English, but I in fact understood the Chinese subtitles. I feel like it would be good to "tag" periods in the movie like this while I'm watching the movie so I could go back and add those sentences as ones I understood when the movie was over. The user interface for this would be super simple, you would just press a button near enough to when it happened and then you would be able to scroll through them later and quickly identify the piece of speech near it which you wanted to use to modify your comprehension of. This could also work for when you didn't understand a sentence which was spoken in Chinese.

## Movie Libraries
This would take the learning experience to the next level. The software would be able to see a large library of movies, and would be able to recommend which movies to watch based on their value to your learning. This would of course be done as a secondary stage after you had already selected a collection of movies you were interested in.

## Written Text (With TTS)
I strongly believe this is not a good source of learning when one is not at or near a native level. There is far more to language then what is expressed on the written page, and so I am not going to pursue building this into the software.

## Instant Play
Currently the movie takes a couple of minutes to render, this doesn't need to be the case! The media elements for the first part of the movie are ready essentially instantaneously (so long as the fundamental media ingredients were prepared before). So this is something which could be created later down the line. If this software became a cloud service (i.e. website), this would mean that with the current approach there would be everything needed to have a seamless and instantaneous user experience. 

## Slight Overlap Between Vocals
Often switching tracks is only *just* not possible.
Consider this:

``|||Chinese||||______||Chinese|||_______``

``____|||English|||||_____||||English|||_``

``___________________*_<-_common_silence_``

``English Silence_->_*****_______________``

``______________******_<-_Chinese_Silence``

The ability to hit the middle of the chinese silence and the english silence individually is much easier than having to try and hit the center of the common silence.
So the new way of transitioning from Chinese to English will be:

``|||Chinese||||___<-_Chinese_Ends_______``

``____English_Starts_->___||||English|||_``

And the new way of transitioning from English to Chinese will be:

``Chinese_Starts_->___||Chinese|||_______``

``____|||English|||||___<-_English_Stops_``

This will enable a lot more fine grained switching, which will mean that talking periods can have smaller amounts of speech in them. This will mean that more Chinese can be shown, because it will be possible to show more talking periods even when you don't know many words. For example if you only knew "Hey Patsu" then the splitting of the talking period "Hey Patsu! Did you bring my dinner?" into "Hey Patsu!" and "Did you bring my dinner?" now means you will be able to hear more Chinese than you were able to previously.

## Slight Shifting of Vocals 
Sometimes, a very slight overlap of the vocal tracks is unavoidable using the techniques thus far described. In these circumstances though, it may still be possible to enable switching with just a simple subtle shifting of the vocal tracks. Consider the example from before:

``|||Chinese||||______||Chinese|||_______``

``____|||English|||||_____||||English|||_``

``___________________*_<-_common_silence_``

``English_Silence_->_*****_______________``

``______________******_<-_Chinese_Silence``

The previous technique works well in this scenario, but what if the common silence was zero?:

``|||Chinese||||_____||Chinese|||________``

``_____|||English|||||_____||||English|||``

``_____________________no_common_silence_``

``English_Silence_->__*****______________``

``______________*****_<-_Chinese_Silence_``

We can still do the transition from Chinese to English using the previous technique:

``|||Chinese||||___<-_Chinese_Ends_______``

``_____English_Starts_->___||||English|||``

But when we try and use the previous technique for the English to Chinese transition we run into trouble:

``Chinese_Starts->___||Chinese|||________``

``_____|||English|||||___<-_English_Stops``

``___________________|_<-_Speech_Overlap_``

But, why not simply subtly shift the audio of both the English and Chinese talking chunks to the (left and the right respectively) just *a little*. This would prevent the overlap, and allow for a more fine grained (and thus greater overall quantity!) introduction of Chinese speech.

``Chinese_Starts_->___||Chinese|||_______``

``____|||English|||||___<-_English_Stops_``

``___________________No_Speech_Overlap___``

This hopefully won't be needed, and I'm actually quite hesitant about introducing it on the principle that it could negatively affect the viewing experience. The most important thing is that watching movies with this software *never* feel any less enjoyable than watching them the regular way!

## Sentiment Aware Substitution
A potential problem when substituting a chunk of English speech with a chunk of Chinese speech is that they are saying things that are different, and different in a way which matters (i.e. it's not just that one say's "hello" and the other says "good morning"). 

It would also mean that you wouldn't substitute a sentence with another sentence which means something very different (thus disrupting the flow of things). Such periods of sentiment divergence would need to be replaced in whole such that a transition can then occur where sentiment is shared.
Consider these sentences which may be said consecutively:
- in Chinese: 
  - Person1: 
    - "What have you been up to?"
  - Person2: 
    - "Now much, just been enjoying my time in the sun!"
  - Person1: 
    - "You must be using a lot of sunscreen?"
  - Person2: 
    - "oh tons of sunscreen."
  - Person1: 
    - "Well, I'll see you later at dinner!"
- in English:
  - Person1: 
    - "What have you been up to?"
  - Person2: 
    - "Now much, just been getting baked in the sun!"
  - Person1: 
    - "Are you and Susie coming to dinner tonight?"
  - Person2: 
    - "Definitely, we're looking forward to it!"
  - Person1:
    - "Well, I'll see you at dinner!"
- Botched Substitution: 
  - (Chinese) Person1: 
    - "What have you been up to?"
  - (Chinese) Person2: 
    - "Now much, just been enjoying my time in the sun!"
  - (English) Person1: 
    - "Are you and Susie coming to dinner tonight?"
  - (Chinese) Person2: 
    - "oh tons of sunscreen." 
  - (Chinese) Person1: 
    - "Well, I'll see you later at dinner!"

## Double Speak
This is a problem where a person will say a (usually short) phrase in English and then the switching software will switch to saying it again in Chinese. This is because up to the point that the small Chinese vocal chunk was said none of the Chinese was comprehended, so the software showed everything in English. But this also included the English version of small Chinese vocal chunk, so you get a disconcerting experience of the character saying the same thing twice like they're glitching. The simple fix to this is to "link" every subtitle from the English version to its corresponding one in the Chinese version. This can be done by first linking the ones with the most overlap, and then the next most overlap and so on until they are all linked. When there is no overlap it is linked to the nearest one. This is done in terms of "ones with the most overlap first" and then "ones which are closest first", and so on until they are all linked. Some may end up not being linked, I'll have to think about that possibility..

## A GUI Which is Not a CLI
I'm hesitant to do this any time soon, as I see it as a distraction from the important problems which actually need to be solved, and something which can be easily done once the core technologies are developed. In the meantime it would simply be just another thing which I would have to worry about when writing my code, which is obviously a waste of time.

# Fair Use: ['Castle in The Sky'](https://en.wikipedia.org/wiki/Castle_in_the_Sky)
I believe I am using clips from this movie under 'fair use' as it is described in Australian law, as I understand it to be that the development of this software fits under 'research'. This article is also arguably a kind of 'review', as it describes how the particulars of the movie (e.g. how Muska and the General talk to each other) have affected the development of this software and the usability of this movie for learning Chinese using this software. For more information, see the Australian Copyright Act 1968.
