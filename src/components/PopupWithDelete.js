import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);    
    this._form = this._popup.querySelector('.popup__edit');                   
    this._submitFormHandler = submitFormHandler;
    // this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));                            
  }

  
//   _getInputValues () {           
//     this._formValues = {};
//     this._inputList.forEach((input) => {
//       this._formValues[input.name] = input.value;      
//     });      
//       return this._formValues;    
//   }
  

//   close = () => {        
//     super.close();
//     this._form.reset();      
//   }


//   setEventListeners = () => {
//     super.setEventListeners();
//     this._form.addEventListener('submit', (evt) => {
//       evt.preventDefault();      
//       this._submitFormHandler(this._getInputValues());            
//     });  
//   }    
// }

confirmDel (item) {
  super.open();
  this._item = item;
  this._id = item._id;  
}


setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();      
      this._submitFormHandler(this._item, this._id);            
    });  
  }    
}