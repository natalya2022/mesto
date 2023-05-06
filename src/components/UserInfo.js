export default class UserInfo {
    constructor({profileName, profileAbout, profileAvatar}) {            
      this._profileName = document.querySelector(profileName);
      this._profileAbout = document.querySelector(profileAbout);
      this._profileAvatar = document.querySelector(profileAvatar);                                         
    }

    getUserInfo = () => {       
        return { 
            name: this._profileName.textContent, 
            about: this._profileAbout.textContent,
            avatar: this._profileAvatar.src,
            _id: this._id  
        };
    }
    
    setUserInfo = ({name, about, avatar, _id} ) => {
        if (name) {
            this._profileName.textContent = name;
        }
        if (about) {
            this._profileAbout.textContent = about;
        }
        if  (avatar) {
            this._profileAvatar.src = avatar;
        } 
        if  (_id) {
            this._id = _id;
        }       
    }    
}
