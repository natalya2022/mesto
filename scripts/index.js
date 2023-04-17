import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import {initialCards} from './cards.js';
import {parameters} from './parameters.js';


const buttonOpenPopupProfile = document.querySelector('.profile__edit');
const inputName = document.querySelector('.popup__text_field_name');
const inputJob = document.querySelector('.popup__text_field_occupation');
const buttonAddNewCard = document.querySelector('.profile__add');
export const popupImage = document.querySelector('.popup_type_image');
export const popupPhoto = popupImage.querySelector('.popup__photo');
export const popupPhotoName = popupImage.querySelector('.popup__place-name');


// установка слушателя на кнопку редактирования профиля

buttonOpenPopupProfile.addEventListener('click', editProfile);


// создание экземпляра класса UserInfo

const profileUserInfo = new UserInfo ({profileName: '.profile__title', profileJob: '.profile__occupation'});


//функция открытие профиля на редактирование

function editProfile(evt) {
    evt.preventDefault();
    profileValidator.hideInputErrors();

    popupWithFormProfile.open();
    const tempValue = profileUserInfo.getUserInfo();
    inputName.value = tempValue.name;
    inputJob.value = tempValue.job;

    profileValidator.setButtonState();
};


// создание экземпляра класса PopupWithForm для редактирования профиля

const popupWithFormProfile = new PopupWithForm ('.popup_type_profile', (evt) => {
    evt.preventDefault();   
    profileUserInfo.setUserInfo({'name': inputName.value, 'job': inputJob.value});
    popupWithFormProfile.close();
});


// слушатель на кнопку добавления карты

buttonAddNewCard.addEventListener('click', showPopup);


// функция показа интерфейса добавления карты

function showPopup(evt) {
    evt.preventDefault();
    placeValidator.hideInputErrors();
    // openPopup(popupCard);
    popupWithFormPlace.open();
    placeValidator.setButtonState();
};


// создание экземпляра класса PopupWithImage

const popupWithImageItem = new PopupWithImage ('.popup_type_image');


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
    evt.target.reset();
});


//создание всех карт из массива (создание экземпляра класса Section)

const cardsSection = new Section({
    data: initialCards,
    renderer: (item) => {
        const cardItem = createNewCard(item);
        // const cardElement = cardItem.createCard();      
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
