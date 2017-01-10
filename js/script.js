//array of quotes with the following properties, quote, source, citation, and year
var quotes = [

	['I have no money, no resources, no hopes.  I am the happiest man alive', 
	'Henry Miller', 
	'Tropic of Cancer',
	'1925', 
	],

];


//function that selects random quote object from quotes array and returns the data
function getRandomQuote(){


};

//function that grabs getRandomQuote data, formats, and displays it to web page
function printQuote(){
	
	document.getElementById('quote-box').innerHTML

};


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

