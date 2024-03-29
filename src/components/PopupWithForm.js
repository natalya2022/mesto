import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);    
    this._form = this._popup.querySelector('.popup__edit');                   
    this._submitFormHandler = submitFormHandler;
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
    this._buttonSave = this._form.querySelector('.popup__save');
    this._buttonSaveText = this._buttonSave.textContent;
  }

  
  _getInputValues () {           
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;      
    });      
      return this._formValues;    
  }
  

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
  
  
  renderLoading(isLoading) {
    setTimeout(() => {
      this._buttonSave.textContent = isLoading ? "Сохранение..." : this._buttonSaveText;
    }, isLoading ? 0 : 500);    
  }
}
