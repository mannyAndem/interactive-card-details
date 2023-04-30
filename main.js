let confirmBtn = document.querySelector(".confirm-btn");
let cardName = document.querySelector("#name");
let cardNumber = document.querySelector("#card-number");
let expDateMonth = document.querySelector("#month");
let expDateYear = document.querySelector("#year");
let cvc = document.querySelector("#cvc");
let validated = false;

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

cardName.addEventListener("input", () => {
  document.querySelector(".card-name").innerHTML = cardName.value;
  if (cardName.value === "") {
    cardName.style.border = "2px solid hsl(0, 100%, 66%)";
    cardName.nextElementSibling.innerHTML = "Cannot be blank";
    cardName.nextElementSibling.style.display = "block";
    validated = true;
  } else {
    cardName.style.borderImage =
      "linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1";
    cardName.nextElementSibling.style.display = "none";
  }
});
cardNumber.addEventListener("input", () => {
  document.querySelector(".card-number").innerHTML = cardNumber.value;
  const numbers = /^[0-9\s]*$/;
  if (cardNumber.value.match(numbers)) {
    cardNumber.style.borderImage =
      "linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1";
    cardNumber.nextElementSibling.style.display = "none";
    validated = true;
  } else {
    cardNumber.style.border = "2px solid hsl(0, 100%, 66%)";
    cardNumber.nextElementSibling.innerHTML = "Wrong format, numbers only";
    cardNumber.nextElementSibling.style.display = "block";
  }
});
expDateMonth.addEventListener("input", () => {
  document.querySelector(
    ".card-date"
  ).innerHTML = `${expDateMonth.value} / ${expDateYear.value}`;
  if (expDateMonth.value != "") {
    expDateMonth.style.borderImage =
      "linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1";
    expDateMonth.nextElementSibling.style.display = "none";
    validated = true;
  } else {
    expDateMonth.style.border = "2px solid hsl(0, 100%, 66%)";
    expDateMonth.nextElementSibling.innerHTML = "Cannot be blank";
    expDateMonth.nextElementSibling.style.display = "block";
  }
});
expDateYear.addEventListener("input", () => {
  document.querySelector(
    ".card-date"
  ).innerHTML = `${expDateMonth.value} / ${expDateYear.value}`;
  if (expDateYear.value != "") {
    expDateYear.style.borderImage =
      "linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1";
    expDateYear.nextElementSibling.style.display = "none";
    validated = true;
  } else {
    expDateYear.style.border = "2px solid hsl(0, 100%, 66%)";
    expDateYear.nextElementSibling.innerHTML = "Cannot be blank";
    expDateYear.nextElementSibling.style.display = "block";
  }
});
cvc.addEventListener("input", () => {
  document.querySelector(".back-view").innerHTML = cvc.value;
  if (cvc.value != "") {
    cvc.style.borderImage =
      "linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1";
    cvc.nextElementSibling.style.display = "none";
    validated = true;
  } else {
    cvc.style.border = "2px solid hsl(0, 100%, 66%)";
    cvc.nextElementSibling.innerHTML = "Cannot be blank";
    cvc.nextElementSibling.style.display = "block";
  }
});

confirmBtn.addEventListener("click", () => {
  if (
    cardName.nextElementSibling.style.display === "none" &&
    cardNumber.nextElementSibling.style.display === "none" &&
    expDateMonth.nextElementSibling.style.display === "none" &&
    expDateYear.nextElementSibling.style.display === "none" &&
    cvc.nextElementSibling.style.display === "none"
  ) {
    document.querySelector(".thank-you-state").style.display = "flex";
    document.querySelector("form").style.display = "none";
  } else {
    console.log("nope");
  }
});
