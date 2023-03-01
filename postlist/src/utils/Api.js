const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
  constructor({baseUrl, headers}){
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getPostsList(){
    return fetch(`${this._baseUrl}/v2/group-10/posts`, {
      headers: this._headers,
    }).then(onResponse)
  } 

  getUserInfo(){
    return fetch(`${this._baseUrl}/v2/group-10/users/me`, {
      headers: this._headers,
    }).then(onResponse)
  } 

  setUserInfo(dataUser){
    return fetch(`${this._baseUrl}/user/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(dataUser),
    }).then(onResponse)
  } 

  search(searchQuery){
    return fetch(`${this._baseUrl}/products/search?query=${searchQuery}`, {
      headers: this._headers,
    }).then(onResponse)
  } 

  changeLikeProduct(productId, isLike){
    return fetch(`${this._baseUrl}/products/likes/${productId}`, {
      method: isLike ? 'DELETE' : 'PUT',
      headers: this._headers,
    }).then(onResponse)
  }
}

const config = {
  baseUrl: 'https://api.react-learning.ru',
  headers: {
    'Content-Type' : 'aplication/json',
    "authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UxMjY1NzU5Yjk4YjAzOGY3N2IyMGYiLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc1NzAwMTg5LCJleHAiOjE3MDcyMzYxODl9.3g3J4NWBJWJdqe1QKr_aLIBf_VMKyo0r0dkEr04l7EE'
  }
}

const api = new Api(config);

export default api;