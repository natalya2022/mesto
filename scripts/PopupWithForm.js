import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);
    // console.log(this._popup)
    this._form = this._popup.querySelector('.popup__edit');
    this._inputFirstLine = this._form.querySelector('.popup__text_position_first-line');
    this._inputSecondLine = this._form.querySelector('.popup__text_position_second-line');
    // console.log(this._inputFirstLine, this._inputSecondLine);       
    this._submitFormHandler = submitFormHandler;                  
  }
  
  _getInputValues = () => {       
    this._values = {first: this._inputFirstLine.value, second: this._inputSecondLine.value};
    console.log(this._values);
    return this._values;
}

  getInputValues = () => {
    this._getInputValues ();
  }


  close () {
    console.log('close', this);    
    super.close();
    this._form.reset();
}

  setEventListeners () {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitFormHandler);    
  }  
}


//обработка формы добавления карты

// formNewCard.addEventListener('submit', addNewCard);

// const popupWithFormPlace = new PopupWithForm ('.popup_type_place', (evt) => {
//   evt.preventDefault();
//   const cardItem = createNewCard({
//       link: inputLink.value,
//       name: inputPlace.value
//   });
//   cardsSection.prependItem(cardItem);
//   popupWithFormPlace.close();
//   evt.target.reset();
// });

// const popupWithFormProfile = new PopupWithForm ('.popup_type_profile', (evt) => {
//   evt.preventDefault();
//   profileName.textContent = inputName.value;
//   profileJob.textContent = inputJob.value;
//   popupWithFormProfile.close();
// });
