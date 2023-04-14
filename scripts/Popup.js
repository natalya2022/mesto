

export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;        
        this._popup = document.querySelector(popupSelector);
        console.log('constructor', this);
    }

    open() {
        console.log('open', this);
        // console.log(this._popupSelector, ' 1');
        // console.log(this._popup, ' opened');
        // console.log(this._popup.classList);
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    };

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this._popup.close;
        }
    };
    
    setEventListeners() {
        this._popup.addEventListener('click', () => {
          this.close();
        });
    
        popupCloseButton.addEventListener('click', () => {
          this.close();
        });
      }

}





//функция открытия попапа

// function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', closePopupEsc);
// };

// функция закрытия попапов по клику на оверлей либо на кнопку закрытия

// const popups = document.querySelectorAll('.popup');

// popups.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//         if (evt.target.classList.contains('popup_opened')) {
//             closePopup(popup);
//         }
//         if (evt.target.classList.contains('popup__close')) {
//             closePopup(popup);
//         }
//     })
// })

//функция закрытия попапа по кнопке Escape

// function closePopupEsc(evt) {
//     if (evt.key === 'Escape') {
//         const openedPopup = document.querySelector('.popup_opened');
//         closePopup(openedPopup);
//     }
// };

//функция закрытия попапа

// function closePopup(popup) {
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closePopupEsc);
// }