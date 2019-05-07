

var harryPotter = ["Numbing the pain for a while will make it worse when you finally feel it.",
"Indifference and neglect often do much more damage than outright dislike.",
"It is the unknown we fear when we look upon death and darkness, nothing more.",
"Words are, in my not so humble opinion, our most inexhaustible source of magic, capable of both influencing injury, and remedying it.",
"Happiness can be found, even in the darkest of times, if only one remembers to turn on the light.",
"Let us step into the night and pursue that flighty temptress, adventure.",
"Youth cannot know how age thinks and feels, but old men are guilty if they forget what it was to be young.",
"Understanding is the first step to acceptance, and only with acceptance can there be recovery.",
"Numbing the pain for a while will make it worse when you finally feel it.",
"Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
"We are only as strong as we are united, as weak as we are divided.",
"Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?"];


var albertE = ["Anyone who has never made a mistake has never tried anything new.",
"The true sign of intelligence is not knowledge but imagination.",
"The important thing is not to stop questioning. Curiosity has its own reason for existing.",
"Weakness of attitude becomes weakness of character.",
"The only source of knowledge is experience.",
"Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.",
"There comes a time when the mind takes a higher plane of knowledge but can never prove how it got there.",
"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
"I think and think for months and years. Ninety-nine times, the conclusion is false. The hundredth time I am right.",
"Life is like riding a bicycle. To keep your balance you must keep moving.",
"There are two ways to live: you can live as if nothing is a miracle; you can live as if everything is a miracle.",
"The difference between genius and stupidity is that genius has its limits.",
"It is the supreme art of the teacher to awaken joy in creative expression and knowledge."];


function submit () {
	var quotes = document.getElementsByName('quotes');

	// to get specific number of quotes
		var numOfQuotes = 0;
	for (var i = 0; i < quotes.length; i++) {
		if (quotes[i].checked == true) {
			numOfQuotes = quotes[i].value;
			break;
		}
	}
	var qType = document.getElementsByName('qType')[0].value;
	document.getElementById("quote").innerHTML = genQuote(numOfQuotes,qType);
	
}

// to get the quote either from hp or alberte

function genQuote(num, type) {
	var quoteArray;
	if (type == "albert") {
		quoteArray = albertE;
	} else { 
		quoteArray = harryPotter;
	}
	var result = "";
	for (i = 0; i < num; i++) {
		result = result + randomQuote(quoteArray)+"<br>";

	}
 return result;

}
// to get a random quote
function randomQuote(quoteArray) {
	var randomIndex = Math.floor(Math.random()*quoteArray.length); 
	return(quoteArray[randomIndex]);

} 


