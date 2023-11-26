export class FormValidator {
    constructor(formEdit, firstInputEdit, secondInputEdit, firstSpanEdit, secondSpanEdit, buttonEdit, formAdd, firstInputAdd, secondInputAdd, firstSpanAdd, secondSpanAdd, buttonAdd) {
        this._formEdit = formEdit;
        this._firstInputEdit = firstInputEdit;
        this._secondInputEdit = secondInputEdit;
        this._firstSpanEdit = firstSpanEdit;
        this._secondSpanEdit = secondSpanEdit;
        this._buttonEdit = buttonEdit;
        this._formAdd = formAdd;
        this._firstInputAdd = firstInputAdd;
        this._secondInputAdd = secondInputAdd;
        this._firstSpanAdd = firstSpanAdd;
        this._secondSpanAdd = secondSpanAdd;
        this._buttonAdd = buttonAdd;
    }
    setEventListeners() {
        this._formEdit.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._firstInputEdit.addEventListener("input", () => {
            if (this._firstInputEdit.value.length < 2 || this._secondInputEdit.value.length > 30) {
                this._firstSpanEdit.classList.add("popup__form-input-error-name");
                this._firstSpanEdit.textContent = "Este campo debe tener entre 2 y 30 caracteres";
                this._buttonEdit.classList.add("popup__save-button_inactive");
                this._buttonEdit.disabled = true;
} else {
                this._firstSpanEdit.classList.remove("popup__form-input-error-name");
                this._firstSpanEdit.textContent = "";
                this._buttonEdit.classList.remove("popup__save-button_inactive");
                this._buttonEdit.disabled = false;
            }
        });

        this._secondInputEdit.addEventListener("input", () => {
            if (this._secondInputEdit.value.length < 2 || this._firstInputEdit.value.length > 200) {
                this._secondSpanEdit.classList.add("popup__form-input-error-name");
                this._secondSpanEdit.textContent = "Este campo debe tener entre 2 y 200 caracteres";
                this._buttonEdit.classList.add("popup__save-button_inactive");
                this._buttonEdit.disabled = true;
        } else{
                this._secondSpanEdit.classList.remove("popup__form-input-error-occupation-");
                this._secondSpanEdit.textContent = "";
                this._buttonEdit.classList.remove("popup__save-button_inactive");
                this._buttonEdit.disabled = false;
            } 
        });
    }
}