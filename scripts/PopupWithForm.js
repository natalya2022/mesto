import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);    
    this._form = this._popup.querySelector('.popup__edit');
    this._inputFirstLine = this._form.querySelector('.popup__text_position_first-line');
    this._inputSecondLine = this._form.querySelector('.popup__text_position_second-line');           
    this._submitFormHandler = submitFormHandler;                  
  }
  
  _getInputValues = () => {       
    return {name: this._inputFirstLine.value, link: this._inputSecondLine.value};    
  }

  getInputValues = () => this._getInputValues();
  

  close() {        
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitFormHandler);    
  }  
}
