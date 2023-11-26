import {initialCards,
cardContent,
formEdit,
firstInputEdit,
firstSpanEdit,
secondInputEdit,
secondSpanEdit,
buttonEdit,
formAdd,
firstInputAdd,
firstSpanAdd,
secondInputAdd,
secondSpanAdd,
buttonAdd } from "./utils.js";

import { Card } from "./card.js";
import { FormValidator } from "./formValidation.js";

const cardElement = initialCards.map((data) => {
    const cardInstance = new Card(data, ".template");
    return cardInstance.generateCard();
} );

cardElement.forEach((cardElement) => {
    cardContent.append(cardElement);
});

const formEditValidator = new FormValidator(formEdit, firstInputEdit, secondInputEdit, firstSpanEdit, secondSpanEdit, buttonEdit);
formEditValidator.setEventListeners();

const formAddValidator = new FormValidator (formAdd, firstInputAdd, secondInputAdd, firstSpanAdd, secondSpanAdd, buttonAdd);
formAddValidator.setEventListeners();
