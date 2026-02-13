

{{ExamBrowser:https://youtu.be/1Gc0eE1405k transcript_json:"/transcripts/w26/jacob-d.json" }}

## Questions Answered

> Hello, my name is Jacob Deming and this is the CIS 110 midterm exam.
> Uh that means that we're going to be doing 70% of the questions and we're going to be not sorting them by chapter or showing any answers.
> We're going to be doing it straight up.
> Uh first thing that I want to show off is here's the room.
> It's very exciting.
> It's very messy.
> Uh you can see my second **monitor** over there.
> All it has on it is the recording software.
> so that I know that everything else is working fine while I'm recording this.
> It would suck if it just stopped.
> Uh other things that I have are these dry erase uh note cards which I may use to uh write down some of the uh words and whatnot because hand tremor makes it harder to write like small.
> Um then I have the patent paper.
> Uh I have a blacked out coin like that.
> So that we can generate some **binary** if we get that question.
> And then if we get the uh fourdigit one, we'll bring open Google RNG where the max is 99.
> The minimum is I'm gonna go with like minimum of like 11 because we want a twodigit.
> Um yeah, with that out of the way, let's get started.
> Uh hopefully this won't be super duper long or at least if it is super duper long, hopefully it's interesting.
> Um so yeah, let's generate our exam.
> Okay, this is actually I like this as a starting point.
> Uh because when we're talking about computers, ultimately we're talking about an a machine.
> We're talking about something that is using **electricity** in order to perform logic and remember things.
> Uh and the way in which we do that is we use a system called **binary**.
> Now **binary** is actually a numeric system.
> It means that uh we're working with two digits.
> In this case it's zero and one.
> Normally we are working with uh a 10digit system where it's 0 1 2 0 1 2 3 4 5 6 7 8 9.
> That's our uh like those are digits that we can use.
> But the reason that we use uh **binary** is actually because it is easy for us to uh use **electricity** to mimic this type of logic because you can think of zero as being like off and one as being on.
> So if we were stuck with a system where uh you had nothing but like like a Morse code system where we have nothing but like the ability to turn off and on a switch, we could use that in order to uh send **binary** messages.
> Uh in like modern computing, zero is usually going to be seen as like low **voltage** that you usually means like uh I believe it's about 3 to five uh I think it's amps.
> Uh so basically anything that is within a low **voltage** area we the computer is able to read in as being a zero.
> Meanwhile, uh the one is higher voltages.
> And because we can send uh send and receive uh **electricity** at low voltages and high voltages and we can like differentiate those two things.
> We're able to send long uh strings of coded me of code which is just coded messages basically coded instructions.
> Uh and then we can have a computer do perform some logic on that, decode it, turn it into uh actual information.
> Uh let's see.
> Oh, cool.
> So, we're getting really lucky in terms of uh in terms of this.
> So, if you were ever wondering like, okay, well, how does that exactly look? Inside of a computer, there is a thing called a **transistor**.
> And the **transistor** has a **input** and an **output**.
> And then in the center, this thing here, that is a gate.
> And it's actually a really useful way like it's a really useful term because that's uh this gate is basically going to be determining whether or not some current is able to pass through the **transistor** or isn't able to pass through the **transistor**.
> So basically we can send like a low **voltage** or high **voltage** into this and a low **voltage** may not be able to pass the gate and therefore it could be read as uh it being off and therefore a zero.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"6:10"}}

> Meanwhile a high **voltage** could be sent through and it will be able to cross the gate and that will then be read as being a one.
> So through the usage of **binary** **electricity** and these very very simple machines where that there are literally billions of these within your computer.
> Um we're able to actually create very complex programs and very complex uh **hardware** and software uh for usage with computers.
> Sadly, we did not get three uh **zeros** in a row.
> Uh I'm gonna look ahead a little just to see, do we have colors? That's fine.
> **Binary**.
> Okay.
> So, the reason that I wanted to jump ahead a little bit and check if we had this is because we've already kind of started to explain this.
> So **binary** yet again is this system of **zeros** and **ones** and uh it's determined by sending low voltages or high voltages through uh some through transistors basically.
> And what that allows us to do is we can construct strings of **binary** and that **binary** will **translate** into some kind of value or command which I mean a command is kind of a type of value.
> And so like when we're talking about like why do computers use this? We're t we're using **binary** because every single bit of your computer and every single bit of code that's on it will at some point be converted into **binary**.
> it will always be converted into some string of **zeros** and **ones** in order to then send out some type of value, do some type of calculation, perform some kind of command.
> And so like when we're talking about like why computers are using this, well the simpler something is, the easier it is to like uh the easier it is to kind of evolve on.
> Um so like we can always create complex uh we can create complex commands through just using **binary** and converting that into different **values** and we're going to go through the **process** of converting those **values**.
> Uh now we'll uh discuss that Okay.
> So, do we have the fourdigit? Yes, we do.
> Okay.
> So, how in the world is this done? How are we how are we encoding and decoding uh **binary** here? So let's put a box around this for right now.
> And remember this is kind of the center of all things.
> This is **binary** is just the way in which computers work.
> It is basically just computing.
> It is **binary** and voltages and uh eventually we'll get into uh how you can store that within something like a magnet or a **optical** form uh or even with uh like captured electrons which is pretty cool.
> So let's talk about how things get turned into **binary** or how **binary** can be turned into something.
> The way in which we're going to do this is we're going to use this guy.
> Uh we're going to uh the dark side here is going to be a zero.
> The light side will be a one.
> We're doing a two-phase system.
> So we have one zero.
> I'm trying to flip this in a way that it can just be seen on screen.
> One.
> And then exciting.
> And it rolled away and it still wants to roll away.
> Okay.
> And then zero.
> So this is our four this is our fourbit **binary** number.
> Uh a bit just means one uh one digit of **binary**.
> So if you have four you have four bits.
> If you have eight you have eight bits.
> 64 is 64 bits.
> So on so forth.
> So 1 0 1 0 doesn't really look like much of anything, but we can **translate** it into an actual number by uh simply like determining what these places stand for.
> So since we're dealing with **binary**, we have the **ones** digit, the tw's digit, the four's digit, and the eighth digit.
> And essentially what you do is you're going to take the **binary** number.
> So we have one uh eight.
> So that means that we have eight plus zero fours.
> So that's a zero.
> one two so that's a two and zero **ones** so that is also a zero and that translates into the **decimal** value of 10.
> So you can already see just based upon uh these one **zeros** these on offs these high **voltage** low **voltage** numbers that were able to create more complex numbers with them.
> So that's that **process** is what's known as decoding because we have this is coded in terms of what humans would think of code like we can't really you uh we can't read **ones** and **zeros**.
> It's not the logic the logic that we would normally use.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"13:38"}}

> Uh but the computer can.
> So this is encoded for the uh for the computer and must be decoded by us in order to understand.
> But of course we can do this the other way around as well.
> which is here.
> So, we're going to randomly generate a twodigit **decimal** number and then convert that to **binary**.
> So, we're essentially going to reverse this **process**.
> We're going to take the 10 and then turn it into **binary**, except we're going to choose a much more challenging uh number than 10.
> So, we're going to go over here, and we have uh our random number generator for uh Google, and it's going to generate a number between 11 and 99.
> Actually, I'm going to we're going to make this a little more interesting.
> We're going to make it like 33 to 99.
> You'll see why.
> If we got 11, it would be pretty dull.
> Uh, and I think that higher numbers have better explanations.
> So 63, I like that.
> Honestly, that's a really good one.
> I really like I like 63.
> And I like it because it's one short of 64.
> And you'll see why that's useful.
> Okay, so we have 63.
> So, we're going to write our original number down there and we're going to convert that into **binary**.
> And that means that we're going to create bunch of bits.
> I might actually need that.
> So, I'm gonna and we're going to convert this by going through and we're going to say this is the **ones** place.
> You got the two's place, the four's place, the eighth place, the 16th's place, and the 32nd's place.
> Now the next one would be the 64th's place, but we would never need to uh to go to the 64th's place because our number is less than 64.
> So we only ever need the we only need six bits in order to uh convert 63 into **binary**.
> Uh and the way in which you do that is you basically take 63 and you see does 32 go into 63? Yes, it does.
> It goes in one time.
> So that means that our new number or the remnant of that number is 31.
> Does 16 go into 31? Yes, it does.
> And that means that we have let's see 16 15 Then we go, does eight go into uh 15? Yes, it does.
> So, put a one in the eights column and 15 minus 8 is 7.
> Do we have a four? Yes, we do.
> We do have a four.
> So, we have another one.
> And you're going to be seeing you're probably seeing the uh pattern here now.
> Uh and why I like that we got 63.
> Um do we have two inside of three? Yes, we do.
> We do have a two inside of three.
> That gives us one remainder.
> Is there a one in one? Yes, there is.
> That means that 63 is the pretty unique value.
> Well, I mean all the **values** are unique, but this is a pretty exciting value of one one one because uh 63 uh just so happens to be 13 32 + 16 + 8 + 4 + 2 + one.
> So, it's literally the highest uh it's the highest bit value we could uh store inside of uh six bits.
> So, that's that's kind of exciting.
> I really like that.
> I'm I'm happy that I got that.
> But yeah, you can see just between these three boxes here how like **binary** already is very powerful in terms of like its ability to turn into numbers or like to re uh to be turned into numbers or to uh be turned into **binary**.
> Like it's it's just very versatile.
> it carries uh it carries a lot of power to it and it's still just only two digits.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"19:17"}}

> So like that switch is still really really basic and really really useful.
> Um so yeah, let's let's see.
> Uh you know what? Let's talk about this for a second.
> So, we've talked about how **electricity** uh like can be used to represent data or represent information, but you can't very well or at least it used to be the case that you couldn't very well trap a charge inside of something like once you turned off the power that got that would wipe the memory.
> Basically, that's what's called uh being a **volatile memory** source.
> It is affected by the power.
> But there is something very very closely related to uh **electricity** that could also be used to store **values** and that is **magnets**.
> See, when you have a magnet and you have a **magnetic** field, you're able to actually trap some data inside of it.
> And that data is usually north up or north down.
> And as you might have already imagined, if you can store if you can store two **values** inside of a magnet, then you could store **binary** inside of a magnet.
> So we could basically say like up down up up down like that is that can be **stored** within a **magnetic** field.
> We can manipulate a **magnetic** field to have these different **values** inside of it.
> And that means that we could have one zero one zero because you can read and write magnet uh you can read and write the date the information uh you can read and write the uh **magnetic** field of a magnet uh with what's known as like a readr write head.
> We'll probably get into that later.
> Uh but like by uh storing data as up down up down we can store that data as 1 0 1 0 and as such we can hold like **magnetic fields** are stable more stable at least than **electricity**.
> So, uh, this will this will stay every single time that we, uh, turn the power off, which means that so long as we have a magnet and we have a way to read the mag, uh, the fields **stored** on that magnet, we can actually store data as **binary**.
> So that's how we can actually like that's how we made computers not only work as machines that you turn on and off.
> We made it so that you can actually have some kind of permanency to the data between one session of turning it on and off and another session of turning it on and off.
> Okay.
> So, the reason why I wanted to get that out of the way before moving on to like how might we uh pair numbers like a 2D **coordinate** and code it as a single number.
> The reason I wanted to do that was because we're really talking about like more complex uses of **binary** at this point.
> So like basically imagine we can store one 0 1 0 in here.
> So we have 10 **stored** within this magnet.
> But we need to do more than just store **values** like 10.
> We need to store uh complex **values**.
> we need uh and the way in which you can do that is through in uh encoding the data even further.
> So like adding an extra layer of encoding.
> So let's say that you have a **graph** of some kind.
> So you have x and y axis and then we have a point on that **graph**.
> This is pretty like common for mathematics that you can have like some type of position recorded as like an x and y **coordinate**.
> Well, if we want to store that, we need to come up with a way in which to convert it into something that is **readable** by a computer.
> We can't send parentheses x uh comm, y parentheses into a computer because that's not **binary**.
> But we could convert this into a number and then convert that number into **binary**.
> So in this specific case we have the **coordinate** of uh one comma one very very easy **coordinate** there and we want to turn this into a number.
> Well, there are t there are literally infinite ways of turning one uh one comma one into a number.
> I mean there uh there are tons of mathematic ways in which to do it.
> But the easiest way would be to determine what the max of your **graph** is and then what uh in order to then convert this into two different **values** that will have the same length no matter what.
> So let's say that our our **graph** can go to 999.
> So it can it basically we need to have three **values** that are **stored** in it.
> So one comma one would become 0 0 1 comma 01.
> And then if we wanted to turn this into one number, we could always just go 0 0 1 0 0 1.
> And because we have like uh a set way of decoding this of basically going okay like take the first three val like take three digits and those three digits represent the x **coordinate** and then the next three digits represent the y-**coordinate** that can then be basically padded and mashed together in order to be like decodable.
> So it's important that when you make a code like this that it is also able to be traced back.
> So someone can be able to look at 001 001 and go oh because the rule is that it's a value between 999 and 0000 001 means the one place and 001 means the one place.
> That's our **coordinate** system.
> That's how uh we could convert it.
> And this would work for like any type of uh value.
> So like if we wanted to let's just come up with we'll go like 842 comma 461.
> We can encode that into 842 461.
> And so long as there is logic to it and the logic is known, it can be decoded back into its original uh **coordinate** state.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"22:37"}}

> So let's take this another step further.
> Right now we only have two different **values** that are being **stored**.
> So how might colors be **stored**? Well, turns out that there is already a system for this.
> It's called R GB and that stands for red, green, blue.
> So, if you remember like the basic color wheel, these are the uh like you may be thinking like shouldn't it be red, yellow, blue? But in reality, when we're working with uh like color **values**, it's actually red, green, and blue that do uh make up the differences because those are the val those are the type of cones that exist inside of her eye.
> Um yellow is actually a combination of these three.
> Uh and in RGB **values** they can be from zero to 255 each of them.
> So basically R is going to be some value between zero and 255.
> G is going to be some value between R and 255.
> And then B will also be a value between zero and 255.
> And since we can then put **values** to that.
> So let's go with like 100 200 and then 30.
> We can use the same method that we used for our **coordinate** system in order to turn it into a padded and mashed encoded form.
> So we would have 100, 200, 030.
> And that number would represent our RGB **values**.
> And because there is an internal logic to it, it's able to be decoded.
> And because it's able to be decoded, it's considered to be a like it's considered to be a solid enough way of storing that data because we can always turn this number into **binary** by just extending the number of bits that we use.
> And that's how you get a color to be encoded.
> Looking to see if there are any chapter **zeros** left.
> I don't There might be one.
> Nope, there is not.
> Okay, so that is kind of the conclusion to our chapter zero uh information.
> We probably will refer back to this again.
> Um and just know that this whole system down here, we can add more levels of of abstraction to it.
> We can make it so that it is going to then be a grid of these RGB **values** and that would just be like multiples of these nine digits uh like repeated and we would know every nine digits is uh what would be known as a pixel.
> Uh and then we could make it even more complex by uh giving like a width and height in order to say like this many pixels by this many pixels is like an image and then we could add a frame rate and that becomes a video.
> Um but in terms of what was asked for this is the basics.
> This is kind of like the basics of all computing.
> And so when we get into this next section, we're now going to actually be talking about all of the systems that are uh systems and soft uh systems and **hardware** that are built on top of **binary** **electricity** and magnetism.
> So in this case, if you remember kind of from the beginning of the course, we had a little guy and we had a square that represents his computer.
> Chapter zero was somewhere down here like it's it's beneath the computer.
> the computer like is using all of that uh all of all of this in order to create the experience for the user.
> So now we're actually going to be talking about how a user interacts with a computer and how a computer uh is used to create programs and **hardware** and whatnot.
> Uh do we get do we have any of the **CPU** **ones** first? Okay, that's that's not a bad one here.
> I'm going to bring out another card in order to kind of figure out what order we want to do things in.
> I think 12 is probably going to be pretty early.
> Uh eight is going to be after that **device drivers**.
> **Device drivers** are probably going to be somewhere over here.
> Difference between **logical** and **physical storage** models.
> Okay.
> Uh you know what? We're gonna do that after eight.
> I think eight is the is this 21? Yeah.
> So eight is going to lead into 21.
> Uh basic steps of programming 12 is assembly.
> So we're going to go 12 into 22.
> **file naming conventions**.
> I'll be after 21.
> So that's 23.
> Okay.
> **Multitasking**, **multiprocessing**.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"33:44"}}

> That's going to be before 12.
> **Absolute file path** is see what is okay.
> Yeah, **absolute file path** can be after both those.
> Absolute fire path is 27.
> Okay, that is honestly that's probably here.
> IPO.
> We're gonna start with that.
> I have a feeling because that is pretty Wow, we're getting a lot of the file **ones**.
> It's actually kind of a bummer.
> I like the file **ones** I don't find as I mean it they're interesting, but they're not as interesting.
> **RAM** and **ROM**.
> I think that is going to be here.
> IO devices.
> Honestly, that could go where wherever the heck it wants.
> Okay, so we're gonna we're gonna try starting this out with 33.
> Let's put that over there.
> So **input**, **process**, **output** the uh and its significance.
> Honestly, I would kind of consider this to be almost a trick question.
> Um because it is probably the most important factor uh in all of computing is the **process** of inputting something, having it be **processed**, and then have it be uh **output**.
> like it's it's such a core fund uh fundamental like thing that like we can even say that it's like occurring within nature.
> Uh cuz quite literally you can have like here's the sun and that uh the sun emits uh sunlight which is then taken in by a tree.
> A tree that looks remarkably like broccoli.
> Um and then that can be turned into oxygen like because photosynthesis basically is occurring.
> So sunlight goes into the tree produces oxy oxygen sunlight inputs uh into the tree which then **processes** it and turns it into oxygen.
> a user puts some type of data into the computer.
> The pu the computer **processes** the data and then it uh returns it.
> Um in fact, we're going to we're going to make this even like we're going to connect this to another one of them and we're going to connect it to the **input** devices.
> Um, in that we have a user and their keyboard.
> It's a beautiful keyboard with two keys.
> The two key keyboard.
> It's the **binary** keyboard.
> The byboard.
> Uh anyway, we have a user, we have his **input** device, uh his two his **binary** **input** device.
> Uh that is then taken in by the computer.
> So, we're going to like Oh my god, this is the ugliest computer of all time.
> It's taken in by the world's ugliest computer.
> Actually, it wouldn't even honestly it wouldn't even be that because it would be it's going to be taken in by like it's taken in by like the **operating system** really and then the **operating system** actually has its own IPO thing that's going to be happening in there.
> But for our intents and purposes like it then comes out on like a screen.
> So we'll make a screen here and since he hit zero, it puts a zero on the screen.
> So guy hits zero on his **binary** **input** device.
> It goes into the computer is **processed** by the computer uh and then it displays a zero on the screen.
> Keyboard inputs computer **processes** **output** is the **monitor**.
> So like that kind of gives you an idea of uh just how much and how significant a the **input** **process** **output** thing is because it's literally occurring within all of this.
> In fact inside of here I would actually say that there is a continuous uh **process** of or there is a uh **input output** **process** that's occurring inside of the computer level as well and that can be discussed.
> Let's see this one was 40.
> Oh, and so like this is important because users need a way in which to interact with the computer.
> If we didn't have a means to interact with a computer, a computer would really only be useful for one thing, which would be the thing that it was originally created for.
> So like we'd have to have a computer made for literally every math equation uh out there because like we wouldn't be able to **input** different math equations.
> It would just be like here's this box that just tells you what oneplus 1 is.
> What a useful box.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"11:05"}}

> By having the ability to say like uh what is 3+ one like now we can actually make it so that this is a working machine.
> It is a machine that is using some logic and could perform useful uh like it can perform useful calculations and whatnot.
> Uh, so yeah, without without user **input**, there really wouldn't be much of a reason for the computer to exist.
> Um, I mean, yeah, because even when we're talking about like the original Turing uh computer, we're still talking about something that could take in data, **process** that data, and then return something back.
> and you like the data that passed into it was variable.
> So yeah, it's not until you talk for this long that you realize that talking makes you thirsty.
> All right.
> So that's those two and then so that was 33 and then I said 35 is next.
> Okay.
> So **RAM** and **ROM**.
> So whenever we're talking about like the internal components of a computer, a lot of the time what we're going to be talking about are there are two like major components and then there are a bunch of uh kind of less significant but still very powerful components.
> So in this case what we have is and I'm actually going to make this bigger because we're going to be using this a lot.
> Like a lot a lot.
> This diagram is almost like the entirety of uh chapter one.
> Honestly, it's it's a pretty major diagram.
> Okay, let's do that.
> Going to have an arrow that's leading to this.
> And this big old thing, which actually is not all that big in uh the computer at all.
> This is the **CPU**.
> It's the **central processing unit**.
> Uh it has a ton of well it doesn't have a ton, but it has what are known as uh registers inside of it that basically allow it to perform tasks one at a time.
> And it's very good at performing those tasks one at a time.
> Uh and we'll get into that in greater detail when we start talking about like how code is actually run.
> Um, but it's important here to just know that the **CPU** is pretty much the the mechanism that is going to run uh the it is the piece of **hardware** that is going to run your computer.
> It's doing all of the actual like processing and whatnot.
> There are some cases in which it doesn't do the processing in which it passes it off to like some subcomponent um or the uh **OS** passes it off to a subcomponent.
> But in the case of most things, they're going to be going into the **CPU**.
> And then over here we have another component of the computer that is probably if it is just as important uh it's just as important as the **CPU** in that like without these two systems like you could theoretically go without this system, but like it wouldn't work.
> Anyway, this system here is what's known as **RAM**.
> And it's a stick that you put into your computer, you put into the **motherboard**, and it essentially stores all of the memory and code of the computer while it is running.
> So what will essentially happen is programs will be loaded into **RAM** that uh the **OS** the **operating system** which itself is also technically on the **RAM** but and is processing but it's in charge of kind of moving things over.
> Uh so the **RAM** will store **program** it or it'll store programs in it or load programs into it.
> and loads them into memory, sends them uh to the **CPU**, has the **CPU** perform some type of calculation or uh function and then uh basically that that's the **input** **process** **output** uh system right there is that something goes into **RAM**, goes to the **CPU**, it's **processed** in the **CPU**, and then it's usually shown on screen or like uh there is some change made to the computer.
> So there is another thing within the computer however and it's a generally a very small chip and it's called the **ROM** and the **ROM** is what's so we have random access memory here this is active memory so while it's passing uh while **electricity** is running things are being **stored** in **RAM** and moved into the **CPU**.
> Uh but when we turn off the computer, all of the things inside of the **RAM**, it's wiped.
> It's just lost.
> Um unless it has been written into a storage device of some kind.
> Um but uh because that is **volatile memory**, which means that it goes away when you lose when it loses charge.
> Uh we do need something that isn't **volatile** in order to help start up the computer because if since nothing can be initially loaded into **RAM**, uh there's nothing that is starting up the **CPU** uh and telling it how to function.
> And that's where the **ROM** comes into play.
> It has something it has files in it called the **BIOS**.
> And what the **BIOS** does is it essentially gets the computer started.
> So the readon memory is passed into the **CPU** on launch and then the **CPU** will then generally start up the **OS** and start putting things into **RAM**.
> So that system then kind of keeps it alive.
> But this **ROM**, all it does is it does this job once and then it won't do anything else for the remainder of the time that the computer is on.
> Unless you decide to go into your **BIOS** and start deleting things, in which case, yeah, you're changing the **BIOS** and also going to break your computer forever.
> Um, but the **ROM** is this one-time action for starting up a computer.
> The **RAM** is what's used to actually like run the computer and do perform live calculations.
> Uh, let's see.
> Said 24 next.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"7:08"}}

> Okay.
> **multitasking** and explain the difference between multipprocessing and **multi-threading**.
> So, we've kind of actually, you know what, I'm going to I think that it's a good time Where is it? Here it is.
> We're going to first start out by tracing the execution of assembly code uh and how that works because that better explains this **RAM** **CPU** **process**.
> Um so the first thing that happens for this **program** is that we're going to load it into **RAM**.
> Uh so in other words through some system we are going to have the **RAM** read in a **program** which is this **program** here and it's going to be added into the **RAM**.
> So then we have one which is add five 2 ST 4 3 is J MP zero And then we have four is zero and eight or five is eight.
> There we go.
> Five is eight.
> Okay.
> So that's our **program** as it is loaded into **RAM**.
> Uh within the **CPU** there are we're going to talk about two important registers.
> for this kind of situation.
> We have this one here.
> This is called the control unit.
> It's also known as the CU.
> And essentially what the control unit does is it's going to take in these instructions.
> the load four, add fives, uh, store four, jump zero, zero, and eight.
> It's able to like grab that and it's able to go like, oh, okay, I can perform some type of uh some type of manipulation to that.
> The other important part is what's known as the **program** counter.
> And what the **program** counter does is uh unless given a specific command, it's going to uh figure out where we are in terms of the load order.
> So like let's say that we're starting this uh **program** off.
> So the first thing that we're going to do is we're going to look in here.
> We know that we're on zero and we're going to load four.
> So load four goes into this section here.
> And essentially what load four is doing is it's saying take the value that is **stored** at four and load that into memory or load that into uh the **CPU**.
> We're going to be using that.
> And what we're specifically going to be using it for is we're going to be sending it into the ALU, which is the believe it's like the algebraic uh learning unit or I it may be algebraic logistical unit.
> It's the ALU.
> What it does is it performs simple alge uh arithmetic uh in it.
> So it may not even be algebraic, it's probably arithmetic.
> Um so in this case the load for we're basically going like okay so alu we're going to take we're working with **values** of some kind.
> So load four uh and then it goes okay I've loaded four.
> What do you need me to do next? So the **program** counter goes up.
> Uh the control the **OS** sends the basic the **program** counter tells the **OS** go to one.
> **OS** goes and grabs one brings it over.
> It says add five which you would think would mean add five to the zero but no in reality it's saying add the value that is **stored** in the fifth slot.
> So now our alu says 0 + 5 and it just goes okay 0 + 5 that's five.
> The **program** counter then goes up the uh that means that the **OS** knows that it's going to be grabbing from two.
> So it's grabbing store four.
> So we bring store four in here.
> So we're going to take what the value that the alou has and we're now going to replace the value there with Oh, sorry.
> I put five here because I'm super dyslexic or something.
> Uh it should be eight because it's 0 plus 8, not 0 plus 5.
> So what we actually have here is eight and this is also eight.
> Uh **program** counter goes up again.
> So it goes to three.
> Uh three basically says jump to zero.
> So, we're not even going to be like we're not performing anything in terms of arithmetic here.
> Uh, in fact, the ALU has probably at this point been uh told to kind of forget what was in there.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"20:38"}}

> We're actually I believe it's still **stored** there, but like uh it's going to be replaced very soon.
> But anyway, because uh three was collected, it says jump zero.
> That's sent over here.
> The controller uh unit goes, okay, jump zero.
> That's actually going to reset our **program** counter back to zero.
> So, we never actually reach steps four and five, which is a good thing in a way because all it would do is give us a value.
> Uh but, uh this creates a loop.
> So, we're always going to be going 0 1 2 3 4 or 0 1 2 3 jump back up 0 1 2 3 jump back up 0 1 2 3 And because this has no like break command or the logic doesn't just like end.
> It just is an infinite loop.
> This number within the four's place is going to just keep on increasing by uh eight.
> So, it's going to go from 8 to 16 to 24 to 32 to 40, and it's going to keep going really, really rapidly up.
> Um, and it's never going to stop until honestly the it's either it's just going to be running in the background for the entire time now, which is going to be a real waste of uh **CPU** time.
> um or it's going to break it.
> it will literally uh brick your computer because it'll be it'll just keep going up and up and up and up and up and the computer goes I can't handle this anymore and shuts down which yet again if it shuts down that clears **RAM** so that wouldn't happen again until we load this **program** for another time in which case we have created an a situation in which we are constantly crashing ing our computer um andor constantly wasting resources.
> Um do not run this **program**.
> It's a great example.
> Don't do it.
> Uh okay.
> So that was 31.
> Uh I think I said I wanted to do 30.
> 35 33 35 24 Okay, so the reason I wanted to do this one after uh talking about like how the **RAM** and interacts with the **CPU** and how the **OS** is involved and whatnot is that uh when we're talking about **multitasking** uh with the **CPU**, it's really important to remember that The **CPU** is doing one thing at a time.
> Like it's really really good at doing one thing at a time.
> uh like they're generally very **fast**, but it's doing one thing at a time.
> Uh so like the load is happening, this ad is happening, all of this is happening one like motion at a time.
> But uh the **OS** uh the **OS** is actually smart enough to kind of go the **CPU** is uh doesn't need to be focusing on uh just one thing at a time.
> We can just rapidly switch between things very very quickly.
> Um, so the way in which we're going to show this is we're going to actually kind of create a box which is going to be the **OS**.
> And remember the **OS** is what's kind of telling it's what's in charge of telling the **CPU** what you want to do uh like one thing at a like what it wants it to do one thing at a time.
> The **OS** is kind of the director here.
> The **CPU** is like the really honestly the really really expensive and good uh actor that you have.
> And the **RAM** is all of the uh different people who contributed to this play.
> But inside of the **OS**, you're going to have multiple programs.
> So, let's let's create what I always call the robot face because look, it's a robot face, two eyes, mouth.
> Uh because the **OS** is basically a **program** that runs programs.
> Uh we didn't get that uh question, but uh yeah, it's basically the thing that's in charge of saying like uh what programs are running, how much uh how much how important are they, how much memory should be supplied to them, uh how much processing time should be supp uh supplied to them.
> It's in charge of doing all of that.
> And so, as you could see, just be by like my computer alone, we have multiple programs running at the same time, which means that if the **CPU** is only capable of doing one thing at a time, shouldn't it only be capable of uh running one **program** at a time? Well, no.
> It's the **CPU** is more powerful than that.
> It's it's smarter than that.
> The system is smarter than that.
> Uh and it's able to run multiro multiple programs.
> In other words, **multitasking** is the uh **process** of running multiple programs at the same time.
> Uh when we're talking about uh when we're talking about like **multiprocessing** though, we're actually talking about it running mo uh okay, **multitasking** is the **process** of the **CPU** rapidly switching between programs in order to uh in order to run them at the same time.
> So like it's able to do multiple programs kind of like they're in a line or whatever and they're able to switch between those things and constantly go down the line that the **OS** is supplying.
> Every single **program** in terms of processing is called a **process**.
> So if we send a **program** to be run uh if the **OS** sends a **program** to be run by the **CPU** that is one **process** that is running uh then so like each single one of these little squares here is a **process**.
> But programmers have actually gotten to the point where we're able now to say, well, I actually want there to be uh I need things to be **processed** in a very specific way and that's where **threads** come into play.
> **Threads** are essentially the smallest unit of processing and essentially it is saying like okay I'm running a video game in order to run a video game I need to keep track of where I need to keep track of these numbers in terms of like health uh mana cost what what have you but I also need to uh I also O need to run the **graphics** engine and I also need to generate the world and also it's a multiplayer game so I need to collect information from there.
> So that programmer has split this **process** into different **threads** and it's basically saying uh each thread is then kind of given more or less of a priority based upon what the programmer wanted.
> the original programmer.


> Uh sometimes you're able to change the uh processing of uh something.
> Sometimes you're able to change how many **threads** are spent on something.
> It's very rare.
> Um it's usually just something that is built into the **program** itself.
> And you have to remember we're always going to be uh **multiprocessing** and **multitasking** because the **OS** itself is a **program**.
> It's a it's the **program** that runs programs.
> So if you have a **program** other than the **OS** on your computer running, you are always going to have two **processes** that are occurring.
> You're more than likely also going to have **multi-threading** happening because as we've gotten more and more complex uh programs have gotten more and more complex we've split them up into u more and more **threads** so that we have more control over uh how the **CPU** is going to be you uh used.
> Okay, let's see.
> That was 24.
> So from there, I said 31.
> Oh, I must have Oh, yeah, because I did 31 a little bit earlier.
> Uh 12.
> Okay.
> Uh explain what **assembly language** is and how it relates to **machine code**.
> Um assembly is what we wrote within the **RAM** here this load add stop uh store jump those are uh that is assembly code now assembly code itself is considered to be kind of a lowlevel language and what that means is that uh you would think that high level means more challenge uh more difficult but it actually means that like it's more understandable by humans um Assembly code is kind of the uh it's it's the uh lowest language that isn't **binary** basically.
> Um because all of these functions like the load, the add, the store, the jump, all of those are actually go uh have **binary** **values** that are associated to them.
> And then the four, five, four, 088, those have **binary** **values** that are associated with them as well.
> So when we're talking about uh how **assembly language** relates to **machine code**, we're actually talking about how **assembly language** relates to **binary** because **binary** is **machine code**.
> It is the basis of everything.
> Remember, we always are going to be dealing with these **ones** and **zeros** like in a computer.
> This is just a given.
> It's always going to be there.
> So when we're talking about like assembly and what **assembly language** is, it's basically just the **programming language** that is one step above **binary** in that it's still very very like it is a very simple in terms of like its commands but it is very much like it's not it's not the easiest **program** for a human to understand.
> Um, machines are pretty good at converting assembly into **binary**.
> Uh if you can write an assembly, you can make pretty much anything um using it, but like it's a lot it's a lot uglier code uh than some of the higher level stuff that we'll be getting into I believe next uh 12 and then yeah so list some of the basics six steps in programming **process** from writing code to running it.
> So in this particular case I'm going to assume that we're not writing the code in assembly.
> I'm going to assume that we're writing it in a higher level language because that's usually how like that's usually how we work as uh humans.
> So I'm going to go with Python because Python is my favorite language.
> I I love Python.
> Python we're going to say is pi.
> So here I am the Python programmer and I have written some Python code.
> Now, Python is what's known as a uh interpreted language.
> Uh I don't think we have the interpreter versus compiler thing here, but know that like so because it's an interpreted one, we're actually going to uh skip one step.
> So I will also add another thing up here which is going to be another **program** as written in uh **C** because I know that is a **compiled** language.
> So, Python being an interpreted language means that uh the **process** of get of turning it into something that the computer understands is a lot shorter.
> Uh so it just is immediately kind of interpreted by the computer.
> So let's say that this is so this is the **process** of like running the code.
> So we've programmed it, we're running it, and then after running it, we get some kind of **output**.
> And I'm going to do that by saying like let's get like a document and then that document is then so like we **program** in Python we send the **program** it's interpreted by the computer.
> Uh it is going to be when it's doing that interpretation, it's going to be turned into it'll probably be turned into uh assembly and then be turned into **binary** from there.
> Uh then it's run by the computer and then it's **outputed**.
> And then if you're doing a **compiled** language, there's one step **in between** which is that it's going to turn it into it's going to be **compiled**.
> So it's going to be turned into another language.
> So like all of the logic here will be truncated, shrink, shrunk down, turned into like a bunch of gobbly that nobody really can read easily.
> Uh but the computer can read it and uh at that point it is run and then **outputed**.
> And just remember that like when we talk about running something uh on the computer, when we're talking about like these **processes** of uh turning code into a **program** that runs and whatnot, uh it is everything is always going to be interpreted down to **binary**.
> Uh so at some like even though like Python is considered to be a interpreted language and therefore it doesn't have this compiling step it still is kind of uh **compiled** or kind of interp uh it's not it's not **compiled** it's it's always going to be interpreted down to **binary**.
> It just doesn't have that one step between it.
> Um the other thing that like you could kind of say that's the difference here is that if you run a Python script uh because it's being interpreted you can kind of go through and continue like modifying the **program** as it's running while in a **compiled** language you you can't really do that as easily.


> Uh so in Python we have Jupyter notebooks that allow us to run things cell by cell.
> Uh, and that means that the Python script is constantly kind of loaded into **RAM**.
> Uh, yeah.
> Let's see.
> Uh, I think that was all of the Okay, this is probably something that I should have gone over earlier.
> Um, so when we're talking when we have all of this on this right side here, all of this is **hardware**.
> Um, the **ROM** is **hardware**, **CPU** is **hardware**, **RAM** is **hardware**, **OS** isn't **hardware**, that's software, but like it's **OS** is the the **operating system** is the closest software to running like to it's the closest software to **hardware**.
> It's usually the thing that kind of talks to it both, but uh the people who make the **operating system**, so that's Microsoft and uh well Microsoft, Macintosh, uh which is Apple.
> Um and then you have like Linux and whatnot that's made by that's open source and whatnot.
> Uh but if we were to if we were to uh your computer oftenimes comes with the **OS** pre-installed.
> Um it is very like unless you go somewhere very specific, you're you're going to get some **operating system** that's pre-installed on your system.
> And even if you don't, you have to you're gonna need to install some **operating system** at some point.
> Uh, and that means that like the **operating system**, it usually knows the **hardware** that it's connected to.
> So like the **CPU**, the **RAM**, the **ROM**, all of these things are usually on the **motherboard**.
> Uh, and that means that they're built in or they are very very close to being built in.
> You can slot **RAM** into slots.
> You can slot a **GPU** in here as well.
> But like uh anytime that you do that, anytime that you slot something in that wasn't there, uh the **OS** doesn't know how to deal with that thing.
> Uh because it wasn't written for that purpose.
> It wasn't written in such a way that like it understands every single bit of **hardware** that you hook up to your system because there are many many **hardware** developers out there and they create all sorts of things like keyboards and speakers and headphones and **graphics** cards and whatnot.
> And there's so many of them it would be unfair.
> It would be quite unfair to basically go to uh Windows or uh or Apple and go, "Hey, you have to create a system that understands every single bit of **hardware** that can connect to it.
> All of it.
> You have to do that." That would one it would be a mess because then we'd have Windows and uh we'd have Microsoft and Apple developing all **hardware** because they're not going to develop uh they're not going to develop for things that aren't theirs.
> Um, but it also would really kind of kill competition and it would also limit us in terms of how what things we could actually do with our computer.
> So that's why whenever we install something like a keyboard.
> So, I'm going to just make a another really ugly keyboard here.
> At least it's not the **binary** board from earlier.
> This one will have like 10 things that it can do.
> So, we have a keyboard.
> We It's not made by Windows.
> It's not made by Apple.
> It's made by What is mine actually made by? XVX.
> I don't even know what that is.
> Um, it's got an owl on it.
> Anyway, uh, that p that piece of **hardware**, uh, I connected it to my computer and it works.
> Like I could I could promise you it it works.
> Um, and the reason that it works is because on it was a on it was a piece of memory or a piece of storage that essentially said once I'm connected to the uh to the computer install.
> I'm gonna actually move it over here so that it looks better.
> I don't know.
> When I'm loaded in, install like my **drivers** to the **OS** and that makes it so that the **OS** goes like, "Oh, okay.
> You're you're a new piece of **hardware** and you're telling me how you work.
> Awesome.
> I can now work with you." And that's why **drivers** are so important because every single time that we connect something to our computer, it would be a nightmare if it like if it was kind of a crapshoot as to whether or not the thing actually worked.
> Uh because like maybe Windows didn't make a driver uh didn't make their **operating system** to work with XVX or something.
> Uh but XVX they wrote their own driver that is installed into the **OS** that then runs that then allows the **OS** to operate this uh keyboard.
> That's that's why **device drivers** are needed and necessary.
> Um let's see that was 20.
> Ah okay talking more about uh **hardware** we have discussed the relative strengths and weaknesses of m of **magnetic** **optical** and **solid state** storage technology.
> So when we're talking about like storage, we're talking about something other than **RAM** and **ROM** here.


> I mean **ROM** is storing val like can store **values** inside of it.
> I believe it like I believe it's done magnetically.
> I believe I'm not entirely certain about that.
> Don't quote me on it.
> Um but like that is **stored** and it's nonvolatile meaning that it's it remains when uh it remains after power has been turned off.
> **RAM** however is completely **volatile**.
> It is anything in here is going to be lost the second that we uh turn it off.
> Which is why we need to create something that stores information from one session to another.
> And that's what storage technology is for.
> And there are currently three primary ways in which something is **stored**.
> The first one is **magnetic**.
> And I'm trying to think of where do I want to put this.
> We'll put it we're going to put this in the top corner here.
> Let's move that back.
> Yeah, there we go.
> Okay, now we actually have already talked about a little bit about **magnetic** storage because if you remember uh during the last section I was talking about how we can store uh **binary** **values** inside of a **magnetic** field by telling the **magnetic** field north up or north down.
> Well, **magnetic** storage is using that logic still, but now we're going to be talking about the way in which it actually reads and writes to it.
> And uh believe it or not, **magnetic** storage is done using a disc.
> Now, it's what's known as a hard disk.
> So, uh, which you may recognize as being, hey, isn't that isn't that HD? Yes, we're talking about hard drives here.
> Uh, so your traditional **hard drive** is a **magnetic** drive.
> And because it's a disc and it's so the reason it's a hard disc is because it is a thick it's a it's a thick **body** to it and the top of the disc is magnetically sensitive.
> So and then there is a a thing called the read write head.
> And what this read right head does is uh while the disc is spinning at a very very rapid rate, this read write head is kind of just going like it's jittering back and forth like and uh depending on how we're using it, it's either writing data to the disk, in other words, it's changing those ups and downs uh or it's reading them.
> So, it's reading the ups and downs.
> Ups down.
> Uh, now this is like this system.
> It's pretty good.
> We've been using it for a long time.
> Uh, like **magnetic** storage is a like solid form of storage.
> Not solid storage, but a solid form of storage.
> Um, and like one of the great things about it is that it can store it can store a lot within it.
> Like, and I do mean like a lot.
> We're talking like modern hard drives can store terabytes of data.
> So, we're going to go high storage.
> Uh, it's also as I said **readable** and writable.
> So, that means that the system is dynamic.
> And I mean reading and writing that data is really useful because like it we often times are going to want to change **values** in the uh **values** in the things that we store.
> Like if we if we didn't then anytime that we opened up a uh Excel spreadsheet it would always be the same.
> Um, which speaking of let's talk about **optical** storage.
> So **optical** just means like visual storage.
> So instead of it being **magnetic**, this is a highly reflective **CD** compact disc.
> I mean it could also be like a DVD or **Blu-ray**.
> Now um those are different types of **optical** storage but they are all **optical** storage.
> And essentially what this one has is it's got a laser that is able to shine onto the disc.
> And depending on whether or not the uh depending on the storage method, so depending on **Blu-ray** or **CD** or DVD, uh it will read the visual data that is **stored** within the disc.
> Now, this is usually be by having like either grooves that go to the left or grooves that go to the right.
> um kind of almost like if you imagine a record but like really really compact to the point where no needle can fit into it and we need to use a a laser instead.
> Um, now the thing about **optical** storage is that it's really **portable**.
> like you're able it's easy to exchange discs with somebody like you can you can very easily uh write a a DVD which the writing **process** is called burning.


> So you may have heard of like burning music or something.
> That means that you're burning that data onto the **optical drive** or onto the **optical** disc.
> Um but the problem is that in uh making it **optical** and by burning it I'm you are physically changing the disc which means that when you write information to an uh to a **CD** it's usually going to be **permanent** in that way.
> It's you don't really have you don't have the dynamic functionality of a **magnetic** drive.
> You h but you gain the portability of a **CD**.
> So like we're going to say burned slash **permanent**.
> I'm just gonna go perm because I can't remember how to spell **permanent**.
> **Permanent**.
> We'll go with it.
> Uh so yeah, these these aren't dynamic.
> They don't really uh allow for multiple uh writes.
> It's usually just one and then done.
> Uh, but they're very **portable** and with **Blu-ray** there, you can store a lot on them.
> We're not talking terabytes, but we're talking a decent amount of data.
> Um, so then we get to the big kahuna **solid state**.
> Now, I actually did a lot of reading up on **solid state** drives uh before this because I wanted to understand how this worked because a **solid state** drive is a big honken like it's a big honken unit.
> uh uh and it actually manages to store electrical **values**.
> So like there is no like both of these are mechanical which because they're mechanical eventually the motor or the head the readr head or something like They're going to break at some point.
> So they have mechanical components which is a big downside to them.
> You don't usually want to have something that is going to break.
> I mean, most people would rather have something that works forever.
> Um, now **solid state** drives don't necessarily work forever, but they do work for a very, very long time.
> Um but yeah this is not mechanical because the way in which it works is that it sends **electricity** in and it takes **electricity** out.
> So, it's it is honestly the closest to like just being transistors as we're as you can kind of get with a uh with a storage uh drive.
> mechanical components.
> And what's really incredible about this is that it's basically doing this by trapping electrons inside of it.
> There's a there like basically just imagine really really tiny transistors so small that they're basically just chemicals at this point.
> And the gate has the ability to store electrons inside of it based upon what voltages were sent into it.
> like and then you're able to modify that by sending in like other **values** that either release the electrons or maintain them there.
> And just by having the electrons in **stored** inside of it, it changes the dynamics in which like **electricity** can flow through it.
> And because of that, it's able to read out **zeros** and **ones** which is so cool.
> but also really confusing.
> Um, but a really cool thing about it is not only does it have no mechanical components, it this is like the highest storage you can get.
> Like so it is large storage.
> Now there has to be a downside though, right? Like it can't be the best at all things or else everybody would be using it in it alone.
> And that's because uh it is the most expensive for like per data.
> So, like if you get a terabyte **solid state** drive, uh, it costs far more than a terabyte of a **hard drive**.
> Um, I mean, I don't even think you can get a terabyte onto an **optical drive**.
> I think if we could get a terabyte onto an op **optical drive**, I think we bring **optical** back to life.
> Uh, because **optical**'s kind of dead.
> Um, so I would say that the money per bite is higher than it is for **magnetic** or **optical**.
> Uh, it's also big.
> Like it's it's about it's about the same size as a magnet as a uh **hard drive**, but like it's big.
> It's not **portable**.
> like **optical**'s whole deal is that it's **portable**.
> Uh it's that is the reason you would use it.
> Um I am going to add one other thing here which is that this is really **fast** because it's just **electricity** because this is spinning and uh reading it does take longer.
> So if you put a **program** onto a a **magnetic** drive or an **optical drive**, it does take longer than if you had put it onto a **solid state** drive.
> But yeah, if you don't know about **solid state** drives, the so the chemical like stuff is so cool with it.
> Uh let's see.


> 21 is the next one.
> All right.
> Uh **logical** and **physical storage** models for a file.
> So we're talking about storage again.
> Um, and in particular, I'm going to I'm going to set up this as when we're talking about storage, we're talking about this is a common thing for like a **database**.
> Uh, it's like so when we start talking about servers and databases and whatnot, this is pretty typical for that.
> Uh, but like when you think about folders and whatnot, you're oftentimes thinking like we have a folder here and then we have files that are like nested inside of it.
> So like uh this folder could be like this top level is like education and then we have the different class and then you have the uh different like uh actually we'll make it even simpler.
> You have this you have a category.
> I'm just going to put You have a category.
> The category is **history**.
> Don't ask why I'm thinking 8th century, but we're talking about 8th century.
> So, this is a file that we want to that we can store inside of the **history** folder.
> And we can add more files inside of that folder until we have something that is kind of a **logical** file system.
> Uh and you might have like cabinets that basically go like okay you have **history** then you have 8th century **history**.
> Uh I don't why did I choose 8th century? Um, I don't know.
> I don't even know if this is the right arrow.
> Hapsburgs.
> Uh, and so that could be **stored** within there.
> So you have like a file cabinet, you have a file within the cabinet that's 8th century, and then you have like the Hapsburgs that's within there, and then whatnot.
> So that's like a **logical** uh like physical uh file structure.
> Um and it's generally how you would think about uh like folders and whatnot.
> You think about them in terms of their uh like physical contents and how you uh organize them.
> Computers don't work like that.
> I mean, you might think they do because that's what the **operating system** makes it look like, but it's actually a whole lot weirder.
> Data in computers is **stored** in fragments oftent times.
> So all of these different little like pieces, this is the same folder.
> This is the same file even.
> Um, and it's **stored** in multiple places.
> And there are probably references from one to another, like something that tells the **operating system** like how these things connect, but they're not **stored** next to each other.
> They're just **stored** kind of haphazardly.
> There's a logic to it, but it's a logic that like if you were to try and figure out uh on your own, it would probably take hours.
> Um so like the way in which uh the way in which like file storage happens in computers is not all of that **logical**.
> It's physical like these things are **stored** there.
> They are connected, but they're not like they're not connected in a way that is inherently obvious.
> Um, and so like when we're talking about like the logic gap between them, we're usually talking about how things are fragmented.
> Um, and there are **processes** in which like you can defragment your **hard drive** or something which will bring these things closer together, but it's always going to be in fragments.
> I don't I don't know of a way in which to make it so that it isn't that.
> Uh, and it's just it just turns out that that's the best way to store it uh in these systems.
> Like it just someone at some point figured out that storing it in fragments is fine and that it doesn't really impact processing power all that much.
> Uh, 23.
> Okay.
> So now when we're talking about like **file naming conventions** and the role of the **file extension** though, now we're talking about **logical** like folder systems, we're not talking about this fragmented crap anymore.
> We're going like we're going to **translate** it in the way that the **operating system** understands it.
> And that's that we have different drives.
> So like you'll oftentimes see like a **C** drive and then like a D drive and uh inside of those drives there will be folders.
> So like we can have see documents and then inside of that you could have school and then inside of that we could have like cismp and what that would do is basically it would say even though it's **stored** in this method uh it would So, oh, okay.
> We're looking at specifically the **C** drive, which in this case, I'm just going to say is going to be a **solid state** drive.
> Um, inside of the documents folder, there is a school folder.
> Inside of the school folder, there is a file called cis.mpp4.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"8:48"}}

> And what cis.mpp4 does is, well, this **mp4** tells the **operating system** what it needs to do in order to show this.
> Usually, it's going to be based on like the programs that are installed on your computer.
> So, if you had like cis.doc, it would probably open up a word document.
> If you had cis.mpp3, it'll open up media player.
> CIS.mpp4, if you had like VLC, which is a a video uh watching **program**, it might open that.
> Uh, and that's the important part of like the **file extension** there is that it basically allows the **operating system** to know how a file is being **stored** and what way it should open it.
> Uh that was 23 27.
> Explain the difference between an **absolute file path** and a relative **file path**.
> Okay.
> Um so we're going to do this.
> We're going to move our D drive down here.
> I'm going to make a file called docs or a folder called docs.
> Inside of the folder we have like we'll have school.
> Inside of school, we have we'll just go with like math and then put English here.
> And inside of these folders, we're going to have two different files.
> We'll have algebrad doc and essay doc.
> So this is just a typical like folder system.
> In fact, did we Do we have the one that is like the folder system one? Yeah.
> Okay.
> So already like we're kind of working towards this uh question here.
> Uh where 27 again.
> There we go.
> So these two files exist in different folders from each other.
> Also going to put like Uh these are in different folders from each other.
> These two are in the same folder structure.
> Uh, an **absolute file path** is one that literally goes from the drive itself.
> So from the **base** level and spells out every single step that you would need to take.
> So this would be dcschoolmathalgebra.doc.
> That's the **absolute file path** for algebra.doc.
> So if we were to reference algebra.doc in resumeé.doc, doc, we could use that path in order to point to it at all times.
> Or we could use what's known as a relative path.
> And a relative path means that instead of operating from the top from the lowest level and then up, it goes from the current level you are on and traces the path from there.
> So essay.doc doc.
> If we want to reference ré.doc, all we would need to do is say something like dot slash.
> Actually, we'll we'll do this using slash.
> And the reason that would work is so dot slash means look at the current folder that you are inside and then look to the ré.doc file.
> So that is the essay.doc basically looking over there.
> The alternative to this would be D colon slashd docs slash school slash English so on and so forth.
> It would go English then into uh ré.doc.
> And so like absolute paths they these would work from any different file.
> If we were to move essay.doc into or if we were to move ré.doc into math into the math folder uh like we could no if yeah.
> No.
> Okay.
> If we were to move essay.doc into the math folder, the **absolute file path** that leads to resume.doc wouldn't change because it's still in the same area.
> But the relative **file path** would break because it no longer uh is in the same folder as résumé.doc.
> So basically a **absolute file path** is one that leads from the **base** level to the exact point that you're at.
> It's basically the map quest equivalent of uh getting somewhere.
> You get a set of instructions that are printed out to you and you follow those instructions to the tea.
> Meanwhile, a relative **file path** is like if you decided to stop at a gas station and then recalculated the route from there like that would be relative to the location that you are at now.
> Uh it would change and then last one is 34.


> Design an efficient or file organization system for a specific use case.
> Academic, professional, creative.
> Okay.
> Um, you know what? We're gonna we're going to do this in Hello.
> This is the This is the file system.
> The file explorer is nice because it's the **OS**'s way of telling me where things are.
> In other words, when I was talking about how uh when I was talking about how uh the is the **logical** way in which things are **stored** while the uh like fragmented version is the uh physical.
> All right.
> In this particular case, we're going to create a new file system.
> And inside of here, we're going to create a file system called school.
> School schoolwork.
> Sure.
> Inside of schoolwork, we're going to create CS 110 because that's one of the classes that I'm in.
> And math 91 because I was forced into that.
> Uh, you know what? We're even going to change this by going uh we're going to go 2026 2.
> This is the winter.
> So, I can then put my two classes inside of there, which is the two uh 2026 winter uh semester.
> And then inside of CIS 110, I could put all of my CIS- 110 work.
> And inside of math 91, I could put all of my math 91 uh work.
> And since I was I joined the school last year for the fall, I could have 2025 fall.
> And inside of there, I would put my engineering 101.
> And then I could put all my engineering 101 stuff in here.
> So this right away this is a pretty like **logical** uh system in that you would go you have your main drive.
> You say what your uh like primary folder within that drive is.
> Inside of that you would split it up based on some time element.
> Um in this case uh semester and year.
> Uh, and then you would have the individual classes inside of there and you would put the individual work inside of that.
> Uh, and I think that that would be a pretty **logical** uh system.
> I think I think a lot of people would uh be able to figure it out just based upon uh what it looks like.
> So yeah, that's that.
> Oh, I just came up with a really cool way of showing off uh relative versus uh not relative, but it would it would require it would require some finagling, so I'm not I'm not going to do it.
> Um that was 34.
> I think that's all of the chapter **ones**.
> Chapter one.
> Chapter three.
> Chapter one.
> Chapter one.
> Chapter one.
> Chapter one.
> Chapter one.
> Chapter one.
> Chapter one.
> Chapter one.
> Two.
> Two.
> Two.
> Two.
> One.
> Two.
> Two.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"59:53"}}

> Two.
> Two.
> Two.
> Two.
> Okay, cool.
> We're moving on to two.
> How long is this so far? Do I even know? Two hours.
> I am so sorry, professor.
> Um, I'm going for the record, I guess.
> Maybe I can maybe I could speed up a bit during chapter two and three.
> We'll see.
> Uh, that's chapter three.
> Okay, so **JavaScript** three web applications.
> Okay.
> Um I think that's probably just a overall thing.
> What's the point of the **fair use** doctrine? That's three.
> Lots of threes together there.
> Okay, that that right there, that's a starting question.
> That's in 28.
> Uh, two-actor authentication, one one two web cookie.
> Okay.
> Uh, I think that could be here.
> Five common **HTML tags**.
> If we get the **HTML** question, that would be great.
> What **CSS** is uh 38 and then **Cloud computing** that is somewhere here.
> Cool.
> Love it when we get **logical**.
> steps.
> Uh that is 42.
> Favorite number, meaning of life.
> Uh 43 also goes there.
> **Internet** differs from **worldwide web**.
> We will do that here.
> **IP address**.
> Honestly, this is I'm kind of happy with the with the **ones** that we're getting for **cloud services**.
> All right, this is going to be a mess.
> All right, we are talking about a few computers now.
> So, let's draw our kind of core All right.
> So, this is what we had before.
> We were just operating with one computer and within that computer, I don't think I ever wrote this, we have **hardware** and the **OS**.
> When we're talking about uh web uh **websites**, web servers, and whatnot, we're oftentimes going to be talking about uh we're no longer really talking about **hardware** so much as we're talking about software, and more specifically, we're talking about the **browser**.
> So, I'm going to create a big box.
> That's going to be the **OS**.
> And then inside of that box as a **program** actually make this bigger So we have the **operating system** and then on the **operating system** we have one or multiple you can have multiple web browsers.
> Uh okay.
> Then down here less important in this case is **hardware**.
> It's not measured by importance.
> it's measured by how important it is right now.
> Um, so when we're talking about a computer connecting to a uh to other computers, we're oftentimes talking about using the **web browser** in order to connect to the **worldwide web**.
> The way in which we're going to picture the **worldwide web** here is that it's going to be a big old **cloud** because that's oftentimes what terminology is used for uh the **internet** nowadays.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"29:53"}}

> And essentially what you're going to be doing is you're going to be connecting your computer to what's known as a **web server**.
> I'm just gonna put WS because my handwriting is terrible.
> There we go.
> So the job of the **web browser** is kind of the same as how like the **operating system** works with the **hardware** of your computer.
> It creates a system that allows you to visualize the information that you are sending and receiving.
> this right over here, this uh small window that has been open the entire time with the CIS- 110 questions that is being hosted on a **web server**.
> Um, and the **program** itself is displaying the file that is host uh the file that is hosted on that **web server**.
> So essentially this is a two-way connection in which we send a request.
> The **web server** then is going to respond and send something back that the **web browser** can then visualize.
> Uh, usually it's an **HTML** file, **CSS** with **CSS** and **JavaScript** within it, but sometimes it can also just be like a PDF or something and the **web browser** will then determine how it should what way is the best way to do that.
> But the most important part here is that there's a request and a response.
> Now there is a third entity that often times is talked about and that is a **database**.
> Now databases oftentimes live on the computer with the **web server**.
> uh they're not necessarily uh like located like physically separate from each other.
> Uh it's just that uh we oftentimes see uh think of databases as being independent of the computer that they are on.
> Um and in the case of like sending and receiving login information or uh even requesting documents that are **stored** somewhere.
> Oftentimes what the **web browser** will do is it will send the request to the **web server**.
> The **web server** then goes oh okay this request uh is for information that is on this **database**.
> So it then requests the **database**.
> The **database** gives a response.
> Hopefully, it's the thing that the user wanted.
> And then the **web server** sends that uh response packaged with uh the **HTML**, **CSS**, and whatnot.
> Um, and so that's kind of the ways in which these uh things interact.
> There are not very many cases in which you're going to connect to a **database** directly.
> you're oftenimes going to have to interact with it through the **web server** itself.
> Uh so yet again request request response response and that's kind of the uh interaction method that is there.
> So, we're talking about like requests and responses, but we haven't really talked about what that actually is.
> Like what what does a request even look like? Well, oftentimes it is going to be an HTTP request and this stands for **hypertext transfer protocol**.
> Uh and essentially what it is is it's a packet of information that is structured in a way that will uh push a request to the **web server** and then there will be an HTTP response that comes back.
> Now one of the most important things to uh remember when dealing with HTTP responses and requests is that there is another version of HTTP which is **HTTPS**.
> And what that S means is that it's a **hypertext transfer protocol** **secure**.
> So when you send a regular HTTP request, it's usually not encoded in any way.
> It'll send it as like a packet that is easily **readable**.
> um not just by the computer but possibly by other people as well.
> Uh which we're going to get into like hackers and whatnot uh later.
> But like by having a **secure** HTTP HTTP request, the request itself is cryptographically uh **secure**.
> So it means that whatever data you're sending and receiving it isn't going to like it can still be intercepted but it is not easily translated.
> It is not easily decoded and uh that's why it matters so much that when you uh are looking at like your web page and whatnot, you want to have this uh you want to have this like lock here which basically says what the uh it basically says that it this is a **secure** site, I think.
> Yep.
> My cousin is calling me at exactly the wrong time.
> Um, let's see.
> So, that's difference between HTTP and **HTTPS**.
> Uh, that was 43.
> I want 42.
> Okay.
> So part of that HTTP **HTTPS** is one of the things that happens behind the scenes but uh there are actually a number of other things that are occurring at the same uh not at the same time but along the path.
> Uh, one of those is that we actually do off we often times have an extra stop between the uh between the **browser** and the **web server**.
> We basically stop at a another type of **web server** that is a DNS.
> I'm actually Yeah, I need to make that bigger.
> DNS And what a DNS server does is it basically takes the HTTP request that you have which oftentimes is something like www.google.com something like that.


> uh and it needs to be translated into an **IP address** cuz uh even though we typically think of **websites** as having domain names, **websites** themselves are act like not **websites** themselves but the servers themselves have **addresses** and those are IP **addresses** and uh that's what we're actually trying to uh send our request to so we often times have to **translate** our uh our HTTP request into an **IP address** before hitting this **web server**.
> Uh there's also another **process** that happens here which is that at the point in which you send a request at the time in which you send the request, it can be **stored** that request can be **stored** within your **history**.
> That's basically the thing that keeps track of like what uh it's what keeps track of your uh like previous web traffic.
> So like if you end up visiting uh like **YouTube** a lot, you'll have a lot of **YouTube** links in your **history**.
> Uh and this is important because uh your **history** can actually be uh used in a way like it can either be **stored** before or after the DNS call.
> It depends on like the way in which uh it depends on whether or not you connect to the DNS server or not.
> Um but uh it often times is before and it stores that uh information so that you can go back and look at what **websites** you visited before.
> There's another **process** that happens on the way back.
> Man, I wish that I didn't have a freaking hand trimmer.
> Uh, so on the way back, your uh **browser** can actually cache uh the respondent uh the response.
> What that means is that it's actually going to save like a local copy of a website uh to your **browser**.
> And the reason that it does that is let's say that you visited google.com pretty often.
> Um, it basically allows the system to go and say, "Wait, you've been here many, many times before." Like, it's the same thing.
> It's the same website.
> You've you're going to the same website.
> Um, instead of hit like going to the server and taking a while to respond and everything, let's just we're just going to grab the old version that you have because it's probably the same.
> Like it's it's hasn't been that long since you visited google.com.
> Uh, and then it'll just kind of bring up that version instead.
> So, it actually will kind of like cut down the entire **process**.
> And this yet again can kind of happen uh this actually usually occurs before it hits a DNS server.
> So yeah, if you already have like a website that's in the cache, like it is entirely possible to skip this entire **process** and it'll just bring up the website that you have.
> This actually can be really annoying as a developer because uh you could you'll like reload your website multiple times in order to check your like **CSS** or whatever and it'll bring up a **cached** version of your uh web page and uh that's not as useful because I you don't get to see the changes.
> Um, if you ever want to disable **history** or **caching**, you can set your **browser** to private or incognito mode and that will uh stop it from recording the **history** and it will stop it from **caching** and it will al usually stop it from retrieving the **cached** version of a site as well.
> It usually will pick out the one from the **web server**.
> Uh, that was 42.
> I have 45 after that.
> Oh, okay.
> Um, as I was mentioning before with IP **addresses** with the DNS server, it's uh basically whenever you request a uh request a web page, uh instead of going to that the physical address that you typed in, it's going to instead uh go to a DNS server.
> that DNS server translates your request into an **IP address** basically saying hey uh the actual address for that is 1 192.142.56.21 or something and that's the actual like address that uh you want to go to.
> Uh one way in which you can actually kind of like see this work Uh so like I don't have anything running on local host right now but uh oftentimes you can like request localhost or something and it will actually give you the uh **IP address** for your local computer.
> Um because local host is your your physical computer and all computers have an **IP address** um that is specific to them uh and also like specific to the location that they are operating from.
> So, if you bring your laptop somewhere else, you generally will have the same uh you'll have a diff you'll have the same **IP address** no matter where you go.
> Basically, it's a per it's a **permanent** feature.
> Uh 37 I don't really want I feel like I wouldn't be doing Oh, it must be 39.
> Yeah.
> Okay, cool.
> Good.
> Um, all right.
> **Cloud computing** is kind of a it's a more modern concept, but it's uh pretty **logical** when you think about it.
> So **cloud computing** is when a platform or service or application is located in the **cloud**.
> You're basically renting out a computer in uh that is located somewhere in this like nebulous **worldwide web** and using software that is located on that uh or that it is being **stored** uh on the **cloud**.
> Uh so like you have **cloud** applications which means that they exist on the **cloud**.
> You're operating on the **cloud**.
> You're borrowing space from the **cloud**.
> Um and then you have like **cloud** storage which is that you have data that is **stored** on a **database** that is located in the **cloud**.
> So like uh so basically what **cloud computing** is is the **process** of taking something that would normally be done on your computer and putting it on the **internet** instead.
> So like we're either using **hardware** that is located there or software that is located there.
> Uh it is located off of our computer.
> Uh, another thing that like it's less common now, but like an original definition for like **cloud computing** used to also mean that like it was interconnected with other people.
> Um it's not as like it's not as common now but like uh **cloud computing** and **cloud** applications uh or it's not talked about in terms of like **cloud** stuff now but uh it used to be that you could share things between like share processing power between different like user computers.


> ers and they would be uh they would all be connected to this web service and providing this service with extra computing power.
> Uh I believe that uh there was a uh there was a astron uh an astronomy like a big telescope that ended up using that type of thing.
> Like it would spread its uh processing across multiple computers specifically when they were uh specifically when they were like in sleep mode.
> Now, now that would be looked on a lot more skeptically.
> I think a lot of people would be nervous to uh to have a uh interconnected service where a remote system is operating their computer.
> Uh I think a lot of people would be frightened by that now.
> Uh but back in the good old days where uh nobody knew anything about web **security**.
> Hey, it was kind of cool.
> Uh let's see.
> 46.
> Okay.
> **Cloud services** that I use in my daily life.
> Uh unfortunately I use one uh **one drive** really often.
> Uh basically because Windows now will actually like kind of force you to do that.
> **One Drive** is a **cloud** storage service.
> Uh what it allows you to do is it basically uh it has a server.
> And connected to that server is a **database** that contains a bunch of um files.
> Uh technically those files live online.
> They don't live on my computer um because they are being **stored** on Microsoft servers.
> So this is a good example of like this is going to here.
> This is uh we'll call this bit of don't know if you can hear my dog but dog's barking.
> Dog's name pixel by the way.
> Uh if you when whenever we talk about pixels, I always kind of chuckle because that's the name of my dog.
> Uh anyway, so uh basically whenever I want to use a uh whenever I want to access like a file that's on my computer, uh it's actually the **OS** here that is talking with a **web server** collecting uh it will then collect the file that I'm looking for and send it back to me.
> Um I like I wish I it I wish it wouldn't.
> Uh but it's it's part of Windows kind of going like, "Hey, but your stuff is **secure** when it's on when it's **stored** on the **cloud**, but it also means that you can't access it when the **internet**'s down.
> Screw you, I guess." Um yeah, not not my favorite.
> uh system, but hey, it's there.
> Um so that's Microsoft.
> This will be we'll go Google.
> You know what? on the uh on the same metric as uh **one drive**.
> Uh Google has **Google Docs** which actually is a lot more interesting than uh **one drive** is mainly because uh **Google Docs** is more of a uh it's more of a web application.
> Um it's a **cloud** application.
> It's a **cloud** service as opposed to a **cloud** storage.
> Um, and it essentially allows uh me and my friends, we can create a Google doc and we can all be writing in the same Google doc at the same time.
> It allows for **collaboration**.
> It's really cool.
> the date the document is still **stored** online but it's **stored** online because all of us are accessing it as opposed to uh for **one drive** where it's just me accessing it and theoretically other people could but like no one does.
> Um, I will say that **One Drive** has uh that both **Google Docs** and **One Drive** have one major advantage, which is that if I was to be on a different computer, I could still collect my documents from the **cloud** uh on that computer.
> Uh, as opposed to having to be on my main machine all the time.
> Uh I'm gonna also draw a thing here because a lot of the times these things are interconnected.
> Uh and I think the the final one, let's go with **YouTube**.
> I mean, it's also a Google service.
> It's not terribly exciting.
> Maybe.
> Yeah, I still think it's a good one though because uh the idea of storing uh lots of uh videos online for everyone to see is a really really useful and helpful way to kind of like crowdsource entertainment and crowdsource information.
> Um because all of these uh because all of these people are able to like supply uh to this one service and theoretically you can make a job off of it.
> Um I've never known someone to make a job off of it.
> I've seen people make a job off of it but uh not me.
> Um, yeah.


> Uh, trying to think of like if there's another one that I like.
> Um, actually, you know what? I'm going to add one as well.
> SoundCloud.
> Because SoundCloud has something really really interesting that I really really like, which is that you can comment on a uh on a song at a specific timestamp like and it will read that timestamp when or that comment when it passes the song passes over that part.
> So you're able to say like I love this part and that part of SoundCloud is a **cloud** service because it is being uh that data is **stored** on their uh servers and uh I mean so is the music but uh like the the comment system I think is really really interesting for that because it's a timebased comment system so that people can say when and why they like something or when and why they hate something.
> Um, which I think adds a lot of uh a lot of value.
> Uh, let's see 44.
> Okay.
> So the **internet** is different from the **worldwide web** in that the **internet** is this entire **process** basically like it is the uh it is basically the **process** of connecting to things that are on different devices because remember how I said that **one drive** doesn't really operate from inside the **browser** it's kind of it it pretends to be a **hardware** component.
> Um that that **process** is uh something that exists on the **internet** as opposed to a **process** that exists on the **worldwide web** because the **worldwide web** is essentially a connection of links and servers and sites that all use the HTTP uh HTTP and DNS service.
> Um, so they're all kind of servicing **HTML**, **CSS**, and **JavaScript** while uh the **internet** itself is kind of the concept of having an interconnected uh system of computers.
> So like another good example would be if we had like a game server.
> So I'm going to call that a GS.
> And oftentimes like a game server isn't going to be using an HTTP request.
> it's going to be using like peer-to-peer or some other or an FTP, some type of other uh like system, but we're able to connect to it and respond to it despite it not being on the **worldwide web**.
> So, like this thing probably does have an **IP address**, but we're not requesting it using the standard uh like **worldwide web** uh methods.
> We're not using HTTP.
> We're not using DNS.
> We're not creating a **history** or **caching**.
> We're not getting **HTML** back.
> We are literally just exchanging data there.
> And other players are also exchanging data there, which basically allows the game to run in like for multiple people on a server in real time.
> So, like if your friend waves at you in Minecraft, you actually can see that they've waved to you because it sends that uh it sends that data that the wave animation is playing to the server and then sends that to both uh the both users.
> Uh so like this would be an example of something that operates on the **internet** but not on the **worldwide web**.
> While web servers and whatnot, those operate on the **worldwide web**, which is a part of the **internet**.
> We're nearly to three hours.
> I think we're getting there.
> I think we're at like two hours and 40 minutes.
> Uh, yet again, sorry, professor.
> I I guess I just have a lot to say.
> Um, and that I don't know when to shut up.
> Um that was 44.
> Okay.
> I think 10 was like the next thing.
> Name three web applications you have used and explain what makes them useful.
> Okay.
> Well, that requires us to take a moment to explain what the difference between a because what that Uh, not 44.
> 37 was no 39 40 **cloud services** that you use in daily life.
> Is this the same question? Okay.
> Okay.
> I'm going to make a distinction between this.
> So web service is when we are connecting to a **web server** and we are using that **web server**.
> uh to do something.
> So like Google with **Google Docs**, SoundCloud with its comments and uh **YouTube** are examples of web services.
> Um, web applications are applications that ostensively look like they are uh not a web ser like they look like they're not running on a **browser** but are um so an example of that would be the Spotify app which basically is a player for uh it's it does what Spotify does.
> It it basically you go to you open up the app, it opens up uh Spotify and it plays a playlist of music that you uh tell it to do.
> But in reality, it's like even though it's a separate application, the application is opening up a **browser** version of Spotify that looks slightly different.
> So uh essentially what they what makes web applications useful is actually more in terms of the uh development like the developmental costs in that a web application is pretty easy to **translate** from a web s uh from a website to an application because it's just opening up a like miniature **browser** that only does one thing and only connects to one site.
> So examples of that would be Spotify which has uh most of the services it has a bit of **caching** that is involved with it but like that same **caching** is likely happening on the web version as well.
> Uh it's just that it's more easily it's more obvious on like a phone.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"0:55"}}

> Um, **Discord** is another one where it opens up like a Chromium uh, which is basically it's it's a Chromium instance, which means that it's like an instance of Google Chrome and uses that in order to create it the illusion of it being a separate application.
> um it allows that application to exist outside of the website, but it is still the website.
> And that's why multiple people can you can have a person who's on the web the web service and also have people that are active on the web application.
> Um, I mean, we could uh go to Google again, but I I think the last one that I would go with is uh games that use websockets.
> Um, they're often times seen as being like they exist on a website, but there is often times a mobile version of it that allows you to connect to it.
> Anyway, examples of that would be like Farmville.
> I know that's super old, but like Farmville would be a web application in that like you could just play it on Facebook.
> In fact, you could probably play it on the Facebook app, but like you uh but you could also play it of on your phone as an application by itself.
> So, I would actually say that like web applications are like I've used them.
> I've used a lot of them.
> Um I wouldn't really describe them as all that useful to users.
> I would describe them as useful to the developers because it allows you to create a professional application without having to use a different **programming language** than **HTML**, **CSS**, and **JavaScript**.
> So like React **apps** are uh literally just using React language to make an application.
> So yeah, it's it's still kind of **HTML** in a way.
> Uh let's see.
> That was that was 10.
> Uh 36.
> Oh, okay.
> So, we talked about **history** and **caching** for uh for like things that are **stored** on the **web browser**, but there's kind of another thing that uh can be **stored** from a response on a **web server**, and that's called a cookie.
> I'm going to just draw like a really terrible chocolate chip cookie there.
> Um, and connect it.
> And essentially what a cookie is is it's a text file that lives within usually the **browser**'s folder system.
> Uh and it allows information to be **stored** between instances of the website.
> So, like if you go on Amazon and you start adding things to your cart and then you close the window and then you open it back up and you go to Amazon, those things are likely still in the cart and that information probably wasn't **stored** on their server.
> That was probably **stored** as a cookie on your system.
> Um, and I mean that's it's super helpful.
> uh in that like storing information like that is just a very like useful thing to have.
> It prevents you from having to log into a website literally every single time because it you could always just store the cookie that you are logged in.
> Um but like you have to remember that these are things that are made by developers on like the **web server** side.
> So, they're only going to be as good as the person who made them, which means that you could have **cookies** that are like damaging to your system.
> Like you could stack a whole bunch of **cookies** and probably like take up a large part of the cache.
> Um, it's not like it's not usual, but it is like a thing that can happen.
> Uh, it's also just kind of viewed a little skeptically because I mean it is someone putting a file onto your computer probably without you knowing.
> Uh, and that's why nowadays when you go to a website, they oftentimes have a little thing that says like, uh, we use web **cookies** on this website.
> Would you like to like use them or would you like to use only the essential **ones** or would you not like to use them at all? Uh and then users get to choose the experience that they want.
> Um even the guy who made web **cookies** and invented them is kind of like he's kind of hit and miss on whether or not he likes that uh the idea anymore.
> Um, personally, I don't see them as being that bad.
> Um, I can see why people would doubt them, but I don't think it's I don't think it's that bad.
> All right.
> Uh, did 36.
> That looks like 41.
> Okay.
> So, we're going to be talking about the things that web servers send back.
> So, like we're going to be talking about things that are happening here like along this line.
> Um, and in particular, we're going to be talking about like the three type of files that are often times sent.
> The first one is **HTML**.
> **HTML** stands for hypertext markup language and it is essentially the skeleton for a website.
> Now what does it mean to be like the skeleton of a website? It means that you don't really have any meat to you.
> Uh and you don't really have any skin.
> So, uh, you're pretty ugly and also you're pretty useless.


> Um, man, that halfway through saying that I was just like, that's mean.
> I'm being mean to **HTML**.
> But like, uh, it's kind of true.
> I mean, **HTML** 5 allows uh for a lot more uh like complexity uh to be added into **HTML**, but it like **HTML** is super important.
> I do want to note that it is very very important um because all of the other parts of a website are built on top of it.
> You you cannot have a website that has **CSS** and **JavaScript** without there being like **HTML**.
> I guess you could PHP or XML, but like it's going to be **HTML**.
> People are using **HTML**.
> Um now in particular it does this by having like tags so like a pretty common one is the P tag uh which uh most tags are going to have a opening tag and a closing tag and then the actual content of the website will be between them.
> So, P tags, those are paragraph tags.
> Uh, basically they're just what you put loads of text into.
> Um, like the they're the kind of building block of content for uh for like **HTML**.
> Uh, I also want to note that **HTML** it really does contain like pretty much everything that like it often times contains everything that you would need to read on the site.
> It is going to have all of the words usually and uh like all the important parts will be included.
> They just won't be pretty and they won't be functional.
> Um I think that isn't 37.
> Yeah.
> Okay.
> So, so P tags are paragraph tags.
> Uh we have there are **header** tags.
> There are actually five of these.
> So theoretically I could just say like five common **HTML tags** H1 through H5.
> Ha.
> No, I'm not going to do that because they're the same thing.
> Um these are usually the uh like **header** tags are essentially like this or this.
> Uh I'm highlighting CIS 110 if you can't tell.
> Um, usually they're like placed above the uh paragraph tags in order to like say, "Hey, this is what uh like the text under this is around this **header**.
> It's basically the demarcations of like the title and the chapters is what I would kind of go with.
> Um, I'm going to go with a.
> There's the A tag.
> There is an A tag.
> There is a tag.
> Um, the A tag is actually a uh is actually the tag that you use in order to link to other places.
> Um so generally it's located next to uh a thing which is the href or as I always call it ref.
> Uh so usually when when when I refer to it I go like it's a ref.
> Um, which uh href means like uh **HTML** reference or H uh or HTTP reference I think.
> Um hyperlink reference.
> Oh my god, sorry.
> It's hyperlink reference.
> Um, so essentially whenever you see a uh link on a page, it's going to be a a tag and it's going to have uh a a either a file address or a uh **web address** that it can kind of send you to.
> Um, or it can do nothing.
> You can always just make a broken link if you want.
> Go wild.
> Um, let's see what's uh image tag img.
> Uh, it allows you to put an image on the page.
> It is usually has a source.
> Uh, so you would go like img src equals and then the link to where whatever uh whatever image you want to put there.
> Um, but yeah, that that's another tag that's that's common.
> Um, I'm going to go with button.
> I'll And I like the button tag here because button is usually used in order to add some type of functionality to the page.


> Usually you have **JavaScript** that is attached to it or like an event handler that is attached to it.
> Um and that is how like so if I click on something on this page uh I would imagine that these are probably **buttons**.
> They might not be they they could be just interestingly designed links.
> Uh, but I'm almost certain that like canvas text, previous, next, those are uh those are probably button tags and the uh when you click on it, some form of **JavaScript** is going on uh to show the next page.
> We got to three hours yet? Almost two hours and 57.
> Like I said, I'm going for the record, I guess.
> Um, so that was 41 and 37.
> Uh, 38.
> Explain what **CSS** is.
> So, if **HTML** is the skeleton, **CSS** is the skin.
> Boy howdy.
> Are these things kind of terrifying when you talk about them in this way? Um, boy howdy.
> Did I say boy howdy? Uh, so **CSS** is uh it stands for cascading stylesheets.
> Uh, which quite literally I mean it it is exactly what it says on the tin.
> It is a uh cascade of uh of styling.
> Uh what you generally do is you make a reference to a **HTML** uh tag.
> So you could say p h1 a image button or you could reference specific **ones** by giving these **HTML** uh tags classes or ids.
> And what that would do is allow you to essentially like you could change the font, you could change the color, you could change the background, you could change uh you could change the width, the height, uh there like width slash height like you can change all sorts of things uh using **C** **CSS** and honestly just by using **HTML** and **CSS** says you can create a really good looking website.
> Um, like all you need is the skeleton and the skin in most cases.
> Um, not in real life, but in in webland you can.
> Um, and honestly, there are plenty of **websites** out there that are just **HTML** **CSS**, and that's fine.
> It's like you don't you don't need you don't need the next part which is I believe that I also got this one.
> What is that? Is that 38? I'm on Oh, okay.
> Five.
> Cool.
> Uh, so we're talking about Windows.
> I I don't care that my **Windows 10** PC is at risk and that I need to get extended **security** updates to stay protected.
> What? Uh, while I plan my move to Windows 11.
> It was on the other computer, but God, that's annoying.
> Um okay so we have **JavaScript** JS um this is the muscles this is what enables your website to be reactive or dynamic.
> Um, so like it's written in honestly **JavaScript** is written like uh most code.
> It looks a lot like uh like it looks a lot like standard uh like computer code.
> Honestly, I can't you really can't draw **JavaScript** because yet again it's the functionality.
> Um, so what JS allows you to do is it's what allows the page to be reactive.
> This whole like drawing thing here that is definitely JS.
> Um, like there is some **JavaScript** running in the background here that allows me to draw a terrible mountain with a face.
> Um, which is a hilarious joke if you're in one of my friend groups, but entirely useless here.
> Um, but yeah, it's what allows you to have interactivity on the website.
> Like, uh, hitting clear that probably launched a **JavaScript**, uh, function that cleared this and set it back to normal.
> Uh, hitting text, that was probably **JavaScript** that changed the **HTML** from a canvas that you can draw on to a text box that you can write in.
> Um, and that's that's kind of the main purpose of **JavaScript** is that it is there to uh it is there to make your website functional.
> It's what adds logic and uh whatnot.
> It's what allows this uh system to know that when I get to 50 uh when I get to 46, I'm not there isn't a next, there's a submit.
> Uh because that is the because that's the logic.
> It is **stored** logic.
> Um like it's it literally is what is enabling this website to be a dynamic website.
> Holy crap.
> That just got rid of my **history** of questions.
> Ah, professor.
> We're going to change that.


> We're It's not different things anymore, right? Like it's it's still the same, I think.
> Yeah, that that seems the same.
> Okay.
> Thank goodness we're like done with the uh the **JavaScript** part.
> Uh yeah, we're gonna we're gonna make it so that if you click on textbook, it doesn't erase your progress on the exam because oh boy.
> Uh okay, let's do it this way.
> We're just going to put one there.
> We did that one.
> We did that one.
> Okay, I think we are on chapter three now.
> I'm fairly certain that we're on chapter 3, but I'm going to go through and just make sure that all of this is noted.
> So, how was your day? Was it good? Was it a good day? I hope your day was good.
> Um, that's chapter three.
> Okay, cool.
> Chapter three.
> That's chapter three.
> That's also chapter three.
> That's also chapter three.
> Chapter three.
> Chapter three.
> Lots of chapter threes in a row on that one.
> Did that.
> Did that.
> Did that.
> Didn't do that.
> Didn't do that.
> Did that.
> That did didn't do that.
> That's not done.
> I un just gonna note that 29 29 needs to be done.
> Um, root kit.
> Did that.
> Did that.
> Did that.
> Okay, I think Okay, we're we're good.
> We're going to start with 29.
> We're starting with 29 for the reason that I'm going to forget uh what it is after that.
> All right.
> So, uh, we're actually going to stay on the same page.
> There's not going to be as much drawing for this part just because a lot of, uh, the like stuff with, uh, chapter 3, I mean, it's talking about this entire system and we're kind of going back to uh, not it's not philosophical questions, but we're talking more about like societal questions is what I'll go with.
> uh society and **security** um which speaking about **security** explain what **two-factor authentication** is.
> So, when you log in to something, moving that.
> There we go.
> I'm drawing a little guy.
> When you log into something, uh, often times you have like username and a **password**.
> And the problem here is that like these two things are actually not terribly **secure**.
> Um your username oftentimes is saved between uh like one it's usually very **logical**.
> Um, so like your username is usually like first name, last name or it's a like nickname that you use pretty often.
> It's pretty easy to find out people's usernames because usually it's visible to people.
> **Passwords**, you don't show those to people, but they're not as hard to get as you would think.


> There are a lot of ways in which we could get somebody's **password**.
> Um, so when we talk about usernames and **passwords**, we're not really all I would say like we're semicure.
> Like this is this is a lock with a with a crack in it.
> Um, but we can make it more **secure** by adding in a second step, another thing that uh only the user is capable of doing.
> And usually we attach that to a device.
> This is that guy's phone.
> When he puts in a username and **password**, it's going to forward him and it's going to say, "Hey, I want a code." And that code, that code is located on his phone and it's been sent to his phone.
> And as such, if somebody was listening to the web uh the traffic on like his computer, they're not necessarily going to get this one.
> They're not going to get the uh the code on his phone.
> Also, it's usually timed.
> So, like even if they did get uh the thing on his uh the code that's on his phone, it probably has changed by the time they got it.
> Uh which means that this guy has two different uh two different steps, two factors to identify himself.
> One is a like cryptographic factor, the username and the **password**.
> And then the last one is a physical factor.
> It's the lit literal physical key that allows you to turn the lock.
> Um, and if you just turns out that if you just have it send like a text message to your phone, I mean, that's a far more uh like that's a far better way of securing uh like preventing a third party from accessing uh your account.
> Because if you don't have like if they don't have your phone, they don't get the code.
> There are ways that they could theoretically, but it makes it a lot harder.
> And that's the point of **two-factor authentication**.
> I know that there's one in here that is saying talking about Okay, so we're actually now going to talk about one of the reasons why the username and **password** system is not necessarily the greatest.
> And the reason for that is because **passwords** are the harder it is to figure out a **password**, the harder it is to remember a **password** usually.
> Um, so a lot of **websites** will make it so that like they require a capital letter, uh, lowercase letter, uh, maybe like a number.
> I've just created the **password** abs.
> Um, maybe multiple numbers.
> Abs.
> So, and then I could go like that.
> uh U7 E and then put like so like this is a pretty good **password**.
> Ab absolute spelled A low uppercase A lowercase B50 uh L U7 E exclamation point like that would that probably fits a lot of the uh requirements for a **password**.
> Um I don't know if I would be able to remember this very well.
> Uh, I don't have the greatest memory of all time and I would probably forget that I used a lowercase B.
> I would probably forget that I used a seven.
> I would definitely forget that I used a exclamation point at the end.
> And because of that, it's a good **password**.
> It's so good that even I can't remember it.
> And that makes it a bad **password**.
> It goes all the way around cuz like if I can't log into my account then what's the point of even having a **password** like uh no one can log into my account now I've created a perfect system in which my data is protected by e from everyone including myself.
> Uh so usually what uh I recommend to people is that they go with the XKCD method.
> And the XKCD method is an interesting one cryptographically because what it is is you take like so I got this stupid thing from a nice lady.
> She was actually very nice um on campus.
> But like what I could do is I could go like uh uh and so I would go salvation rest making your uh and make it so that salvation salvation rest making your one super long.
> This is not going to be uh if somebody decided to just brute force my **password**, this is going to take them forever.
> Second, turns out that uh it's easier for a code to break something like absolute up here than it is for it to figure out four words in a row.
> Um, and third, because it's four words and they're kind of like odd, it's actually kind of easier to remember because I can go like, oh yeah, salvation rests on making your so like salvation salvation rests on making your day.
> And I like now my code is a sentence and I can remember it and I can play it in my head and that makes it easier to remember.
> Fun fact, I yet again XKCD was the one that uh brought this to my attention.
> It's it is a strong **password** system.
> Sadly, it doesn't work for a lot of them because they require like uppercase lowerase numbers and uh exclamation points.
> Sadly, uh 60 degrees of separation.
> Is there more? Okay.
> **Encryption**.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"17:16"}}

> So, uh, we've talked about how you can have **two-factor authentication**, pretty pretty **secure**, very actually very **secure**.
> Uh, we've talked about username **password**, not terribly **secure**, better if you know how to make a really strong **password**.
> Um, but it's important to note that in the **process** of like logging in somewhere, generally these this English is going to be turned into nonsense and it will like the the interesting part is that it's going to be turned into nonsense that the computer still is able to figure out but we cannot like a human won't be able to look at it and understand it but a computer might be able to look at it so long as they know the decryption method.
> So like imagine this as we're going back to **binary**.
> Um like if we turn salvation rest making your into **binary** uh very few humans are going to know how to like split that up.
> They're not going to know how to uh how to read that.
> So that would be considered a way of encrypting it.
> we could turn it into something that like can be read if you know what it is, but can't be read if you don't.
> Um, the most powerful version of this to my recolle recollection right now is a thing called Shaw 256.
> And essentially what this does is if you use Shaw 256 on uh on like a sentence or something, it will turn it into complete and total goblygook and it's probably going to be like far longer uh than it was originally.
> It's going to have uppercase, lowercase, weird characters, everything.
> Uh but if the person knows how to uh if they also know how to in uh **encrypt** Shaw 256 it can go backwards.
> So basically if we know that this is being used here and we **encrypt** it and the person knows how to decrypt that then it can go back to normal and basically when you send your username or **password** or whatever it's going to be **encrypted** before it's sent and then it's going to be decrypted on the server.
> So uh or it might not even be decrypted.
> Sometimes it's just uh checked that this de uh that it's been **encrypted** with the same method and that it looks the same.
> So sometimes it does that.
> Um not as powerful as if you **encrypt** and decrypt, but **encryption** is super useful.
> Very very powerful.
> Uh if we didn't have it then the username **password** system would suck so much more.
> Um but like it basically makes this system reasonable root kit.
> Uh let's go with **malware**.
> Okay.
> So what is **malware**? **Malware** is anything that is placed onto your system that is malicious or harmful to your system and to you.
> Um it is generally like a like so **malware** is generally made with the intent of causing harm or the intent of spying on you or the intent of holding you ransom.
> Um so it it is a negative thing that thus why it is called **malware** instead of uh because it is made with **malicious intent**.
> Um sometimes you can actually end up with a **program** that was that essentially becomes **malware** because it's just badly made.
> But like generally when we're talking about **malware**, we're talking about things that are made explicitly for it.
> We're talking viruses that infect your computer and uh lock your uh system so that you can't uh you can't release it unless you get like a specific code.
> Uh that's called ransomware.
> Um you could get spyware.
> Spyware is literally what it says on the tin.
> It lives on your computer.
> It watches what you do and oftentimes it's used to steal like username, **passwords**, uh, **credit card** numbers, that sort of thing.
> Um, then there is another very interesting version which is I know it's there.
> Yep.
> The rootkit.
> The rootkit is probably the most malicious version of uh **malware** out there.
> And I'll tell you why.
> It's because it's so hard to find because what it does is it like you end up downloading something and instead of it doing something overt.
> What it does instead is it sits it digs deep into your **operating system** like we're talking very deep.
> We're talking **BIOS** level stuff here.
> and it sits at that low level and just listens.
> Um, now this thing could be used for all sorts of like malicious stuff.
> It could be using your your computer as a method to gain access to other computers.
> That's usually what happens if you work in a business and you get a rootkit.
> Uh but like uh or it could be uh sitting there.
> Uh sometimes they can uh cause your **GPU** to start mining for like **crypto** or something and sending that to the creator of the uh **malware**.
> So they're literally using your computer to mine something without you knowing it.
> And generally it will be and it's there.
> These things are written in a way that if you open up the **task manager**, if you open up **processes**, if you open up whatever, you're not going to find it.

{{ShowFrame:https://youtu.be/1Gc0eE1405k time:"3:12:42"}}

> It's hidden.
> They they have made it so it doesn't show up there.
> Um, and yeah, if if this thing if this thing decides to go like nuclear uh and affect your computer or affect your **network**, um, it's hard to find.
> It's it's just it's too deep.
> Um, and just the fact that you don't know it's there is is gives it a lot of power.
> Um, yeah, root kits are absolutely terrifying.
> Um, and they're kind of a Schroinger's cat.
> Um, in that like you don't know you have a root kit until you know you have a root kit.
> Like until that point, you both have one and don't because it's hidden so far that you're like if you try to find it.
> Like it will take you a very long time and you probably still won't.
> Just be careful when you download things, honestly.
> Like if you just don't download stupid you'll you're gonna be fine.
> Your computer will be okay.
> Uh the other part would be like don't let a random person plug into your computer.
> That's that's also a bad idea.
> Uh let's see.
> **Copyright** **pull request**.
> or okay, let's go with **AI** for a bit here.
> So, discuss how **AI** algorithms shape what information people see online.
> Um, so **AI** is kind of an insidious thing.
> It's been around for a long time, especially this type of **AI** where uh essentially the idea is that so the I think the perfect use case for this is Facebook uh because they they are definitely doing this uh they like blatantly they do this.
> So most developers they don't really care what you do on their website so long as you are on their website.
> Your eye if your eyes are on their page you're re you're seeing the ads that they are playing.
> Uh so basically like they want you to keep looking no matter what.
> And what that means is that if you like something, you are more likely to get more things that you like.
> And that sounds great.
> Like I love looking at things that I like as opposed to things that I don't like.
> Uh but the truth of the real world is there are many things that you do not like or do not agree with or do not want to see that you should probably be aware of.
> Um, like you may not like politics, but you should probably be aware of politics.
> Um, because like it it's important.
> It it's going to literally politics changes the way in which we're uh in which we live.
> Um, so but like since it's only showing things that you like, you're never going to actually see the like you're never going to see reality.
> Like this will never happen.
> So I'm going to put a circle around it.
> put a cross through it, you're not getting reality.
> You're getting a tailored version that keeps your eyes on the phone.
> It got to keep looking at their **advertisements**.
> Uh, and I mean this could be even more harmful because like you can end up with what's known as an echo chamber.
> um which is let's say that you have let's say you believe you don't need to breathe in order to live.
> There are people like this by the way that they're called breththerians and strange um but like let's say that you you believe that you don't need to breathe.
> Um or that you can live just by breathing.
> That's another thing that they sometimes have.
> Uh if you only get to see things that are from people who are also who also think that you don't need to breathe in order to live, uh you're just getting fed misinformation like over and over and over again.
> It's just confirmation bias.
> And that's why it's uh like an echo chamber effect.
> It's you yelling into the void and hearing your own voice come back to you and going, "Yeah, that's another person who agrees with me.
> I can't I can't see them.
> I can't, but I hear them." Like, and that can happen a lot with uh how **AI** algorithms shape what we see because yet again, they want you to keep looking.
> It's not a matter of like they don't make money based on you changing your ideals.
> They make money based upon how many times you see **advertisements** for the next WWE game.


> So yeah, uh basically the people who want to advertise to you, they don't trust people that want to advertise to you a ton.
> it it like they're they're probably not thinking for your best case.
> Uh I know that we have another **AI** here.
> Okay.
> So that was the past with **AI** **AI** search algorithms and **AI** like uh and **AI** generated like articles and or not articles **AI** generated content.
> Um that's kind of we're we're past that.
> We're like it's still a problem but we've made a bigger problem.
> Uh because now we've started to create **AI** that is capable of creating text, images, and videos that look real.
> Um and oh man, this is that's this is terrifying.
> Like every everybody should be scared of this because uh yet again, we are being shown things that we like.
> If we like something, we get more of it.
> If we dislike something, we're never going to see it again.
> So, what if what if the thing that we like isn't real? What if the our favorite song is not made by a musician, but is made by a computer? This has massive ramifications like especially if that computer like if the person uploading that content is not telling you that it is fake.
> It is not real.
> It is made by by an **algorithm** and like you will never be able to see this performed live.
> Like that artist doesn't exist.
> Uh, but he's getting more uh views than people who have actual talent or something because it's because the **AI** was trained off of the people that have actual talent.
> Uh, honestly, this isn't as common in like this isn't as much of a problem in music as it is in terms of like news articles and videos because like we can now have an **AI** just go we we can type into chat GBT create a realistic article based on uh the idea that vaccines do not work.
> And the **AI** like I would hope chat GPT just goes, "Hey, but that's not true." Probably isn't.
> It'll probably generate exactly what you want.
> And uh guess what? You can post that on Facebook, make it look real, and uh people will believe that that's an actual scholarly article or something.
> And oh god, that's terrifying.
> Um, in fact, just today the president of the United States posted an **AI** generated video of Barack Obama and his wife being monkeys.
> No one made that.
> An **AI** made that and he posted that.
> H um yeah, he posted that because that's what he believes and he wants to other people to see it and he did that and it's a thing that lived out there for a period of time and that the **White** House defended for a little bit and then decided, oh this is racist as  and kind of sort of halfbacktracked on.
> Um, yeah, it we're getting to the point I mean the New York Times has had an issue where an a journalist has made an **AI** generated article.
> It harms the trust in the in the media itself.
> like if people are getting tricked by videos and text and music and art, it's it has really big ramifications on like how those things are going to be developed in the future.
> Um, yeah.
> Yet again, I'm You know what? I'm just gonna I'm gonna put in here.
> There you go.
> Ah.
> Ah.
> This kind of connects to it.
> So the **six degrees of separation** is the idea that every person is connected to another person, one that they do not know by six degrees.
> So, this person is connected to that person is connected to that person who's connected to this person up here who's connected to this person over here.
> One, two, three, four, five, one more.
> Or actually, wait, no, six because it's the six step that leads to him.
> So, and the reason the reason why this is like this **six degrees of separation** thing is so important and why it's here uh is because it's actually like mathematically this is true.
> Um especially in the digital age where we are more interconnected with people than we ever have been before.
> like it no longer matters that uh people live on different continents.
> We can talk to each other still.
> It's not that hard.
> Um and because of that, you can probably trace a line from one person to another person in as little as six steps.
> Um or in as many as six steps.
> Uh, and I mean all you have to do in order to like really understand this is it's just like you have a friend.
> Your friend is part of like a **Discord** server that uh he shares that a different **discord** server with another person, one that you do not know, and he shares a **Discord** server with another person, one that neither of these two people know, and so on and so forth.
> It's actually a lot more common than you would think.
> And when you add Wikipedia, pull requests, uh, **GitHub**, uh, all these things, you kind of realize that one person can actually affect the another person pretty easily.


> Um, so if I spread information to this group, it can spread to the rest of the group in six steps.
> that article could travel millions of miles without uh without much difficulty.
> It's a really cool it's a really cool idea because it means that like we like we as individuals have a lot more power than we probably think we do.
> But it also so like good news can spread very uh very well but so can bad news and so can like tr the truth can sp spread quickly or false narratives can spread quickly.
> It's just an idea that like people should keep in mind that remember if you're causing harm to like one person you could cause harm to someone way way down the line.
> See? Okay.
> So, let's do Wikipedia articles.
> Uh, so Wikipedia is a online encyclopedia and it is a wiki.
> What a wiki is is a uh collaborative uh work of uh a wiki is a collaborative work of explaining something.
> Um, so it's like an uh Wikipedia is the web's encyclopedia, but you can have a wiki for like a video game that literally just everybody can post articles about their favorite video game and like what they see in it.
> Uh, but in this particular case, we're looking at Wikipedia.
> Um, and so we're going to we have a guy and he has an article.
> He is going to push that article and that article is going to go to most likely a group of editors.
> This is this would be based on uh what it is linked to.
> So like if you made a post about **history** uh in like French **history**, it's probably going to go to people who have shown interest in French **history** and they're going to be able to review and edit it.
> If they like, if they dislike it, they can send it back usually with some kind of instruction on how this could be written to be correct and uh like with some type of edit.
> So, say like you need more sources or this doesn't sound scholarly enough, try writing it this way.
> like it's a collaborative effort, but these people are able to say like, "No, you need to rethink it a little bit." These people, if they do like it, will often times then send it to what I'm going to call like a super user.
> This is like the guy who has the very very specific interest that is uh related to your uh article.
> So, like if it's an article on French **history** and these are three guys who are interested in French **history**, this is the guy that they like that they're like, "This guy knows his shit." And like yet again, if he doesn't like it, it can be sent down the line again back to you and you can rework on it and then try to work it up.
> But if he does like it, congratulations, you have an article on Wikipedia.
> Uh it's the same thing with editing an article.
> It's actually a little easier with editing an article because there are uh there probably is a more definite super user for that thing.
> Uh so it'll actually pass uh up a little **faster**.
> Um but like it's the same as like writing an article for the most part.
> Uh uh it is important though I do want to point this out that generally this article will have to link to other articles.
> If it just stands on its own, like that it doesn't have like a core topic or something, then it's probably not going to be recognized.
> They probably will deny it.
> I'm almost at four hours.
> I'm sorry, professor.
> Uh, okay.
> Poll request.
> **Pull request** is actually pretty similar.
> This is with **GitHub** though.
> Um, and we're talk like it's the same thing in terms of like **collaboration**, but it's a little different.
> So on **GitHub**, you will have what's known as like a main repo or a main **repository**, and that has all of the code inside of it.
> A **pull request** allows you to pull that version down and create your own copy of it.
> gonna give this guy crown as well.
> So that's a **pull request** where we uh basically are taking a codebase, we're pulling it down, we have our own version of it, we can make our own edits to it and it can have a different **history** than the one above it.
> So this is also known as forking um that you've created a fork of the main **repository**.
> So let's say that like the original one was like Windows based and you're making like a Mac version.
> So that would actually be like a really good reason to make like a fork and go like, "Yeah, this one works on Windows, but I'm making the version that works on Macintosh." And that's like a different system.
> Uh the other thing that you can always do is you can pull down and then when you make the change you push it uh you push it back to the main **repository** by making a uh by making a what is it called? Um I don't think it's called a **pull request**.
> Mer I think it's a **merge** request I think.
> Don't quote me on that.
> Um, so essentially what you can do is you can actually say like, "Hey, I've made some changes to this.
> Uh, I would like to push them into the main **repository**." And then the system actually looks a lot like uh the the uh Wikipedia version, which are just like, "Hey, I have this thing." And then people like users above you will look at it, review it, and then they'll uh send it back or they'll send it up.
> The the main guy will look at it, review it, and then he'll either accept it or send it back and you start again.
> But this is of course like really really useful because uh open-source like code, open source **operating systems**, they're just they allow users to fill in gaps that ex that would exist within other systems.
> So, like if you don't like Windows because it lacks something, you can make a version of Linux that has that thing and push that up.


> Um, and people will use it and people will **collaborate** with you and they'll make their own changes and that's how you get like Ubuntu and Ki Linux and whatnot.
> Uh, which are extremely helpful uh in pretty much all of computing.
> All right.
> What does it mean to hold a **copyright**? I'm gonna try to not go on a long thing about it because I could I will however switch to a new page because I'm just running out of room on that page.
> So, we got a guy.
> He's made a thing.
> He's made a picture of a mountain with an ugly face.
> And upon doing that, literally just upon creating this, he immediately has **copyright** a **copyright** of this thing.
> Now, what does **copyright** do? Well, let's say that somebody else creates pretty much the same thing.
> Let's make it a mountain.
> with a frowny face.
> So, this guy, I think, has every right to kind of go like, "Wait a second, but that's mine.
> I made that type of thing.
> In fact, you looked at that thing and then you made yours." Uh, I don't like that.
> And he has every right to uh to say that because he has **copyright** of the original.
> And what **copyright** allows you to do is it allows you to you have the right to reproduce.
> So basically some he can create multiples of this.
> He can print it.
> He can sell it to people.
> Uh multiple copies.
> He has the right to that.
> It's his uh he has the right to distribute which basically means that like this is the guy who is allowed to sell this.
> If he if he joins with a publisher in order to distribute it, they also are allowed to distribute it.
> But like he is ultimately the person who gets to choose like uh how this is disseminated amongst the public.
> He can hang it in an art museum.
> Uh he can make copies of it.
> He can put it online for everybody to see.
> It is his to distribute.
> You also have uh and this is the most important one in this case.
> Uh you have the right to derivative works.
> So most of the time when we're talking about derivative works, we're talking about like sequels to movies and whatnot.
> But I think in this case you could probably make the argument that mountain with smiling or mountain with frowny face is just mountain with smiley face but it's a different version.
> It's a derivative work.
> It is this guy is taking this thing and just put a frown on it.
> Uh and you know what that's not allowed.
> Uh the other thing is and this is not as like This is not as important in the art case, but like uh in the case of like music or plays or movies, the performance of a piece uh if you put on a specific performance, uh like they're not necessarily allowed to record that uh and then put it online.
> So all of those all those musicals that you listen to online um like sneakily copied uh like filmed from inside of some guy's jacket.
> Uh yeah, that that would be that guy who is posting that is uh going against the right of performance.
> Um but yeah, and the the important part here is that this is not like this is not a law in terms of like you're going to jail.
> You're not you're not going to jail for this.
> Probably not.
> I bet there are some cases in which it could, but probably not.
> Um and then the uh but it is a it is a civil matter.
> So this guy does have to raise this concern.
> If this guy just sees this and goes, you know what, I don't care.
> It's not illegal.
> It's not he's not this guy's not going to jail or anything like that.
> that uh this guy gets the the right to say whether or not he thinks this guy is breaking his **copyright**.
> But there are certain things that that guy could then do in order to defend himself and those are he can claim **fair use**.
> Now there are a couple there are a lot of different ways in which **fair use** works.


> Uh but the most important parts are the intent of the copy.
> So if this person was uh if he's made this as a critique of uh if he made frowny face mountain as a critique to smiley face mountain uh that is the his intent he's uh saying I'm using this in order to criticize the artistic value of the original piece.
> Um, this isn't a very popular uh well, it it's a very popular argument from fair people who use fair reuse, it doesn't work terribly often.
> Um, unless you unless the intent is like a lot more uh like blatant.
> So, uh, basically if you said like, "Yeah, I'm I showed a copy of Smiley Face Mountain, uh, in my class on art because I wanted to like I want I was teaching a course on the guy who made Smiley Mountain.
> Like, in order to talk about him and teach people about him, I have to show his art.
> So, that's why I showed it." Uh, that's a pretty strong argument.
> Uh, and that's **fair use** for education.
> Um, so like there's **fair use** for education, **fair use** for criticism, **fair use** for satire is pretty much kind of the same as **fair use** for uh it is a worse version of **fair use** for uh criticism.
> Basically, if you're if you're saying this is satire, a lot of people don't necessarily uh they they don't necessarily look at that as like being a good thing.
> Um because a lot of people misuse the term satire.
> Um, so but yeah, there are certain there are certain things that you can do in order to say like it wasn't my intent to take money from this person.
> It is my intent to show people this thing and teach them about it.
> Uh, the other one would be the uh probably it would be like the originals.
> I want to use intent again.
> Um, you know what? Yeah, it honestly because it is still intent.
> We're you're still arguing some intent, but it's intent of original.
> So if you So when we're talking about the intent of the original, if this guy said, "Look, like Smiley Face Mountain is clearly a joke.
> This is a joke." The guy meant it as a joke.
> He said it was a joke.
> Like he keeps talking about it as being a joke.
> I don't see how making frowny face mountain is not the same joke.
> Um, and that like that is a decent argument to make.
> What is the intent of the original was did this guy make Smiley Face Mountain to be educational and then you used it as an educational tool? I mean, if it was meant to be used educationally, then shouldn't I be allowed to use it in an educational setting? Yeah.
> The intent of the original is extremely important because it basically uh it it's the flip side of the copy.
> Um, if you like it doesn't matter if the intent of the copy is poor if the intent of the original was clearly to just be a meme or something.
> You can't like you could claim **copyright** over a meme, but that's not the purpose of a meme.
> Like it's meant to be spread.
> Uh so yeah it intent of the original is very important.
> Uh so the other one is market damage.
> If smiley face mountain was making $0 and0 and then frowny face mountain is also making zero, you have done no damage to the original person.
> There is no market effect.
> If this guy sold this for a million dollars and you're selling yours for 10, there's this guy is making a ton off of this.
> This guy's barely in uh affecting his market at all.
> It does it does not damage his market.
> Now, he could argue that because like it's making fun of his thing, it's going to damage the market if it became popular.
> But that's a whole lot harder to argue because there isn't direct market damage.
> You can't say, "I lost this much money because that guy made that thing." Uh, and so when you defend yourself against a **copyright** claim, you can say, "This guy, I'm doing nothing.
> I did nothing to him.
> He has not been harmed by my piece." Like there is there is no market damage.
> There's nothing bad is happening here.
> Um, and then the final one is, and this is obvious, this is actually like the the easiest one to argue.
> It's a mount.
> If you So, the problem with smiley face mountain uh frowny face mountain is that it's literally the same design except with this guy like put a frowny face on it instead.
> The amount that is similar between the two is pretty heavy.
> Um it is very clear that this is a derivative or a derivative work or a reproduction.
> Um, but if it was like a book and this guy was just referencing one line in the book, I mean, there's thousands of sentences in the original work.
> He copied one sentence.
> The amount that he copied is minimal.
> Uh, and usually this is like connected to the market damage part as well, where it's just like I'm not going to affect like this guy's sales of a book if I copy one line.


> If like for the purposes of like telling people about this line, it's just not going to it it just is a it's an insignificant amount and that's basically **fair use**.
> The main thing to remember with **copyright** law and **fair use** is that this entire system is like based upon claiming someone did something and then that person defending it.
> So like this guy doesn't have to prove that uh this guy made a copy.
> This guy has to prove that he made a copy and it was **fair use** or that he made a completely independent work because if it if it's completely different then it doesn't even fall under **fair use**.
> It's a different work.
> Um but yeah, that's that's that.
> Um, this video has gone on for 4 hours, which I think has sol solidly landed me in the longest uh video for a as for a exam ever.
> Um, Whoops.
