let currentQuote = '';
let currentAuthor = '';
let quotesData;

const getQuotes = () => {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url:
    'https://type.fit/api/quotes',
    success: function (jsonQuotes) {
      quotesData = JSON.parse(jsonQuotes);
      console.log(quotesData);
    }
  });
}

const getRandomQuote = () => {
  return quotesData[Math.floor(Math.random() * quotesData.length)];
}

const getQuote = () => {
  let randomQuote = getRandomQuote();
  currentQuote = randomQuote.text;
  currentAuthor = randomQuote.author;

  $('#text').text(currentQuote);
  $('#author').text(currentAuthor);

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );

}

$(document).ready(function () {
  getQuotes().then(()=>{
    getQuote();
  })

  $('#new-quote').on('click', getQuote);
});


