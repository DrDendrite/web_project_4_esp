import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import {
  initialCards,
  profileEditButton,
  addCardButton,
  profileTitleInput,
  profileDescriptionInput,
  settings,
  editForm,
  addForm,
} from "./utils.js";

/* -------------------------------------------------------------------------- */
/*                                  Cards                                     */
/* -------------------------------------------------------------------------- */

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", (name, link) => {
    viewImagePopup.open({ name, link });
  });
  return card.getView();
}

const section = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const card = renderCard(cardData);
    section.addItem(card);
  },
});
section.renderItems();

/* -------------------------------------------------------------------------- */
/*                                 Validation                                 */
/* -------------------------------------------------------------------------- */
export const editFormValidator = new FormValidator(settings, editForm);
export const addFormValidator = new FormValidator(settings, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

/* -------------------------------------------------------------------------- */
/*                               PopupWithImage                               */
/* -------------------------------------------------------------------------- */

const viewImagePopup = new PopupWithImage("#view-image-popup");
viewImagePopup.setEventListeners();

/* ------------------------------------------------------------------------------- */
/*                                PopupWithForm                                    */
/* ------------------------------------------------------------------------------- */

//edit profile popup
const handleProfileEditSubmit = (inputValues) => {
  userInfo.setUserInfo(inputValues.name, inputValues.about);

  editProfilePopup.close();
};
const editProfilePopup = new PopupWithForm(
  "#profile-edit-popup",
  handleProfileEditSubmit
);


editProfilePopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const updatedUserInfo = userInfo.getUserInfo();
  profileTitleInput.value = "";
  profileDescriptionInput.value = "";
  editProfilePopup.open();
});

//add card popup

const handleAddCardFormSubmit = (inputValues) => {
  const card = renderCard(inputValues);
  section.addItem(card);
  newCardPopup.close();
};

const newCardPopup = new PopupWithForm(
  "#add-card-popup",
  handleAddCardFormSubmit
);
newCardPopup.setEventListeners();

addCardButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  newCardPopup.open();
});

/* ------------------------------------------------------------------------ */
/*                                 User Info                                */
/* ------------------------------------------------------------------------ */
const userInfo = new UserInfo({
  userName: ".profile__title",
  userDescription: ".profile__description",
});