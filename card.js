export class Card {
    constructor(data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._element = this._getTemplate();
      this._cardRemoveButton = this._element.querySelector(".element__card-remove");
      this._cardLikeButton = this._element.querySelector(".element__card-like-active");
      this._cardNameElement = this._element.querySelector(".element__card-name");
      this._cardImageElement = this._element.querySelector(".element__card-pic");
  
      this._bindListeners();
    }
  
    _getTemplate() {
      const template = document.querySelector(this._templateSelector).content;
      const cardElement = template.querySelector(".element").cloneNode(true);
      return cardElement;
    }
  
    _bindListeners() {
      this._cardRemoveButton.addEventListener("click", () => {
        this._handleRemoveClick();
      });
  
      this._cardLikeButton.addEventListener("click", () => {
        this._handleLikeClick();
      });
  
      this._cardImageElement.addEventListener("click", () => {
        this._handleImageClick();
      });
    }
  
    _handleRemoveClick() {
      this._element.remove();
    }
  
    _handleLikeClick() {
      this._cardLikeButton.classList.toggle("element__card-like-active-off");
    }
  
    _handleImageClick() {
        const modalImage = document.querySelector(".popupimage");
        const modalImagePic = document.querySelector(".popupimage__pop-up");
        const modalImageText = document.querySelector(".popupimage__title");
        modalImagePic.src = this._link;
        modalImageText.textContent = this._name;
        modalImage.classList.toggle("popup__image-active");
    }
  
    generateCard() {
      this._cardNameElement.textContent = this._name;
      this._cardImageElement.src = this._link;
      return this._element;
    }
  }