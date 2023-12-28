import { FormValidator } from "./FormValidator.js";
import {Card} from "./Card.js";
import { initialCards } from "./utils.js";
import { Section } from "./Section.js";

/* -------------------------------------------------------------------------- */
/*                                  Cards                                     */
/* -------------------------------------------------------------------------- */

const section = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const card = new Card(data, ".template");
      const cardElement = card.generateCard();
      section.addItem(cardElement);
    },
  },
  ".elements"
);

section.renderItems();

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