// llamar las constantes para el formulario editar perfil
const editProfileForm = document.getElementById("edit-profile-form");
const nameInput = document.querySelector(".popup__form-input_type_name");
const occupationInput = document.querySelector(".popup__form-input_type_occupation");
const saveButton = document.querySelector(".popup__save-button");
const saveButtonOff = document.querySelector(".popup__save-button_inactive");
const nameInputError = document.querySelector(".popup__form-input-error-name");
const occupationInputError = document.querySelector(".popup__form-input-error-occupation");


// Función para mostrar mensajes de error
function showError(input, errorMessage) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = errorMessage;
}

// Función para ocultar mensajes de error
function hideError(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = "";
}

// Función para validar el formulario
function validateForm() {
  // Validar campo de nombre
  if (nameInput.value.length < 2 || nameInput.value.length > 40) {
    showError(nameInput, "El nombre debe contener entre 2 y 40 caracteres.");
    saveButtonOff.classList.add("popup__save-button_inactive");
    saveButtonOff.disabled = true;
  } else {
    hideError(nameInput);
    saveButton.classList.remove("popup__save-button_inactive");
    saveButton.disabled = false;
  }
  // Validar campo de ocupación
  if (occupationInput.value.length < 2 || occupationInput.value.length > 200) {
    showError(occupationInput, "La ocupación debe contener entre 2 y 200 caracteres.");
    saveButtonOff.classList.add("popup__save-button_inactive");
    saveButtonOff.disabled = true;
  } else {
    hideError(occupationInput);
    saveButton.classList.remove("popup__save-button_inactive");
    saveButton.disabled = false;
  } 
}

// Agregar evento input a los campos del formulario
nameInput.addEventListener("input", validateForm);
occupationInput.addEventListener("input", validateForm);

// Agregar evento submit al formulario para evitar el envío si hay errores
editProfileForm.addEventListener("submit", function (event) {
  if (!nameInput.validity.valid || !occupationInput.validity.valid) {
    event.preventDefault();
  }
});

// Validar el formulario al cargar la página
validateForm();

// llamar las constantes para el formulario de agregar tarjeta
const addForm = document.getElementById("form__add-card");
const titleInput = document.querySelector(".form__input_place_name");
const linkInput = document.querySelector(".form__input_link");
const addButton = document.querySelector(".form__save-button");
const addButtonInactive = document.querySelector(".form__save-button_inactive");
const titleInputError = document.querySelector(".form__input-place-name-error");
const linkInputError = document.querySelector(".form__input-link-error");

// Función para mostrar mensajes de error
function showAddError(input, errorMessage) {
  const errorAddSpan = input.nextElementSibling;
  errorAddSpan.textContent = errorMessage;
}
// Función para ocultar mensajes de error
function hideAddError(input) {
  const errorAddSpan = input.nextElementSibling;
  errorAddSpan.textContent = "";
}

// Función para validar el formulario
function validateAddForm() {
  // Validar campo de título
  if (titleInput.value.length < 2 || titleInput.value.length > 30) {
    showAddError(
      titleInput,
      "El título debe contener entre 2 y 30 caracteres."
    );
    addButtonInactive.classList.add("form__save-button_inactive");
    addButtonInactive.disabled = true;
  } else {
    hideAddError(titleInput);
    addButton.classList.remove("form__save-button_inactive");
    addButton.disabled = false;
  }

  // Validar campo de link
  const url = "https://";
  if (!linkInput.value.match(url)) {
    showAddError(linkInput, "Debes agregar un link.");
    addButtonInactive.classList.add("form__save-button_inactive");
    addButtonInactive.disabled = true;
  } else {
    hideAddError(linkInput);
    addButton.classList.remove("form__save-button_inactive");
    addButton.disabled = false;
  }
}

// Agregar evento input a los campos del formulario
titleInput.addEventListener("input", validateAddForm);
linkInput.addEventListener("input", validateAddForm);

// Agregar evento submit al formulario para evitar el envío si hay errores
addForm.addEventListener("submit", function (event) {
  if (!titleInput.validity.valid || !linkInput.validity.valid) {
    event.preventDefault();
  }
});

// Validar el formulario agregar tarjeta al cargar la página
validateAddForm();
