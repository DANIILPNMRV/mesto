export default class Card {
  constructor (
    cardInfo, 
    templateSelector, 
    handleCardClick, 
    handleDeleteClick, 
    handleLikeClick, 
    userId) {
    this._cardInfo = cardInfo;
    this._templateSelector = templateSelector;
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._likes = cardInfo.likes;
    this._userId = userId;
    this._craetorId = cardInfo.creator._id;
  }

   deleteThatCard = () => {
   this._element.remove();
   this._element = null;
   }

   _likeCard = () => {
    this._likeBtn.classList.add('place__likebtn_active');
   }
   _unlikeCard = () => {
    this._likeBtn.classList.remove('place__likebtn_active');
   }

    _setEventListeners() {
    this._placeImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    this._likeBtn.addEventListener("click", () => this._handleLikeClick(this._id));
    this._deleteBtn.addEventListener("click", () => this._handleDeleteClick(this._id));
    }

    isLiked() {
      const UserSetLike = this._likes.find((user) => user._id === this._userId);
      return UserSetLike;
    }

    addLike(plusLikes) {
      this._likes = plusLikes;
      const counter = this._element.querySelector(".place__likenbr");
      counter.textContent = this._likes.length;

    if (this.isLiked()) {
      this._likeCard();
    } else {
      this._unlikeCard();
    }
  }

    _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.place')
    .cloneNode(true);

    return cardElement;
    }

    createCard() {
    this._element = this._getTemplate();
    this._placeTitle = this._element.querySelector('.place__title');
    this._placeImage = this._element.querySelector('.place__image');
    this._deleteBtn = this._element.querySelector('.place__deletebtn');
    this._likeBtn = this._element.querySelector('.place__likebtn');
    this._placeImage.src = this._link; 
    this._placeImage.alt = this._name; 
    this._placeTitle.textContent = this._name; 
    this._setEventListeners(); 
    this._addLike(this._likes);
    if (this._craetorId !== this._userId) {
      this._deleteBtn.style.display = "none";
      this._deleteBtn = null;//проверить, занулил как карточку тогда
    }
    return this._element;
  }
}
  