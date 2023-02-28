const editProfileOpenButton = document.querySelector('.profile__edit');
const editPopup = document.querySelector('.popup_type_profile');
const closePopupAllButtons = document.querySelectorAll('.popup__close');
const inputName = document.querySelector('.popup__text_field_name');
const inputJob = document.querySelector('.popup__text_field_occupation');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__occupation');
const formProfile = document.forms['form-edit'];

editProfileOpenButton.addEventListener('click', editProfile);

//функция открытие профиля на редактирование

function editProfile(evt) {
    evt.preventDefault();
    editPopup.classList.add('popup_opened');    
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
};

//функция закрытие попапа редактирования профиля

function closePopup() {
    editPopup.classList.remove('popup_opened');
    addCard.classList.remove('popup_opened');
    popupImage.classList.remove('popup_opened');
}

//обработка любой из кнопок закрытия

closePopupAllButtons.forEach((button) => {
    button.addEventListener('click', function (evt) {    
        evt.preventDefault();
        closePopup();    
    });
})

//обработка формы профиля

formProfile.addEventListener('submit', saveProfile);

//функция сохранения профиля

function saveProfile (evt) {
    evt.preventDefault();    
    profileName.textContent = inputName.value;
    profileJob.textContent =  inputJob.value;    
    closePopup();        
}

//массив карточек

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const ul = document.querySelector('.photo-grid__places');

//функция создания одной карты из темплейта

function createCard(card) {
    const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);    
    const cardImage = newCard.querySelector('.photo-grid__picture');
    const cardTitle = newCard.querySelector('.photo-grid__title');
    const likeCardButton = newCard.querySelector('.photo-grid__like');
    const deleteCardButton = newCard.querySelector('.photo-grid__delete');
    const openPopupImage = newCard.querySelector('.photo-grid__picture');
    likeCardButton.addEventListener('click', likeCard);
    deleteCardButton.addEventListener('click', deleteCard);
    openPopupImage.addEventListener('click', showPopupImage);
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

//функция открытия попапа добавления карты

function showPopup(evt) {
    evt.preventDefault();    
    addCard.classList.add('popup_opened');   
};

//функция добавления карты

function addNewCard(evt) {
    evt.preventDefault();
    const card = createCard({
        name: inputPlace.value,
        link: inputLink.value,
     });
    ul.prepend(card);
    closePopup();
    inputPlace.value = '';
    inputLink.value = '';
};

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

//функция просмотра изображения

function showPopupImage(event) {
   event.preventDefault();
   console.log(event.target);
   const popupPhoto = popupImage.querySelector('.popup__photo');
   popupPhoto.setAttribute('src', event.target.src);
   popupPhoto.setAttribute('alt', event.target.alt);
   const popupPhotoName = popupImage.querySelector('.popup__place-name');
   popupPhotoName.innerText = event.target.alt;
   popupImage.classList.add('popup_opened');   
}
 