//array of quotes with the following properties: quote, source, citation, and year
var quotes = [

	['I have no money, no resources, no hopes.  I am the happiest man alive', 
	'Henry Miller', 
	'Tropic of Cancer',
	'1925' 
	],

	['You will become way less concerned with what other people think of you when you realize how seldom they do.', 
	'David Foster Wallace',
	'Infinite Jest' 
	],

	['I tell you, we are here on Earth to fart around, and don\'t let anybody tell you different', 
	'Kurt Vonnegut'
	],

];

//variables to hold number of times a quote is shown
var quote1Tracker = 0;
var quote2Tracker = 0;
var quote3Tracker = 0;

//variable to hold the getQuote function return
var newQuote = '';


//function that selects random quote object from quotes array and returns the data
function getRandomQuote(){

	//variable to track the number of quotes in the quotes array
	var numberOfQuotes = quotes.length;

	//variable that creates random number between 0 and number of quotes
	var randomNumber = Math.floor(Math.random() * numberOfQuotes);
	
	return quotes[randomNumber];

};


//gets new quote from the randomQuote function
function getQuote(){

	newQuote = getRandomQuote();
};


//track number of times each quote is displayed
function quoteTracker() {

	if (newQuote === quotes[0]) {

		quote1Tracker += 1;

	}

	else if (newQuote === quotes[1]) {

		quote2Tracker += 1;

	}

	else if (newQuote === quotes[2]) {

		quote3Tracker += 1;

	}

};

//function that grabs getRandomQuote data, checks the number of elements, formats with html, and displays it to web page 
function printQuote(){

	if (newQuote.length === 2) {
		
		document.getElementById('quote-box').innerHTML =

		'<p class="quote">' + newQuote[0] + '</p>' +
		'<p class="source">' + newQuote[1]  +
		'</p>'

	}

	else if (newQuote.length === 3) {
		
		document.getElementById('quote-box').innerHTML =

		'<p class="quote">' + newQuote[0] + '</p>' +
		'<p class="source">' + newQuote[1]  +
			'<span class="citation">' + newQuote[2] + '</span>' +
		'</p>'

	}

	else {
		
		document.getElementById('quote-box').innerHTML =

		'<p class="quote">' + newQuote[0] + '</p>' +
		'<p class="source">' + newQuote[1]  +
			'<span class="citation">' + newQuote[2] + '</span>' +
			'<span class="year">' + newQuote[3] + '</span>' +
		'</p>'

	}

	console.log(newQuote);
	console.log("quote 1 Tracker: " + quote1Tracker);
	console.log("quote 2 Tracker: " + quote2Tracker);
	console.log("quote 3 Tracker: " + quote3Tracker);

};

//gets new quote when button clicked.
document.getElementById('loadQuote').addEventListener("click", getQuote, false);

//tracks quotes when button clicked.
document.getElementById('loadQuote').addEventListener("click", quoteTracker, false);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//function that creates a random color and applies the color to the body background color
function randomColor() {
    
	var newColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ')';

	document.body.style.backgroundColor = newColor;
};

//event listener for the "Show another quote" button that uses the randomColor function
document.getElementById('loadQuote').addEventListener("click", randomColor, false);