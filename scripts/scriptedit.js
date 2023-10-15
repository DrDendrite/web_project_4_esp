const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup");
const profileEditCloseButton = document.querySelector(".popup__close-button");
const profileEditForm = document.querySelector("#edit-profile-form");
const profileNameEl = document.querySelector(".profile__name");
const profileOccupationEl = document.querySelector(".profile__occupation");
const profileNameInput = document.querySelector(".popup__form-input_type_name");
const profileOccupationInput = document.querySelector(
  ".popup__form-input_type_occupation"
);
function openPopup() {
  profileEditPopup.classList.add("popup_open");
}
function closePopup() {
  profileEditPopup.classList.remove("popup_open");
}
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileNameEl.textContent;
  profileOccupationInput.value = profileOccupationEl.textContent;
  openPopup();
});

profileEditCloseButton.addEventListener("click", closePopup);


profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValue = event.target.name.value;
  const occupationValue = event.target.occupation.value;
  profileNameEl.textContent = nameValue;
  profileOccupationEl.textContent = occupationValue;
  closePopup();
});
