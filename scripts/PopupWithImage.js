import Popup from './Popup.js';
import {
    popupPhoto,
    popupPhotoName
} from './index.js'

export default class PopupWithImage extends Popup {
  constructor({link: imageLink, name: name}, popupSelector) {
    super(popupSelector);    
    this._imageLink = imageLink;
    this._name = name;       
  }
  
  open() {
    popupPhoto.setAttribute('src', this._imageLink);
    popupPhoto.setAttribute('alt', this._name);
    popupPhotoName.innerText = this._name;
    super.open();    
    };
}


