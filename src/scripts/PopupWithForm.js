import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);    
    this._form = this._popup.querySelector('.popup__edit');
    // console.log (this._form);
    this._inputFirstLine = this._form.querySelector('.popup__text_position_first-line');
    this._inputSecondLine = this._form.querySelector('.popup__text_position_second-line');           
    this._submitFormHandler = submitFormHandler;
    // console.log (this._submitFormHandler);
    // console.log (this);                    
  }
  
  _getInputValues = () => {       
    return {name: this._inputFirstLine.value, link: this._inputSecondLine.value};    
  }

  getInputValues = () => this._getInputValues();
  

  close = () => {        
    super.close();
    this._form.reset();      
  }

  // reset = () => { 
  //   this._form.reset();
  // }

  setEventListeners = () => {
    super.setEventListeners();
    // console.log (this);
    this._form.addEventListener('submit', this._submitFormHandler.bind(this));
    // console.log (this._submitFormHandler);    
  }  
}


// setEventListeners() {
//   this._popupElement.addEventListener('submit', () => {
//     const inputValues = this._getInputValues();
//     this._handleFormSubmit(inputValues);
//     this.close();
//   });

//   super.setEventListeners();
// }