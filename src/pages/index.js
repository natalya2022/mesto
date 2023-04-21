import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards} from '../data/cards.js';
import {parameters} from '../data/parameters.js';
import {buttonOpenPopupProfile, inputName, inputJob, buttonAddNewCard} from '../data/constants.js';


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

const popupWithFormProfile = new PopupWithForm ('.popup_type_profile', submitEditProfileForm); 
popupWithFormProfile.setEventListeners();

function submitEditProfileForm (item) {    
    profileUserInfo.setUserInfo({'name': item.name, 'job': item.link});        
    popupWithFormProfile.close(); 
}


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
popupWithImageItem.setEventListeners();


// функция создания экземпляра карты

function createNewCard(item) {    
    const cardItem = new Card(item, '#cardTemplate', () => {popupWithImageItem.open(item)} );    
    return cardItem.createCard();
};


// создание экземпляра класса PopupWithForm для добавления карты

const popupWithFormPlace = new PopupWithForm ('.popup_type_place', submitNewCardForm);
popupWithFormPlace.setEventListeners();

function submitNewCardForm(item) {
    const cardItem = createNewCard(item);        
    cardsSection.prependItem(cardItem);    
    popupWithFormPlace.close();
}


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
