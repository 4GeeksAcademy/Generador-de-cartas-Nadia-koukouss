const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const palos = ["corazones", "picas", "treboles", "diamantes"];

const symbols = {
  corazones: "♥",
  picas: "♠",
  treboles: "♣",
  diamantes: "♦",
};

let intervalId = null;

window.onload = function () {
  const card = document.querySelector(".card");
  const button = document.querySelector(".button-js");
  const startBtn = document.querySelector(".startBtn-js");
  const stopBtn = document.querySelector(".stopBtn-js");

  function generateCard() {
    card.innerHTML = "";

    const cardNumber = Math.floor(Math.random() * numbers.length);
    const cardPalo = Math.floor(Math.random() * palos.length);

    const palo = palos[cardPalo];
    const number = numbers[cardNumber];

    const paloClass = {
      corazones: "heart",
      diamantes: "diamond",
      picas: "spade",
      treboles: "club",
    };

    card.className = `card ${paloClass[palo]}`;

    const div1 = document.createElement("div");
    div1.classList.add("div1");
    div1.innerHTML = `<span>${number} ${symbols[palo]}</span>`;

    const div2 = document.createElement("div");
    div2.classList.add("div2");
    div2.innerHTML = `<span>${symbols[palo]}</span>`;

    const div3 = document.createElement("div");
    div3.classList.add("div3");
    div3.innerHTML = `<span>${number} ${symbols[palo]}</span>`;

    card.appendChild(div1);
    card.appendChild(div2);
    card.appendChild(div3);
  }
  generateCard();

  button.addEventListener("click", generateCard);

  startBtn.addEventListener("click", () => {
    if (!intervalId) {
      intervalId = setInterval(() => {
        generateCard();
      }, 3000); //aqui he puesto 3s en lugar de los 10s del ejercicio, porque es más rápido para ir probando código ;)//
    }
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
  });
};
