
// функция показывает сообщения об ошибках ввода

const showInputError = (obj, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    console.log(errorElement);
    inputElement.classList.add(obj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClass);
};

// функция скрывает сообщения об ошибках ввода

const hideInputError = (obj, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(obj.inputErrorClass);
    errorElement.classList.remove(obj.errorClass);
    errorElement.textContent = '';
};

// функция вызывает функции показа ошибок в зависимости от валидности полей

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(obj, formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(obj, formElement, inputElement);
    }
};


// Функция определяет валидность поля

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

// Функция определяет поведение кнопки

const toggleButtonState = (obj, inputList, buttonElement) => {
    // console.log(inputList);
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(obj.inactiveButtonClass);
        console.log('add', inputList);
    } else {
        buttonElement.classList.remove(obj.inactiveButtonClass);
        console.log('remove', inputList);
    }
};

// Функция принимает формы, навешивает слушателей на поля ввода путем их перебора через forEach 

const setEventListeners = (obj, formElement) => {
    console.log(formElement);
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    console.log(inputList);
    console.log(buttonElement);

    toggleButtonState(obj, inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(obj, inputList, buttonElement);
        });
    });
};

// Начальная функция, принимает объект с параметрами, создает массив форм документа, отменяет стандартную отправку формы

const enableValidation = (obj) => {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    console.log(formList);
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(obj, formElement);
    });
};

// Объект с параметрами

const obj = {
    formSelector: '.popup__edit',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

// Точка входа в программу валидации

enableValidation(obj);