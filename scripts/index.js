import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from './cards.js';
import {validationParameters} from './validationParameters.js';

const editProfileOpenButton = document.querySelector('.profile__edit');
const editPopup = document.querySelector('.popup_type_profile');
const inputName = document.querySelector('.popup__text_field_name');
const inputJob = document.querySelector('.popup__text_field_occupation');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__occupation');
const formProfile = document.forms['form-edit'];

editProfileOpenButton.addEventListener('click', editProfile);

//функция открытия попапа

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);    
};

// функция закрытия попапов по клику на оверлей либо на кнопку закрытия

const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup);
        }
    })
})

//функция закрытия попапа по кнопке Escape

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
};

//функция закрытия попапа

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);    
}

//функция открытие профиля на редактирование

function editProfile(evt) {
    evt.preventDefault();
    // const inputList = Array.from(editPopup.querySelectorAll(validationParameters.inputSelector));
    // inputList.forEach((inputElement) => {
    //     validProfile.hideInputError(validationParameters, editPopup, inputElement);
    // });
    console.log('sf');
    validProfile.hideInputErrors();

    openPopup(editPopup);
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    
    validProfile.setButtonState();
    // const buttonElement = editPopup.querySelector(validationParameters.submitButtonSelector);
    // buttonElement.classList.remove(validationParameters.inactiveButtonClass);
    // buttonElement.removeAttribute("disabled");
}

//обработка формы профиля

formProfile.addEventListener('submit', saveProfile);

//функция сохранения профиля

function saveProfile(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup(editPopup);
}


const cardsSection = document.querySelector('.photo-grid__places');
const addNewCardButton = document.querySelector('.profile__add');
const addCard = document.querySelector('.popup_type_place');
const inputPlace = document.querySelector('.popup__text_field_place');
const inputLink = document.querySelector('.popup__text_field_url');
const formNewCard = document.forms['form-add'];
export const popupImage = document.querySelector('.popup_type_image');
export const popupPhoto = popupImage.querySelector('.popup__photo');
export const popupPhotoName = popupImage.querySelector('.popup__place-name');

// слушатель на кнопку добавления карты

addNewCardButton.addEventListener('click', showPopup);

//функция показа интерфейса добавления карты

function showPopup(evt) {
    evt.preventDefault();
    validPlace.hideInputErrors();
    openPopup(addCard);
    // const buttonElement = formNewCard.querySelector(validationParameters.submitButtonSelector);
    // buttonElement.classList.add(validationParameters.inactiveButtonClass);
    // buttonElement.setAttribute("disabled", "disabled");
    validPlace.setButtonState();
}

// функция создания экземпляра карты

function createNewCard(link, name) {
    const cardItem = new Card(link, name, '#cardTemplate', openPopup);    
    return cardItem.createCard();        
}

// функция добавления карты

function addNewCard(evt) {
    evt.preventDefault();    
    const cardItem = createNewCard(inputLink.value, inputPlace.value);    
    cardsSection.prepend(cardItem);
    closePopup(addCard);
    evt.target.reset();
}

//обработка формы добавления карты

formNewCard.addEventListener('submit', addNewCard);


//создание всех карт из массива с помощью класса Card

initialCards.forEach((card) => {    
    const cardItem = createNewCard(card.link, card.name);    
    cardsSection.append(cardItem);
})

// объект параметров

// const validationParameters = {
//     formSelector: '.popup__edit',
//     formProfileName: '[name="form-edit"]',
//     formPlaceName: '[name="form-add"]',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__save',
//     inactiveButtonClass: 'popup__save_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
// };

// вход в программу валидации

const profileFormElement = document.querySelector(validationParameters.formSelector + validationParameters.formProfileName);
const validProfile = new FormValidator(validationParameters, profileFormElement);
validProfile.enableValidation();

const placeFormElement = document.querySelector(validationParameters.formSelector + validationParameters.formPlaceName);
const validPlace = new FormValidator(validationParameters, placeFormElement);
validPlace.enableValidation();

// console.log(document.querySelector(validationParameters.formSelector + validationParameters.formProfileName));
// console.log(document.querySelector(validationParameters.formSelector + validationParameters.formPlaceName));