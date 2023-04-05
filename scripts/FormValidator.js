export default class FormValidator {
    constructor(obj, formElement) {
        this._formSelector = obj.formSelector;
        this._inputSelector = obj.inputSelector;
        this._submitButtonSelector = obj.submitButtonSelector;
        this._inactiveButtonClass = obj.inactiveButtonClass;
        this._inputErrorClass = obj.inputErrorClass;
        this._errorClass = obj.errorClass;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }


    // метод показывает сообщения об ошибках ввода

    _showInputElementError = (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };


    // метод скрывает сообщения обо всех ошибках ввода 

    hideInputErrors = () => {        
        this._inputList.forEach((inputElement) => {                        
            this._hideInputElementError(this._formElement, inputElement);
        });
        console.log('wrwrw');
    };
    
    // метод скрывает сообщение об ошибках одного поля

    _hideInputElementError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };
    

    // метод вызывает функции показа ошибок в зависимости от валидности полей

    _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputElementError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputElementError(formElement, inputElement);
        }
    };


    // метод определяет валидность поля

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    
    


    // метод определяет поведение кнопки

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute("disabled", "disabled");
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute("disabled");
        }
    };


    setButtonState() {
        console.log('setButtonState');

        this._toggleButtonState(); 
    };

    // метод принимает формы, навешивает слушателей на поля ввода путем их перебора через forEach 

    _setEventListeners(formElement) {
        // this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        // this._buttonElement = formElement.querySelector(this._submitButtonSelector);
        
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement);
                this._toggleButtonState();
            });
        });
    };


    enableValidation() {
        // const formList = Array.from(document.querySelectorAll(this._formSelector));
        // formList.forEach((formElement) => {
            this._formElement.addEventListener('submit', function (evt) {
                evt.preventDefault();
            });
            this._setEventListeners(this._formElement);
            this._toggleButtonState();
        };    
}

