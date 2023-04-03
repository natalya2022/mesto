class Card {
    constructor(imageLink, name, template) {
        this._imageLink = imageLink;
        this._name = name;
        this._template = template;                
    }

    _getTemplate() {        
        const newCard = document.createElement('li');
        newCard.classList.add('photo-grid__place');
        newCard.append(document.querySelector(this._template).content.cloneNode(true));        
        return newCard;
    }
    
    createCard() {
        this._element = this._getTemplate();
        this._imageSelector = this._element.querySelector('.photo-grid__picture');
        this._titleSelector = this._element.querySelector('.photo-grid__title');
        this._imageSelector.setAttribute('src', this._imageLink);
        this._imageSelector.setAttribute('alt', this._name);
        this._titleSelector.textContent = this._name;
        this._likeCardButton = this._element.querySelector('.photo-grid__like');
        this._deleteCardButton = this._element.querySelector('.photo-grid__delete');

        this._setEventListeners();
        return this._element;
    }
 
    _setEventListeners() {
        this._likeCardButton.addEventListener('click', () => {
            this._toggleLike();
        });
        this._deleteCardButton.addEventListener('click', () => {            
            this._deleteCard();
        });    
        this._imageSelector.addEventListener('click', () => {
            this._showPopupImage();
        });
    }
    
    _toggleLike() {         
        this._likeCardButton.classList.toggle('photo-grid__like_acltive');
    }

    _deleteCard() {        
        this._element.remove();        
    }

    _showPopupImage() {
        console.log('_showPopupImage');
        popupPhoto.setAttribute('src', this._imageLink);
        popupPhoto.setAttribute('alt', this._name);
        popupPhotoName.innerText = this._name;
        openPopup(popupImage);
    }

}

initialCards.forEach((card) => {
    const cardItem = new Card(card.link, card.name, '#cardTemplate');
    cardsSection.append(cardItem.createCard());
})


