export default class Api {
  constructor(apiParams) {
    // console.log(apiParams);
    this._baseUrl = apiParams.baseUrl;
    this._headers = apiParams.headers;
    this._userId = 0;
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      })
      .then(res => this._checkRequest(res));
  }


  addNewCard(item) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    })
    .then(res => this._checkRequest(res));
  }


  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._checkRequest(res));
  }
  

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(res => this._checkRequest(res));    
  }


  setUserId(userId) {
    this._userId = userId;    
  }


  getUserId() {
    return this._userId;
  }


  editUserProfile({name, about}) {
    console.log(name, about);
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
        })
      })
      .then(res => this._checkRequest(res)); 
    }


  editUserAvatar({avatar}) {
    console.log(avatar);
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({        
        avatar: avatar
        })
      })
      .then(res => this._checkRequest(res)); 
    }
   
  likeCard (cardId, like) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: like ? 'DELETE' : 'PUT',
      headers: this._headers      
      })
    .then(res => this._checkRequest(res)); 
  }
}   

