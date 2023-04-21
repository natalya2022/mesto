import './index.css';

import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from '../scripts/UserInfo.js';
import {initialCards} from '../scripts/cards.js';
import {parameters} from '../scripts/parameters.js';



const buttonOpenPopupProfile = document.querySelector('.profile__edit');
const inputName = document.querySelector('.popup__text_field_name');
const inputJob = document.querySelector('.popup__text_field_occupation');
const buttonAddNewCard = document.querySelector('.profile__add');
// const popupImage = document.querySelector('.popup_type_image');
// const popupPhoto = popupImage.querySelector('.popup__photo');
// const popupPhotoName = popupImage.querySelector('.popup__place-name');


// установка слушателя на кнопку редактирования профиля

buttonOpenPopupProfile.addEventListener('click', editProfile);


// создание экземпляра класса UserInfo

const profileUserInfo = new UserInfo ({profileName: '.profile__title', profileJob: '.profile__occupation'});


//функция открытия профиля на редактирование

function editProfile(evt) {
    evt.preventDefault();
    profileValidator.hideInputErrors();

    popupWithFormProfile.open();
    const tempValues = profileUserInfo.getUserInfo();
    inputName.value = tempValues.name;
    inputJob.value = tempValues.job;

    profileValidator.setButtonState();
};


// создание экземпляра класса PopupWithForm для редактирования профиля

const popupWithFormProfile = new PopupWithForm ('.popup_type_profile', (evt) => {
    evt.preventDefault();   
    profileUserInfo.setUserInfo({'name': inputName.value, 'job': inputJob.value});        
    popupWithFormProfile.close();    
});
popupWithFormProfile.setEventListeners();

// слушатель на кнопку добавления карты

buttonAddNewCard.addEventListener('click', showPopup);


// функция показа интерфейса добавления карты

function showPopup(evt) {
    evt.preventDefault();
    placeValidator.hideInputErrors();   
    popupWithFormPlace.open();
    placeValidator.setButtonState();
};


// создание экземпляра класса PopupWithImage

const popupWithImageItem = new PopupWithImage ('.popup_type_image');
//popupWithImageItem.setEventListeners(popupWithImageItem);
popupWithImageItem.setEventListeners();


// функция создания экземпляра карты

function createNewCard(item) {    
    const cardItem = new Card(item, '#cardTemplate', () => {popupWithImageItem.open(item)} );
    // console.log(cardItem);
    return cardItem.createCard();
};


// создание экземпляра класса PopupWithForm для добавления карты

const popupWithFormPlace = new PopupWithForm ('.popup_type_place', (evt) => {
    evt.preventDefault();    
    const cardItem = createNewCard(popupWithFormPlace.getInputValues());        
    cardsSection.prependItem(cardItem);    
    popupWithFormPlace.close();
    // popupWithFormPlace.reset();
});
popupWithFormPlace.setEventListeners();


//создание всех карт из массива (создание экземпляра класса Section)

const cardsSection = new Section({
    data: initialCards,
    renderer: (item) => {
        const cardItem = createNewCard(item);              
        cardsSection.setItem(cardItem);
    }
}, '.photo-grid__places');

cardsSection.renderItems();


// создание экземпляров класса валидации для каждой из форм и запуск программы

const profileFormElement = document.querySelector(parameters.formSelector + parameters.formProfileName);
const profileValidator = new FormValidator(parameters, profileFormElement);
profileValidator.enableValidation();

const placeFormElement = document.querySelector(parameters.formSelector + parameters.formPlaceName);
const placeValidator = new FormValidator(parameters, placeFormElement);
placeValidator.enableValidation();
