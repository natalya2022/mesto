import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);    
    this._popupPhotoName = this._popup.querySelector('.popup__place-name');
    this._popupPhoto = this._popup.querySelector('.popup__photo');
  }
  
  open = ({link: imageLink, name: name}) => {
    this._popupPhoto.setAttribute('src', imageLink);
    this._popupPhoto.setAttribute('alt', name);
    this._popupPhotoName.innerText = name;    
    super.open();    
  }
}


