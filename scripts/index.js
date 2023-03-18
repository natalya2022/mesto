const editProfileOpenButton = document.querySelector('.profile__edit');
const editPopup = document.querySelector('.popup_type_profile');
const closePopupAllButtons = document.querySelectorAll('.popup__close');
const inputName = document.querySelector('.popup__text_field_name');
const inputJob = document.querySelector('.popup__text_field_occupation');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__occupation');
const formProfile = document.forms['form-edit'];
const newCardTemplate = document.querySelector('#cardTemplate');


editProfileOpenButton.addEventListener('click', editProfile);
inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

//функция открытия попапа

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => closePopupEsc(evt, popup));
    popup.addEventListener('mousedown', (evt) => closePopupOverlay(evt, popup));
};

//функция закрытия попапа по клику на оверлей

function closePopupOverlay(evt, popup) {    
    evt.currentTarget === evt.target && closePopup(popup);
}

//функция закрытия попапа по кнопке Escape

function closePopupEsc(evt, popup) {
    evt.key === 'Escape' && closePopup(popup);
    document.removeEventListener('keydown', closePopupEsc);
};

//функция закрытия попапа

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    const inputList = Array.from(popup.querySelectorAll(obj.inputSelector));
    inputList.forEach((inputElement) => {
        hideInputError(obj, popup, inputElement);
    });
}

//функция открытие профиля на редактирование

function editProfile(evt) {
    evt.preventDefault();
    openPopup(editPopup);
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}

//обработка каждой из кнопок закрытия

closePopupAllButtons.forEach((button) => {
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        closePopup(evt.target.closest('div.popup'));
    });
})

//обработка формы профиля

formProfile.addEventListener('submit', saveProfile);

//функция сохранения профиля

function saveProfile(evt) {
    evt.preventDefault();
    if (isValidForm(evt.target)) {
        profileName.textContent = inputName.value;
        profileJob.textContent = inputJob.value;
        closePopup(editPopup);
    }
}

const ul = document.querySelector('.photo-grid__places');

//функция создания одной карты из темплейта

function createCard(card) {
    const newCard = newCardTemplate.content.cloneNode(true);
    const cardImage = newCard.querySelector('.photo-grid__picture');
    const cardTitle = newCard.querySelector('.photo-grid__title');
    const likeCardButton = newCard.querySelector('.photo-grid__like');
    const deleteCardButton = newCard.querySelector('.photo-grid__delete');
    likeCardButton.addEventListener('click', likeCard);
    deleteCardButton.addEventListener('click', deleteCard);
    cardImage.addEventListener('click', showPopupImage);
    cardImage.setAttribute('src', card.link);
    cardImage.setAttribute('alt', card.name);
    cardTitle.textContent = card.name;
    return newCard;
}

//создание всех карт из массива

initialCards.forEach((card) => {
    ul.append(createCard(card));
})

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
    inputPlace.value = '';
    inputLink.value = '';
}

//функция добавления карты

function addNewCard(evt) {
    evt.preventDefault();
    if (isValidForm(evt.target)) {
        const card = createCard({
            name: inputPlace.value,
            link: inputLink.value,
        });
        ul.prepend(card);
        closePopup(addCard);        
    }
}

//обработка формы добавления карты

formNewCard.addEventListener('submit', addNewCard);

//функция лайка

function likeCard(event) {
    const like = event.target;
    like.classList.toggle('photo-grid__like_acltive');
}

//функция удаления карты

function deleteCard(event) {
    const del = event.target;
    const card = del.closest('.photo-grid__place');
    card.remove();
}

const popupImage = document.querySelector('.popup_type_image');
const popupPhoto = popupImage.querySelector('.popup__photo');
const popupPhotoName = popupImage.querySelector('.popup__place-name');

//функция просмотра изображения

function showPopupImage(event) {
    event.preventDefault();
    popupPhoto.setAttribute('src', event.target.src);
    popupPhoto.setAttribute('alt', event.target.alt);
    popupPhotoName.innerText = event.target.alt;
    openPopup(popupImage);
}