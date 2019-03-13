

var firstPart = ["The quick brown fox ", 
"Fat grey cat ",
"Stranger in the shop ",
"Someone I know ",
"My flat mate "];


var middlePart = ["combined Maple Syrup & buttered Popcorn ", 
"jumped ", 
"went for a wine ", 
"ate all the chocolate ", 
"drank all the beer "];


var lastPart = ["thinking that Nancy is very pretty.", 
" in the church.", 
" with my grandmum",
" with my teacher", 
" looking through the window."]; 


function submit() {
	var quote = getQuote();
	document.getElementById('quote').innerHTML = quote; 
}

function getQuote(){
	var randomFirstPartIndex = Math.floor(Math.random()*firstPart.length);
	var randomMiddlePartIndex = Math.floor(Math.random()* middlePart.length);
	var randomLastPartIndex = Math.floor(Math.random()*lastPart.length);
	var randomQuote = firstPart[randomFirstPartIndex] + middlePart[randomMiddlePartIndex]
	+ lastPart[randomLastPartIndex];
	return randomQuote; 
}

