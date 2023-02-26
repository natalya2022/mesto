const editProfileOpenButton = document.querySelector('.profile__edit');
const editPopup = document.querySelector('.popup__profile');
const editPopupCloseButton = document.querySelector('.popup__close');
const inputName = document.querySelector('.popup__text_field_name');
const inputJob = document.querySelector('.popup__text_field_occupation');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__occupation');
const formProfile = document.querySelector('.popup__edit');

editProfileOpenButton.addEventListener('click', editProfile);

function editProfile(evt) {
    evt.preventDefault();
    editPopup.classList.add('popup_opened');    
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
};

function closePopup() {
    editPopup.classList.remove('popup_opened');
}

editPopupCloseButton.addEventListener('click', function (evt) {    
    evt.preventDefault();
    closePopup();    
});

formProfile.addEventListener('submit', saveProfile);

function saveProfile (evt) {
    evt.preventDefault();    
    profileName.textContent = inputName.value;
    profileJob.textContent =  inputJob.value;    
    closePopup();        
}

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

  function createCard(card) {
    const newCard = document.querySelector('#cardTemplate').content.firstElementChild.cloneNode(true);    
    const cardImage = newCard.querySelector('.photo-grid__picture');
    const cardTitle = newCard.querySelector('.photo-grid__title');
    cardImage.setAttribute('src', card.link);
    cardImage.setAttribute('alt', card.name);
    cardTitle.textContent = card.name;
    return newCard;
  }

  initialCards.forEach((card) => {
    ul.append(createCard(card));
  })




//   <div class="photo-grid__place">
//    <img src="./images/baikal.jpg" alt="Пейзаж" class="photo-grid__picture">
//       <div class="photo-grid__rectangle">
//        <h2 class="photo-grid__title">Озеро Байкал</h2>
//        <button class="photo-grid__like" type="button" aria-label="Добавить в избранное"></button>
//       </div>
//   </div>