import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
    parameters
} from '../data/parameters.js';
import {
    buttonOpenPopupProfile,
    inputName,
    inputAbout,
    buttonAddNewCard,
    buttonOpenPopupAvatar,
} from '../data/constants.js';
import {
    apiParams
} from '../data/apiParams.js';
import Api from '../components/Api.js';
import PopupWithDelete from '../components/PopupWithDelete';


// создание класса Api

const api = new Api(apiParams);


// загрузка данных пользователя и карт с сервера и отрисовка на странице

let cardsSection;

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([resUser, resCards]) => {
        profileUserInfo.setUserInfo(resUser);
        api.setUserId(resUser._id);
        cardsSection = new Section({
            data: resCards,
            renderer: (item) => {
                const cardItem = createNewCard(item);
                cardsSection.setItem(cardItem);
            }
        }, '.photo-grid__places');
        cardsSection.renderItems();
    })
    .catch((error) => console.log(`Ошибка: ${error}`))


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

const popupWithFormAvatar = new PopupWithForm('.popup_type_avatar', submitEditAvatarForm);
popupWithFormAvatar.setEventListeners();

// функция редактирования аватара

function submitEditAvatarForm(item) {
    popupWithFormAvatar.renderLoading(true);
    console.log(popupWithFormAvatar.renderLoading);
    api.editUserAvatar(item)
        .then(() => {
            profileUserInfo.setUserInfo(item);
            popupWithFormAvatar.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupWithFormAvatar.renderLoading(false); 
        });
}


// создание экземпляра класса UserInfo

const profileUserInfo = new UserInfo({
    profileName: '.profile__title',
    profileAbout: '.profile__occupation',
    profileAvatar: '.profile__avatar'
});


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

const popupWithFormProfile = new PopupWithForm('.popup_type_profile', submitEditProfileForm);
popupWithFormProfile.setEventListeners();


// функция редактирования профиля

function submitEditProfileForm(item) {
    popupWithFormProfile.renderLoading(true);
    api.editUserProfile(item)
        .then(() => {
            profileUserInfo.setUserInfo({
                'name': item.name,
                'about': item.about
            });
            popupWithFormProfile.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupWithFormProfile.renderLoading(false); 
        });
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

const popupWithImageItem = new PopupWithImage('.popup_type_image');
popupWithImageItem.setEventListeners();


// функция создания экземпляра карты

function createNewCard(item) {
    const cardItem = new Card(item, '#cardTemplate', () => {
            popupWithImageItem.open(item)
        }, api.getUserId(),
        handleDeleteClick,
        handleLikeClick
    )
    return cardItem.createCard();
};


// создание экземпляра класса PopupWithForm для добавления карты

const popupWithFormPlace = new PopupWithForm('.popup_type_place', submitNewCardForm);
popupWithFormPlace.setEventListeners();


// функция добавления карты

function submitNewCardForm(item) {
    popupWithFormPlace.renderLoading(true);
    api.addNewCard(item)
        .then((result) => {
            console.log(result);
            const cardItem = createNewCard(result);
            cardsSection.prependItem(cardItem);
            popupWithFormPlace.close()
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupWithFormPlace.renderLoading(false); 
        });
}


// создание экземпляра класса PopupWithDelete удаления карты

const popupWithDeleteCard = new PopupWithDelete('.popup_type_delete');
console.log(popupWithDeleteCard);
popupWithDeleteCard.setEventListeners();


// функция удаления карты

function handleDeleteClick(card) {
    const submitDeleteCardForm = async () => {
        try {
            const result = await api.deleteCard(card.cardId);
            //console.log(result);
            card.deleteCard();
            popupWithDeleteCard.close();
        } catch (err) {
            console.log(err);
        } finally {
            popupWithDeleteCard.close();
        }
    };
    popupWithDeleteCard.setSubmitAction(submitDeleteCardForm);
    popupWithDeleteCard.open();
};


// функция постановки лайка

function handleLikeClick(card) {
    api.likeCard(card.cardId, card.findLikeCard())
        .then((result) => {
            card.updateLike(result);
            card.updateLikeCounter();
            card.toggleLike();
        })
        .catch((err) => {
            console.log(err);
        });
}


// создание экземпляров класса валидации для каждой из форм и запуск программы

const profileFormElement = document.querySelector(parameters.formSelector + parameters.formProfileName);
const profileValidator = new FormValidator(parameters, profileFormElement);
profileValidator.enableValidation();

const placeFormElement = document.querySelector(parameters.formSelector + parameters.formPlaceName);
const placeValidator = new FormValidator(parameters, placeFormElement);
placeValidator.enableValidation();

const avatarFormElement = document.querySelector(parameters.formSelector + parameters.formAvatarName);
const avatarValidator = new FormValidator(parameters, avatarFormElement);
avatarValidator.enableValidation();