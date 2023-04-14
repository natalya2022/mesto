import Popup from './Popup.js';
import {
    popupImage,
    // popupPhoto,
    // popupPhotoName
} from './index.js'

export default class PopupWithForm extends Popup {
  constructor({
    link: imageLink,
    name: name
}) {
    super(popupSelector);
    this._popupImage = popupImage;
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
