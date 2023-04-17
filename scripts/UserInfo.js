export default class UserInfo {
    constructor({profileName, profileJob}) {      
      console.log(profileName, profileJob);
      this._profileName = document.querySelector(profileName);
      this._profileJob = document.querySelector(profileJob);           
      console.log(this._profileName.textContent, this._profileJob.textContent);                    
    }

    getUserInfo = () => {
        this._profile = { 
            name: this._profileName.textContent, 
            job: this._profileJob.textContent,  
        }
        console.log(this);
        return this._profile;
    };
    
    setUserInfo = ({name, job}) => {
        this._profileName.textContent = name;
        this._profileJob.textContent = job;
    };
}


