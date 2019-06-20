var q1= "Sometimes when you’re feeling helpless, the secret is to help someone else. Get out of your own head. Trust me. Next time someone asks for help, say, ‘Yes.’ \n -Michael";
var q2= "In case you were wondering, I am, by definition, the best version of myself. \n -Janet";
var q3= "Principles aren’t principles when you pick and choose when you’re gonna follow them. \n -Chidi";
var q4= "Why choose to be good everyday if there is no guaranteed reward we can count on now or in the afterlife?  I argue that we choose to be good because of our bonds with other people and our innate desire to treat them with dignity. Simply put, we are not in this alone. \n -Chidi";
var q5= "Lies are always more convincing when they’re closer to the truth. \n -Michael";
var q6 = "If you try and ignore your sadness, it just ends up leaking out of you anyway. I’ve been there. And everybody’s been there. So don’t fight it. \n -Eleanor";
var q7 = "My whole life, whenever I encountered any obstacles, I would simply say, ‘I would like to speak to a manager.’ But in our relationship, there was no manager. There was no one who could fix this for me except me. \n -Tahani";
var q8 = "There are still some people in this world that we care about, so I say we try and help them become good people… why not try? It’s better than not trying, right? \n -Eleanor";
var q9 = "I wasn’t a failed DJ. I was pre-successful. \n -Jason";
var q10 = "Remember the thought experiment where you’re driving a trolley and you can either plough into a group of people or turn and hit one person? I solved it. See, the trolley problem forces you to choose between two versions of letting other people die. The actual solution is very simple: sacrifice yourself. \n -Michael";
var q11 = "You’re cool, dope, fresh and smart-brained. I’ve never seen you dance, but I bet you’re good, ’cause you’re good at everything. You’re awesome! Be nicer to yourself. \n -Jason";
var q12 = "I know it sounds crazy. But if it weren’t crazy, they wouldn’t call it a leap of faith. They would call it a sit of doubting. \n -Eleanor";
var q13 = "I would say I outdid myself, but I’m always this good. So I simply did myself. \n -Tahani";
var q14 = "Pobody's nerfect. \n -Eleanor";
var q15 = "If there was an answer I could give you to how the universe works, it wouldn't be special. It would just be machinery fulfillng its cosmic design. It would be just a big, dumb food processor, but since nothing seems to make sense, once you find something or soomeone that does, it's euphoria. \n -Janet";
var quotes = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];


var clickHere = $('.click-here-btn');
var clear = $('.clear-btn');
var tgpQuote = $('.quote');

clickHere.on('click', showQuote);
clear.on('click', hideQuote);


function showQuote() {
  var rand = Math.floor(Math.random()*quotes.length);
  tgpQuote.text(quotes[rand]).hide().fadeIn(2000);
}

function hideQuote() {
  tgpQuote.fadeOut(2000);
}
