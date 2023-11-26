
export const cardContent = document.querySelector(".elements");
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

export const profileEditButton = document.querySelector(".profile__edit-button");
export const profileEditPopup = document.querySelector(".popup");
export const profileEditCloseButton = document.querySelector(".popup__close-button");
export const profileEditForm = document.querySelector("#edit-profile-form");
export const profileNameEl = document.querySelector(".profile__name");
export const profileOccupationEl = document.querySelector(".profile__occupation");
export const profileNameInput = document.querySelector(".popup__form-input_type_name");
export const profileOccupationInput = document.querySelector(".popup__form-input_type_occupation");
// llamar las export constantes para el formulario editar perfil
export const addButon = document.querySelector(".profile__add-button");
export const addPopup = document.querySelector(".add");
export const addCloseButton = document.querySelector(".form__close-button");
export const createButton = document.querySelector(".form__save-button");
export const addNameInput = document.querySelector(".form__input_place_name");
export const addLinkInput = document.querySelector(".form__input_link");

export const cardPic = document.querySelectorAll(".element");
export const openPic = document.querySelectorAll(".element__card-pic");
export const trueName = document.querySelectorAll(".element__card-name");
export const closePic = document.querySelector(".popupimage__close");
export const modalImage = document.querySelector(".popupimage");
export const elementName = document.querySelector(".element");
export const imageName = document.querySelector(".popupimage__title");
export const img = modalImage.querySelector(".popupimage__pop-up");

// llamar las export constantes para el formulario editar perfil
export const formEdit= document.getElementById("edit-profile-form");
export const firstInputEdit = document.querySelector(".popup__form-input_type_name");
export const secondInputEdit = document.querySelector(".popup__form-input_type_occupation");
export const buttonEdit = document.querySelector(".popup__save-button");
export const buttonEditOff = document.querySelector(".popup__save-button_inactive");
export const firstSpanEdit = document.querySelector(".popup__form-input-error-name");
export const secondSpanEdit = document.querySelector(".popup__form-input-error-occupation");

// llamar las export constantes para el formulario de agregar tarjeta
export const formAdd = document.getElementById("form__add-card");
export const firstInputAdd = document.querySelector(".form__input_place_name");
export const secondInputAdd = document.querySelector(".form__input_link");
export const buttonAdd = document.querySelector(".form__save-button");
export const buttonAddOff = document.querySelector(".form__save-button_inactive");
export const firstSpanAdd = document.querySelector(".form__input-place-name-error");
export const secondSpanAdd = document.querySelector(".form__input-link-error");

//funcion para abrir registro
function openPopup() {
  profileEditPopup.classList.add("popup_open");
}
// abrir registro con click en el boton
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = "";
  profileOccupationInput.value = "";
  firstSpanEdit.textContent = "";
  secondSpanEdit.textContent = "";
  buttonEditOff.classList.add("popup__save-button_inactive");
  openPopup(); 
});

// cerrar registro con click en el fondo
function closePopup() {
  profileEditPopup.classList.remove("popup_open");
}
// cerrar registro con click en la X
profileEditCloseButton.addEventListener("click", () => {
  closePopup();
});

// cerrar registro con escape
profileEditPopup.addEventListener("click", (event) => {
  if (event.target === profileEditPopup) {
    closePopup();
  }
});

// enviar datos del registro al perfil con click en el boton guardar
profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValue = event.target.name.value;
  const occupationValue = event.target.occupation.value;
  profileNameEl.textContent = nameValue;
  profileOccupationEl.textContent = occupationValue;
  closePopup();
});

// cerrar imagen con click en la X
closePic.addEventListener("click", function () {
  modalImage.classList.toggle("popup__image-active");
});
// cerrar imagen, formulario y registro con click en el fondo
modalImage.addEventListener("click", function (evt) {
  if (evt.target === modalImage) {
    modalImage.classList.toggle("popup__image-active");
  } else if (evt.target === profileEditPopup) {
    profileEditPopup.classList.toggle("popup_open");
  } else if (evt.target === addPopup) {
    addPopup.classList.toggle("add_open");
  }
});
// cerrar imagen, formulario y registro con escape
document.addEventListener("keydown", function (evt) {
  if (
    evt.key === "Escape" &&
    modalImage.classList.contains("popup__image-active")
  ) {
    modalImage.classList.remove("popup__image-active");
    console.log("se cerró imagen");
  } else if (
    evt.key === "Escape" &&
    profileEditPopup.classList.contains("popup_open")
  ) {
    profileEditPopup.classList.remove("popup_open");
    console.log("se cerró registro");
  } else if (evt.key === "Escape" && addPopup.classList.contains("add_open")) {
    addPopup.classList.remove("add_open");
  }
});
// abrir registro add con click en el boton
addButon.addEventListener("click", () => {
  addPopup.classList.add("add_open");
  firstSpanAdd.textContent = "";
  secondSpanAdd.textContent = "";
  buttonAddOff.disabled = true;
  buttonAddOff.classList.add("form__save-button_inactive");
});
// cerrar registro add con click en la X
addCloseButton.addEventListener("click", () => {
  addPopup.classList.remove("add_open");
});
// cerrar registro add con click en el fondo
addPopup.addEventListener("click", (evt) => {
  if (evt.target === addPopup) {
    addPopup.classList.toggle("add_open");
  }
});
// cerrar registro add con escape
createButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  // Get input values
  const titleValue = addNameInput.value;
  const linkValue = addLinkInput.value;

  if (titleValue && linkValue) {
    // Create a new element
     const newCard = addCard(titleValue, linkValue);
    cardContent.prepend(newCard);

    // Clear input values
    addNameInput.value = "";
    addLinkInput.value = "";

    // Close the form popup
     const addPopup = document.querySelector(".add");
    addPopup.classList.remove("add_open");
  } else {
  }
});


