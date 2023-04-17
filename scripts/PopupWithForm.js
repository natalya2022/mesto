import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);
    this._formNewCard = document.forms['form-add'];
    console.log(this._formNewCard);
    this._submitFormHandler = submitFormHandler;                  
  }
  
//   _getInputValues () {
//     this._values = {};
//     this._inputList.forEach(input => {
//         this._values[input.getAttribute('name')] = input.value;
//         console.log(input.value);
//     })
//     return this._values;
// }

  close () {
    console.log('close', this);    
    super.close();
    this._formNewCard.reset();
}

  setEventListeners () {
    super.setEventListeners();
    this._formNewCard.addEventListener('submit', this._submitFormHandler);
    console.log(this._formNewCard);
  }  
}


//обработка формы добавления карты

// formNewCard.addEventListener('submit', addNewCard);