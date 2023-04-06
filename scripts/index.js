import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from './cards.js';
import {parameters} from './parameters.js';

const buttonOpenPopupProfile = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_type_profile');
const inputName = document.querySelector('.popup__text_field_name');
const inputJob = document.querySelector('.popup__text_field_occupation');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__occupation');
const formProfile = document.forms['form-edit'];

buttonOpenPopupProfile.addEventListener('click', editProfile);

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
    profileValidator.hideInputErrors();

    openPopup(popupProfile);
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    
    profileValidator.setButtonState();    
}

//обработка формы профиля

formProfile.addEventListener('submit', saveProfile);

//функция сохранения профиля

function saveProfile(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup(popupProfile);
}


const cardsSection = document.querySelector('.photo-grid__places');
const buttonAddNewCard = document.querySelector('.profile__add');
const popupCard = document.querySelector('.popup_type_place');
const inputPlace = document.querySelector('.popup__text_field_place');
const inputLink = document.querySelector('.popup__text_field_url');
const formNewCard = document.forms['form-add'];
export const popupImage = document.querySelector('.popup_type_image');
export const popupPhoto = popupImage.querySelector('.popup__photo');
export const popupPhotoName = popupImage.querySelector('.popup__place-name');


// слушатель на кнопку добавления карты

buttonAddNewCard.addEventListener('click', showPopup);

//функция показа интерфейса добавления карты

function showPopup(evt) {
    evt.preventDefault();
    placeValidator.hideInputErrors();
    openPopup(popupCard);   
    placeValidator.setButtonState();
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
    closePopup(popupCard);
    evt.target.reset();
}

//обработка формы добавления карты

formNewCard.addEventListener('submit', addNewCard);


//создание всех карт из массива с помощью класса Card

initialCards.forEach((card) => {    
    const cardItem = createNewCard(card.link, card.name);    
    cardsSection.append(cardItem);
})


// создаем экземпляры класса валидации для каждой из форм и запускаем программу

const profileFormElement = document.querySelector(parameters.formSelector + parameters.formProfileName);
const profileValidator = new FormValidator(parameters, profileFormElement);
profileValidator.enableValidation();

const placeFormElement = document.querySelector(parameters.formSelector + parameters.formPlaceName);
const placeValidator = new FormValidator(parameters, placeFormElement);
placeValidator.enableValidation();

