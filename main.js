const randomQuotes = [
  {
    name: "Alan Kay (Computer Scientist)",
    quote: "Technology is anything that wasn’t around when you were born.",
  },
  {
    name: "Arthur C. Clarke (Author)",
    quote: "Any sufficiently advanced technology is equivalent to magic",
  },
  {
    name: " Mark Kennedy (Author)",
    quote:
      "All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.",
  },
  {
    name: "Thomas Edison (Inventor)",
    quote:
      "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless. ",
  },
  {
    name: "Albert Einstein (Scientist)",
    quote:
      " It has become appallingly obvious that our technology has exceeded our humanity.",
  },
  {
    name: "Albert Einstein (Scientist)",
    quote: "The human spirit must prevail over technology. ",
  },
  {
    name: "Emmanuel Macron",
    quote: "Dear Youths, Politics is important! Be involved",
  },
  {
    name: "Albert Einstein",
    quote: "Anyone who has never made a mistake has never tried new ideas",
  },
  {
    name: "Walter Lippmann",
    quote:
      "You cannot endow even the best machine with initiative; the jolliest steamroller will not plant flowers.",
  },
  {
    name: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    name: "Steve Jobs",
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  },
  {
    name: "Eleanor Roosevelt",
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
  },
  {
    name: "James Cameron",
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  },
  {
    name: "Eleanor Roosevelt",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    name: "Sahndra Fon Dufe",
    quote:
      "Whatever you are looking for is also looking for you. You see, don't only look. Be available and ready when it shows up",
  },
  {
    name: "Thomas Sankara",
    quote:
      "While revolutionaries as individuals can be killed can be murdered, you cannot kill ideas.",
  },
  {
    name: "Kwame Nkrumah",
    quote: "Action without thought is empty. Thought without action is blind",
  },
  {
    name: "Nelson Mandela",
    quote:
      "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
  },
  {
    name: "Chinua Achebe",
    quote:
      "One of the truest tests of integrity is its blunt refusal to be compromised",
  },
  {
    name: "Napoleon Hill.",
    quote:
      "Strength and growth come only through continuous effort and struggle",
  },
  {
    name: "Henry Ford",
    quote: "Whether you think you can or you think you can't, you're right.",
  },
  {
    name: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
];





const btn = document.getElementById("button")
btn.addEventListener("click", changeQuote)

function changeQuote(){
  let randomNumber = Math.floor(Math.random() * randomQuotes.length);
  document.getElementById("quote").innerHTML = randomQuotes[randomNumber].quote;
  document.getElementById("author").innerHTML = "~" + randomQuotes[randomNumber].name;
}



