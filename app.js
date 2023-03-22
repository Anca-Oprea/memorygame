const cardArray = [
  {
    name: "fries",
    img: "images/star_red.png",
  },
  {
    name: "chees",
    img: "images/star_orange.png",
  },

  {
    name: "hotdog",
    img: "images/star_yellow.png",
  },

  {
    name: "icecream",
    img: "images/star_blue.png",
  },
  {
    name: "milch",
    img: "images/star.png",
  },
  {
    name: "pizza",
    img: "images/star_black.png",
  },
  {
    name: "fries",
    img: "images/star_red.png",
  },
  {
    name: "chees",
    img: "images/star_orange.png",
  },

  {
    name: "hotdog",
    img: "images/star_yellow.png",
  },

  {
    name: "icecream",
    img: "images/star_blue.png",
  },
  {
    name: "milch",
    img: "images/star.png",
  },
  {
    name: "pizza",
    img: "images/star_black.png",
  },
];
cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChoosen = [];
let cardsChoosenId = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
    console.log(card, i);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChoosenId[0];
  const optionTwoId = cardsChoosenId[1];
  if (optionOneId == optionTwoId) {
    alert("you habe clicked the same image");
  }
  if (cardsChoosen[0] == cardsChoosen[1]) {
    alert("you found a match!");
    cards[optionOneId].setAttribute("src", "images/cub.png");
    cards[optionTwoId].setAttribute("src", "images/cub.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChoosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry try again");
  }
  cardsChoosen = [];
  cardsChoosenId = [];
  if (cardsWon == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");

  cardsChoosen.push(cardArray[cardId].name);
  cardsChoosenId.push(cardId);

  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChoosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
