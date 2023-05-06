export default class Card {
    constructor(item, template, handleCardClick, userId, handleDeleteCardClick, handleLikeClick) {
        this._card = item;
        this._imageLink = item.link;
        this._name = item.name;
        this._template = template;        
        this._handleCardClick = handleCardClick;
        this.cardId = item._id;
        this._userId = userId;
        this._owner = item.owner._id;
        this._handleDeleteCardClick = handleDeleteCardClick; 
        this._likeCounter = item.likes.length;
        this._likes = item.likes;
        this._handleLikeClick = handleLikeClick;
        //console.log(this, item.likes.length, item.likes); 
        //console.log(this);      
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
        this._owner !== this._userId && this._deleteCardButton.remove();
        this._element.querySelector('.photo-grid__counter').textContent = this._likeCounter;
        this.toggleLike();
        this._setEventListeners();
        return this._element;
    }

    // метод навешивает слушатели

    _setEventListeners() {
        this._likeCardButton.addEventListener('click', () => {            
            this._handleLikeClick(this);
        });
        this._owner === this._userId && this._deleteCardButton.addEventListener('click', () => {
            this._handleDeleteCardClick(this);            
        });
        this._imageSelector.addEventListener('click', () => {
            this._handleCardClick();
        });
    }

    // метод лайк/дизлайк

    findLikeCard() {        
        return this._likes.some((like) => like._id === this._userId);        
    }

    // метод ставит или убирает лайк

    toggleLike() {
        this._likeCardButton.classList.toggle('photo-grid__like_acltive', this.findLikeCard());
    }
 
    // метод обновления лайков

    updateLike(data) {
        this._card = data;
        this._likes = data.likes;         
    }

    // метод обновления счетчика лайков

    updateLikeCounter() {
        this._likeCounter = this._likes.length;
        this._element.querySelector('.photo-grid__counter').textContent = this._likeCounter; 
    }

    // метод удаления карточки

    deleteCard() {
        this._element.remove();
        this._element = null;
    }    
}
