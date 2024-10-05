// Store some quotes if not already present in localStorage
if (!localStorage.getItem('quotes')) {
    const quotes = [
      { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
      { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
      { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    ];
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Function to get and display a random quote
function displayRandomQuote() {
    const storedQuotes = JSON.parse(localStorage.getItem('quotes'));

    if (storedQuotes && storedQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * storedQuotes.length);
        const randomQuote = storedQuotes[randomIndex];

        // Update the HTML content with the random quote and author
        document.getElementById('display-quote').innerText = `"${randomQuote.quote}"`;
        document.getElementById('author-name').innerText = `- ${randomQuote.author}`;
    } else {
        document.getElementById('display-quote').innerText = "No quotes found.";
        document.getElementById('author-name').innerText = "";
    }
}

// Function to add a new quote
function addNewQuote() {
    const newQuoteText = document.getElementById('new-quote-text').value.trim();
    const newAuthorName = document.getElementById('new-author-name').value.trim();

    if (newQuoteText && newAuthorName) {
        // Retrieve the existing quotes from localStorage
        const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];

        // Add the new quote to the array
        storedQuotes.push({ quote: newQuoteText, author: newAuthorName });

        // Save the updated quotes array back to localStorage
        localStorage.setItem('quotes', JSON.stringify(storedQuotes));

        // Clear the input fields after adding
        document.getElementById('new-quote-text').value = '';
        document.getElementById('new-author-name').value = '';

        alert("New quote added successfully!");
    } else {
        alert("Please enter both a quote and an author.");
    }
}

// Add event listener for generating a new random quote
document.getElementById('new-quote').addEventListener('click', displayRandomQuote);

// Add event listener for adding a new quote
document.getElementById('add-quote').addEventListener('click', addNewQuote);
