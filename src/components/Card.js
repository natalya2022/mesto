export default class Card {
    constructor({name, link, _id, owner}, template, handleCardClick, userId) {
        this._imageLink = link;
        this._name = name;
        this._template = template;        
        this._handleCardClick = handleCardClick;
        this._cardId = _id;
        this._userId = userId;
        this._owner = owner._id;        
    }

    // метод работает с темплейтом, создает заготовку карточки

    _getTemplate() {       
        const newCard = document.querySelector(this._template).content.querySelector('.photo-grid__place').cloneNode(true);        
        return newCard;
    }

    
    // метод создания экземпляра карточки

    createCard() {        
        this._element = this._getTemplate();
        this._imageSelector = this._element.querySelector('.photo-grid__picture');
        this._titleSelector = this._element.querySelector('.photo-grid__title');
        this._imageSelector.setAttribute('src', this._imageLink);
        this._imageSelector.setAttribute('alt', this._name);
        this._titleSelector.textContent = this._name;
        this._likeCardButton = this._element.querySelector('.photo-grid__like');
        this._deleteCardButton = this._element.querySelector('.photo-grid__delete');        
        this._owner !== this._userId && this._deleteCardButton.classList.remove('photo-grid__owner');
        this._setEventListeners();
        return this._element;
    }

    // метод навешивает слушатели

    _setEventListeners() {
        this._likeCardButton.addEventListener('click', () => {
            this._toggleLike();
        });
        this._owner === this._userId && this._deleteCardButton.addEventListener('click', () => {
            this._deleteCard();
        });
        this._imageSelector.addEventListener('click', () => {
            this._handleCardClick();
        });
    }

    // метод ставит лайк

    _toggleLike() {
        this._likeCardButton.classList.toggle('photo-grid__like_acltive');
    }

    // метод удаления карточки

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }    
}
