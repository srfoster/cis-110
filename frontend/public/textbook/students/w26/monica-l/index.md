

{{ExamBrowser:https://youtu.be/mrFh4ES6Bjs transcript_json:"/transcripts/w26/monica-l.json" }}

## Questions Answered

1. [01:03] Explain how the internet differs from the worldwide web.

{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"3:18"}}

> the **internet** is a term for the infrastructure.
> So, the computers, the servers, um, modems, fiber optic cables.
> Um, it's just the physical **hardware** of everything.
> I don't know if it's completely valid to say it's the physical **hardware** that creates the **internet**.
> So, I'm just going to say the physical **hardware**.
> Um, and I'm just drawing my diagram here that shows and put Um, so these are computers.
> Um, and these are just the lines connecting them, showing how they're all connected.
> And that may not be physically.
> It's just, you know, maybe this **computer** is connected to this **computer** and so on and so forth.
> Um, and then the **worldwide web** is like the infrastructure is here and it's what creates it and then the **worldwide web** sits on top of here.
> And the **worldwide web** is the connection of web pages that are on the **internet**.
> So I will show like this **computer**.
> Um draw this um let's do it this way.
> And I'm just going to draw a little **database** next to these web pages just to you know most web pages have some sort of **data**.


2. [03:00] How might a video be represented numerically?

> So, or actually I'm going to put a star, too, just so you can better see.
> And so, here these are um here these are computers.
> The **ones** here these are computers um with the stars next to them that show us that these computers are hosting or serving web **files**, **websites**.
> How might a video be represented numerically? Okay, I'm just going to create a line here that just separates the page cuz I have so much room left.
> Okay, I'm going to draw a video.
> Trying to draw it so it's somewhat easy to to see.
> Okay.
> Yeah.
> So, just want to show you as as I'm drawing.
> Um, maybe this is easier.
> Um, so this is my video.
> These are the multiple **frames**.
> Um, these are **pixels** here.
> This like dot or this grid looking thing.
> This is width and height.
> Um, and so it's easier if I write this out for myself in **steps**.
> Um, so step **one** would be to find the encoded value of **one** RGP **pixel** because if we can do that then we can encode the first frame.
> So number **one** would to would be to be encode encode **one** **pixel**.
> Okay.
> And now to start this **process**, we know that **one** **pixel** has an **RGB** value **RGB**.
> And so there's going to be a value.
> What that means is that there's going to be a value for red, a value for green, and a value for blue.
> And now we know that for L R **RGB** **values** it's **0** **2** **255** which tells us that each value for **red green blue** is going to be a max of **three** digits **3** digits.
> **Three** digits max um and I'm just writing the **steps** here.
> Um, so step **one**, encode **one** **pixel**.
> To be able to encode **one** **pixel**, we will have to encode the **RGB** value.
> Red, green, blue.
> There's going to be **three** **values** for red, **one** for green, **one** for blue.
> We know that each of those **values** is going to be **0** to **255**, which means the max number of digits is going to be **three**.
> So let's just say the first **RGB**.
> I'm just doing an example just to for myself.
> So let's just say the first **RGB** value or the let's say let's say our first **pixel** it's **RGB** value is um **12** uh **200** and **seven** and so we know we know that each value is max digits of **three**.
> So we will add each number that has less than **three** digits.
> So that would then look like 02 **200** and then 007.
> And then we mash it together which will then look like 01 **2** **0** 07.
> And so this is our final **result** of **encoding**.
> **Encoding** **one** **RGB** value.
> Okay.
> So now that we have **one** **RGB** value, we can then um do it for the whole first image.
> So, step **two**, probably should this so I'm not running out of space here.
> Okay, my support energy drink.
> Okay.
> Um, so since we found the encoded value for the first **pixel**, we can then duplicate that **process** that we did for that **one** **pixel** for every single p **pixel**.
> And so I mean, let's just see how many that would be.
> **1** **2** **3** **4** **5** **6** **7**.
> So the width is **7** **pixels**.
> **1** **2** **3** **4** **5** **6**.
> And the height is **6** **pixels**.
> So, sorry, I have to think about what to do next cuz um so we would what we would do is we would find the we would pad and mash the number the **RGB** **values** for every single **pixel** in this frame.
> But what we would want to do is to make sure that we get the dimensions right when we go to **decode** is to put the width and the height in the front.
> Um so it would be width height and then the encoded value for that whole image.
> Um, and then we would do this **process** for that **one** image for every single frame after.
> So there's **one**, **two**, **three**, **four**.
> So I have in my drawing **four** **frames**.
> Gosh, that lighting.
> Okay.
> Sorry.
> Um, goodness.
> I'm so close to a window that's not helping me at all.
> Just want to make sure.
> Okay, let me see if I can get closer.
> If that will help at all.
> Okay.
> Okay, that's better.
> A lot better.
> Um, so we encoded **one** **pixel** and since we know how to encode **one** **pixel**, we would encode every single **pixel** in the first image.
> Um, and to the front of that very large encoded number for this whole image, we would add the width and the height.
> So I'm just going to put step **two** would be encode every **pixel** in first.
> It's not frame.
> It's not image.
> It's frame.
> Encode every **pixel** in first frame.
> add height and width to to the front.
> And so once we have our complete encoded number for the first frame,



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"3:00"}}
3. [12:03] Explain what a zero-day exploit is.

> oh my represent too **quickly**.
> Okay, I got to reorient myself sometimes cuz I I talk so much and then I get confused.
> Um, so now that we have our encoded number for the first frame, we would repeat that for every frame after.
> And so in this example, I have **four** **frames**.
> We would do that for every single frame.
> And then we would mash that whole thing together.
> Yeah.
> feel like I'm Yeah.
> Explain what a **zero** day **exploit** is.
> Um, let's see if I can draw a diagram for that because I know that what a zeroday **exploit** is um is where a hacker takes vulnerable vulnerabilities of a takes advantage of vulnerabilities of a piece of **software** or a **program** that the developer doesn't know exists.
> So it could be um Okay.
> So I'm going to put new **program** and then like your examples I will do the hacker to have a hat just so we can differentiate.
> I'll put his **program** in the **cloud**.
> Draw the users here.
> Okay.
> So, basically what my diagram involves so far is here is okay.
> Um, so this is the developer that created this new **program**.
> This is showing him in the **cloud**.
> These are the users.
> This is the hacker.
> And so it could be that a **software** developer creates a brand new um banking app.
> Um, and it's brand new.
> it just launched and maybe a hacker found a vulnerability in the code that the developer doesn't know about.
> That's what a **zero** day **exploit** is.
> Um, but it could also be that it's a **program** that it's been that's been out for **40** years and a hacker still finds um an ex a vulnerabil vulnerability within the code.
> It just means that a hacker was able to find um a leak in the code that the developer



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"12:03"}}
4. [15:01] Explain what a web cookie is.

> doesn't know existed.
> Explain what a web **cookie** is.
> A web **cookie** is a small piece of **data** that the website saves to your **browser**.
> No, a web **cookie**.
> Yeah, a web **cookie** is a small piece of **data** that a website saves to your **browser**.
> Um, for the purpose of remembering user preferences and user preferences such as um maybe your tracking preference if you ask the website not to track uh your activity.
> It could be um stuff you've saved to your cart.
> It could be your language preferences.
> It could be um possibly that like um like your appearance preferences of the website.
> Some **websites** will ask like if you want light or dark mode.
> Um things like that.



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"15:01"}}
5. [16:03] Explain the role of a web browser with respect to caching, history, and privacy.

> That is what a web **cookie** is.
> Explain the role of a **web browser** with respect to **caching** **history** and **privacy**.
> Um I don't have a diagram for this but um hashing is when your **browser** saves um like screenshots and **caching** is when your **web browser** saves like screenshots and **text** **files** so that later on when you visit that website again, it doesn't take as much **bandwidth** to load the website.
> Um, so it saves it saves this **data** **locally** to your **computer** instead of having to use **bandwidth** to reload the website every single time.
> Um, **web browser** **history** is just your **web browser** saving a chronological load load a chronological log of **websites** that you have visited so that I mean you can you can see what you visited.
> If you you know need to go back to a website and you can't remember what it was, you can access your log your **history** log um to go back and find that.
> Um, as far as **privacy** goes, um, well, there's different things.
> So, um, some browsers offer like incognito mode and the **web browser** doesn't track what you do on the website.
> Um, and this is just the web **web browser** that's not tracking the **websites** that you visit.
> It doesn't save your **passwords**.
> Um, another **privacy** tool the



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"16:03"}}
6. [18:00] List some of the basic steps in the programming process from writing code to running it.

> web browsers off offer is um, **password** **manager** where um, I believe if you go to a website once you type in your username and **password**, your **web browser** will ask you do you want to save your username and **password** for next time.
> So, you know, you don't have to type it in again.
> Um, and typically with **password** managers, um, if you if you want to access them and see what, um, credentials you've saved for **websites**, you'll have to type in your **password** or, you know, your fingerprint on a lot of computers to access that.
> list some of the basic **steps** in the programming **process** from writing code to running it.
> Okay.
> So, I'm going to write out the **steps** like **1** **2** **3** **4** **5** first just because that's like what makes most sense to me.
> Um so so far what I have written is write **source code** um compile it and then I believe you would save it to **memory** write **source code** compile it I'm going to say Save.
> Save **program**.
> I don't know if I should say save **program** to **storage** or save **program** to I'm going to say to **storage**.
> Save **program** to **storage**.
> No, wait.
> That's not right.
> Sorry.
> Get my thoughts together.
> with some of the basic **steps** in the for running save **program** **storage** and the fourth step would be to is it **execute**? See it's **execute** ex I'm going to say write **source code** compile it slash interpret it save **program** to **storage** and then I'm going to say **execute** it slashrun **execute** slash run code.
> Okay, so so far I just have **steps** listed out just cuz that that's just what helps me.
> So I have wrote number **one**, write **source code**.
> **Two**, compile it slash interpret it.
> **Three**, save **program** to **storage**.
> **Four**, **execute**/run code.
> Um I know that there's many different ways that you could explain um the dev cycle.
> I have yes attended a full stack web development boot camp.
> That was a couple years ago.
> Um I have not coded since.
> Um, and we learned how to do back and front end in **6** months, which isn't very long to absorb knowledge when you have when you had had no technical um background previously.
> And so just just based off my **memory**, I just kind of want to ver verbally explain um well number **one** I suppose um for our capstone project we created a interactive website.
> Um what I did was number **one** I kind of like sketched out ideas of what kind of website I wanted to create and like what **elements** that would require.
> Um I think we use React.js.
> ReactJS.
> Yeah.
> Um, a lot of **HTML**, **CSS**, and so I I know at the time I kind of sketched out what I wanted my website to be and then went a little **bit** deeper and mapped out like what what I would need to make this website come to life.
> So, I knew I needed to be able to think about what **software** I needed to use and what **languages** I needed to use to to render it the way I wanted.
> Um, we definitely used React and I remember because some of the concepts really got me.
> Um, but anyways, after I did that, I started writing my **source code** um and kind of **starting from** the bottom and creating the bare bones of the website.
> um the **HTML** um and then some **CSS** **elements** to style it and then React to make it interactive.
> Um ran the code um many many many many times.
> Tweaked it many many many many times.
> Um and then I think we used render to deploy it I believe.
> Um but let me let me just just draw this diagram because so here is my developer.
> Um, we'll use an in **integrated** development environment to write our **source code**.
> So, I'm going to put a little arrow.
> Write code.
> Do a little box that says ID Okay, this diagram that I wrote is a little funky, but I will explain it.
> Um, okay.
> It's kind of a swirl of a of a diagram, but it kind of it kind of makes sense to me.
> Um, so this is the developer.
> The first step is writing code, and this arrow is **pointing** to an **IDE**.
> So, write code and then the second step would be to test the code.
> And that is where the question it points to a question mark just because every time you run your code um you know this section could run exactly how you expected and wanted it to but then another part might break.
> Um and then so you'll test the code or tweak the code and then you might fix what was broken but that might have broken something else or affected something else in a way that you didn't expect.
> So this kind of goes in a circle many many many times where you write your code, you test your code, you tweak your code, oh, you have to test your code again obviously, then you may have to tweak it again.
> And I feel like that cycle happens obviously so many times.
> Um, and then once you get your **program** to what it is you want, you **execute** your code.
> And so that little diagram um, makes sense to me.
> And obviously it's I did put compile slash interpret in my written **steps** but not in my um my physical diagram.
> Um I don't know enough about coding and where compiling and interpreting code comes into the **process** to be able to explain when or with what **languages** you would need to compile and interpret.
> Um so this diagram just is obviously very very low level.
> Um but it is the knowledge that I have of of writing code



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"18:00"}}
7. [27:00] Discuss the relative strengths and weaknesses of magnetic, optical, and solid state storage technology.

> and running it.
> Discuss the relative strengths and weaknesses of magnetical **magnetic** **optical** and **solid state** **storage** technology.
> Okay, for this I am going to do um like a chart because it I won't be able to remember everything.
> Um so we will split this into **three** columns and **two** rows.
> First **one** is going to be **magnetic**.
> Okay.
> **Magnetic**, **optical** and **solid state**.
> And then for this **one**, we'll do strengths.
> I'm going to put an S here and weaknesses and I will show you my um chart here just so you can understand what I got going on.
> Um **magnetic**, **optical**, **solid state**, S for the strengths, W for the weaknesses.
> Okay.
> So, some examples of **magnetic** um would be **hard drives** or floppy discs.
> I'm just going to put FD.
> Um and **hard drives**.
> I'm going to put HD.
> Um some of the strengths are that it's um low cost per gigabyte.
> low cost per GB.
> Um, cheap and **portable**.
> That's a strength.
> There's some other strengths of **magnetic** **storage** technology.
> Um it's low cost per gigabyte, cheap and **portable**.
> Um read write many time read write many times.
> Um you can rewrite the **data** many times.
> So, I'm going to say um many **data** rewrites.
> That's what I'm gonna put.
> Many **data** rewrites.
> And some of the weaknesses are uh well, it's easy to break because there's **moving parts**.
> So, I say easy to break.
> They're noisy.
> High **power** consumption to use.
> They're easy to break cuz the **moving parts** weaknesses.
> Um, they're noisy, meaning when you use them, they're loud, obviously.
> Um, and they have a high **power** consumption.
> Okay, let's move on to **optical**.
> For **optical**, we have our CDs, **Blu-ray**.
> So, for strengths, um, cheap, cheap, and **portable** again.
> CDs and Blu-rays are quite small.
> I mean, they're pretty easy to transport with you.
> Um, no **magnetic** interference is a strength.
> I'm going to put no mag.
> Yeah, no **magnetic**.
> **One** of the strengths is good for media distribution.
> media Dist um because I mean obviously previous to **streaming** and um you know Netflix and all that stuff um you had to go out and buy a **CD** if you wanted to hear a certain song or buy a DVD if you wanted a movie that you could have um instead of going on Netflix and **streaming** a movie um or or going on Apple TV and buying a movie, you'd have to go out and buy the DVD.
> So, wow, the days.
> Gone are those days, huh? Um some of the weaknesses are low **storage**, meaning it can't um it can't hold a lot a whole lot of **data**.
> Um again, easy to break.
> How many times have we broken or **scratched** a **CD**, you know? Um, also becoming obsolete.
> Hang on.
> Explain that in a second.
> What I say, what I mean when I say becoming obsolete for **optical** **storage** is that I mean with modern technology like I don't own a **CD**.
> I can't remember the last time I've owned a **CD** and I think that is the case for a lot of people.
> Um, I mean, even when it comes to video **games**, you know, I can't remember the last time I bought a movie on a DVD or on **Blu-ray**.
> I mean, I don't can't remember the last time I bought **music** in the form of a **CD**.
> Um, just with the technology that we have now, um, **optical** **storage** for media, it is I mean is obsolete.
> Um, it's very I don't want to say very rare cuz rare isn't the word I would use, but it's it's more common now to purchase your media via your device.
> Um, purchase it via a platform that has it on the **cloud**.
> Netflix, Hulu, Apple **Music**.
> So, solidstate **storage**.
> Um, SSDs That's the only example I can think of right now.
> SSDs.
> Um so for strength um we have **fast**, easy to access, silent, low **power** consumption.
> And for weaknesses, we'll say um more expensive, more exper GB.
> So, it is more expensive per gigabyte.
> Weakness is more expensive per gigabyte.
> limited **rewrite cycles**.
> Um, so for **solid state** **storage**, uh, for strengths, I have **fast**, easy to access, silent, low **power** consumption.
> Um, for weaknesses, I have more expensive per gigabyte, um, and limited **rewrite cycles**, so you can't delete **data** and rewrite it a bunch of times.
> And this is what my chart ended up looking like.
> And so when it comes to the **storage** options, **magnetic**, **optical**, **solid state**, um it really I guess depends on what your goal is, what you're using this **storage** for um and what uh kind of like what benefits are important to you um and what weaknesses are or are not important to you.
> Um and kind of what what use you need this **storage** for.
> So, they they have very different strengths and weaknesses.
> Um, it's kind of hard to compare them across the board.
> Um, explain how a **CPU** differs from a **GPU**.
> Again, I'm going to do a um



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"27:00"}}
8. [36:06] Explain how a CPU differs from a GPU.

> uh kind of a versus chart um while I talk through it.
> Um so for a **CPU** a **central **processing** unit** um it's very very very very very very **fast** at many operations sequentially.
> So a **CPU** is good at doing a lot of **tasks** **one** after the other.
> So for the I'm going to put good at I'm going to put good at many ops.
> Ops for operations.
> Good at many ops dash sequentially.
> Um, a **graphics **processing** unit** is also very very very very **fast** and good at a lesser number of operations, lesser than a **CPU**, but doing them parallel.
> Um, so all at the same time, so I'm going to put good at less ops dash parallel.
> Um, a **GPU** is also like for a **specialized** use.
> Um, oh, this is my little diagram so far.
> Gosh, sorry.
> I'm sorry about that lighting.
> It's not cool.
> Okay.
> >> Um, a **GPU** is good at um, a **GPU** is also for **specialized** use.
> And some of those **tasks** that a **GPU** is really good at is



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"36:06"}}
9. [38:03] Name three web applications you have used and explain what makes them useful.

> **processing** **graphics**, um **machine learning**, **AI**, and also um like mathematical **computation**.
> Name **three** web applications you have used and explain what makes them useful.
> Um Canvas.
> I use Canvas quite often.
> Um, what makes them Let me scroll down so I can have this here.
> Um, number I'm gonna write these down because my **memory** is is not my short-term **memory** that is.
> So, number **one**, um, Canvas is a **web application** I use quite often.
> I use it to check my **homework**.
> I use it to submit my **homework**.
> I use it to look at my class materials.
> Um, number **two** is Outlook.
> I check my email a lot.
> Um, this is also a phone app that I have as well.
> Um, I don't have the desktop app, but I have it in a phone app.
> Um, but I do check it mainly via the web via the **web application** way um to check my email of course.
> Um, number **three** is I use chat GBT a lot.
> Ch chat GBT um isn't a desktop app that I have.
> Um, it is a phone app that I have and I use it for for I mean really just learning.
> Um, Google is still like up there for me, but chatbt does give a straight answer.
> I do realize I do find that I have to it takes me longer to um confirm that the **information** chat GPT gives me is correct because I do double check it.
> Um, I do, for example, if I ask Chad



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"38:03"}}
10. [40:01] Explain what a rootkit is.

> GPT, um, how a how a **processor** works and it gives me an answer, um, I'll read it, but because it's obviously something I'm trying to learn and I don't know, I will then Google it to verify that the **information** is correct.
> So, but yeah, those are **three** web applications I use and why they are useful to me.
> Explain what a **rootkit** is.
> Okay, I'm going to section this off and draw.
> Okay, let's do let's draw it this way.
> Okay, so first we are going to draw a box for **operating system**.
> We're going to do **hardware**.
> We're going to do do these boxes.
> I actually different shape.
> It's okay.
> I'm going to show you my diagram.
> It's back.
> Okay.
> So this is my diagram so far where this is **hardware**.
> This is my **operating system**.
> These little boxes that are coming off the **operating system** are **device drivers**.
> Um this is **program** **one**, **program** **2**, **program** **3**, Apollo, sorry.
> Um **program** **1** **2** **3**.
> And these are **threads**.
> And so, um, **malware** is any **program** that is designed and created for malicious, negative, ill intent.
> Um, and typical **malware** gets installed at the user level on computers.
> Um, but a root kit is **malware** that installs itself very deep into your system.
> I'm going to draw a



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"40:01"}}
11. [42:00] Trace the execution of assembly code and explain what happens.

> little box here just to just to show on this diagram where a root kit would be installed.
> right there.
> It gets installed on the level of the **operating system**.
> Um, yeah, that's what a **rootkit** is.
> Normal **programs** **install** themselves on like the level of **programs** that are more user level and then a **rootkit** installs itself on the level of the **operating system**.
> Um and then okay so trace the execution of this assembly code and explain what happens.
> I'm going to write out this assembly code so that we can follow it and then I will show what happens.
> So **four**, **three** is jump **zero**, **four** is **zero**, and **five** is **eight**.
> Um, okay.
> So the first the first direction is load **four**.
> Um, and so in the **program** counter, I'm going to put PC.
> Yeah.
> Okay.
> So, I've just written out the **instructions** so far.
> This is the assembly code.
> And then this PC is **program** counter, which I believe lives in the **CPU**.
> Um, so the first step is to load **four**.
> So load the value **stored** at 04.
> So we have **zero** and then we add **five** which is **eight**.
> So plus **eight** which obviously is **eight**.
> Um store **four**.
> Um so we loaded **four** which is **zero**.
> So in our **program** counter we have **zero**.
> And then we add **five** which is **eight**.
> So we added **8** to **zero**.
> And then we're we'll store it at **four**.
> So cross out **zero**, put **eight**, and then **three** is a jump back to **zero**, which says to load **four**, which which is **eight**.
> We're **loading** **eight**.
> And then we add **five**.
> So **8** + **8** **stored** at **4**.
> So now we're storing **16** at **four**.
> Jump back to **zero**.
> So what this is doing is basically um **loading** the value in **four**, adding **eight** to that value, storing it, and then starting again.
> Um so it's basically just adding **eight** and then adding **eight** to the value previously **stored** at **four**, storing that new value and continuing that cycle, which



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"42:00"}}
12. [45:00] How might an image be represented numerically?

> is a lot.
> Um how might an image be represented numerically? So, similar to I'm going to draw.
> I really like um how we learn this with drawings because it really helps my **brain** understand to see something visually versus just hearing it.
> **1** **2** **3** **4** **5**.
> So my width is **five**.
> **One**, **two**, **three**, **four**.
> And my height is **four**.
> Um, and so again, um, step **one** would be to encode the first **pixel**, which we know.
> So I'm just going to put encode first **pixel**, which we know is going to be an **RGB** value.
> and **RGB** value will be **0** to **255**.
> So we know that the max number of digits in each value is going to be **three**.
> So the first **one** it could be um just for an example it could be red is **16**, green is **100** and then blue is **five**.
> um will pad each number that doesn't have **three** digits which would then turn that **RGB** value into 016 **100** and 005 like this and then mash the whole thing together to encode it because we know that the max number of digits is **three** for each value.
> So it would be **0** **1** **6** **1** **0** **0** **0**



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"45:00"}}
13. [47:01] Explain the input-processing-output model and its significance.

> **5**.
> And then once you do that for each **pixel**, you could encode the whole image by doing that to every single **pixel** and mashing that number together and adding the height and the width to the front of that encoded number.
> And that's how you would encode an image numerically.
> Okay, the **input** explain the **input** **process** **output** model and its significance.
> Well, I guess I can draw another diagram for this.
> Um, so the **input** **process** **output** model just explains in the most simplest terms how a **computer** works.
> Um, which is the user of the **computer** puts some sort of **information** into a **computer**.
> The **computer** does some sort of **process** to it and then gives us an **output**.
> Um I'm gonna



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"47:01"}}
14. [48:01] Explain the difference between a compiler and an interpreter.

> So this is I, this is P.
> And then we will do Oh.
> Um so it would look like this if we were to draw this in a diagram.
> So the **input** would be anything that the user inputs into the **computer**.
> So I could pull up my **calculator** **calculator** and put **five**.
> Um and then the **process** that I want done to it is to add **five**.
> So **5** + **5** in our **calculator** and the **output** would obviously give us **10**.
> Um its significance is just the fact that it tells us what in the most simplest terms like what a **computer** does.
> Um we give the **computer** some sort of **information**.
> It does some sort of **process** to it and gives us some sort of **output**.
> Okay.
> And then explain the difference between a compiler and an **interpreter**.
> So, I'm gonna do a I'm going to do a um diagram for this but I will explain it as I go.
> Um so the left side we'll do compiler and on the right side we'll do **interpreter**.
> Um so **one** thing to note is that both compilers and **interpreters** are **programs** that are unique in the fact that they take **programs** as **input**.
> Um which is not very common.
> Uh so we'll do in this little cute box here **program** **text** and we're working on compiler first.
> So **program** **text** goes into the compiler and then out become out or I guess the **output** is more **program** **text**.
> So the compiler doesn't actually run this **program** that it takes in **program** **text**.
> Okay.
> So let me put a little aster here.
> Doesn't doesn't run because it doesn't So for compiler my little diagram **program** **text** we put it inside the compiler it does not run this **program** it just does whatever to it whatever **process** to it and it gives us more **program** **text** that's what a compiler does and for our **interpreter** it does run so but still we hi Apollo we do **program** **text** because that is what goes in an **interpreter** and in and **interpreter**.
> That's a mouthful, isn't it? **Interpreter**.
> And then out comes effects.
> And it does run.
> It does run this **program**.
> So, for example, if I were to put a **program** into an **interpreter** that says start my laundry at **4**:00, um



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"48:01"}}
15. [51:00] How might letters and words be encoded numerically?

> the **interpreter** would start my laundry at **4**:00 because that's what the **program** said to do and it ran that.
> the **interpreter** runs that **program**.
> And that's the difference between a compiler and an **interpreter**.
> How might letters and **words** be encoded numerically? Okay.
> Well, I guess I will write these **steps** out.
> So, actually, let's do this.
> I believe there's **26** letters in the alphabet.
> So, we'll just do A B **C** D E F G dot dot dot Z.
> Um, we could encode each.
> So A is **1**, B is **2**, **C** is **three**, D is **four**, and so on and so forth.
> But the reason that that's not a good idea when we want to encode letters in **words** is because the max number of digits is is **two** because there's **26** letters in the alphabet.
> Um, and so the issue when **encoding** letters would be that if you were to put Well, here, let's do it this way.
> **1** **2** **3** **4** **5** **6** **7** and then Z is **26**.
> If we wanted to write bad.
> If we wanted to encode the word bad, it would be **2** **1** **4**.
> If so, if we encoded ABC D the alphabet **1** **2** **3** **4** **5** **6** **7** **8** **9** **10** **11** **12** all the way to **26** and we wanted to encode the word bad, it would be 214 because B is **2**, A is **1**, and D is **4**.
> But the issue with that is that when decoding, you could take you could **decode** that to be the numbers 214 where **21** is whatever that letter is and then **four** is D.
> Or you could take it as **2** and **14** and **decode** the wrong word.
> So really, if we wanted to encode the alphabet and we know that there's **26** digits, so the max number of digits is **two**, we would want to do 01, 02, 03, 04, so on and so



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"51:00"}}
16. [53:02] Randomly generate a two-digit decimal number and convert it to binary.

> forth until **26**.
> Um, let's see.
> Okay.
> Randomly generate a **two**-digit **decimal** number and **convert** it to **binary**.
> Okay.
> Well, I guess I'll pull up a random generator.
> Let's see.
> Random **two**-digit **decimal** number.
> Yeah, random **two**-digit **decimal** number.
> Let's see.
> Okay, so **47** is the number it gave me.
> So, our **decimal** equals **47**.
> Um, and so we want to do the placeholders.
> So **2** to the **0** **2** to the **1**, **2** to the **2**, **2** to the **3**, **2** to the **4**, **2** to the **5**.
> I don't know how far up we'll need to go, so I'm just going to **2** to the **6**.
> I think that's actually far enough.
> But we'll just go **one** more and say **2** to the **7** because I'm not quite sure.
> Um, so **2** to the **0**.
> So any even number to the **power** of **0** is going to be **1**.
> So that's **1** **2** **4** **8** **16** what? **32**.
> **16** * **2** is **32**.
> Okay, now I got to check.
> **6** * **2** is **12**.
> **2**.
> Yeah, it's **32**.
> And then **64**.
> Okay, so **2** to the^ of **6** is big enough because **64** is obviously bigger than **47**.
> Um, and let me start to just show what I'm doing so far.
> So I just wrote down my **decimal** number **47**.
> And then these are all the placeholders.
> Um, **2** to the **0**, **2** to the **1**, **2**, so on, **2** to the **6**.
> Um, and what those equal out to.
> So **1** **2** **4** **8** **16** **32** **64**.
> So **64** is obviously too big.
> We can't take **64** out of **47**.
> So there is no **binary** number in the place of **2** to the **6**.
> But **32** is.
> So we'll do **47** - **32** which is **2** **3** **4**.
> Wait **2** **3** **4** **5** **6** **7** which is **5**.
> **4** - **3** is **1**.
> And so in that placeholder is **1**, which leaves us with **15**.
> **16** is too big.
> Obviously **16** can't come out of **15**, so we'll put a **zero**.
> But we can take **8** out of **15**, so we'll put a **one** there.
> **8** away from **15** is



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"53:02"}}
17. [56:00] What is a transistor and how does it work in computers?

> **7**.
> Yeah.
> **5** **6** **7**.
> That leaves us with **seven**.
> And then **four**, which we can take away from **7**.
> **4** **5** **6** **7** **3**.
> We can also take a **two** out, which leaves us with **one**.
> And we can obviously take a **one** out with which leaves us with **zero**.
> So **47** converted.
> So the **decimal** **47** converted to **binary** would be **1** **0** **1** **1**.
> Yeah.
> **1** **0** **1** **1** **1**.
> And this is just how I did it.
> So I did all the placeholders and then here's my my **math**.
> And these are the **binary** digits.
> Okay.
> What is a **transistor** and how does it work in computers? Um, a **transistor**.
> A a **transistor** is a tiny **electrical switch** that controls the flow of **electricity**.
> And this is what she looks like.
> Make sure I draw big enough and label.
> Okay, so this is a very simplified version of what a **transistor** looks like.
> So this is the **base**.
> This is like a little switch here.
> And this is the **collector**.
> And this is the emitter.
> Um, and what a **transistor** does is like I said, it controls the flow of **electricity** um, and allows computers to store and represent **information** using **binary** um, with vol with voltages of high and low.
> So if you were to add or if you were to allow a small **current** here, I put an arrow to show.
> If you were



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"56:00"}}
18. [58:02] Discuss file naming conventions and the role of file extensions.

> allow if you were to allow a small **current** of **electricity** here, it would then activate a switch here where I just circled and it would allow a larger flow or wow a large larger flow of **electricity** here.
> And that's how it works in computers.
> It's like uh the guardian, the **gate** guardian or **electricity**.
> Discuss **file naming conventions** and the role of the **file extension**.
> Um well, a **file extension** just tells us what kind of **data** is in that file.
> So that that's really all it is, but I will write it out to show you what it looks like.
> Um so it could be like there's different **file naming conventions**.
> You can use spaces between your letters.
> You can use camel case where you have no spaces but the capital of each word is or the first letter of



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"58:02"}}
19. [59:03] Explain how a web application differs from a traditional desktop application.

> each word is capital.
> Um so my schoold doc would obviously be a word document.
> Um this is the **file extension**.
> So it would look like this.
> If you were using camelc case for a word document this is what it would look like.
> Capital m my capital s school.doc.
> doc, which would tell us that it's a word document.
> There's also a txt file.
> Um, a PDF PDF.
> Um, I think there's like a XMT.
> Basically, the the **file extension** just tells us what kind of **data** is inside of that file.
> And you can use camelc case or spaces um when when naming a file just to make for to make it clean and to make it **organized**.
> Um explain how a **web application** differs from a traditional **desktop application**.
> Well, in order to access a **web application**, you need to access it through a **browser** using a URL.
> So something that we do on a daily basis.
> Um canvas.com, **youtube**.com, outlook.com, ulta.com, google.com, chatgpt.com.
> That's how you access a **web application**.
> Um which is through a **browser**.
> A traditional **desktop application** requires the user to download it.
> Um, so you you download a **program** and it gets installed onto your **computer**.
> Um, with web applications, you don't have to do any maintenance as far as updates because when you if I were to visit a **web application** today and there was an update and then I visited it tomorrow, I would be visiting the most **updated** version of it.
> Um, with the **desktop application**, you do have to manually update it.
> Give your



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"59:03"}}
20. [61:00] Describe the stored program concept and why it distinguishes computers from other simpler devices.

> you have to give your give the **program** permission to update.
> Describe the **stored** **program** concept and why it distinguishes computers from other simpler devices.
> Um, the store **program** concept is just the concept that computers store their **instruction** and their **memory** both in **RAM**.
> So it stores its **memory** in **RAM** but also gets its **instructions** from **RAM**.
> Um and I I will show a picture for this but um the reason it distinguishes computers from other simpler devices is because you could run a **program** like OBS on your **computer** to to stream your gaming or **record** your exam like I'm doing.
> Um, but then you could also close that **program** and I could run another **program** to play Sims.
> Um, the concept just shows that computers can be used for so many different things based on whatever **program** you're running.
> Um, and it distinguishes it from simpler devices because um, other devices obviously can't do that.
> For example, if you have a **calculator**, a **calculator** is **hardwired** to do, you know, all these mathematical operations, but you can't use a **computer** to game.
> Um, you can't use a blender to um as a pressure cooker.
> Um, that's what makes computers different is that they're **programmable** and they're flexible.
> And I will just show a simple diagram of the **CPU** and the **RAM** because you can't talk about **one** without the other.
> So this is my baby diagram of



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:01:00"}}
21. [63:00] Explain what assembly language is and how it relates to machine code.

> the **CPU** and the **RAM**.
> Um the **CPU** fetches, **decodes**, and then **executes** its **instruction** from **RAM**.
> Um but it also stores **temporary** **memory** in **RAM**.
> Okay.
> Explain what **assembly language** is and how it relates to **machine code**.
> Um well **machine code** is **binary** and **assembly language** is just like a shorthand simpler version of **machine code** and the reason for its existence is solely for humans.
> Um, it's really really hard for humans to understand **information** that's represented in the form of **binary**.
> And so **assembly language** exists for us to be able to write code and then have it be interpreted into **binary** for the **computer** to understand and then be able to **execute**.
> Explain the role of **JavaScript** on a web page.
> Well,



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:03:00"}}
22. [64:02] Explain the role of JavaScript.

> I'm just going to add **HTML** and **CSS** into this **one** because it really doesn't make sense to talk about **JavaScript** and not have talked about **HTML** and **CSS**.
> Um, and the way I like to remember what each **one** does is **HTML** is the bones and the structure of a web page.
> And I like to think about **HTML** as um the person.
> So, the person is **HTML**.
> They are the bones, the structure, kind of like the main content, the main content.
> And then **CSS** is like the clothes that a person is wearing.
> It's their hairstyle.
> It's their makeup.
> It's, you know, the jewelry that they're wearing.
> Um, **CSS**.
> Oh, that's a bad looking shirt.
> Okay, so **HTML** is the person, the bones, and the structure.
> And then let me write **CSS** here just to explain.
> **CSS** is the way that content and that um



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:04:02"}}
23. [65:02] Explain how a web browser interacts with a web server and database.

> that the way that content looks.
> So the clothes, the pants, the hair, whatever.
> It's just the way it visually looks.
> And then **JavaScript** is in this diagram, the personality.
> **JavaScript** is what allows users to interact with a web page or when we click a button and **data** loads.
> Um that's **JavaScript**.
> So the personality in this structure explain how a **browser**, **web server** and **database** interact.
> Okay.
> Well, I have to draw a diagram for this because it's a lot.
> Um, so I'm first drawing the **cloud** and I am drawing a person with their **computer**.
> Um, I'm going to draw a **database** which is going to be the **DNS**.
> Um, so when a person types in a URL into their **browser**, **youtube**.com, um, what happens behind the scenes is their **computer** will send a request to the **domain name** system asking for the **IP address** that's associated with **YouTube**.com.
> Um, the **DNS** will then send a response back to the user's **browser** and say, "Hey, you know, **YouTube**.com is located at 193.**1**.**2**.**4**." Um, and then the **browser** will send another request, an **HTTP request** to the **server** that serves **YouTube**.
> Um, **HTTP**.
> Actually, let me just So, this is my person.
> That's their **computer**.
> That's the first request that they send after they hit enter, which gets sent to the **domain name** system.
> This is the response back that says, "Hey, **YouTube** is located at this **IP address**." Um, and then this is the **HTTP request** the **browser** then sends to the **computer** that serves **YouTube**.
> Um the **server** will then send an **HTTP request** or response back to the **browser** and say hey here the here are the web **files** for **YouTube** um which contains **HTML** **CSS** **JavaScript** and then our **browser** renders it.
> And obviously when we type in a website into the **browser**, the **browser** loads in what **5** seconds, **10** seconds.
> Um these requests happen very very very very **fast**.
> Um but also in there when our **browser** sends an **HTTP request** to the **server** that serves **YouTube**, um maybe that request that we made also requires **data**.
> So what would also happen before we get the response back is that the **server** that serves **YouTube** would query **data** from this **database**.
> Um



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:05:02"}}
24. [68:00] What is the point of the fair use doctrine?

> so this **server** that serves **YouTube** would query this **database** for whatever **information** we're asking for.
> the **database** would send it back and then when the **server** sends back the web **files** for **YouTube**.com it would also send that **data** and everything would get rendered on our **browser** and it all happens very very very very very **fast** so the **fair use** doctrine um see what's the point of the **fair use** doc what's the point of the **fair use** doctrine list the factors that characterize **fair use** Um well the **fair use** doctrine just states how somebody can use copyrighted material.
> Um so if a person were to write an article slandering another person and that person were to write an article and quote and use a quote from that original article, it it wouldn't it wouldn't be **copyright** for using just a quote.
> It would be it would be **fair use**.
> Um, some of the characters or some of the factors that characterize **fair use** would be if you copied somebody's **program**, did you, you know, if you copied the entire thing that you would just be copying their work? you'd be cop copying **copyright** copying copyrighted material.
> Um, but if you were to take someone's **program** and spin it and make it your own and make it something that is different than the original work, that would be **fair use** because you use their **program** as a basis, but you didn't copy the entire thing and then just start serving it.
> Um, another factor of **fair use** is did your work affect the **copyright** holders ability to make money on their material? So, if you were to h trying to think of an example, if you were to I can't think of an example for being able to affect the amount of money that the **copyright** holder would make.
> Another factor is distribution.
> Um, so **copyright** holders hold the right to control how their material is distributed publicly.
> Um, so



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:08:00"}}
25. [71:01] Explain what malware is.
26. [71:01] What is binary and why do computers use it?

> how it's enacted, how it's used, how it's **displayed** to the public.
> Um, they have that right when it comes to copyrighted material as well.
> Explain what **malware** is.
> Well, **malware** is for **one**, I think, a madeup word that's just you that has just mashed malicious and **software** together.
> **Malware** is just any **program** that has been designed or created for malicious, ill, negative intent.
> Um, **Trojan** horses, a root kit, viruses, any **program** that spoofs.
> It's just **software** that was designed and intended for malicious use.
> That's it.
> That's all.
> What is **binary** and why do computers use it? **Binary** is a **number system** that represents **information** in



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:11:01"}}
27. [72:01] Explain the role of an operating system.

> **zeros** and **ones**.
> So just **two** **values**.
> Um, computers use it again because of **transistors**, which I drew here.
> And I go, so I'm not going to draw it again.
> This **transistor** here with the **base** **collector** and emitter, this is what computers use it.
> So **binary** has **two** states, **zero** and **one**.
> And **transistors** allow computers to store **information** in **binary** because of **voltage** levels.
> So there's a high **voltage** which could be **one** and there's a low **voltage** or no **voltage** which could be **zero**.
> Explain the role of the **operating system**.
> My least favorite question.
> Let's see.
> Um, okay.
> So, we will do this diagram here that has **hardware** at the bottom and then we'll just do a bigger box cuz in my mind the **operating system** is bigger than **hardware**.
> We'll do **OS** and then we'll do P1, P2, P3.
> We'll do some **device drivers** that will be represented as triangles and we'll do some **threads** on those **programs** too just to make our diagram a little **bit** more meaty.
> Okay.
> So in this diagram that's the **hardware** that's the **operating system**.
> These triangles are **device drivers** for various things.
> **program** **one**, **program** **two**, **program** **three** and then these little tiny tiny tiny boxes are **threads**.
> Um the **operating system** has many many roles.
> Uh **one** of its roles is it's provides an abstract layer between **hardware** and **software**.
> So the user of their the user of a **computer** gives permission for what **programs** can access **hardware**.
> So the **operating system** um kind of dictates or **manages** what **programs** can access our **hardware**, what **programs** can access our **storage** **files**.
> Um, the **operating system** also runs other **programs**.
> I really like to think of the **operating system** as like a **task manager** or like the **boss**, the supervisor.
> Um, because the **operating system** gives **programs** time on the **CPU**.
> The operating



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:12:01"}}
28. [75:03] Explain the six degrees of separation.

> system decides the **operating system** is very much like a supervisor.
> Honestly, the more that I think about it, it says, "Hey, you get **20** minutes on the **CPU**.
> Hey, you get **45** minutes on the **CPU**, you get an hour on the **CPU**." And then it also has to figure out how much **CPU** time itself gets.
> So, very very interesting um question.
> So, it's actually not not my least favorite question.
> Um the **operating system** has many many jobs and we need to give it more credit.
> um explain the **six degrees of separation**.
> The **six degrees of separation** is an interesting concept which I don't know whether it's false or I mean or whether it's fact or just like I don't know I'm curious if the **six degrees of separation** is false or not because to me to me it seems I don't know how can it be fact.
> Anyways, I'm going to draw a diagram because this is a good **one** for So let's draw for **one** a very um not the best in drawing of a portion of the globe.
> Um the **six degrees of separation** just explains how no **two** people are more are less connected or is it more connected? The **six degrees of separation** explains how no **two** people are connected by more than **six** degrees of social connection.
> Um, let me draw my little humans.
> We will give this We will give this little person um so this is my diagram.
> This is the globe if you will.
> These are people on different areas of the globe.
> This person is Justin Bieber.
> Okay, that's Justin Bieber.
> The **six degrees of separation** just explains how like this person over here who is just a normal person.
> They're not famous.
> They're not anybody of importance.
> They're a normal individual in society.
> They can be connected to Justin Bieber through **six** degrees of social connection.
> So **one** **2** **3** **4** **5** and then **six**.
> That's what **six degrees of separation** explains.
> It's a very interesting concept that I will need to do more research on because I don't I'm



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:15:03"}}
29. [78:02] Explain the difference between an absolute file path and a relative file path.

> not convinced that it's fact or proven.
> Explain the difference between an **absolute file path** and a relative **file path**.
> I like this question.
> I don't know why, but I do.
> Um, I'm just going to write out what an **absolute file path** looks like and what a relative **file path** looks like.
> So, an **absolute file path** is the path to a file from the **root directory**.
> The relative **file path** is the **file path** from the **current** directory.
> So,



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:18:02"}}
30. [79:01] Explain the difference between RAM and ROM and why most computers have both.

> So this is an **absolute file path**.
> So, okay, this is um **C** slash **C** slash users/monica/**documents**/school.
> So, that is an **absolute file path** to um the file folder school.
> And then a relative **file path** could look like um a relative **file path** to the folder school would just look like this.
> Say we're already in **documents**, it would just be **documents** dash school because it's showing us the **file path** from the directory that we are in which would be **documents**.
> Explain the difference between **ROM** and **RAM** and why computers have both.
> This question I had to study hard for.
> So, we're going to do a like a versus for this **one**.
> **RAM** **ROM**.
> So, **RAM** is obviously **random access memory** and **ROM** is read only **memory**.
> So **RAM** is **volatile**, **ROM** is nonvolatile.
> And what I mean by that is **RAM** is **volatile** in the sense that **RAM** is **temporary** **memory**.
> Um, **RAM** provides space for the **CPU** to work very very **quickly** and **efficiently** on whatever applications are in use at that moment.
> Um, and once the **computer** is off or loses **power**, that **data** is gone.
> It gets erased.
> Um, let's do **fast**.
> **ROM** is nonvolatile in the sense that the **memory** that's **stored** in **ROM** does not get lost.
> It's **permanent**, if you will.
> Um, it contains **instruction** that the **computer** absolutely needs.
> **ROM** is a lot slower, but it's it's necessary to have it because if you didn't have **ROM**, when you hit the **power** button on your **computer**, if it didn't have the startup **instruction**, how would how how would your **computer** start? It wouldn't have it wouldn't have the the **data** or the **instruction** to start.
> Um, it's slower.
> **ROM** is um typically read only.
> So you're not writing a lot of most users aren't writing **memory** or writing **data** to **ROM** or storing **data** in **ROM**.
> So you I'm just going to put usually read only because I'm sure you can store stuff in **ROM**.
> I don't know how to do it.
> I don't know what the use case would be.
> Um, for **RAM**, I'm going to say provides provides space for **CPU** to run **programs** currently in use.
> So the reason that they need both um well they serve different purposes.
> A **computer** needs **RAM** because that's where it stores its **permanent** **instruction** that it will always need like starting up a **computer**.
> Um like how to use and run certain **hardware** I believe is **stored** in **RAM**.
> um **ROM**.
> I mean, **RAM** is necessary because that's what allows us to do everything we do when our **computer** is on.
> So, for example, at this moment, I'm running OBS, but I'm also running what what's my **browser**? Microsoft Edge.
> Um, and it looks like I also have my file folder open in the background.
> So, these are all being **stored** in **RAM** right now.
> Um, the **CPU** is is giving time to each of these **programs** that are open.
> OBS, Microsoft Edge, and my file folder.
> So, yeah, we absolutely need both.
> If we were to store startup structure in **RAM**, well, when our **computer** is off, it would lose that startup **instruction**.
> We wouldn't be able to start our **computer** up again.
> So, they're very important for different



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:19:01"}}
31. [84:00] How might colors be encoded numerically?

> reasons.
> How might colors be encoded numerically? Um, well, we know that a color is a **RGB** value.
> So, red, green, blue.
> We know that the max number of digits is going to be **three**.
> Max is **three** because each value is going to be **0** to **255**.
> So, let's say we have a **RGB** value of 71.
> **200** and **four**.
> That's our **RGB** value.
> 71 red, **200** green, **four** blue.
> We know the max amount of digits in each value is **three** digits.
> So, we want to pad each number that does not have the max amount, which would be the red and the blue value.
> So that would turn this original **RGB** value into 071



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:24:00"}}
32. [85:01] Design an efficient file organization system for a specific use case (academic, professional, creative).

> **2000** 04.
> So after padding each number that does not have the max amount of digits in its value, it looks like that.
> Sorry, intricate show you.
> Um and then we want to mash it together which would then look like 07 **1** **2** **100** **0** **0** **4**.
> So to encode a number numerically will look like that at the that would be the end **result**.
> Okay.
> Describe an efficient file organization system for a specific use case.
> Do I have room on the back? Okay.
> I feel like I don't need a lot of um Okay.
> So, I'm going to start from the top.
> So, Monica is the directory that we're in.
> And then in Monica I would have um **documents**.
> And then in **documents** I would have school.
> Um in school I would have a file called winter **26**.
> And then within winter I would have **two** folders called English 235 and in the other folder it would be CIS 110 and in English I will have **one** folder called articles another folder called memos because in my English 235 class we have a lot articles and a lot of memos.
> Um, but then I also might have a folder going back up **two** directories to school that is um, spring **26**.
> Um, and then maybe another **one** that is fall **26**.
> So, let me go back to OBS so I can sure you can see what I'm showing you.
> Um, this is really how I um **organized** my **files** for school.
> Um, so the top directory is Monica.
> Within Monica, we have a folder called **documents**.
> Within **documents**, I have **one** folder called school.
> School contains **three** folders.
> **One** folder being winter **26**, spring **26**, and fall **26**.
> So within my school file folder, I have **files** based



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:25:01"}}
33. [88:00] Explain the concept of cloud computing and how it benefits users and developers of software.

> on the quarter.
> Um, since the **current** quarter is winter 2026, I have **two** folders to represent the **two** classes that I'm taking, which is CIS- 110 and English 235.
> Within English 235, I have **two** more folders to **organize** the **data** that's in that, which is articles and memos.
> Um, and then these don't have anything under because I'm not sure which classes I'll be taking for those quarters quite yet.
> explain the concept of **cloud computing** and how it benefits users and um developers.
> Okay, so let's do the **cloud** and let's do a **server**, a **database**.
> We'll draw some people that manage the **cloud**.
> We can and let's let's uh draw a develop with his **computer**.
> And let's also do Oh, that's a very small big house.
> So, **one** benefit of **cloud computing** is that um this gosh that's frustrating.
> Okay.
> See if that calms down.
> Can we even see that? Okay, there we go.
> So, this is my developer.
> This is the **cloud**.
> And so **one** benefit that developers have of **cloud** co so the concept of **cloud computing** is basically just renting space **storage** time on somebody else's **computer** for example um **Amazon web services** is a **cloud computing** service um and let's say this developer wants to use AWS to create and deploy a mobile app.
> He could do that.
> Um **cloud computing** is pay as you go.
> Um and a benefit to the developer is that um it's lower cost.
> Um he doesn't have to um deploy his app from his **hardware**.
> He may not have the developer may not have the **hardware** to be able to do this.
> Um, so he can pay AWS to do have all that hold all that for him.
> He can pay AWS for their **storage** um for their uh **security**.
> Um it might be easier for a hacker to hack somebody's home **computer** than it is to hack AWS.
> Um, and so that's a benefit right there um to **cloud computing** for you for developers.
> Um, for users, well, this is a house.
> That's a **computer**, a **computer**, and that's the homeowner on their phone.
> Um, a benefit, I mean, **one** benefit to users, which is something I do personally, is I don't have enough **storage** on my physical phone.
> I don't have enough **storage** **locally** on my iPhone.
> And so I pay $**2**.99 a month for an extra **200** GB of **cloud** **storage** because I don't want to get rid of my photos.
> I don't want to delete my photos.
> I don't want to delete my **music**.
> I don't want to delete contacts.
> I don't want to delete **apps**.
> I don't want to do



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:28:00"}}
34. [92:01] Explain what spoofing is.

> that.
> So I pay a small fee every month for extra **storage** that's held in the **cloud**.
> Another benefit to users is that um they can access **data** that's **stored** in the **cloud** from from any any device.
> Not any device.
> Not any device.
> Um, they probably couldn't do it from an iPod touch if those still exist.
> Maybe.
> Actually, I don't know if iPod touches do they have **internet**.
> Back when I had an iPod touch, they were **music** only.
> That's it.
> So, what I'm trying to say is that if um somebody is watching Netflix on their cell phone, um they could then switch to watch that on their um TV and then maybe if they want to switch again, they can watch it on their laptop.
> Um, so that is a benefit to users when it comes to **cloud computing** is being able to access that **data** on different um different devices.
> Um, **spoofing** is just the act of someone pretending to be someone or something.
> Um, yeah.
> And so I'm going to employ this drawing here from the lessons.
> This is person A B.
> Person A.
> Our spoofer is going to have a **black** hat.
> Okay, this is **spoofing**.
> **Spoofing**.
> **Spoofing**.
> That's really frustrating.



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:32:01"}}
35. [94:00] Explain what a web browser is and what it's for.

> So this is person A and that's their letter that has person B's name on it.
> And then this is a spoofer here that is pretending to be person A and sending a letter that looks exactly the same to person B.
> That's what **spoofing** is.
> explain what a **web browser** is and what it is for.
> Um, well, a **web browser** is just a piece of **software** that allows users to navigate and access **websites** on the **internet**.
> Um, I can draw a little a little diagram for the not a not a good diagram, a very pretty **one**, but



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:34:00"}}
36. [95:03] Discuss the impact of AI-generated text, images, and videos on truth and trust in digital communications.

> so this is just a simple diagram.
> Um, and I drew it kind of messily because I've already drawn it.
> Um this is just a person in their **computer** where they are using a **web browser** to access a website um on the **internet**.
> This is the **server** sending the web web **files** back and then their **web browser** **rendering** ren **rendering** **rendering** it.
> It's funny.
> Okay.
> Discuss the impact of **AI** generated **text** **images** and videos on truth and trust in digital communications.
> Oh gosh.
> I mean **AI** generated material has made it very very very hard for any person um to trust what they see on the **internet**.
> Um you know there was a point in time maybe a year or **two** ago or a couple years ago when you could kind of tell that something was **AI** generated.
> um you could tell.
> But now there are **pictures**, videos, audio material that are **AI** generated that you would never know was **AI**.
> You would never ever know it was **AI** because it's so good.
> Um, and the fact that **AI** has gotten so good at creating material that's so believable, um, has made it a lot harder to trust what you see on the **internet**.
> I think it has always, in my, in my opinion, I think it's always been a good practice to not, for **one**, believe everything you see, read, or hear, especially on the **internet**.
> um just because things can be put on the **internet** by anybody, by literally anybody.
> Um, but now that **AI** is kind of evolving and getting bigger and getting more popular and getting easier to use by your average



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:35:03"}}
37. [97:00] Randomly generate a four-bit binary number and convert it to decimal.

> user, um, it's more important than anything to really be aware of the material you're consuming and what like what you're believing, you know, what you're seeing and believing.
> randomly generate a **four**-**bit** **binary** number and **convert** it to **decimal**.
> I thought I did this **one**, but it was actually the opposite where we converted a **decimal** into **binary**.
> Oh, let's Google This is annoying.
> **1** **0** **1** **0**.
> Cool.
> Okay.
> Sucks out.
> **One** **0** **1** **0**.
> So, so we'll do **zero**



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:37:00"}}
38. [99:09] Discuss how AI algorithms shape what information people see online.

> Okay.
> So, that's kind of that's my **process**.
> See if it'll So my **binary** number was **1** **0** **1** **0** and the **decimal** that the the 4bit **binary** number **10** **1** **0** converted into **decimal** is **10**.
> Discuss how **AI** **algorithms** shape what **information** people see online.
> Um well I feel like this is every website you visit.
> I mean, a lot of people will have noticed that when they download a new app or go on a new website, you they will get a notification that says, "Will you allow XYZ to, you know, track your **data** and and things like that?" I normally click no.
> I don't want anything tracking anything that I'm doing, you know.
> Um, but **AI** **algorithms** shape everything that we see online.
> Um, if you Google macaroons, you're probably going to see a lot of ads for macaroons after that.
> Um, and it's kind of annoying.
> You know, I think **AI** **algorithms** are used by **websites**, by organizations, by companies to keep the user there, to keep them scrolling, to keep them browsing inventory on a website where you buy stuff, to keep them watching videos.
> Like on **YouTube** for example, you'll watch a video about cute kittens and um maybe then you go to another video, but then you'll see a lot of video recommendations for cute kittens.
> Um **AI** **algorithms** shape what we see online so



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:39:09"}}
39. [101:01] Define basic database terminology: records, rows, columns, and tables.

> that we are seeing what the **AI** thinks we want to see.
> It takes in what we Google, um, what we search, what kind of videos we watch, things like that, what we do on our **apps**, what **apps** we use.
> Um, **AI** **algorithms** are shaped to keep us online, to keep us scrolling, buying, googling, watching, listening, all those things.
> Um, it's made to keep you and not let you walk away.
> define basic **database** terminology records, rows, columns, and tables.
> Okay, I will I will draw a um diagram for this.
> Let's see if this is enough room to do it though.
> Um so let's yeah, let's do this.
> So a **table** is where **data** is **stored** in a **database**.
> Um and records and rows is the same.
> It's **one**.
> And I will I'm just going to put um cars and then columns is like attributes about those records, those rows.
> So maybe here we have color make um **four** or **four**-door um automatic gasoline um sunroof, you know.
> So in the **database** these are individual



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:41:01"}}
40. [103:01] Explain what HTTP is and how HTTPS differs from it.

> records also rows.
> Um these are columns which are attributes about each **record** or **row** and this whole thing is the **table** which is a relational **database**.
> Um and there can also be **information** within this **table** that leads to another relational **table**.
> explain what **HTTP** is and how **HTTPS** differs from it.
> **HTTP** is **hypertext transfer protocol** and um it's a type of respon or it's a type of request and response um and it also details how a **HTTP request** should be formatted um how it should be sent how it should be like the guidelines for **HTTP request** in response **HTTPS** is just **hypertext transfer protocol** **secure** so it's just **encrypted**



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:43:01"}}
41. [104:01] Discuss issues with creating a strong password.

> it's scrambled discuss issues with creating a strong **password**.
> Um well most times when you create a strong **password** I mean strong **password** is objective based on what account you're making on what website um different **websites** and **software** and application have different um guidelines on what strong **password** is to them but some very common **ones** are to be at least **12** characters long to include a special character to have a number in it to not have a space or to have a space um to have a capital or uppercase characters in there.
> Um, and the issues with this are just that a lot of people have hard time remembering.
> I mean, I rely on my **password** **manager** very much,



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:44:01"}}
42. [105:02] Describe how an online intrusion may take place.

> which I should actually clean out soon, but I I rely on it very much.
> I very much I know a lot of older people that don't like technology.
> They don't like the evolution of technology.
> They don't want to learn how to use technology.
> Um have a hard time with this.
> Describe how an on describe how an online intrusion might take place.
> You may do so by describing a specific system and the **steps** an intruder would take to compromise it.
> Or you may describe a general methodology that intruders use.
> Okay.
> um let's just draw a person with their **computer** and let's type in Gmail at the top and we'll draw here with their **computer**.
> Let's do Okay, so this isn't a very good this isn't the best diagram, but I it's the best diagram I can come up with to explain my scenario.
> Um, so this is a person.
> This is their **computer**.
> This says gmail.com.
> Um, and this person is receiving an email that is actually from this hacker.
> And this email contains a download link um, that says, "Hey, in order to access your Navy Federal account, you know, click on this link." and it's a download



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:45:02"}}
43. [107:01] Explain what encryption is.

> link to a desktop app.
> And this hacker has put a **Trojan** horse that's attached to that link that that user has clicked and downloaded.
> And now they have the user has downloaded a **Trojan** horse and has had no idea because they received an email um that they thought was from their bank from Navy Federal and it has um now installed this **malware** onto their **computer** where the hacker can now, you know, do not do whatever he wants but um he can take advantage of this person and what is on their **computer**.
> Explain what **encryption** is.
> Um, **encryption** is just scrambling **information**.
> Um, but I will draw a diagram for this.
> So, **one** common **encryption** is to we'll draw A and B.
> do thing again.
> Um, so what I mean there's different ways to **encrypt**, but here's **one** way where person A has a key and person B has the same key.
> Person A wants to send a letter to message B and they **encrypt** it which basically turns their message into gobblelydegoop.
> They send this over that unsecure space to person B and person B will use that key to unscramble the message unscramble the **information** to find out the real



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:47:01"}}
44. [109:01] Explain what HTML is.

> value of what that message holds.



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:49:01"}}
45. [109:02] List five common HTML tags and explain what they do.

> Well, I already explained h what **HTML** is in the question regarding **JavaScript**, but I will go back to my drawing of it and explain it.
> **HTML** is the bones, the basic structure of a website.
> And I like to think of **HTML** as the person whereas, yeah, I'll just show you the my drawing again.
> So **HTML** is the person.
> **CSS** is the clothes that that person wears, their hairstyle, the jewelry they wear, the makeup they put on.
> It's how that content and structure look.
> That's what **CSS** is.
> And then **JavaScript** is the personality of that person, how that person interacts.
> Hypertext uh **markup language** is also **HTML**.
> List **five** common **HTML tags** and what they do.
> Okay.
> that.
> **One**, **two**, **three**, **four**.
> Uh, oh gosh, I got to think of **one** more.
> Okay.
> Um, let me pull you back up.
> Okay.
> So the **five** common **HTML tags** I have is **HTML** which wraps the whole page in **HTML**.
> Um div, which is like a **divider**, like a space, which you would typically put between **two** paragraphs.
> Um P1, I actually meant H1, which is heading **one**, which is the largest **header** on the page.
> Um so yeah, that's actually meant to be H1.
> Let me change this.
> Sorry, I screwed up here.



{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:49:02"}}
46. [111:07] Explain how Wikipedia articles are written and edited.

> Um, so H1, which is the largest largest heading on a page, so it will draw the eye more cuz it's the biggest.
> Um, and then this uh **HTML** tag is P, which is paragraph.
> So you could wrap **text** in a P and make it a paragraph.
> Um, and then heading **two**, which would obviously be the second largest heading on a page.
> Oh.
> Oh, this is the last question.
> Okay, I was like, so um, explain how Wikipedia art articles are written and edited.
> Um, well, Wikipedia is ran by volunteers.
> Um and it's a very community **collaboration** based um system where every let's just draw a simple diagram for this.
> Every article um can be connected to another article.
> And **one** thing that is cool about Wikipedia articles is that every version of that article is saved.
> Um so this is this is just a bunch of articles connected to each other and these are all the ver all the histories of this **one** page.
> Um Wikipedia articles are reviewed by volunteers.
> Um there are certain guidelines to editing and writing Wikipedia articles.
> The **information** obviously has to be factual.
> Um, and if you write if you write a Wikipedia article or edit a Wikipedia article and it is not factual, um, these volunteers can revert that Wikipedia page to **one** of its previous versions.
> Um, and PE users of Wikipedia can view older versions of that that **one** Wikipedia article, which is cool.
> Um, and Wikipedia also, you know, takes donations and stuff to keep it running because again, it is volunteer ran.
> It's not, you know, it's not a corporation or organization.
> So, yeah.
> And I think that's it.
> **46** of **46**.
> Oh, wait.
> I set it to **70**%.
> So, I feel like there should have been more questions.
> Why? Let me just double check on while I'm still **recording** because I did set it to **70** questions or **70**%.
> **70**% from each.
> Okay.
> Yeah, **70**% from each.
> Okay.




{{ShowFrame:https://youtu.be/mrFh4ES6Bjs time:"1:51:07"}}
