import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);    
    this._form = this._popup.querySelector('.popup__edit');
    console.log (this._form);               
    this._submitFormHandler = submitFormHandler;
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));    
    console.log (this._inputList);                    
  }
  
  _getInputValues () {           
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
      // console.log (input, 22);
    });    
      console.log (this._formValues);
      return this._formValues;    
  }

  // getInputValues = () => this._getInputValues();

  close = () => {        
    super.close();
    this._form.reset();      
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();      
      this._submitFormHandler(this._getInputValues());            
    });  
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

// setEventListeners = () => {
//   super.setEventListeners();
//   // console.log (this);
//   this._form.addEventListener('submit', this._submitFormHandler.bind(this));
//   // console.log (this._submitFormHandler);    
// }