import * as userService from './users-service'

const BASE_URL = 'http://localhost:3001/api/users/'

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
  }
  
  export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
  }

  export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
  }

  /* HELPER FUNCTIONS */

async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method };
    
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    
    const token = userService.getToken()
    if(token){
        //this differs from class, might need to check
        options.headers = { ...options.headers , Authorization:token}
    }

    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }