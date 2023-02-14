const editProfileOpenButton = document.querySelector('.profile__edit');
const editPopup = document.querySelector('.popup');
const editPopupSaveButton = document.querySelector('.popup__save');
const editPopupCloseButton = document.querySelector('.popup__close');
const inputName = document.querySelector('.popup__name');
const inputJob = document.querySelector('.popup__occupation');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__occupation');
const formProfile = document.querySelector('.popup__container');

editProfileOpenButton.addEventListener('click', editProfile);

function editProfile(evt) {

    evt.preventDefault();
    editPopup.classList.add('popup_opened');    
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
};

editPopupCloseButton.addEventListener('click', function (evt) {
    
    evt.preventDefault();
    editPopup.classList.remove('popup_opened');
    inputName.value = '';
    inputJob.value = '';
});

editPopupSaveButton.addEventListener('click', saveProfile);
formProfile.addEventListener('submit', saveProfile);

function saveProfile (evt) {
    evt.preventDefault();
    
    if (inputName.value.length > 1 && inputJob.value.length > 1) {
        profileName.textContent = inputName.value;
        profileJob.textContent =  inputJob.value;
    }
    editPopup.classList.remove('popup_opened');
    inputName.value = '';
    inputJob.value = '';    
}


