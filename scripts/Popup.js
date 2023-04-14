export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;        
        this._popup = document.querySelector(popupSelector);                
        console.log('constructor', this);
    }

    open () {
        console.log('open', this);
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose );        
        this.setEventListeners();
    };

    close = () => {
        console.log('close', this);
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            console.log('close',this);
            this.close();
        }
    };
    
    setEventListeners = () => {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
            if (evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
}