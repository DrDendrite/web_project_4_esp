import { FormValidator } from "./FormValidator.js";
import {Card} from "/Card.js"
import { initialCards, cardContent } from "./utils.js";


const cardElement = initialCards.map((data) => {
  const cardInstance = new Card(data, ".template");
  return cardInstance.generateCard();
});

cardElement.forEach((cardElement) => {
  cardContent.prepend(cardElement);
});

const profileValidator = new FormValidator(
  {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button-edit",
  inactiveButtonClass: "form__button-edit-inactive",
  inputErrorClass: "form__error",
  errorClass: "show-error",
  },
  document.querySelector(".form-edit")
);
profileValidator.enableValidation();

const addValidator = new FormValidator(
  {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button-add",
  inactiveButtonClass: "form__button-add-inactive",
  inputErrorClass: "form__error",
  errorClass: "show-error",
  },
  document.querySelector(".form-add")
);
addValidator.enableValidation();
