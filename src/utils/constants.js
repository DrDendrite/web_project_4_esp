/***  aquí estan almacenadas las cards***/
export const elementsSectionCard = document.querySelector(".elements");

/**Traemos el elemento HTML modal y botón para cerrar ***/
export const modalExpandedImage = document.querySelector(".modal");
export const modalExpandedImageCloseBtn = modalExpandedImage.querySelector(
  ".modal__container-close"
);

/*** Constantes para el funcionamiento de editar el perfil ***/
export const btnEditInfoProfile = document.querySelector(
  ".profile__info-edit-btn"
);

export const inputName = document.querySelector("#name");
export const inputAboutMe = document.querySelector("#about-me");

/***Constantes para añadir nuevas imagenes ***/
export const btnOpenFormAddImage = document.querySelector(".profile__add-btn");
export const addPictureFormClose = document.querySelector(
  "#add-picture-form .popup__container-close-popup"
);

export const settingElement = {
  inputSelector: ".popup__container-input",
  submitButtonSelector: ".popup__container-save-btn",
  inactiveButtonClass: "popup__container-save-btn_inactive",
  inputErrorClass: "popup__container-input_type_error",
  errorClass: "popup__input-error_active",
};

export const selector = ".elements";

export const formChangeImage = document.querySelector(
  ".modal-window__form-change-image"
);

export const btnKeep = document.querySelector(".modal-window__keep-btn");

export const inputChangeUrlImage = formChangeImage.querySelector("#url-change");

export const apiKey = "258910e4-b7fe-4e57-ab30-b59c7bfd49f4";