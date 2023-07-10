const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))

}

const displayQuote = (quote) => {
    console.log(quote);
    const qouteDiv = document.getElementById('quote');
    qouteDiv.innerHTML = quote.quote;
}

loadQuote();