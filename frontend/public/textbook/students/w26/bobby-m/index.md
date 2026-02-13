## Feedback

Hey Bobby, here's some feedback on your midterm exam. Overall, I thought it was great work, especially considering you mentioned being tired and having just taken a Java midterm!

### Question-by-Question Review

**Malware common exploits:** Awesome answer. Your examples with pirated downloads, popup ads, and the LimeWire reference really illustrated how malware spreads.

**Letter and word encoding:** Great job. You explained the basic concept clearly.

**Pull request:** Awesome. Good explanation of the collaboration workflow.

**Video to number:** This one could be improved a little, though you're on the right track. You've got the right ideas—it's like a flip book, each frame contains pixels, and those pixels can be decomposed into hex codes. You definitely understand all the various numeric components. Strong partial credit here. To strengthen this answer, I would have liked to see a diagram or even just a verbal description of how all those pieces get combined into a single number. But I can tell you grasp what the numeric parts of a video are, so you've got most of it.

**Database terminology:** Good answer. One important clarification: **record** and **row** are actually synonyms—they mean the exact same thing. It's one of those annoying cases in database terminology. So a record doesn't "hold" the table; it's simply another word for a row.

**Binary to decimal:** Yep, got it. Good work.

**Storage comparison:** You got all the basic ideas here. I thought this was a solid discussion of the different storage technologies and their trade-offs.

**Social engineering:** Nice answer. Good points about how attackers might get someone to download something malicious, and that ultimately it's all about enabling other exploits like messing with files or stealing information.

**What is a database:** I think you understand what a database is, but I was thrown off by calling it a "storage facility." I'm giving you credit for this one, but I want to clarify: if you're thinking of a database as a building or physical facility, that's not quite right. It's better to think of a database as a **program that runs on a computer**—just like a web server or your browser. Usually it's running on a computer in the cloud, and typically it's collaborating with other programs like web servers or various applications accessing that database. Even though it's pictured as a cylinder in diagrams and looks like a physical thing, it's definitely a virtual/software thing. Again, you may already know this—I just wasn't entirely sure from your answer.

**Assembly language and machine code:** You skipped this one, so obviously you'll want to review that topic.

**Fair use:** I thought this was a good answer. You mentioned parodies as one of the cases for fair use, and that's definitely true. Your point about the amount of time/content you take from something was also spot-on.

**Multitasking, multiprocessing, multithreading:** This one was good—you got the basic idea of multitasking. However, I felt you could have more clearly defined what **multiprocessing** and **multithreading** specifically are. I think you have the right basic concept, but those two terms needed a bit more depth. If you look at my diagram examples, threads are like sub-programs—I usually represent them as small boxes inside or alongside a box that represents a program. I'd recommend reviewing this distinction.

**Basic steps in running code:** Good answer. I can tell you're doing programming in other classes, so full credit here. I just want to point out that this question connects to other concepts like compilers, interpreters, CPU, and RAM. Your answer is fine and you're definitely getting full credit, but the canonical answer for this course would be something like: you write the code → send it to the compiler → compiler produces an executable → that executable contains machine code → machine code ends up in RAM → processor fetches, decodes, and executes instructions from RAM. That's the low-level process for running something like C code. Since you're taking Java, there are more high-level steps involved, so everything you said is still correct—just wanted you to know the low-level version we're focusing on.

**Compiler vs. interpreter:** This is a place to do a little more research. Think of it this way: a **compiler** takes one program and produces another program (source code → machine code), while an **interpreter** is a program that takes a program and actually runs it. That's the nutshell version, though there's more depth to both concepts. These are important concepts to understand. Since you're taking Java, you probably know there's a compiler involved. What many Java students don't know (because many classes don't teach it) is that the Java compiler produces **bytecode** (those .class files you may have seen), and then the bytecode is actually interpreted by the Java Virtual Machine. So Java uses *both* compilation and interpretation. Really, any programming language that runs will have an interpreter involved somewhere—even if it's just the CPU itself interpreting machine code in hardware. Both concepts come up a lot, and Java definitely has both.

**Image to number:** Much like with video to number, I can tell you have the basic idea and you definitely understand how the anatomy of a color or pixel is constructed. The thing I would have liked to see is a little bit more analysis about how the width, height, various pixels, and all their RGB values get marshaled into a single sequence and then converted into a single number or binary. Something that connects the dots between the image and the final data value, showing how different parts of the image (colors, pixels, width, height) are structured in that data value. But you've got most of this question.

**CPU vs. GPU:** Good—you have the right distinction here. One thing I'd add is that the GPU gets its power from having **many slower cores** that all run at the same time to produce the final answer, whereas a CPU has **fewer cores** and gets its power from those being very fast. So the CPU does one thing at a time (or a small number of things at a time) very quickly, while the GPU does a large number of things at a time, but more slowly. Because it's such a large number, the bandwidth or throughput is comparable, at least for things like graphics.

**File organization:** Great answer. Good work there.

**Colors to numbers:** You definitely have this one. Nice job with the color picker demonstration.

**Spoofing:** Alright, you might win the award for the weirdest example here! But you got the basic idea—putting on a mask. Concretely, spoofing often happens at the IP address level to disguise who you are on a network. Good job with the examples.

**Good examples of malware:** Good work here.

**Naming conventions:** You mentioned some good examples of file extensions. Naming conventions are things like how in Java, files usually have capitalized names and have the same name as the class defined inside the file. Generally, within a project there are conventions for how files are named. There are lots of ways you can approach this question, and the discussions people give are pretty varied. I think it's probably something you already know about but may have been thrown by the terminology in the question.

**Encryption:** Your encryption answer is good. I'm going to give you the benefit of the doubt on this one. I can see in your diagram you're essentially talking about a man-in-the-middle attack, so I think you get the encryption-in-transit idea. I'll just point out that there's also **encryption at rest**—like hopefully in the bank's databases, everything is stored in an encrypted way. So encryption happens in a couple of different places within a secure system.

**AI stocks:** Good answer.

**Ones and zeros for binary:** Awesome.

**Decimal to binary:** Good work. I just want to take a moment to say: you mentioned being tired a couple of times and your brain being fried. I'm impressed that you were able to pull off a midterm under those conditions. Just want to say take it easy and get some rest if possible.

**Copyright:** Good answer. You have some good examples here, like using a song in a video, and the fact that you're supposed to get permission except under certain conditions like fair use.

**Trust and truth in AI:** Good work. Good point about certain populations like elderly people being at risk.

**Electricity and binary:** This is right. If your mental model is a vacuum cleaner, that's at a very large scale with giant wires. Just as long as you're shrinking that model down to microscopic wires, then yes, this is correct.

**Stored program concept:** This is almost a philosophical question. Basically, a computer is distinguished from simpler devices because it can **store programs**—that's kind of what makes a computer a computer. It does so in RAM. I'm not sure you got any credit for this question, so I'm not sure if you reviewed that material. RAM is where the program is stored, and the CPU processes RAM by fetching instructions from RAM and then writing data back to RAM. That's how it's implemented in modern computers, but it could be implemented differently in non-electrical computers—other computing models do exist. The high-level answer: if we take electricity and binary and set all that aside and just ask philosophically "what's a computer?"—it's something that stores a program. So the concept of stored programs is important because it's part of the definition of computers.

**Device drivers:** Awesome answer.

**Wikipedia articles:** I think you had sort of the right idea, but maybe you should review this a little bit more. I think you kind of realized that as well in your answer.

**Six degrees of separation:** This is a cool topic. Again, I'd say you should review this a little bit more—properties of social networks, the likelihood that someone's going to know somebody else within a social network, even a globally large social network. I'd take a deeper look at that one.

**CPU and RAM (running code):** This question really requires talking about the CPU and RAM to answer in depth. I'd recommend watching the short video I recorded about the CPU and how it fetches, decodes, and executes things from RAM. It's an important concept, and I'd hate for you to graduate from the class and not understand what a processor is. This one's worth looking more deeply into.

**Absolute path:** I can definitely tell you understood absolute paths. I wasn't totally sure you understood whether a relative path is what would have helped. It would have helped to show me an example of both. I think you showed an example of an absolute path, but maybe you could open up one of your Java programs and show me an import of a Java file that's specified relative to the importing file. There are all sorts of relative path tricks—like you could do `..` to go up a folder level and into some adjacent folder. So there could have been more detail here to show me that you know what a relative path is. I wasn't able to tell if you do or not.

**Cloud services:** I'm not sure if you gave three exact examples, but I saw a couple of them in here and some general discussion of the value of cloud services. I'll give that one to you.

**Logical vs. physical:** This one I'd look into a little bit more. I think you mentioned that as well.

**Examples of cloud computing:** I kind of like this example that you could as a developer give a link to people testing it or to your customers, so it just lets you deploy software more easily. Nice answer there.

**Role of a web browser:** I thought that one was perfect.

**HTML tags (five):** I'm not sure you got exactly five here, but I'll give it to you anyway since I can tell that you understand the concept of HTML pretty well.

**JavaScript:** You're basically right about JavaScript here. Just a point of clarification: even without JavaScript you could click links—that's actually part of HTML. There's an HTML link tag (the `<a>` tag) that lets you click links. So HTML is not quite as static as a PDF—there's a little bit of built-in interactivity just with HTML. But JavaScript steps it up a notch and lets you do things like re-implement any given old Flash game. If you want to make a game and have that level of interactivity, then you definitely need JavaScript.

**HTTP vs. HTTPS:** You're right about it being secure, but I'd look into these a little bit more. This is an important topic for web programming and web communication. HTTP and HTTPS are how we send messages across the Internet.

**HTML:** You got that one.

**CSS:** I was surprised—I thought you might get this one too, since you seem like you understand JavaScript and HTML. CSS is kind of in the same ballpark, but its job on a web page is to make things look a certain way. It works with HTML and JavaScript.

**Web cookie:** You got that. Full credit here. I just want to point out that it's not just for advertising—it can be used for other purposes. Other reasons a web server might store some data.

**Web applications:** GitHub for sure—that's definitely a web app. Your other examples are actually desktop applications, like text editors and OBS. OBS is definitely a desktop application. I can't give full credit for this one because even if you can't name three web applications, I do want you to have a notion of the difference between web apps and desktop apps. OBS is a good example of something that really can't easily be a web app because web apps run in the browser, and if it's running in the browser, it can't easily record your screen—it has to go through more hoops to get out of the browser security sandbox. Partial credit here because you definitely got one, but I want you to understand the distinction and maybe the definition of a web app and why it's distinguished from a desktop app.

### Overall Assessment

Great work on the midterm, Bobby! All of the questions you had an answer for were good, in spite of being tired and having just taken a Java midterm. Just a few areas to review and deepen your understanding, but overall you demonstrated solid knowledge. Nice job, and see you next time!


{{ExamBrowser:https://youtu.be/PLg2qrlvQyU transcript_json:"/transcripts/w26/bobby-m.json" }}
## Questions Answered

1. [01:03] Malware common malware exploits.


> Identify common **malware** exploits. Some of the common **ones** they make you do is is uh they make you download stuff like uh like the good old you know lime wire. I don't think that's **malware**, but you know, you know what I mean? Like a lot of people occasionally like piracy. Like say someone wants to get a hold of say the new brand spanking movie that came out and they want to download that, you know, they want to they want to get a hold of that file so they can download it and watch the movie without paying anything. Well, person that you know basically put this file up for you to download. It's secretly infected a **virus**. You know, secretly inside this, you know, this movie is a **virus** that will like you'll download. It'll cause multiple things to happen to your PC. Uh depending on what kinds like the common viruses that I know when I was a kid is popups like just randomly just will happen like you're not even like your PC will be like just idle and you'll just get popups like say you're like on Google right you know you're just looking at stuff and then just all of a sudden this big square just comes out of nowhere and just goes, "Click here now. You want a free iPad?" Blah blah blah blah blah. That's also another way they can get you with **malware**. It's just those annoying popups like if you don't have like an ad block, they're just like on the side of your **screen** here. There'll be like huge multicolored flashing like, "Ooh, play our **slot** machines." Yeah, earn money. Earn free money. You don't have to pay anything. Just just turn this wheel and you'll get you get monies. You get lots and lots of monies. No, it's it's a fake. You know, it's to inject **malware** into your s into your PC and the file will just be somewhere inside your damn **computer** that you will have to struggle to find. So, you'll probably have to You'll probably have to get like Norton Norton Nort **10** **Security**. That's like **one** that I always used to uh fix that issue. That's uh **one** of the **ones** that I know of. So,


{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:03"}}
2. [04:09] Letter and word encoding.


> how might letters and **words** be encoded numerically? You can create like a like **one** of the commons **ones** is uh your ABCs, right? A through Z. You know, A is number **one**, Z is to be honest. I don't know. What is it? **24**. I'm I I can't remember the the amount of letters in the alphabet, but basically, you know, A is **one**, B is **two**, **C** is **three**. That's how they do it. It's like padding. It's like it's like encrypting. I like to say more encrypting because that makes more sense, I personally believe. So, that's how you can change it into a number like A is the **one**, B is the **two**, **C** is the **three**. That's usually how you would do it. and **words** could be depending on their uh you could also do it like the same way like car you know this is **three** plus **one** plus whatever the number r is just I I'm not gonna like try to sit here and go ab **c** d just basically add those together and then car equals that number. No. Boom. That's how you can do it. **One** way. That's personally like **one** way you could do it. It's pretty elementary, but I mean that's **one** way of doing it.


{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"4:09"}}
3. [06:00] What is a pull request?


> What is a **pull request** and how does it facilitate **collaboration**? So basically you're working on something you know usually like you're working with a business or people you know there's multiple God why can I never draw people I swear to Christ say this object is being worked on by like **three** people they each work on this thing Right. But usually the way things work is not all **three** people can work on the same thing, you know. So like **one** guy, where's the eraser? What is up with this paint? You know, that is a weird weird. This is weird. Whatever. Say he's working on it. You know, he's like la de writing some code. Da da. And then this guy goes, you know, goes to him like, "Hey, can I see this file, you know, like a **pull request**, like requesting to pull the file, you know, basically pull it to him, you know, he goes, "Yeah, sure." You know, he lets go of the file, snip, snip, and the file goes to him. So, it pulls to him and he can work on it. So, now he's working on it. Then the other guy asks permission, you know, he pulls it, you know, he lets it go and then he works on it. Kind of how like **collaboration** works. Like if you ever do like **homework** assignments, you know, sometimes they make you do that. Like you have to work with like **three** or **four** people and you guys each have to work on it. So you have to each like let each other, you know, take a crack at it, you know, work on it, you know, add your **input** with their **input**. That's usually how you want to do it.


{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"6:00"}}
4. [08:01] Video to number.

> How might a video be represented numerically? videos are very like even this video like you know you're seeing me but like frame by frame by frame you know if I do this you know there's a frame you know like it's all it's like a flip book you know that's b practically how this gets treated. It's like a flip book, you know, as it goes. But just **multiply** like all this like **multiply** this by like **100** or something. just all this and like it's basically like a I would say like a **graph** like it's like cutting like right now you can see my room is like **white** you know they'll probably put the code for like a **white** background with like you know the hex code of **white** which I think it's like all like maxed out **255** if I'm correct because **white** is just like just all the colors just maxed out that's **white** and I think if if It's **black**. It's like all **zero**. So, practically like I'm like trying to like I'm trying to like I have my **mouse** on my OBS like trying to explain how this works, but basically like it goes through your video like that and it's just like implementing this **data** of what's going on like moving left to right like this. I don't know. It's very it's it's very weird to explain but that's my best case scenario. So it's like a flip book just you know you know it's going it's going it's going like moving moving moving that's how I see it and that gets you know implemented to like a number along with you know **runtime**



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"8:01"}}
5. [10:09] Database terminology.

> define basic **database** terminology records **row** **column** and **table** basically a **record** is okay let's Ah, say this is a **record**. This **record** holds you. Let me make sure I'm records, rows, columns, tables. A **record** holds tables, right? And if you ever worked on like PowerPoint, you use a lot of like tables. So like you know this is like the **table** and you know in PowerPoint or Excel it's probably better for Excel but you got like these columns I go down you know and then rows are the sideways you know like that. So rows go left to right. A **column**, you know, think of like a a pillar, a **column** as they call them. Like a **column** like I don't know how to explain like like basically like those giant buildings like they have columns aka you know giant structures like that that's holding them up. It's like stable stabilizing them. Yeah, that's a **column**, you know, that's how and then so basically the **record** holds the **table**. The **table** contains, you know, the columns and rows where you can **input** **data** in each little, you know, **column** and **row** like an Excel spreadsheet. If you ever see an Excel, I mean, I can even show you right here, you know, see just like that. I don't know what happened. Probably because I don't have Excel downloaded properly. But yeah, that's that's that's how I would explain it. It's like a Excel spreadsheet.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"10:09"}}
6. [12:26] Binary to decimal.

> Fourdigit **binary** number. You know, that's the **one** where I have to think of a random **binary** number. I'm going to do **one** **zero** **one** **zero**. So, sorry about that. I'm tired. Really tired. Um, so **one**, **two**, **four**, **eight**. Then there's a **16** number right here. So clearly **16** is **zero** because it's not added to **one**. So we got to find a number between **16** and **eight**, right? But we also need to know that it can go into **eight**, but it can't go into **four**, but it can go into **two**. Now, per there is a way to do it a lot more easier, but I always just like choose a random number between here and then minus it by **eight**. And if it can go into **four**, it's not the number we're looking for. So **10**, right? **Eight**. **Eight** can go into, you know, **10**. So it's **one**, you know, and then you will have **two** left. **Four** can't go into **two**, so it's **zero**. **Two** can go into **two**, so it's **one**. And then **zero** can't **one** can't go into **zero**. It's **zero**. So you know that's your answer right here. That's that is the number **10**. **1** **0** **1** **0**. I don't know. I'm not too sure if I'm supposed to write it on here and submit it, but if I'm watch if I'm making a video, you're seeing this. So, I assume that's my that is my answer. I don't know if I'm actually supposed to submit this. It doesn't kind of make sense if I do have to submit it when I'm doing it right here in front of you. Maybe. I'm not too sure. If it is, I'll, you know, change it and actually write on here. It's just like I'm used to doing what how I do it and I don't know if I'm changing the way. Ah, the good



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"12:26"}}
7. [14:34] Storage comparison.

> old **magnetic**, **optical**, and **solid state**. **Magnetic**. I'm just going to call it mag, you know, opt for **optical** and then **SSD** because that's what it is. So basically a mag is like your standard **hard drive**, your standard, you know, **one** of these, you know, uh I forget what they're called. Um WD, that's their brand, but yeah, basically that's that's a **magnetic**. And what's good about those? Lots of **storage space**, lots of **memory**. It's also cheap. Uh, **one** thing it is it ne it's bad for is it's **slow**. Sorry, I'm really tired. I don't know if I told you. **Optical**. Think of like your discs like for your movies, video **games**, you know. Also, this is also the difference also with this is it's cheap cheaper to make basically like the discs. They're cheaper to make. You can store lots of **memory** in here. Decent amount. You know, it's kind of almost the same with this. It's cheap as well. But, you know, besides it being **slow**, it's uh these discs can get scratches. And uh I don't know if you ever lived in the time where like if you had a scratch disc, it's practically useless. Like, it doesn't work anymore. It's not going to read. And you know, that **20** bucks you spent on that movie is just long gone. Bet you wish you would have bought it digitally, huh? Where you don't actually own it. you just get the right to watch it until they take it away from you. That's the difference between digital, but you know, that's a different topic. Um, SSDs, uh, they're very **fast**, extremely **fast**. They could also store some **information** or store **memory**, but not a lot compared to these **two**. So, I would say they're moderate. I am terrible. I should have like used the **text** thing, but you know, you're hearing me talk about it, so I assume that counts as well. I mean, I don't have to write it on here. I assume I could just say it. Uh, it's expensive. There they are expensive. They're very expensive. Also, you know, if you're like me, my PC here, I think I have like I think **one** **SSD** in or **two**, and I think you can only have like **two** or **three** in there. So, like it's minimal space technically, unless like they actually have a thing to where you can have multiple SSDs inside your uh PC, maybe. So, I'm not a super **computer** nerd, but yeah, uh it costs a lot of money. And I think that's good for that, you know, because I'm not trying to



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"14:34"}}
8. [18:01] Social engineering.

> waste any time here. Explain why **social engineering** is and how it is used in cyber attacks. **Social engineering** in cyber attacks. I should have freaking read into this **one** more. **social engineering** and how it's used in cyber attacks. Well, the word social's in it, so I assume it's all about like **one** user talking to another user. You know, they're like speaking to the other person. But like, you know, it's through, you know, PCs. So, they both have like computers. You know, he's talking to him, sending messages to his **computer**. I assume it's like I wouldn't really know how to draw a diagram of it, but the best way I can think of by like just even like it's like talking to them and like I don't know like getting them to download something like like hey you should play my new mobile game app and then you know they download it on their PC but it's secretly like a like Um, I forgot what they call it, a a rat, a remote access terminal, I think, where they can like like take control of your PC practically. Like the they practically like they can mess with your **files**, steal your stuff, steal your, you know, your **information** that's stuck on your PC. They can get a hold of your **IP address**. You know, all the bad stuff that comes with cyber attacks. You know, if you want to go into a large scale of things like DDoSing, like taking down servers, taking down all that, that's my best bet of that.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"18:01"}}
9. [20:02] What is a DB?

> Explain what a **database** is. A **database** is like a **storage** facility. It contains things you know as the **database** does you know it's always like a picture of like that cylinder and most of the like drawings it's like a picture of a cylinder you know it contains **information** it contains like the stuffs like I don't know it could contain **images** you know videos it contain **files** s it can contain practically depending what the **database** is like you know if you're like trying to get into you know their **files** their videos their it could also contain like their their coding their like **source code** if If you would say like how the you know it works, you can get a hold of that. Oh no, my PC. Oh, it's doing the HDR thing. There you go. PC does a random HDR on thing. It's really stupid. I hate it.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"20:02"}}
10. [21:19] Assembly language and machine code.

> Explain what **assembly language** is and how it relates to **machine code**. Damn, I I watched all those videos on on this. I'm guessing I have to Oh, I'm No, wait. No. Yeah, watch. Whatever. Doesn't matter. It's all good. I'll take a couple losses here and there. Explain what assembly **languages** and how it relates to **machine code**. Um, uh, I'm going to take a **assembly language**. I don't know that **one**. I'm going to be honest.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"21:19"}}
11. [22:00] Fair use.

> What's the point of the **fair use** doctrine? List of factors to characterize **fair use**. **Fair use** is practically I like to I just thought of this as I was like studying and whatnot, but I I like to think of **fair use** as like a a demo. Like I can use your stuff like a demo. Like you're only allowed you're allowed to use it to a degree. like, you know, if I put a song in a video that I make, you know, it can't just be the whole song, you know, that's that's not right. You can't do that. You can only use a certain amount of time with it, you know, certain, you know, **fair use** doctrine. Um, you can there are workarounds to like, you know, having things like **music** you're allowed. What did I do? I'll just do the Pandora symbol because that's my **music** player. Like you're playing **music**. Um, I'm just like really tired. But basically, you could parody **music** and get away with it. That's **fair use**. Um, you can watch someone's whole video and if you're like, you know, you're super proficient in what they're talking about, you know, you can give your **two** cents in, you know, what do they call it? I'm trying to think of the word. It's on the top of my head, but you can uh it's like an expert giving giving **information** also onto it. It's like they're tacking on their their expertise onto the video and that's allowed. You know, they could do that. Um, you also just like get permission, but most of the time that costs like hella money. So, what else was this question asking? Like parodies. Man, I'm just drawing blanks today. But that's like the mode **two** **ones** that I can think of you can use is like



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"22:00"}}
12. [24:22] Multitasking, multi processing, multi threading.

> explain what **multitasking** is. The difference between **multiprocessing** and **multi-threading**. **Multitasking** is like say I have like several things going on my PC at the moment. **Four** things like say a **YouTube** video is playing here. Uh I'm on a website here. We'll just do Google. Say like I'm on a website here, Google. And say another thing I'm doing is I'm writing code for my class. We'll just do that. And then the fourth thing, I don't know. Uh what could I be doing? **Four** things. Um I'm sorry. Oh no, I knocked down my thing. Oops. All right. Give me a minute. Sorry about that. I knocked down my death or I knocked down my webcam and I spoke my drink. Oops. All right. My bad. Okay. Yeah. Fourth thing, we'll just say uh editing a video, something like that. you know, your **CPU**, you could it'll do all these things, you know, kind of like rapidly to the point where it's like you don't even know because usually it takes time to go to here to here to here to here, but it's doing that very it's giving each thing here a chance to run very rapidly. So you think it's all happening at once but secretly it's going to each **one** and giving them you know time to work to **process** etc etc like you know constantly going going that's **multitasking** you know go figure like how I'm doing it right now **recording** this and doing this you know doing this you know **CPU**'s **multitasking** that um **multiprocessing** it's **processing** everything you know, I only have **one** **CPU** at the moment. You know, I didn't even know you could have more than **one**. That's actually crazy. I don't even think you could put **two** CPUs on a **motherboard**, but maybe that's a different thing. **Multi-threading**. Was it **multi-threading**? I am. Yeah, I don't know. We'll just go to the next **one**.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"24:22"}}
13. [27:19] Basic steps in running code.

> List some of the basic **steps** in the programming **process** from writing code to running it. Ah, my favorite running code. List some of the basic **steps** in the programming **process** from writing code to running it. So, basically before you always start like you want to know what you're going to be doing. Like usually like for me when I do my **Java** class, you know, it gives me **instructions** of like I have to read what it wants me to do. It would be like let me see a **text** editor. It would be like write a method that accepts a int as its parameter, you know, and returns a string, you know, and then yada yada yada yada yada, like a bunch of other things. Basically, my your first step to always like wanting to code is like you look at what you have to what your problem is. Like you look at it and you like in your head think about what you need to do. Like here, write a method that accepts an int as a parameter and returns a string. Basically, I know that my method needs to start with an int, which is an integer, and then it has to give back a string. So, for those that don't know, you know, **Java**, you know, basically, I get a number, I do whatever it is inside, and I give it back like a word. Let's use that. Is it possible? Kind of. Sort of. There's you have to like do a lot of things to it but yes you can you know and that's what you have to first do and then you start coding like you write down the code like once you looked at it and you think to yourself okay what do I need do I need loops do I need while loops do I need boolean statements do I need you know any **math** involved like what do you need like you have to Ask yourself what do you need? And once you figure that out, you could start and you start writing it. And **one** method and **one** tip I can give you is constantly constantly constantly compile and run it to make sure and for **one** of my coding teachers have taught me is make sure it's in a runnable state, you know, or he another thing he likes to say is don't code yourself into a corner. Basically, you constantly want to make sure you're doing, you know, it correctly. You want to make sure it's running properly. You know, you don't want to, you know, just do all this writing this code and then all of a sudden it just doesn't work. Now, you have so much you have to look back to and figure out where's the problem? What am I screwing up? And that becomes a pain in the ass. So, you'll have to write the code. You'll need to know the language of what you're using. You know, you could use **C**++, Python, **Java**, PHP. You know, you got to figure out what language you're going to use. And then you got to get a **text** editor. You know, you can use MW. There's that **one** you can use. I use Genie. There's **one** for **Java** specifically, like really good. It's called Eclipse. You need that. You need to download that. And then you just got to write the code. And you kind of have to know exactly how to write the code because that code gets **processed** for the **computer** to understand. You have to know the language. Basically, if you don't know the language, you can't code. Like, you know, I can't just go into **Java** and type whatever. No, I need to know the **Java** language to write it for it to understand what I'm asking for it and then it'll do it. Then you compile it. You know, make sure it's all nice and neat. formatting and then you compile it and you run it and **execute** it. **Sounds** like that's basically how it is for me. I mean, I'm doing it like a lot for this semester. It's burning me out personally, but yeah,



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"27:19"}}
14. [31:46] Compiler versus interpreter.

> explain the difference between a compiler and **interpreter**. Best way I can say is compiling is you're writing things down, you know. Here you go. Like this is the **text** editor. You're writing things down, you know, then you put a curly bracket. You're writing same things down. Then you, you know, in bracket, curly bracket, writing stuff down. the compiler like if you try running this it's not going to run because you need to compile it. You need to turn all what I just wrote into something for the you know for you know your language to understand. So **Java** you have to compile it and then **Java** can run it because it will understand it. It interprets it. You know that's really how it is. a compiler compiles it and you know you can run it which to be honest to me this seems like the same but I'm guessing the **interpreter** is more of like I'm guessing the opposite way. It's like it takes this and interprets of what it is and then gives you the **output**. That's my assume assumption. Or maybe the compiler is something completely different and I'm completely wrong. But to me, it's like it's almost the same thing, but I think it's like in the opposite direction.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"31:46"}}
15. [33:15] Image to number.

> How might an image be represented numerically? Well, an image is represented numerically in a lot of ways. **One**, file size. It's a certain size and megabits or gigabytes if you have a huge image. Highly doubt that, but it's megabits. Let's just stick with that. Also the coloring like what what color is in it? Like does it have like some red? Does it have some green, you know, some blue? you know, because each of these colors are a hex code, you know, and a hex code is just basically a hashtag inside some brackets with, you know, the way it works is like you use your **three** main colors like red. I think it's green and blue. I think those are the **three** main colors. And like you could choose these like you'll be at 0000 and that's like straight **black**. But if you increase you know green to **255** it's going to be green. It's literally just going to be green. No other color. If you start moving like let me help you with this. Like say this is say this is like the red uh hex code numbers, the green hex code numbers, and the blue hex code numbers. So basically, if I want straight blue, I raise this number up to **255**. **255**, I think, is the highest a hex code can go up to. I might be wrong on that, but basically I keep blue at **255** and these at **zero** and I get straight blue. Get blue. Like if you start adding red to it, well, if you remember in elementary school, what happens if you get red and blue together? I think it's purple. I think this is back in elementary school. So like if you put red up, it'll start that blue starts turning into purple. you know that that's how an image can be **stored** is by either the color of it, the size of it, you know it's like it takes what's you know the **pixels** as well like the resolution depending on the resolution you know like my video here is going to be 1080p that's resolution you know that gets **stored** could be represented numerically



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"33:15"}}
16. [35:48] CPU versus GPU.

> **CPU** from a **GPU** uh **CPU** is the big bad, the the most strongest thing in your PC. Your **GPU** is the runner up behind it. These **two** are like the juggernauts. **CPU** is the big **brain**, you know? He's the master dog of it all. **Processor**, he's literally call He literally has the **word processor** in his damn name. **GPU** is the **graphics **processing** unit**, which is more about like **graphics**, you know, he's like the second backup. **CPU** is the guy that makes sure the import stuff gets done. The **GPU** runs all the other side stuff that, you know, isn't as equally as important as what the **CPU** is running, you know, because this thing needs to run to keep your PC going. This just runs all the side stuff for you, like playing video **games**, **recording** as we see here, **recording** audio as we see here. You know, he's the he's the sidekick of the main character, as I like to say, but he's he's equally as important.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"35:48"}}
17. [37:07] File organization.

> Design an efficient file organization system for a specific use case. Academic professional creative design an efficient file organization system plan organization. Is that like basically asking for like me making like a file thing like like for my CIS my **Java** class like I create a file **Java** you know inside this file go down you have chapters like right now we're on chapter **five** so say I have like a file called chapter **one** you know inside here chapter **two**, so on so forth. You know what I mean? Going down to chapter **five**. I'll even put chapter **five** to show where I'm going with this. Okay. And then inside of these folders, more folders like say this **one**'s lectures, you know, say this **one** is **homework** assignments. And then inside those it'll show like the lectures will be videos of the you know what he's teaching. The **homework** will be the coding that we're doing. You know all my all my **java** **files** and classes as well will be in here. Basically that's my organization system. I mean I don't know if it's cheat if I just show this but you know CIS 141 as you see I kind of just that's this is not a very efficient way of doing it but for my **one** of my classes where is it OC so Olympic college 141 lecture **programs** and then I have each chapter you know all my **files** that I work on for that chapter, you know, it it could be better than that, but that's just a, you know, what I'm getting at here. This just a



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"37:07"}}
18. [39:16] Colors to numbers.

> how might colors be encoded numerically? As I personally just said last time, you don't remember, colors are **stored** in we call a hex code. Um, oh, look at this. I got to show you like this. This is a perfect example. I don't think this is cheating, but uh you know like it's say this is look I think the highest you could go is **255**. Boom. That's the bluest blue you can get. I don't even think you get any more bluer than that. And he gives you the hex code. This is the hex code. That's exactly what this means. And if let me decipher what it says. These **two** **zeros** red. These **two** **zeros**. Wait. Okay. Hold on. Make sure I'm not screwing this. Yeah. These **two** **zeros**. Hold on. I am like I'm going cross-sided. My bad. Yeah, this is green. FF just means that like it's the max. And that FF is blue. Like they each get **two** numbers each. So, you know, red the **two** numbers, the next **two** numbers green, you know. And if I want to do some red, we'll do 150. I I suck. My bad. Purple. And look at that. And that's the hex code for this purple. You know, I don't think it's cheating. I mean, I was explaining it way before this popped up. So, you know, this is what I meant. You know, you got the hashtag symbol 96 00 because there's none green and FF because it's at the max or blue. Do you get it? That's basically how color is **stored** in numeric.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"39:16"}}
19. [41:00] Spoofing.

> Explain what **spoofing** is. **Spoofing** is like a mask. like, you know, think of it as like you're going into a club, you know, you go into this club, you know, you do something bad like say like, I don't know, you kick someone's grandma in the face or something or like you you stole her dentures, I don't know, you stole her teeth, you know, and they they kick you out, you know, now you can't get back in. A spoofer is practically all this is. It's like, okay, it's you, but you put on a mask. Now, when you go back in to set area, you know, in reality, **spoofing** is like it's changing your **IP address** because the way people track you is your **IP address**. If you go into some place with your **IP address**, say you do something bad, they can ban you from it. Like right now, like, funny enough, I'll give you an explanation. Uh, the Xbox Series X came out. I came off of deployment. I really wanted to get **one**, but they were being scalped like a [ __ ] And uh, the only way like GameStop was selling some. Well, if you knew how scalpers work, you know they use bots, they buy them a mass bulk. I was trying to buy **one** and I was sending so many requests to the website that I got banned from it or basically got blocked from it and you basically I used a **VPN** which basically all a **VPN** does is it changes your **IP address**. So kind of like **spoofing** in a way. It changed it. So, I can go back into the website and the website will read my **IP address**. It will notice it's different and it'll be like, "Okay, you're good to go in." That's basically what **spoofing** is. It's like putting on a mask. You walk in, they're like, "Oh, you're not that person like last time. Okay, come on in." And you walk in. That's basically what it is. How far am I in this damn thing? **20** questions. Oh lord, we need to we need to speed this up.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"41:00"}}
20. [43:20] What Is Malware?

> Explain what **malware** is. **Malware** is vicious. It's like a **virus**. It's vicious. It attacks your **computer**, attacks your **files**. It's basically Yeah. viruses, **malware**, **spyware**. It basically like gets into your system and it messes it up. It corrupts it. It does all types of things. Deletes **files**. It like messes with your **computer** in certain ways, like popups. It'll make it slower. It'll start like basically taking your **CPU**'s like **processing** **power** away just to make it slower. You know, your **computer**'s less responsive. It just basically it's like a vir it's like getting sick. That's basically what it is. It's like you're not you when you have a **virus** in you. You're sick, you're **slow**, you're tired, you're moving sluggishly, you can barely do much. That's basically what **malware** is. It makes your PC just basically not running as its optimal level.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"43:20"}}
21. [44:25] File naming conventions.

> Discuss file name conventions and the role of the file extensions. file extensions, you know, you got PNG, which is image, **MP4**, it's video. You got some other things. **HTML**, that's a **one**. You got MP3, which is sound, you know, MP3 is sound. You got all types of other **ones**. Many discuss file name conventions. File name conventions. What do they mean by file name conventions? H. That's a good **one**. I don't know. I know there extensions because I used a lot of extensions, but not file name conventions. I'm going to have to take a a hit in that area because I know I know about file extensions because I always have to like change like I download like GIFs on the **internet** and I have constantly have to change it to **MP4**.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"44:25"}}
22. [45:32] Encryption.

> Explain what **encryption** is. **Encryption** is basically you you're talking to the **internet**. You know, this is your PC and you know, you're talking to Google here. It's goggle. I know. But basically, **encryption** keeps this **secure** because this is the **internet**. You know, you connect to Google. Cryption basically like when you connect to something, your **data** is like out there. It's there like someone if like if cryption wasn't a thing, I can literally like just go in and take this dude's **information** and know where he lives for God's sake. If like there was no **encryption**, I can literally just connect and get a hold of his **information** if I wanted to. But **encryption** keeps this shrouded in like a smoke bomb. Just his **information**, it's just **encrypted**. you can't get a hold of it. The only person that can really do that are like hackers that know how to do these type of things because, you know, hackers are really smart, nerdy dudes, girls, whatever. You know, no average Joe can just crack the **encryption** that's going on here. You know, it keeps you safe. It keeps you going to here safe, you know, so no **one** can come in and just rip out your **information** and be like, "Now I'm going to sell this **information** to Indian phone scammers and now you're about to get a buttload of freaking whatever."



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"45:32"}}
23. [47:18] AI and information.

> Discussed how **AI** **algorithms** shape what **information** people see online. Basically, as we are evolving, **AI** is becoming more prevalent. **Algorithms** are practically **AI**. You know, they do a subprocess to get you an **output** and and basically everything is like an al it's very it's weird how to explain it, but basically, you know, depending on what you stare at depicts on what you're gonna see, like, you know, If you're an artist and you do a lot of art stuff and you look up a lot of art, you know, art stuff, you know, you know what I mean? You're going to see a lot of like art things like on the side just randomly. It's like how you go to it's like how you go to Amazon and you like type in a couple things you're looking for and then all of a sudden Amazon's just recommending stuff to you. Like me, I'm a video gamer, so headsets, you know, controllers, you know, those things pop up on my Amazon because those are the things I buy. It knows what I looked at and it keeps a mental note of it and goes, "Okay, this guy's a gamer type guy, so I'm going to like, you know, send him video **games**, things that, you know, people with video **games** usually do like keyboards, mouses, controllers, controller **accessories**, you know, just generally like video game stuff because I play video **games** a lot and that's what my **algorithm** is probably most likely going to And basically like it stalks you.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"47:18"}}
24. [49:14] What is binary?

> What is **binary** and why do computers use it? **Binary** is the way the **computer** talks and it's the way how it operates. **Zeros** and **ones** that's all your **computer** knows. The matrix, you know, it's how it stores stuff, how it operates. Even electrical is **binary** for it. Where is my **mouse**? Okay. **Ones** and **zeros**, **zeros** and **ones**. That's how it it stores everything. It's how it uses it. It's how we talk to it because the stuff that we do coni converts to **binary** so they can read it and understand it. It's just how they work. Oh, look at that. There's that **one**.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"49:14"}}
25. [50:02] Decimal to binary.

> **two**-digit **decimal** number. I'm gonna pick a number off the top of my head. I'm gonna pick **40**. So, if you remember, **one** **2** **4** **8** **16** wait **1** **2** **4** **8** **16** **32** **six** numbers. So it can't be **64**. **64** doesn't go into **40**. So it's **32**. So **32** can go into **40**. That's **one**. So what will be left over is **eight**. Now if you remember, **one**, **two**, I'm like looking at myself and I was like that's weird. Okay. **1** **2** **4** **8** **16** **32**. So **1** or **32** worked. Now I got to What's half of **32**? **16**. **16** can't go into **eight**. So **16** is a **zero**. Okay. **Eight**. **Eight** can go into it. So it's a **one** and it's **zero**. Now can **four** go into it? No. Can **two** go into it? No. Can **one** go into it? No. **1** **2** **4** **8** **16** **32**. That is the **binary** **decimal** number of **32**. Was that actually what it was asking for? Yeah. Okay. Yeah. I was like, I did all that and I was like, wait, is that the question? My **memory** is shot today. I took a midterm for **Java** and I came back home and now I'm doing another midterm. So my **brain** is fried.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"50:02"}}
26. [52:01] Copyright.

> Explain what it means to hold a **copyright**. List some **rights** that are exclusively exercised by **copyright** holders. Say an artist sings a song. No, you know they What's the song symbol? It's like this, right? Something like that. So, say they created this song and say Joemo over here goes, "He he he I'm gonna take this real quick." you know, he's wrapping around it and I'm gonna inject it into, I don't know, my let's play video of, I don't know, whatever **games**. Like, say he made a let's play video of whatever game is really out today and he injects this video is this **music** into the video and it's playing all the long way. Well, if you understand, you know, content creators, they get paid eventually, but let's just say he does. Say he gets money from his videos. Well, who do you think that money is going to go to? Well, it's not going to go to him because that **music** is owned by this person. This person owns this. So when his video or her video gets injected into here, you know, and he's trying to make money off of the video, that money doesn't go to him. No, it goes straight back to them because they own the **music** and he didn't use **fair use**, which was **one** of the previous questions. And if you don't use **fair use** correctly, you do not get any monetization from that video. So he doesn't get jackedly squat. All that money from that video goes straight to this person because that's how you know **copyright** works. They own the song. It's theirs. It's theirs. You can't use it unless you specifically get permission. And even then I think you have to like sign **documents** and then that tells you you're allowed to use it. I think I don't know that aspect of like how do you get the **rights** to use something and then use it. You know what I mean?



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"52:01"}}
27. [54:16] AI. Trust and truth.

> Discuss the impact of **AI** generated **text**, **images**, and videos on truth and trust in digital communications. It's hard to tell if everything's real or fake nowadays. Like it's really difficult. **AI** is strong. People are making videos of random things and people don't know what's real and what's fake anymore. You could get away with a lot of stuff nowadays. If you have some like decent **AI** **hardware** that you have, yeah, you you're screwed, dude. Like you can like now like nowadays a lot of people are just like, "Is this **AI**? Let me go to art subreddit. Is this **AI**?" You know, like people just are skeptical about everything now because like **AI** is that good. **AI** can make things and people wouldn't know, you know, even to this day, people are still today like trying to figure out if it's **AI** or not. And that's where the trust comm or digital communications is. Like you know, elderly people, they don't know the **internet** as well as probably us. They go they get on and they think half the stuff is true because they don't know no better. You know, they're not in the scene. They don't know what's going on. You know, they're the new kid on the block.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"54:16"}}
28. [55:36] Electricity and binary.

> How does **electricity** enable communication or represent? Basically like how I presented it last time. Basically like your vacuum cleaner like our carpet washer and let me draw the carpet washer. Okay, this is like the little box that contains the liquid. This is like the big gigantic handle that uh you push the, you know, washing, you know, vacuum and like right around here is a button that turns it on. And if I always like I always like using this example because it makes sense a lot to me. But if you ever notice like the **switches** that you flick on and off, off and off, they have this weird symbol of a **zero** and a i. It's almost like a **zero** and a **one** if you kind of think of it that way. You know, it makes the most sense like you know if a **one** gets, you know, you know, if it's **zero**, it's dead. If it's a **one**, it's active and it's on. That's how I always see it. Like once you click that **one** button and it goes down and the **zero** is up, you know the vacuum cleaner's on, you could go, you know, **electricity** is flowing through it and operating it. If you turn it to the **zero** and it goes down and the **one** goes up, it shuts off. It's done. That's how I picture like computers working in a way. You know, you can turn it on and off and and it dictates those **zeros** and **ones** and **zeros** and **ones** man. Okay.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"55:36"}}
29. [57:19] Stored program concept.

> Describe the **stored **program** concept** and why it distinguishes computers from other simpler devices. **Stored **program** concept** and why it distinguishes computers from other simpler devices. **stored **program** concept**. Is that talking about like the **cloud** with the whole like you know your device it can store you know it can hold you know videos but you also have a **cloud** it can connect connect to it's also like a secondary **storage space** but it costs money to have like more **storage space** and it's a monthly subscription so you can have multiple I think that's what it's talking about I'm not too I'll take a hit for this **one** if I'm not right. I'll gladly take that.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"57:19"}}
30. [58:12] Device drivers

> Explain what **device drivers** are and why they're necessary. **Device drivers** basically allow the system to operate like how my uh my **Wi-Fi adapter** on my PC at the moment. You know, it didn't work when I first got it because the adapters were out of date. So if the adapters are at or the **drivers** are out of date, it doesn't work. So I had to like it was really annoying to do it. But like I had to get **USB drive**, right? And I had to use like my laptop. Thank god I had it. And then I had to like figure out what type of, you know, adapter it is. And I had to go download the **drivers** on the **internet** on my laptop into my USB stick, take it out, put it in my PC, inject it. So then the **drivers** can be **updated** and then it works. Now it basically keeps your system like **updated** like you know how my PC needs to update. That's basically what a driver does. It updates your heart your your your equipment. You know my **monitors** they have **drivers** that need to be **updated**. This webcam had to freaking get its **drivers** **updated**. My freaking **mouse** had it had to update on its **drivers**. you know, even your like simple things like your anything inside your PC has a driver that needs to be it's to keep it operational, you know, like it's to keep it going. That's basically how I like to say it. It keeps your equipment up to date.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"58:12"}}
31. [59:43] Wikipedia articles.

> Explain how Wikipical Wikipedia articles are written in edited. I you know, I never got the answer to this. I I said I was I never did. Um I'm going to go with how I said it before. You know, you per you people have permissions to edit it and change it. You know, they have to add like, you know, references to what they got credible. They had to be they had to be credible people to, you know, edit it and stuff like that. explain the **60** separation. I think that was **one** other question I needed to remember. I can't remember it. I'll take a hit on that. Explain how a **processor** works. A **processor**, you know, your **CPU**, it it practically runs things. I mean, it act it makes the your PC work. It makes your v, you know, things, you know, **processing**, you know, this, you know, opening up a window that takes **processing**. You know, this video takes **processing**. It's, you know, **processing** that, you know, when I'm going to have to render it, it's going to have to **process** it. you know, **rendering** it. It's going to take like hours, you know, it's like it I don't it's so weird because it's it's in its it's in its name literally what **processor** is exactly how its name is. It pro like it's very it's very hard to explain stuff when literally the thing they're explain wanting you to explain is exactly what it does. the prof like I can't dumb like I'm too dumb to dumb it even further down to make it easier. Explain the difference between **absolute path** file and a relative fly. What the It's just a random freaking message from my college. Explain the difference between **absolute file path** and a relative. Your **absolute file path** is exactly where it's at. like exactly to the T. A relative is like kind of in the general area like let me uh I don't know if I'm allowed to use my PC as like a way of like explaining it or I have to draw diagrams and stuff and talk about it. But basically like I'm just going to use this like your **address** bar. Like if I wanted to go to, you know, like my video **games**, you know, let's take a little trip here, you know. We're going to use this as like my like boom, here we go. So, this is my **file path**, you know, **programs** 86,



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"59:43"}}
32. [1:00:17] Six degrees of separation.

> explain the **60** separation. I think that was **one** other question I needed to remember. I can't remember it. I'll take a hit on that. Explain how a **processor** works.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:00:17"}}
33. [1:00:33] How does the processor work?

> A **processor**, you know, your **CPU**, it it practically runs things. I mean, it act it makes the your PC work. It makes your v, you know, things, you know, **processing**, you know, this, you know, opening up a window that takes **processing**. You know, this video takes **processing**. It's, you know, **processing** that, you know, when I'm going to have to render it, it's going to have to **process** it. you know, **rendering** it. It's going to take like hours, you know, it's like it I don't it's so weird because it's it's in its it's in its name literally what **processor** is exactly how its name is. It pro like it's very it's very hard to explain stuff when literally the thing they're explain wanting you to explain is exactly what it does. the prof like I can't dumb like I'm too dumb to dumb it even further down to make it easier.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:00:33"}}
34. [1:01:42] Absolute versus relative path.

> Explain the difference between **absolute path** file and a relative fly. What the It's just a random freaking message from my college. Explain the difference between **absolute file path** and a relative. Your **absolute file path** is exactly where it's at. like exactly to the T. A relative is like kind of in the general area like let me uh I don't know if I'm allowed to use my PC as like a way of like explaining it or I have to draw diagrams and stuff and talk about it. But basically like I'm just going to use this like your **address** bar. Like if I wanted to go to, you know, like my video **games**, you know, let's take a little trip here, you know. We're going to use this as like my like boom, here we go. So, this is my **file path**, you know, **programs** 86, **Steam**, **Steam** **Apps** common. An **absolute file path** would be like I I mod a lot of my like video **games** like Elden Ring like you know I have my mods and my mods need to know the **absolute file path** of this thing right here you know this is the **absolute file path** of this thing relative is just like this just generally it's just like in here it's somewhere in here it's relative it's close to it absolute is the fine point exactly Relative is like a general area. That's how it explains it.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:01:42"}}
35. [1:03:20] Three examples of cloud services.

> Give **three** samples of **cloud services** that you might use in day life and explain what each **one** does. **Cloud** is just basically this fake imaginary like **storage space**. You can pick it up from anywhere. At home, you could be at home. You could be out outside touching grass. Or you could be freaking I don't know on a plane. You know, you could be on a plane. You know, you can you can get anything in these **three** places. That's **one** of them. Like a lot of times like what's good is like what I don't really use is like I go to school, you know, I'm going to I'm doing **Java** work, blah blah blah. You know, if I used it correctly, I would save what I did for that school work, send it to the **cloud**, come home, reddownload it, and then work on it, and then save it to my PC. That is **one** of the good ways of doing it, you know, because you can get in anywhere. And also another thing that I found out was pretty cool is uh if you use use stuff like **Discord** and stuff, you know, where you try to send someone something and it goes ah file size too big, you got to get some premium service to [ __ ] you know, send it to them. What you don't what you could do is uh you could send the I the iCloud link link and you can send it to them. they click it, they can watch that whole video that you sent them and it costs le literally next to nothing, which is really cool. You know, you can like if you're like me, you have like a lot of like videos that are like super like, you know, they have a lot of file size and you can't send them to friends. You can send that link, they can click the link and it will send them exactly to the video in the **cloud** service and you know it works. You know, you don't have to do anything. Heck, even my phone I have to do it and it sucks. Everything's a premium cost. Another thing is it's just more f more **storage space**. You know, say you actually do run out of **storage space**. Don't know how you do, but say you do, you know, that's a they give you a lot. Like if you like actually buy, you know, the subscription service, they give you a good **bit**. They give you a **bit**. I would I wouldn't personally use it, but they give you a decent **bit** and it it helps



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:03:20"}}
36. [1:06:15] Logical versus physical.

> **logical** and **physical storage** models. **Logical** and sto **physical storage** models for a file. Are we talking about like **logical** and **physical storage** models? physical. I mean, I guess you could say this is a, you know, my **hard drive** is a **physical storage** file because this has like a lot of stuff in it. You know, I could take it wherever I go, plug it in, get a hold of it. I assume that's what that's talking about. I'm not too sure about that **one**. I'll take a hit, you know, for that **one**.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:06:15"}}
37. [1:06:57] Explain Cloud Computing.

> Explain the concept of **cloud computing** and how it benefits users and developers of **software**. Uh I'm think I don't know why I was thinking of like **cloud computing** as like **cloud** gaming but but **cloud computing** is like the developer you know he works on something you know **one** guy you know he's working on something you know and say he's like finished he sends it to the **cloud** you know it's practically what I was talking about like you you know, you send that link. Basically, he puts whatever's in here and like say like **three** people want to get a hold of it, you know, all they got to do is get that link, you know, that he gives out to them like like say he gives them, you know, the link, you know, they type that, they go into the, you know, the **cloud**, they type that link in and they get exact access to it and then they can use it, you know, they get a hold of it, test it. Like say he's like the developer and he's giving this to his testers, you know, to like try it out, figure out if there's any bugs. Yeah, they test it, which is good because you don't need to be like physically next to a person to let them try it. You could be like completely in different states, countries, you know, that's benefits of it. It's like you don't, you know, it saves time.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:06:57"}}
38. [1:08:32] Role of a web browser.

> explain the role web browsing with respect to **caching** **history** and **privacy**. I'm going to shotgun this really quick. **Caching** for web browsers is it remembers the **web browser** to a little **bit** to where if you go back into the website, it it loads it up pretty **quickly** because it remembers you've been there and it loads it up like presets and like goes **quickly**. **history** like everyone your your **browser** my you know Firefox it keeps **history** you know where you've been what sites you've been to and you can go to your **history** and click on those to go back so like say you forget something I don't know like say you like want to figure out where you found that image that you found like a day ago you can go and find it and it will be there oh why am I keep **privacy** See, everyone loves their **privacy**. The **web browser**, it keeps it hush hush. Like, you know, you have your **cookies**, your cash, you know, you could delete those, you know, your **history**. Like, that's part of the **privacy**. You know, someone can't get a hold of that. Keeps it safe. You can handle that as you wish. You know, it doesn't, you know, that's basically kind of what it does. Why do I keep doing that?



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:08:32"}}
39. [1:10:04] 5 HTML tags.

> List **five** common **HTML tags**. You have you have **body**, which is your your **body** of your site. You got paragraph, which is a paragraph. You got **header**, which is your giant **header**, you know, for headers, like you know, like how a **header** works, you know. You got like hex codes you can use to change the color of, you know, your **text** or your par your paragraph. You got like links you can use, external links, internal links. Uh I I took a web I took a web uh design class in high school and we had to use **HTML** ages ago. But yeah, like I remember those. You had to do like **header**, **body**, **text**, paragraph, do all this like weird stuff. It's just how like you build a website. You use **HTML**.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:10:04"}}
40. [1:11:12] Role of Javascript.

> That's an hour. Okay. Explain the role of **JavaScript** in a web page. **JavaScript** keeps the page running. It allows you to click links. You know, it makes the it makes the web page interactive. Like, you know, without it, the web page would just be like, you know, just a web page. Like, like if you ever get a PD a PDF file, it's basically just like looking at read only. Like, you can't click it. You can't interact with it. It's just read only. That is it. And you can't interact with it. You can't click the links to it. It just it's just static. It's just nothing. Explain what a **web browser** is and what it is for. A **web browser** is practically a doorway, a window to a different place. You know, go to Google, go to **YouTube**, you know, here's another window. Go to miniclipip.com to play those flash **games** that don't work anymore. go to go to some website to where you want to watch videos of god knows what, you know, it's a window. It's like you use it to get to another place. Google, that's literally all it is. Google is just a giant like where do you want to go? Got it. I'll take you there. It's like a taxi driver, you know? You get in, you tell it where he goes. He's like, I **boss** sends you there and there you go.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:11:12"}}
42. [1:12:58] HTTP versus HTTPS.

> Explain what **HTTP** is and how it differs from **HTTPS**. Literally, the difference is just the S. You know what the S stands for? **Secure**. That's what it is. **HTTP**. **HTTPS**. It's **secure**. Means like you're safe. No **one** can like get your **information** you know those who are visiting the site you know they can't get your **information** if it doesn't have that people can if they know how to do that I don't know how to do that but yeah that's basically the differences **one** is **secure** **one** isn't



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:12:58"}}
43. [1:13:39] What is HTML?

> explain why **HTML** **HTML** is how you build a website you know I talked about the **tags** that's literally how you build a website and then you use **JavaScript** to make it interactive and work to where people can click things, you know, and it doesn't look like a dead page.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:13:39"}}
44. [1:13:59] What is CSS?

> Explain what's **CSS** that's ah it's **computer** No. Ah, no. I forgot this **one**. Oh, I feel so sad. Um, **CSS** **CSS** **CSS**. Damn it. I don't remember. I can't remember. I know. I'm going to get mad once I look this up after I send this.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:13:59"}}
45. [1:14:25] What is the web cookie?

> I'm going to get so upset. A **cookie** is basically like cache, you know, like you know, it it contains a specific **data** to where your **web browser** will remember and it uses it to like advertise stuff to you like like I like candles, you know. I always love lighting up a candle in my room to smell nice. You know, my **cookie** here will like literally be like, "Oh, he likes candles." Hm. you know, you know, whenever he goes to a site, you like say I go to Amazon, it's going to be like, "Oh, look, there's some candles for you." Like, let's you know what? Let's actually let's let's do a little test, you know? I mean, I'm already an hour in, you know, why not have a little fun here? Okay, like say candles, you know? Let's go to half grandle candles. I'm US like look at all these nice candles. Like my PC is going to remember that. I mean I hope so. I have Ublock Origin so I don't know. Okay. Same. Okay. Go back. Go here. Okay. Okay. Some candles. That **one**'s nice. Love letter. That's pretty cool. Get out of here. Okay. Now, let's go see if this works. If not, I'll look stupid. Oh, wait. Did you see that? Did you see that? Did you see that? Hold on. Did you see that? I did. For a split second, it asked for Amazon candles. Hold on. Hold on. Did you see that? I saw that. That was funny. Hold on. See how I It was there for a split second. I swear to Christ. And usually, you know, you know, it's it's keeping track of what I used to get. You know, energy drinks, energy drinks, you know, it it keeps it keeps ties of what you look at and it stores that and it keeps it for keepsake.



{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:14:25"}}
46. [1:16:38] Three web applications.

> Name **three** applications you have used and explain what makes them useful. **Three** web applications. **one** **GitHub**. It's literally how you do coding. Literally, as you can see here, this is all my I can't say that word. Basically, all my work that I do, you know, it allows them to give me **homework** assignments. I go in there, I do them, I send them a message, say I'm done, and all they do is click this and then they can go and see my work, send comments in, and then boom. It's how a lot of people work. That's **one**. Another **one** is I mean web applications. Uh **text** editors like a MW helps me edit **text**. Uh same as Genie. Another good **one** is OBS. OBS is allowing this to happen. You know, you could see that I'm not cheating. you know, I have like my **screen** here to show you that I'm not like looking elsewhere for answers, you know, and it allows me to **record** myself to show that I'm not doing anything suspicious here. So, that's it. And uh I think that's the end of this. I think I don't know if I'm supposed to, you know, do anything with the the exam like boxes here. I don't know if I'm supposed to write anything here. I assume that's what this is for the video and then you know me using paint. I assume that works. I think because I have to go to the next question and talk about it and that judges on the grade. I don't know if like I was actually supposed to write in here and submit it. If so, I'm gonna have to redo this whole damn thing and it's going to be annoying. But, uh, that is basically it. Um, have a good **one**. Uh, yeah, that's about it. Uh, if you want to know, this video is an hour and **18** minutes, about me **19** minutes. Gonna be fun **processing** this with **YouTube**. Anyways, see you





{{ShowFrame:https://youtu.be/PLg2qrlvQyU time:"1:16:38"}}
