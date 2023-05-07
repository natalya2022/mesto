/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._card=e,this._imageLink=e.link,this._name=e.name,this._template=r,this._handleCardClick=n,this.cardId=e._id,this._userId=o,this._owner=e.owner._id,this._handleDeleteCardClick=i,this._likeCounter=e.likes.length,this._likes=e.likes,this._handleLikeClick=u}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".photo-grid__place").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._imageSelector=this._element.querySelector(".photo-grid__picture"),this._titleSelector=this._element.querySelector(".photo-grid__title"),this._imageSelector.setAttribute("src",this._imageLink),this._imageSelector.setAttribute("alt",this._name),this._titleSelector.textContent=this._name,this._likeCardButton=this._element.querySelector(".photo-grid__like"),this._deleteCardButton=this._element.querySelector(".photo-grid__delete"),this._owner!==this._userId&&this._deleteCardButton.remove(),this._element.querySelector(".photo-grid__counter").textContent=this._likeCounter,this.toggleLike(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._likeCardButton.addEventListener("click",(function(){t._handleLikeClick(t)})),this._owner===this._userId&&this._deleteCardButton.addEventListener("click",(function(){t._handleDeleteCardClick(t)})),this._imageSelector.addEventListener("click",(function(){t._handleCardClick()}))}},{key:"findLikeCard",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"toggleLike",value:function(){this._likeCardButton.classList.toggle("photo-grid__like_acltive",this.findLikeCard())}},{key:"updateLike",value:function(t){this._card=t,this._likes=t.likes}},{key:"updateLikeCounter",value:function(){this._likeCounter=this._likes.length,this._element.querySelector(".photo-grid__counter").textContent=this._likeCounter}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function i(t,e,r){return(e=u(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(e)?e:String(e)}var a=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"_showInputElementError",(function(t,e){var r=n._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(n._inputErrorClass),r.textContent=e,r.classList.add(n._errorClass)})),i(this,"hideInputErrors",(function(){n._inputList.forEach((function(t){n._hideInputElementError(t)}))})),i(this,"_hideInputElementError",(function(t){var e=n._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(n._inputErrorClass),e.classList.remove(n._errorClass),e.textContent=""})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputElementError(t):this._showInputElementError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"setButtonState",value:function(){this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners(),this._toggleButtonState()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var s=function(){function t(e,r){var n=e.data,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=n,this._renderer=o,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"setItem",value:function(t){this._container.append(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"prependItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this.clear(),this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function y(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}var h=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=y(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popupSelector=e,this._popup=document.querySelector(e)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__close")&&t.close()}))}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},b.apply(this,arguments)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}function g(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(i,t);var e,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(n){var o=_(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}(this,t)});function i(t){var e,r,n,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n=m(r=o.call(this,t)),a=function(t){var n=t.link,o=t.name;r._popupPhoto.setAttribute("src",n),r._popupPhoto.setAttribute("alt",o),r._popupPhotoName.innerText=o,b((e=m(r),_(i.prototype)),"open",e).call(e)},(u=g(u="open"))in n?Object.defineProperty(n,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[u]=a,r._popupPhotoName=r._popup.querySelector(".popup__place-name"),r._popupPhoto=r._popup.querySelector(".popup__photo"),r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(h);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,C(n.key),n)}}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function L(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},O.apply(this,arguments)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function P(t,e,r){return(e=C(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function C(t){var e=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===w(e)?e:String(e)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(n);if(o){var r=j(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return L(t)}(this,t)});function u(t,e){var r,n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),P(L(o=i.call(this,t)),"close",(function(){O((r=L(o),j(u.prototype)),"close",r).call(r),o._form.reset()})),P(L(o),"setEventListeners",(function(){O((n=L(o),j(u.prototype)),"setEventListeners",n).call(n),o._form.addEventListener("submit",(function(t){t.preventDefault(),o._submitFormHandler(o._getInputValues())}))})),o._form=o._popup.querySelector(".popup__edit"),o._submitFormHandler=e,o._inputList=Array.from(o._popup.querySelectorAll(".popup__input")),o._buttonSave=o._form.querySelector(".popup__save"),o._buttonSaveText=o._buttonSave.textContent,o}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"renderLoading",value:function(t){var e=this;setTimeout((function(){e._buttonSave.textContent=t?"Сохранение...":e._buttonSaveText}),t?0:500)}}])&&E(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,R(n.key),n)}}function q(t,e,r){return e&&T(t.prototype,e),r&&T(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function A(t,e,r){return(e=R(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function R(t){var e=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===I(e)?e:String(e)}var B=q((function t(e){var r=this,n=e.profileName,o=e.profileAbout,i=e.profileAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,"getUserInfo",(function(){return{name:r._profileName.textContent,about:r._profileAbout.textContent,avatar:r._profileAvatar.src}})),A(this,"setUserInfo",(function(t){var e=t.name,n=t.about,o=t.avatar,i=t._id;e&&(r._profileName.textContent=e),n&&(r._profileAbout.textContent=n),o&&(r._profileAvatar.src=o),i&&(r._id=i)})),A(this,"getUserId",(function(){return r._id})),this._profileName=document.querySelector(n),this._profileAbout=document.querySelector(o),this._profileAvatar=document.querySelector(i)})),N={formSelector:".popup__edit",formProfileName:'[name="form-edit"]',formPlaceName:'[name="form-add"]',formAvatarName:'[name="form-avatar"]',inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},U=document.querySelector(".profile__edit"),D=document.querySelector(".popup__text_field_name"),V=document.querySelector(".popup__text_field_occupation"),G=document.querySelector(".profile__add"),F=document.querySelector(".profile__base");function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function J(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===H(o)?o:String(o)),n)}var o}var M=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_checkRequest",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return t._checkRequest(e)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._checkRequest(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkRequest(t)}))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return t._checkRequest(e)}))}},{key:"editUserProfile",value:function(t){var e=this,r=t.name,n=t.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:r,about:n})}).then((function(t){return e._checkRequest(t)}))}},{key:"editUserAvatar",value:function(t){var e=this,r=t.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:r})}).then((function(t){return e._checkRequest(t)}))}},{key:"likeCard",value:function(t,e){var r=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:e?"DELETE":"PUT",headers:this._headers}).then((function(t){return r._checkRequest(t)}))}}])&&J(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Y(t){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(t)}function z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,X(n.key),n)}}function $(t,e){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},$(t,e)}function K(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Q(){return Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=W(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},Q.apply(this,arguments)}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}function X(t){var e=function(t,e){if("object"!==Y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==Y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===Y(e)?e:String(e)}var Z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(n);if(o){var r=W(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===Y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return K(t)}(this,t)});function u(t){var e,r,n,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),n=K(r=i.call(this,t)),a=function(){Q((e=K(r),W(u.prototype)),"setEventListeners",e).call(e),r._form.addEventListener("submit",(function(t){t.preventDefault(),r._functionSubmit()}))},(o=X(o="setEventListeners"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r._form=r._popup.querySelector(".popup__edit"),r}return e=u,(r=[{key:"setSubmitAction",value:function(t){this._functionSubmit=t}}])&&z(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function tt(t){return tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(t)}function et(){et=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,u=Object.create(i.prototype),a=new L(o||[]);return n(u,"_invoke",{value:S(t,r,a)}),u}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function y(){}function h(){}var d={};c(d,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(O([])));m&&m!==e&&r.call(m,i)&&(d=m);var b=h.prototype=p.prototype=Object.create(d);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(n,i,u,a){var c=s(t[n],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==tt(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,u,a)}),(function(t){o("throw",t,u,a)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,a)}))}a(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=w(u,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function w(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return y.prototype=h,n(b,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:y,configurable:!0}),y.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(g.prototype),c(g.prototype,u,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new g(l(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},_(b),c(b,a,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function rt(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}function nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var ot,it=new M({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"a2c97fd6-33e2-4a7f-88de-1986c85df645","Content-Type":"application/json"}});Promise.all([it.getUserInfo(),it.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return nt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?nt(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];at.setUserInfo(o),(ot=new s({data:i,renderer:function(t){var e=st(t);ot.setItem(e)}},".photo-grid__places")).renderItems()})).catch((function(t){return console.log("Ошибка: ".concat(t))})),U.addEventListener("click",(function(t){t.preventDefault(),dt.hideInputErrors(),ct.open();var e=at.getUserInfo();D.value=e.name,V.value=e.about,dt.setButtonState()})),F.addEventListener("click",(function(t){t.preventDefault(),mt.hideInputErrors(),ut.open(),dt.setButtonState()}));var ut=new x(".popup_type_avatar",(function(t){ut.renderLoading(!0),it.editUserAvatar(t).then((function(){at.setUserInfo(t),ut.close()})).catch((function(t){console.log(t)})).finally((function(){ut.renderLoading(!1)}))}));ut.setEventListeners();var at=new B({profileName:".profile__title",profileAbout:".profile__occupation",profileAvatar:".profile__avatar"}),ct=new x(".popup_type_profile",(function(t){ct.renderLoading(!0),it.editUserProfile(t).then((function(){at.setUserInfo({name:t.name,about:t.about}),ct.close()})).catch((function(t){console.log(t)})).finally((function(){ct.renderLoading(!1)}))}));ct.setEventListeners(),G.addEventListener("click",(function(t){t.preventDefault(),vt.hideInputErrors(),ft.open(),vt.setButtonState()}));var lt=new S(".popup_type_image");function st(t){return new r(t,"#cardTemplate",(function(){lt.open(t)}),at.getUserId(),yt,ht).createCard()}lt.setEventListeners();var ft=new x(".popup_type_place",(function(t){ft.renderLoading(!0),it.addNewCard(t).then((function(t){var e=st(t);ot.prependItem(e),ft.close()})).catch((function(t){console.log(t)})).finally((function(){ft.renderLoading(!1)}))}));ft.setEventListeners();var pt=new Z(".popup_type_delete");function yt(t){var e=function(){var e,r=(e=et().mark((function e(){return et().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,it.deleteCard(t.cardId);case 3:t.deleteCard(),pt.close(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function u(t){rt(i,n,o,u,a,"next",t)}function a(t){rt(i,n,o,u,a,"throw",t)}u(void 0)}))});return function(){return r.apply(this,arguments)}}();pt.setSubmitAction(e),pt.open()}function ht(t){it.likeCard(t.cardId,t.findLikeCard()).then((function(e){t.updateLike(e),t.updateLikeCounter(),t.toggleLike()})).catch((function(t){console.log(t)}))}pt.setEventListeners();var dt=new a(N,document.querySelector(N.formSelector+N.formProfileName));dt.enableValidation();var vt=new a(N,document.querySelector(N.formSelector+N.formPlaceName));vt.enableValidation();var mt=new a(N,document.querySelector(N.formSelector+N.formAvatarName));mt.enableValidation()})();
//# sourceMappingURL=main.js.map