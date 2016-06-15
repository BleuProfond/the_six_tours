var quotes = [
  "Love all. Trust a few. Do wrong to none. - Drake",
  "Don't get depressed about not being where you want to be. - Atom Egoyan",
  "A word after a word after a word is power. - Margaret Atwood",
  "never be clever for the sake of being clever. - Glenn Gould",
  "Wherever you go in the world, you just have to say you're Canadian and people laugh. - John Candy",
  "There are things to confess that enrich the world, and things that need not be said - Joni Mitchell"
];

exports.getQuote = function() {
  var idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
};