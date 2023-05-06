export default class FormValidator {
    constructor(parameters, formElement) {
        this._formSelector = parameters.formSelector;
        this._inputSelector = parameters.inputSelector;
        this._submitButtonSelector = parameters.submitButtonSelector;
        this._inactiveButtonClass = parameters.inactiveButtonClass;
        this._inputErrorClass = parameters.inputErrorClass;
        this._errorClass = parameters.errorClass;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }


    // метод показывает сообщения об ошибках ввода

    _showInputElementError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };


    // метод скрывает сообщения обо всех ошибках ввода

    hideInputErrors = () => {
        this._inputList.forEach((inputElement) => {
            this._hideInputElementError(inputElement);
        });
    };

    // метод скрывает сообщение об ошибке в одном поле

    _hideInputElementError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);        
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };


    // метод вызывает функции показа ошибок в зависимости от валидности полей

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputElementError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputElementError(inputElement);
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

    // публичный метод определяет поведение кнопки

    setButtonState() {
        this._toggleButtonState();
    };

    // метод принимает формы, навешивает слушателей на поля ввода путем их перебора через forEach 

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };


    enableValidation() {
        this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        this._setEventListeners();
        this._toggleButtonState();
    };
}