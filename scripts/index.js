import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from './cards.js';

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
    const inputList = Array.from(editPopup.querySelectorAll(obj.inputSelector));
    inputList.forEach((inputElement) => {
        validator.hideInputError(editPopup, inputElement);
    });

    openPopup(editPopup);
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;

    const buttonElement = editPopup.querySelector(obj.submitButtonSelector);
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
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

// слушатель на кнопку добавления карты

addNewCardButton.addEventListener('click', showPopup);

//функция показа интерфейса добавления карты

function showPopup(evt) {
    evt.preventDefault();
    openPopup(addCard);
    const buttonElement = formNewCard.querySelector(obj.submitButtonSelector);
    buttonElement.classList.add(obj.inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled");
}

//функция добавления карты

function addNewCard(evt) {
    evt.preventDefault();    
    const cardItem = new Card(inputLink.value, inputPlace.value, '#cardTemplate');
    cardsSection.prepend(cardItem.createCard());
    closePopup(addCard);
    evt.target.reset();
}

//обработка формы добавления карты

formNewCard.addEventListener('submit', addNewCard);

//создание всех карт из массива с помощью класса Card

initialCards.forEach((card) => {
    const cardItem = new Card(card.link, card.name, '#cardTemplate', openPopup);
    cardsSection.append(cardItem.createCard());
})

// объект параметров

const obj = {
    formSelector: '.popup__edit',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

// точка входа в программу валидации

const validator = new FormValidator(obj);
validator.enableValidation();