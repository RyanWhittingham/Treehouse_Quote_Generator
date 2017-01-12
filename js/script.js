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



//function that selects random quote object from quotes array and returns the data
function getRandomQuote(){

	//variable to track the number of quotes in the quotes array
	var numberOfQuotes = quotes.length;
	//console.log(numberOfQuotes);

	//variable that creates random number between 0 and number of quotes
	var randomNumber = Math.floor(Math.random() * numberOfQuotes);
	//console.log(randomNumber);
	
	return quotes[randomNumber];

};



//function that grabs getRandomQuote data, checks the number of elements, formats with html, and displays it to web page 
function printQuote(){
	
	var newQuote=getRandomQuote();

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

};


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

