// jQuery tabs function
$( function() {
    $( "#tabs" ).tabs();
  } );

// producing random integers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

//test
document.getElementById("p1").innerHTML = getRandomInt(1,10);
document.getElementById("p2").innerHTML = getRandomInt(11,20);
document.getElementById("p3").innerHTML = getRandomInt(21,30);
document.getElementById("p4").innerHTML = getRandomInt(31,40);
document.getElementById("p5").innerHTML = getRandomInt(41,50);
document.getElementById("p6").innerHTML = getRandomInt(51,60);
document.getElementById("p7").innerHTML = getRandomInt(61,70);
document.getElementById("p8").innerHTML = getRandomInt(71,80);

// function assignStatement(int) {
//     int = getRandomInt(0,20)
// }

// papa's cards

let cardsp = new Array();

cardsp[0] = 'Silence.';
cardsp[1] = 'The illusion of choice in a latestage capitalist society.';
cardsp[2] = 'Many bats.';
cardsp[3] = 'Hot Asian men.';
cardsp[4] = 'Shame.';
cardsp[5] = 'Website.';
cardsp[6] = 'Assaulting a police officer.';
cardsp[7] = 'Magnets.';
cardsp[8] = 'A sorry excuse for a father.';
cardsp[9] = 'Seeing what happens when you lock people in a room with hungry seagulls.';
cardsp[10] = 'A crucifixion.';
cardsp[11] = 'A narc.';
cardsp[12] = 'Boneless buffalo wings.';
cardsp[13] = 'A live studio audience.';
cardsp[14] = 'Complaining.';
cardsp[15] = 'Authentic Mexican cuisine';
cardsp[16] = 'Doing crimes.';
cardsp[17] = 'COVID-19.';
cardsp[18] = 'Crippling debt.';
cardsp[19] = 'Daddy issues.';
cardsp[20] = 'Working in an Amazon warehouse.';
cardsp[21] = 'A fart so powerful that it wakes the giants from their thousand-year slumber.';
cardsp[22] = 'Former President George W. Bush.';
cardsp[23] = 'Full frontal nudity.';
cardsp[24] = 'Covering myself with Parmesan cheese and chili flakes because I am pizza.';
cardsp[25] = 'Laying an egg.';
cardsp[26] = 'Getting naked and watching Nickelodeon.';
cardsp[27] = 'Pretending to care.';
cardsp[28] = 'Having big dreams but no realistic way to achieve them.';
cardsp[29] = 'Seeing Grandma naked.';
cardsp[30] = 'Lactation.';
cardsp[31] = 'Shutting up so I can watch the game.';
cardsp[32] = 'One titty hanging out.';
cardsp[33] = 'Drinking gasoline to see what it tastes like.';
cardsp[34] = 'Inappropriate yodeling.';
cardsp[35] = 'Puberty.';
cardsp[36] = 'Ghosts.';
cardsp[37] = '50 mg of Zoloft daily.';
cardsp[38] = 'Braiding three penises into a Twizzler.';
cardsp[39] = 'Vigorous jazz hands.';
cardsp[40] = 'My Uber driver, Pavel.';
cardsp[41] = 'Strong female characters.';
cardsp[42] = 'Getting decapitated by a helicopter.';
cardsp[43] = 'Hospice care.';
cardsp[44] = 'Getting really high.';
cardsp[45] = 'The opioid epidemic.';
cardsp[46] = 'Penis envy.';
cardsp[47] = 'Gay conversion therapy';
cardsp[48] = 'Burgers and pussy.';
cardsp[49] = 'German Chancellor Angela Merkel.';
cardsp[50] = 'The KKK.';
cardsp[51] = 'Ethnic cleansing.';
cardsp[52] = 'A fuck-ton of almonds.';
cardsp[53] = 'A salad for men that is made of metal.';
cardsp[54] = 'Waiting till marriage.';
cardsp[55] = 'Unfathomable stupidity';
cardsp[56] = 'Pretending to be a dentist.';
cardsp[57] = 'The Devil himself.';
cardsp[58] = 'Salvation.';
cardsp[59] = 'The Pope.';
cardsp[60] = 'My pet scorpion, Tina.';
cardsp[61] = 'Two Xanax and a bottle of wine.';
cardsp[62] = 'The magic of live theatre.';
cardsp[63] = 'Throwing a virgin into a volcano.';
cardsp[64] = 'Dwayne “The Rock” Johnson.';
cardsp[65] = 'Accepting the way things are.';
cardsp[66] = 'NBA superstar LeBron James.';
cardsp[67] = 'Listening to her problems without trying to solve them.';
cardsp[68] = 'Therapy.';
cardsp[69] = 'Being fat and stupid.';
cardsp[70] = 'A salty surprise.';
cardsp[71] = 'Fucking the weatherman on live television.';
cardsp[72] = 'PTSD.';
cardsp[73] = 'Dark and mysterious forces beyond our control.';
cardsp[74] = 'Smallpox blankets.';
cardsp[75] = 'Masturbating.';
cardsp[76] = 'Hobos.';
cardsp[77] = 'Queefing.';
cardsp[78] = 'Cardi B.';
cardsp[79] = 'Soup that is too hot.';
cardsp[80] = 'The ugliest boy in town.';
cardsp[81] = 'A time-traveling Chinese general from the Shang Dynasty.';
cardsp[82] = 'A bird that shits human turds.';
cardsp[83] = 'A mopey zoo lion.';
cardsp[84] = 'A bag of magic beans.';
cardsp[85] = 'Poor life choices.';
cardsp[86] = 'Auschwitz.';
cardsp[87] = 'Cocaine for lunch.';
cardsp[88] = 'The Big Bang.';
cardsp[89] = 'Land mines';
cardsp[90] = 'Lumberjack fantasies.';
cardsp[91] = 'Women in yogurt commercials.';
cardsp[92] = "Morgan Freeman's voice.";
cardsp[93] = 'Fake tits.';
cardsp[94] = 'The Amish.';
cardsp[95] = 'The milkman.';
cardsp[96] = 'Swamp ass.';
cardsp[97] = 'The bombing of Nagasaki.';
cardsp[98] = 'Drinking out of the toilet and eating garbage.';
cardsp[99] = 'Heartwarming orphans.';
cardsp[100] = 'A windmill full of corpses.';
cardsp[101] = 'Flightless birds.';
cardsp[102] = 'Panda.';
cardsp[103] = 'Gandhi.';
cardsp[104] = "Jacob's ladder.";
cardsp[105] = 'Pentogram.';
cardsp[106] = 'Deviled eggs.';
cardsp[107] = 'Nut cracker.';
cardsp[108] = 'Raindrops on roses.';
cardsp[109] = 'Whiskers on kittens.';
cardsp[110] = 'Bright copper kettles.';
cardsp[111] = 'Warm woolen mittens.';
cardsp[112] = 'Brown paper packages tied up with strings.';
cardsp[113] = 'Hamburgers.';
cardsp[114] = 'Brisket.';
cardsp[115] = 'Vegan at Thanksgiving.';
cardsp[116] = 'Blood relative.';
cardsp[117] = 'Monkey Gram.';
cardsp[118] = 'Little baby Jesus.';
cardsp[119] = 'Ugly wrapping paper.';
cardsp[120] = 'Mistletoe.';
cardsp[121] = 'WILD CARD!! <img alt="panda the cat" src="images/panda.jpg">';

let ps = getRandomInt(0,14);
let pt = getRandomInt(15,29);
let pu = getRandomInt(30,44);
let pv = getRandomInt(45,59);
let pw = getRandomInt(60,74);
let px = getRandomInt(75,89);
let py = getRandomInt(90,104);
let pz = getRandomInt(105,121);

// add if statements to disallow repeat cards

//add loop for each assignment below
// let a = cards[x];
let p1 = cardsp[ps];
let p2 = cardsp[pt];
let p3 = cardsp[pu];
let p4 = cardsp[pv];
let p5 = cardsp[pw];
let p6 = cardsp[px];
let p7 = cardsp[py];
let p8 = cardsp[pz];

// add loop for each hand
document.getElementById("p1").innerHTML = p1;
document.getElementById("p2").innerHTML = p2;
document.getElementById("p3").innerHTML = p3;
document.getElementById("p4").innerHTML = p4;
document.getElementById("p5").innerHTML = p5;
document.getElementById("p6").innerHTML = p6;
document.getElementById("p7").innerHTML = p7;
document.getElementById("p8").innerHTML = p8;


// mom's cards
let cardsm = new Array();

cardsm[0] = 'Switching to Geico.';
cardsm[1] = 'Peeing a little bit.';
cardsm[2] = 'The Jews.';
cardsm[3] = 'Whatever.';
cardsm[4] = 'Powerful thighs.';
cardsm[5] = 'These hoes.';
cardsm[6] = 'The only gay person in a hundred miles.';
cardsm[7] = 'Donald J. Trump';
cardsm[8] = 'Kissing grandma on the forehead and turning off her life support.';
cardsm[9] = 'A certain je ne sais quoi.';
cardsm[10] = 'An AR-15 assault rifle.';
cardsm[11] = 'My good bra.';
cardsm[12] = 'Punching a congressman in the face.';
cardsm[13] = 'Saying everything is okay when everything is clearly not okay';
cardsm[14] = 'Being rich.';
cardsm[15] = 'Floating down the Hudson River with the other garbage.';
cardsm[16] = 'Republicans.';
cardsm[17] = 'Sniffing and kissing my feet.';
cardsm[18] = 'A much younger woman';
cardsm[19] = 'Poverty.';
cardsm[20] = 'Kamala Harris.';
cardsm[21] = 'Committing suicide.';
cardsm[22] = 'A loser like you.';
cardsm[23] = 'A mistake.';
cardsm[24] = 'Wizard music.';
cardsm[25] = 'The Kool-Aid Man.';
cardsm[26] = 'Explaining the difference between sex and gender.';
cardsm[27] = 'Free samples.';
cardsm[28] = 'Feeding strawberries to my manslut.';
cardsm[29] = 'The Three-Fifths Compromise.';
cardsm[30] = 'Licking things to claim them as your own.'; 
cardsm[31] = 'Jobs.';
cardsm[32] = 'The placenta.';
cardsm[33] = 'The Bachelorette season finale.';
cardsm[34] = 'Throwing grapes at a man until he loses touch with reality.';
cardsm[35] = 'Establishing dominance.';
cardsm[36] = 'Finger painting.';
cardsm[37] = 'Old-people smell.';
cardsm[38] = 'Getting crushed by a vending machine.';
cardsm[39] = 'My inner demons.';
cardsm[40] = 'A Super Soaker™ full of cat pee.';
cardsm[41] = "The feeling you get when the mosquitos arrive at dusk.";
cardsm[42] = 'Cuddling.';
cardsm[43] = 'However much weed $20 can buy.';
cardsm[44] = 'Battlefield amputations.';
cardsm[45] = 'Spaghetti? Again?';
cardsm[46] = 'Ronald Reagan.';
cardsm[47] = 'A disappointing birthday party.';
cardsm[48] = 'Nachos for the table.';
cardsm[49] = 'Becoming a blueberry.';
cardsm[50] = 'A tiny horse.';
cardsm[51] = 'Paying $20 for a beer at a baseball game.';
cardsm[52] = 'A pangender octopus who roams the cosmos in search of love.';
cardsm[53] = 'Meth.';
cardsm[54] = 'Cyanide.';
cardsm[55] = 'Holding down a child and farting all over him.';
cardsm[56] = 'A Bop It.™';
cardsm[57] = 'A whole thing of butter.';
cardsm[58] = 'Still being a virgin.';
cardsm[59] = 'Solving problems with violence.';
cardsm[60] = 'A lifetime of sadness.';
cardsm[61] = 'Two Xanax and a bottle of wine.';
cardsm[62] = 'Bitches.';
cardsm[63] = 'Fiery poops.';
cardsm[64] = 'Saying “I love you.”';
cardsm[65] = 'The true meaning of Christmas.';
cardsm[66] = 'Whatever is in the fridge.';
cardsm[67] = 'Owning and operating a Chilis franchise.';
cardsm[68] = 'Estrogen.';
cardsm[69] = 'Girls.';
cardsm[70] = 'The Russians.';
cardsm[71] = 'American Idol judge, Randy Jackson.';
cardsm[72] = 'The American Dream.';
cardsm[73] = 'Not wearing pants.';
cardsm[74] = 'Pooping in a laptop and closing it.';
cardsm[75] = 'A saxophone solo.';
cardsm[76] = 'Italians.';
cardsm[77] = 'A fetus.';
cardsm[78] = 'Firing a rifle into the air while balls deep in a squealing hog.';
cardsm[80] = 'Mike Pence.';
cardsm[81] = 'What that mouth do.';
cardsm[82] = 'Object permanence.';
cardsm[83] = 'Opposable thumbs.';
cardsm[84] = 'Racially-biased SAT questions.';
cardsm[85] = 'The Great Depression.';
cardsm[86] = 'Chainsaws for hands.';
cardsm[87] = 'Nicolas Cage.';
cardsm[88] = 'Like, whatever.';
cardsm[89] = 'Explosions.';
cardsm[90] = 'Not vaccinating my children because I am stupid.';
cardsm[91] = 'Liberals.';
cardsm[92] = 'Committing treason.';
cardsm[93] = 'A horde of Vikings.';
cardsm[94] = 'Vehicular manslaughter.';
cardsm[95] = 'Women’s suffrage.';
cardsm[96] = 'Some guy.';
cardsm[97] = 'Judge Judy';
cardsm[98] = 'A micropig wearing a tiny raincoat and booties.';
cardsm[99] = 'A gambling problem.';
cardsm[100] = 'Man meat.';
cardsm[101] = 'Santa.';
cardsm[102] = 'A martian';
cardsm[103] = 'Tigre.';
cardsm[104] = 'The wifi password.';
cardsm[105] = 'Sugar cookies.';
cardsm[106] = 'Being able to talk to elephants.';
cardsm[107] = 'An icy stare.';
cardsm[108] = 'Christmas tree vomit on the rug. Again.';
cardsm[109] = 'A Christmas Story.';
cardsm[110] = 'Unspeakable terrors.';
cardsm[111] = 'Brothers.';
cardsm[112] = 'Coffee.';
cardsm[113] = 'Creatively wrapped gifts.';
cardsm[114] = "Maintaining a 4.0 GPA.";
cardsm[115] = 'Delicious mushrooms.';
cardsm[116] = 'Gin and tonic.';
cardsm[117] = 'Daffodils.';
cardsm[118] = 'Smoking legal weed in Colorado.';
cardsm[119] = 'Clementine segments.';
cardsm[120] = 'Lavendar growing on the Olympic Peninsula.';

// let cards = [
// 'Apple', 
// 'ddd',
// 'dklj'
// ];

let ms = getRandomInt(0,14);
let mt = getRandomInt(15,29);
let mu = getRandomInt(30,44);
let mv = getRandomInt(45,59);
let mw = getRandomInt(60,74);
let mx = getRandomInt(75,89);
let my = getRandomInt(90,104);
let mz = getRandomInt(105,120);

// add if statements to disallow repeat cards

// add loop for each assignment below
let m1 = cardsm[ms];
let m2 = cardsm[mt];
let m3 = cardsm[mu];
let m4 = cardsm[mv];
let m5 = cardsm[mw];
let m6 = cardsm[mx];
let m7 = cardsm[my];
let m8 = cardsm[mz];

// add loop for each hand
document.getElementById("m1").innerHTML = m1;
document.getElementById("m2").innerHTML = m2;
document.getElementById("m3").innerHTML = m3;
document.getElementById("m4").innerHTML = m4;
document.getElementById("m5").innerHTML = m5;
document.getElementById("m6").innerHTML = m6;
document.getElementById("m7").innerHTML = m7;
document.getElementById("m8").innerHTML = m8;

// em's cards

let cardse = new Array();

cardse[0] = 'Boogers.';
cardse[1] = 'The miracle of childbirth.';
cardse[2] = 'A positive attitude!';
cardse[3] = 'Having a stroke.';
cardse[4] = 'Emerging from the sea and rampaging through Tokyo.';
cardse[5] = 'The Hamburglar.';
cardse[6] = 'AXE Body Spray.';
cardse[7] = 'The Blood of Christ.';
cardse[8] = 'Soft, kissy missionary sex.';
cardse[9] = 'BATMAN!';
cardse[10] = 'Agriculture.';
cardse[11] = 'Barely making $25,000 a year.';
cardse[12] = 'Natural selection. ';
cardse[13] = 'Boomers.';
cardse[14] = 'Prescription pain killers.';
cardse[15] = 'Swooping.';
cardse[16] = 'Mansplaining.';
cardse[17] = 'A homoerotic volleyball montage.';
cardse[18] = 'Alexandria Ocasio-Cortez.';
cardse[19] = 'Putting things where they go.';
cardse[20] = 'Holding a pepper grinder for some reason.';
cardse[21] = 'All-you-can-eat shrimp for $8.99.'; cardse[22] = 'An old guy who is almost dead.';
cardse[23] = 'Kanye West.';
cardse[24] = 'Hot cheese.';
cardse[25] = 'Getting serial killed.';
cardse[26] = 'Seven dead and three in critical condition.';
cardse[27] = 'Smegma.';
cardse[28] = 'Alcoholism.';
cardse[29] = 'A middle-aged man on roller skates.';
cardse[30] = 'Hurting those closest to me.';
cardse[31] = 'Laughing over champagne flutes while the poor freeze to death outside.';
cardse[32] = 'GoGurt';
cardse[33] = 'Filling my briefcase with business stuff.';
cardse[34] = 'Preteens.';
cardse[35] = 'My fat daughter.';
cardse[36] = 'Clean drinking water.';
cardse[37] = 'Fading away into nothingness.';
cardse[38] = 'Darth Vader.';
cardse[39] = 'Exactly what you would expect.';
cardse[40] = 'Expecting a burp and vomiting on the floor.';
cardse[41] = 'Only dating Asian women.';
cardse[42] = 'Putting children in cages.';
cardse[43] = 'Karen.';
cardse[44] = 'How amazing it is to be on mushrooms.';
cardse[45] = 'Judging everyone.';
cardse[46] = 'Kourtney, Kim, Khloe, Kendall, and Kylie.';
cardse[47] = 'Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.';
cardse[48] = 'Some god damn peace and quiet.';
cardse[49] = 'AIDS.';
cardse[50] = 'Pictures of boobs.';
cardse[51] = 'Breaking out into song and dance.';
cardse[52] = 'Leprosy.';
cardse[53] = 'Gloryholes.';
cardse[54] = 'Nipple blades.';
cardse[55] = 'The heart of a child.';
cardse[56] = 'Puppies!';
cardse[57] = 'Fellowship in Christ.';
cardse[58] = 'Waking up half-naked in a Denny\'s parking lot.';
cardse[59] = 'Getting drugs off the street and into my body.';
cardse[60] = 'Active listening.';
cardse[61] = 'Two Xanax and a bottle of wine.';
cardse[62] = 'Pooping back and forth. Forever.';
cardse[63] = 'The South.';
cardse[64] = 'The violation of our most basic human rights.';
cardse[65] = 'Saudi oil money.';
cardse[66] = 'Telling a shitty story that goes nowhere.';
cardse[67] = 'A good, strong gorilla.';
cardse[68] = 'Seeing my father cry.';
cardse[69] = 'Necrophilia.';
cardse[70] = 'Being a woman.';
cardse[71] = 'Explaining how vaginas work.';
cardse[72] = 'Academy Award winner Meryl Streep.';
cardse[73] = 'Drinking alone.';
cardse[74] = 'Dick fingers.';
cardse[75] = 'Multiple stab wounds.';
cardse[76] = 'The death penalty.';
cardse[77] = 'A supportive touch on the lower back.';
cardse[78] = 'Slaughtering innocent civilians.';
cardse[79] = 'Candied pecans.';
cardse[80] = 'Horse meat.';
cardse[81] = 'Huffing spray paint.';
cardse[82] = 'Invading Poland.';
cardse[83] = 'Assless chaps.';
cardse[84] = 'Murder.';
cardse[85] = 'Sipping kombucha like a smug piece of shit.';
cardse[86] = 'Her Majesty, Queen Elizabeth II.';
cardse[87] = 'Black Jesus.';
cardse[88] = 'Memes.';
cardse[89] = 'Goblins.';
cardse[90] = 'Hope.';
cardse[91] = 'Fox News.';
cardse[92] = 'A little boy who will not shut the fuck up about dinosaurs.';
cardse[93] = 'Climbing a telephone pole and becoming one with the T-Mobile network.';
cardse[94] = "This month's mass shooting.";
cardse[95] = 'Barack Obama.';
cardse[96] = 'Illegal immigrants.';
cardse[97] = 'Heteronormativity.';
cardse[98] = 'Crumbs all over the god damn carpet.';
cardse[99] = 'Corporate America.';
cardse[100] = 'Insatiable hunger.';
cardse[101] = 'The prostate.';
cardse[102] = 'Being a motherfucking sorcerer.';
cardse[103] = 'Greenies.';
cardse[104] = 'Genuine human connection.';
cardse[105] = 'Balls.';
cardse[106] = 'Grandma.';
cardse[107] = 'Friction.';
cardse[108] = 'Chunks of dead hitchhiker.';
cardse[109] = 'My ugly face and bad personality.';
cardse[110] = 'A bitch slap.';
cardse[111] = 'Winner of Survivor\'s 42nd season';
cardse[112] = 'Kitty litter.';
cardse[113] = 'Quesadilla';
cardse[114] = '$3 tip for carrying out your own order from Domino\'s.';
cardse[115] = 'Mask-ne.';
cardse[116] = 'Slyvia Plath\'s "The Bell Jar."';
cardse[117] = 'Next round on me!';
cardse[118] = 'Oktoberfest.';
cardse[119] = 'Yakima hops.';
cardse[120] = 'Eastern European history.';

// the following makes the card's readings random

let es = getRandomInt(0,14);
let et = getRandomInt(15,29);
let eu = getRandomInt(30,44);
let ev = getRandomInt(45,59);
let ew = getRandomInt(60,74);
let ex = getRandomInt(75,89);
let ey = getRandomInt(90,104);
let ez = getRandomInt(105,120);

// add if statements to disallow repeat cards

// add loop for each assignment below
let e1 = cardse[es];
let e2 = cardse[et];
let e3 = cardse[eu];
let e4 = cardse[ev];
let e5 = cardse[ew];
let e6 = cardse[ex];
let e7 = cardse[ey];
let e8 = cardse[ez];

// add loop for each hand
document.getElementById("e1").innerHTML = e1;
document.getElementById("e2").innerHTML = e2;
document.getElementById("e3").innerHTML = e3;
document.getElementById("e4").innerHTML = e4;
document.getElementById("e5").innerHTML = e5;
document.getElementById("e6").innerHTML = e6;
document.getElementById("e7").innerHTML = e7;
document.getElementById("e8").innerHTML = e8;

// v's cards

let cardsv = new Array();

// for the white card
let cards = new Array();

cards[0] = 'Hey Reddit! I am __________. Ask me anything.';
cards[1] = 'Introducing X-treme Baseball! It is like baseball, but with __________!';
cards[2] = 'Next from J.K. Rowling: Harry Potter and the Chamber of __________.';
cards[3] = "That's right, I killed __________. How, you ask? __________.";
cards[4] = "Dude, do not goin that bathroom. There's __________ in there.";
cards[5] = "__________. Betcha can't have just one!";
cards[6] = "Kids, I don't need drugs to get high. I'm high on __________.";
cards[7] = 'In the new Disney Channel Original Movie, Hannah Montana struggles with __________ for the first time.';
cards[8] = 'What is my secret power?';
cards[9] = "What is Batman's guilty pleasure?";
cards[10] = 'TSA guidelines now prohibit __________ on airplanes.';
cards[11] = "I'm sorry, Professor, but I couldn't complete my homework because of __________.";
cards[12] = 'And the Academy Award for __________ goes to __________.';
cards[13] = "It's a pity that kids these days are all getting involved with __________.";
cards[14] = 'Step 1: __________. <br>Step 2: __________. <br>Step 3: Profit.';
cards[15] = 'For my next trick, I will pull __________ out of __________.';
cards[16] = '? I’m going on a cleanse this week. Nothing but kale juice and __________.';
cards[17] = '__________ + __________= __________.';
cards[18] = 'When Pharaoh remained unmoved, Moses called down a Plague of __________.';
cards[19] = 'Just once, I would like to hear you say “Thanks, Mom. Thanks for __________.”';
cards[20] = '50% of all marriages end in __________.';
cards[21] = 'My fellow Americans: Before this decade is out, we will have __________ on the moon!';
cards[22] = 'Life for Americans was forever changed when the White House introduced them to __________.';
cards[23] = 'What is Teach For America using to inspire inner city students to succeed?';
cards[24] = '__________ is a slippery slope that leads to __________.';
cards[25] = 'Daddy, why is mommy crying?';
cards[26] = 'When I was tripping on acid, turned into __________.';
cards[27] = "This season at Steppenwolf, Samuel Beckett's classic existential play: Waiting for __________.";
cards[28] = 'Instead of coal, Santa now gives the bad children __________.';
cards[29] = "Maybe she's born with it. Maybe it's __________.";
cards[30] = 'What is George W. Bush thinking about right now?';
cards[31] = 'Why do I hurt all over?';
cards[32] = 'A romantic, candlelit dinner would be incomplete without __________.';
cards[33] = 'The class field trip was completely ruined by __________.';
cards[34] = "What's a girl's best friend?";
cards[35] = "Dear Abby, I'm having some trouble with __________ and would like your advice.";
cards[36] = "In Jordan Peele's new thriller, a young family discovers that __________ had really been __________ all along.";
cards[37] = 'What never fails to liven up the party?';
cards[38] = 'IF you like __________, YOU MIGHT BE A REDNECK.';
cards[39] = 'Hey guys, welcome to Chilis! Would you like to start the night off right with __________?';
cards[40] = 'I got 99 problems but __________ aint one.';
cards[41] = 'What would grandma find disturbing, yet oddly charming?';
cards[42] = '__________. That was so metal.';
cards[43] = 'What is that sound?';
cards[44] = 'When I am President, I will create the Department of _________.';
cards[45] = 'What are my parents hiding from me?';
cards[46] = 'Make a haiku.';
cards[47] = 'What made my first kiss so awkward?';
cards[48] = "__________. It's a trap!";
cards[49] = "Hulu's new reality show features twelve hot singles living with __________.";
cards[50] = 'I never truly understood until I encountered __________.';
cards[51] = 'During sex, I like to think about __________.';
cards[52] = "Uh, hey guys, I know this was my idea, but I'm having serious doubts about __________.";
cards[53] = 'Why am I sticky?';
cards[54] = "I'm no doctor, but I'm pretty sure what you're suffering from is called '__________'.";
cards[55] = 'Lifetime® presents: \"the Story of.\”';
cards[56] = 'What is that smell?';
cards[57] = 'Why is Brett so sweaty?';
cards[58] = 'Here is the church Here is the steeple <br>Open the doors <br>And there is __________.';
cards[59] = 'But before I kill you, Mr. Bond, I must show you __________.';
cards[60] = 'Next on ESPN2: The World Series of __________.';
cards[61] = 'Tis the season to be __________.';
cards[62] = '__________, _________, _________; these are a few of my favorite things!';
cards[63] = 'We have seen some of our guests ________ like a true ___________!';
cards[64] = 'My kids are not impressed by my __________.';
cards[65] = 'Joy to the __________.';
cards[66] = 'You are the __________ to my __________.';
cards[67] = '______lords.';
cards[68] = 'Did you bring enough _________ to share with the whole class?';
cards[69] = 'Have you seen the new Gordon Ramsey show? __________ Nightmares?';
cards[70] = 'Merry ________ and a happy new _________.';
cards[71] = 'Go to the __________ District. They have the best __________.';
cards[72] = 'We wish you a merry __________ and happy new __________.';
cards[73] = 'Whispering sweet __________.';
cards[74] = "Uh, don't you know we're supposed to be boycotting _________ right now?";
cards[75] = 'The __________ union sure has __________ shaking in their boots.';
cards[76] = 'Our relationship is strictly professional. Let\'s not complicate things with';
cards[77] = 'My tweet about _________________ got 100,000 retweets!';
cards[78] = 'March _________ bring April _______';
cards[79] = 'I I\'m sorry, Professor, but I couldn\'t complete my homework because ofsaw _________ kissing Santa Claus.';
cards[80] = 'In line with our predictions, we find a robust correlation between _________ and __________ (p>.05).';

let a = getRandomInt(0,80);
let b = cards[a];
document.getElementById("white").innerHTML = b;