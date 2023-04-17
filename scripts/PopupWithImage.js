import Popup from './Popup.js';
import {popupPhoto, popupPhotoName} from './index.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);             
  }
  
  open = ({link: imageLink, name: name}) => {
    popupPhoto.setAttribute('src', imageLink);
    popupPhoto.setAttribute('alt', name);
    popupPhotoName.innerText = name;    
    super.open();    
  }
}


