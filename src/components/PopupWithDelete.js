import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);    
    this._form = this._popup.querySelector('.popup__edit');                                                  
  }

  
setSubmitAction(action) {
  this._functionSubmit = action;
}


setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();      
      this._functionSubmit();                  
    });  
  }    
}