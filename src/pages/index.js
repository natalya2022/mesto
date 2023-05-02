import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards} from '../data/cards.js';
import {parameters} from '../data/parameters.js';
import {buttonOpenPopupProfile, inputName, inputAbout, buttonAddNewCard, buttonOpenPopupAvatar} from '../data/constants.js';
import { apiParams } from '../data/apiParams.js';
import Api from '../components/Api.js';


// создание класса Api

const api = new Api(apiParams);

// запрос на сервер по инициации карт и обработка результата

api.getInitialCards()
  .then((result) => {
    console.log(result);    
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  }); 


// api.addNewCard({name: 'черепаха', link: 'https://images.unsplash.com/photo-1682314170732-2de75372c338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzAxMTI4OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'})
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err); // выведем ошибку в консоль
//     }); 

// const CardId = '6450dd093bb4f20145940076';
// api.deleteCard(CardId);   




// установка слушателя на кнопку редактирования профиля

buttonOpenPopupProfile.addEventListener('click', editProfile);

// установка слушателя на иконку аватара

buttonOpenPopupAvatar.addEventListener('click', editAvatar);


//функция открытия аватара на редактирование

function editAvatar(evt) {
    evt.preventDefault();
    avatarValidator.hideInputErrors();
    popupWithFormAvatar.open();    
    profileValidator.setButtonState();
};

// создание экземпляра класса PopupWithForm для редактирования аватара

const popupWithFormAvatar = new PopupWithForm ('.popup_type_avatar', submitEditAvatarForm); 
popupWithFormAvatar.setEventListeners();

function submitEditAvatarForm (item) {       
    profileUserInfo.setUserInfo(item);        
    popupWithFormAvatar.close(); 
}


// создание экземпляра класса UserInfo

const profileUserInfo = new UserInfo ({profileName: '.profile__title', profileAbout: '.profile__occupation', profileAvatar: '.profile__avatar'});

// profileUserInfo.setUserInfo(userData);

// загрузка данных пользователя с сервера

api.getUserInfo()
  .then((result) => {
    console.log(result);
    profileUserInfo.setUserInfo(result);
    })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

// api.editUserProfile();

//функция открытия профиля на редактирование

function editProfile(evt) {
    evt.preventDefault();
    profileValidator.hideInputErrors();

    popupWithFormProfile.open();
    const tempValues = profileUserInfo.getUserInfo();
    inputName.value = tempValues.name;
    inputAbout.value = tempValues.about;

    profileValidator.setButtonState();
};


// создание экземпляра класса PopupWithForm для редактирования профиля

const popupWithFormProfile = new PopupWithForm ('.popup_type_profile', submitEditProfileForm); 
popupWithFormProfile.setEventListeners();

function submitEditProfileForm (item) {    
    api.editUserProfile(item);    
    profileUserInfo.setUserInfo({'name': item.name, 'about': item.about});    // обновить страницу???    
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

const avatarFormElement = document.querySelector(parameters.formSelector + parameters.formAvatarName);
const avatarValidator = new FormValidator(parameters, avatarFormElement);
profileValidator.enableValidation();
