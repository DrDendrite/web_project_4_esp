export const initialCards = [
{
  name: "Mazatlán, Sinaloa",
  link: "https://images.unsplash.com/photo-1608920423186-174787ba2c27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
},
{
  name: "Monte Alban, Oaxaca",
  link: "https://images.unsplash.com/photo-1530455235907-0a59ea1e04ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
},
{
  name: "Chiapas",
  link: "https://images.unsplash.com/photo-1630730041073-c75e98030355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
},
{
  name: "Guadalajara, Jalisco",
  link: "https://images.unsplash.com/photo-1565670105658-ea35d27f7de7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
},
{
  name: "Michoacán",
  link: "https://images.unsplash.com/photo-1562218355-1fde5256182d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
},
{
  name: "Cd. de México",
  link: "https://images.unsplash.com/photo-1493794179168-82ca7cb00437?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
},
];

/* -------------------------------------------------------------------------- */
/*                                  Wrappers                                  */
/* -------------------------------------------------------------------------- */
export const cardsWrap = document.querySelector(".cards__list");
export const profileEditPopup = document.querySelector("#profile-edit-popup");
export const addCardPopup = document.querySelector("#add-card-popup");
export const profileEditForm = profileEditPopup.querySelector("#edit-profile-form");
export const addCardForm = addCardPopup.querySelector("#add-card-form");
export const viewCardImagePopup = document.querySelector("#view-image-popup");

/* -------------------------------------------------------------------------- */
/*                       // Buttons and other DOM nodes                       */
/* -------------------------------------------------------------------------- */
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileCloseButton = profileEditPopup.querySelector(
  "#editprofile-close-button"
);
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const cardListEl = document.querySelector(".cards__list");
export const addCardButton = document.querySelector("#add-button");
export const addCardCloseButton = addCardPopup.querySelector(
  "#addcard-close-button"
);
export const addCardTitle = document.querySelector(".popup__title");
export const addCardImageLink = document.querySelector(".popup__image-link");
export const viewCardImage =
  viewCardImagePopup.querySelector(".popup__image-view");
export const viewCardImageCaption = document.querySelector(
  ".popup__image-caption"
);
export const viewCardCloseButton = viewCardImagePopup.querySelector(
  "#viewimage-close-button"
);

/* -------------------------------------------------------------------------- */
/*                                // Form Data                                */
/* -------------------------------------------------------------------------- */
export const profileTitleInput = document.querySelector(
  ".popup__input_type_name"
);
export const profileDescriptionInput = document.querySelector(
  ".popup__input_type_description"
);
export const cardTitleInput = addCardForm.querySelector(
  ".popup__input_type_title"
);
export const cardUrlInput = addCardForm.querySelector(".popup__input_type_url");
export const cardFormInputs = [cardTitleInput, cardUrlInput];
export const cardFormSubmitButton = addCardForm.querySelector(
  ".popup__save-button"
);

export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button-inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
export const editForm = document.querySelector("#edit-profile-form");
export const addForm = document.querySelector("#add-card-form");

export const cardsConfig = {
  containerSelector: ".cards__list",
  cardTemplateSelector: "#card-template",
};
