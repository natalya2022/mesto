const editProfileOpenButton = document.querySelector('.profile__edit');
const editPopup = document.querySelector('.popup');
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


