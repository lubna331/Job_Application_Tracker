console.log("hello there")
// 1st >> get how many cards are there
let cardsCount = document.getElementById("cards");
// console.log(cardsCount.childElementCount);
let totalCards = cardsCount.childElementCount;
// then get the total element
let total = document.getElementById("totalJob");
total.innerText = totalCards;
console.log(total.innerText);

// set cards number into total
