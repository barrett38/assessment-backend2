// NUMEROLOGY FUNCTION
function getNumerologyQuote(number) {
  number = parseInt(number);
  let numerologyQuote;
  if (number === 1 || number === 10 || number === 19 || number === 28 || number === 37 || number === 46) {
    numerologyQuote = "You are the architect of your destiny; create a masterpiece.";
  } else if (number === 2 || number === 20) {
    numerologyQuote = "In your gentle strength lies the power to harmonize the world.";
  } else if (number === 3 || number === 12 || number === 21 || number === 30) {
    numerologyQuote = "Embrace your creativity and let your vibrant spirit shine.";
  } else if (number === 4 || number === 13 || number === 31) {
    numerologyQuote = "Solid foundations lead to boundless possibilities.";
  } else if (number === 5 || number === 14 || number === 23) {
    numerologyQuote = "Adventure awaits those who seek change and freedom.";
  } else if (number === 6 || number === 15 || number === 24) {
    numerologyQuote = "Love is your guiding light; let it nurture and heal.";
  } else if (number === 7 || number === 16 || number === 25) {
    numerologyQuote = "Wisdom is found in the depths of your introspection.";
  } else if (number === 8 || number === 17 || number === 26) {
    numerologyQuote = "Abundance flows where ambition and integrity meet.";
  } else if (number === 9 || number === 18 || number === 27) {
    numerologyQuote = "You are the humanitarian, a beacon of universal love.";
  } else if (number === 11 || number === 29) {
    numerologyQuote = "Your intuition is your superpower; trust it to guide your path.";
  } else if (number === 22) {
    numerologyQuote = "Master builder, your dreams can shape reality.";
  } else {
    numerologyQuote = "Please enter a valid numerology number between 1 and 31.";
  }
  return numerologyQuote;
}

function getNumerology(req, res) {
  const val = req.params.number;
  const numerologyQuote = getNumerologyQuote(val);
  res.status(200).send(numerologyQuote);
}

// COMPLIMENT FUNCTION
function getCompliment(req, res) {
  const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
  const compliment = compliments[Math.floor(Math.random() * compliments.length)];
  res.status(200).send(compliment);
}

// FUNCTION FOR GETTING FORTUNE
function getFortune(req, res) {
  const fortunes = [
    "Your determination and bravery will lead you to new horizons in your journey.",
    "In the face of challenges, your heart of gold will always shine through.",
    "Like Pikachu by your side, you'll find strength in your friendships.",
    "Your dreams are as boundless as the sky, and you're destined for greatness.",
    "Every step you take brings you closer to becoming a true Pokémon Master.",
  ];
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.status(200).send(fortune);
}

// FUNCTION FOR GETTING AURELIUS QUOTES
function getAurelius(req, res) {
  const aurelius = [
    "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "The best revenge is not to be like your enemy.",
    "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    "The happiness of your life depends upon the quality of your thoughts.",
    "The soul becomes dyed with the color of its thoughts.",
    "The impediment to action advances action. What stands in the way becomes the way.",
    "Waste no more time arguing about what a good man should be. Be one.",
    "The universe is change; our life is what our thoughts make it.",
    "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.",
  ];
  const aureliusQuote = aurelius[Math.floor(Math.random() * aurelius.length)];
  res.status(200).send(aureliusQuote);
}

// FUNCTION FOR GETTING THOMAS QUOTES
function getThomas(req, res) {
  const thomas = [
    "If you bring forth what is within you, what you bring forth will save you. If you do not bring forth what is within you, what you do not bring forth will destroy you.",
    "Recognize what is in your sight, and that which is hidden from you will become plain to you.",
    "Let him who seeks continue seeking until he finds. When he finds, he will become troubled. When he becomes troubled, he will be astonished, and he will rule over the All.",
    "The Kingdom of God is inside you, and it is outside you. When you come to know yourselves, then you will become known, and you will realize that it is you who are the sons of the living Father.",
    "If your leaders say to you, 'Look, the Kingdom is in the sky,' then the birds of the sky will precede you. If they say to you, 'It is in the sea,' then the fish will precede you. But the Kingdom is within you and it is around you.",
    "I am the light that is over all things. I am all: from me all came forth, and to me all attained. Split a piece of wood, and I am there. Lift up the stone, and you will find me there.",
    "When you make the two into one, and when you make the inner like the outer and the outer like the inner, and the upper like the lower, and when you make male and female into a single one, so that the male will not be male nor the female be female, when you make eyes in place of an eye, a hand in place of a hand, a foot in place of a foot, an image in place of an image, then you will enter the Kingdom.",
    "Blessed are the solitary and elect, for you will find the Kingdom. For you are from it, and to it you will return.",
  ];
  const thomasQuote = thomas[Math.floor(Math.random() * thomas.length)];
  res.status(200).send(thomasQuote);
}

// All of these functions are exported to server/index.js

module.exports = {
  getNumerology,
  getCompliment,
  getFortune,
  getAurelius,
  getThomas,
};
