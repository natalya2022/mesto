import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import {initialCards} from './cards.js';
import {parameters} from './parameters.js';

const buttonOpenPopupProfile = document.querySelector('.profile__edit');
// const popupProfile = document.querySelector('.popup_type_profile');
const inputName = document.querySelector('.popup__text_field_name');
const inputJob = document.querySelector('.popup__text_field_occupation');
// const profileName = document.querySelector('.profile__title');
// const profileJob = document.querySelector('.profile__occupation');
// const formProfile = document.forms['form-edit'];

buttonOpenPopupProfile.addEventListener('click', editProfile);

const profileUserInfo = new UserInfo ({profileName: '.profile__title', profileJob: '.profile__occupation'});
// console.log(profileUserInfo);
//console.log('***', profileUserInfo.getUserInfo());

/*



*/
// const temp = profileUserInfo.getUserInfo();
//     inputName.value = temp.name;
//     inputJob.value = temp.job;





//функция открытие профиля на редактирование

function editProfile(evt) {
    evt.preventDefault();
    profileValidator.hideInputErrors();

    popupWithFormProfile.open();
    // inputName.value = profileName.textContent;
    // inputJob.value = profileJob.textContent;

    const temp = profileUserInfo.getUserInfo();
    inputName.value = temp.name;
    inputJob.value = temp.job;


    profileValidator.setButtonState();
}

//обработка формы профиля

// formProfile.addEventListener('submit', saveProfile);

//функция сохранения профиля

// function saveProfile(evt) {
//     evt.preventDefault();
//     profileName.textContent = inputName.value;
//     profileJob.textContent = inputJob.value;
//     closePopup(popupProfile);
// }

// создание экземпляра класса PopupWithForm для редактирования профиля

const popupWithFormProfile = new PopupWithForm ('.popup_type_profile', (evt) => {
    evt.preventDefault();
    // profileName.textContent = inputName.value;
    // profileJob.textContent = inputJob.value;
    profileUserInfo.setUserInfo({'name': inputName.value, 'job': inputJob.value});
    popupWithFormProfile.close();
});



// const cardsSection = document.querySelector('.photo-grid__places');
const buttonAddNewCard = document.querySelector('.profile__add');
// const popupCard = document.querySelector('.popup_type_place');
const inputPlace = document.querySelector('.popup__text_field_place');
const inputLink = document.querySelector('.popup__text_field_url');
// const formNewCard = document.forms['form-add'];
export const popupImage = document.querySelector('.popup_type_image');
export const popupPhoto = popupImage.querySelector('.popup__photo');
export const popupPhotoName = popupImage.querySelector('.popup__place-name');


// слушатель на кнопку добавления карты

buttonAddNewCard.addEventListener('click', showPopup);

//функция показа интерфейса добавления карты

function showPopup(evt) {
    evt.preventDefault();
    placeValidator.hideInputErrors();
    // openPopup(popupCard);
    popupWithFormPlace.open();
    placeValidator.setButtonState();
}


// создание экземпляра класса PopupWithImage

const popupWithImageItem = new PopupWithImage ('.popup_type_image');


// функция создания экземпляра карты

function createNewCard(item) {    
    const cardItem = new Card(item, '#cardTemplate', () => {popupWithImageItem.open(item)} );
    // console.log(cardItem);
    return cardItem.createCard();
}

// функция добавления карты

// function addNewCard(evt) {
//     evt.preventDefault();
//     const cardItem = createNewCard({
//         link: inputLink.value,
//         name: inputPlace.value
//     });
//     cardsSection.prependItem(cardItem);
//     popupWithFormPlace.close();
//     evt.target.reset();
// }

//обработка формы добавления карты

// formNewCard.addEventListener('submit', addNewCard);




// создание экземпляра класса PopupWithForm для добавления карты

const popupWithFormPlace = new PopupWithForm ('.popup_type_place', (evt) => {
    evt.preventDefault();
    const cardItem = createNewCard({
        link: inputLink.value,
        name: inputPlace.value
    });
    // const cardItem = createNewCard(() => {popupWithFormPlace.setInputValues ()});
    // console.log(popupWithFormPlace.setInputValues ()
    // console.log(cardItem);
    cardsSection.prependItem(cardItem);
    popupWithFormPlace.close();
    evt.target.reset();
});


//создание всех карт из массива (создаем экземпляр класса Section)

const cardsSection = new Section({
    data: initialCards,
    renderer: (item) => {
        const cardItem = createNewCard(item);
        // const cardElement = cardItem.createCard();      
        cardsSection.setItem(cardItem);
    }
}, '.photo-grid__places');

cardsSection.renderItems();


// создаем экземпляры класса валидации для каждой из форм и запускаем программу

const profileFormElement = document.querySelector(parameters.formSelector + parameters.formProfileName);
const profileValidator = new FormValidator(parameters, profileFormElement);
profileValidator.enableValidation();

const placeFormElement = document.querySelector(parameters.formSelector + parameters.formPlaceName);
const placeValidator = new FormValidator(parameters, placeFormElement);
placeValidator.enableValidation();