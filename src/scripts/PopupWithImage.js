import Popup from './Popup.js';
// import {popupPhoto, popupPhotoName} from './../pages/index.js'


// const popupImage = document.querySelector('.popup_type_image');
// export const popupPhoto = popupImage.querySelector('.popup__photo');
// export const popupPhotoName = popupImage.querySelector('.popup__place-name');

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector('.popup_type_image');
    this._popupPhoto = this._popupImage.querySelector('.popup__photo');
    this._popupPhotoName = this._popupImage.querySelector('.popup__place-name');
  }
  
  open = ({link: imageLink, name: name}) => {
    this._popupPhoto.setAttribute('src', imageLink);
    this._popupPhoto.setAttribute('alt', name);
    this._popupPhotoName.innerText = name;    
    super.open();    
  }
}


