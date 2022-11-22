import axios from 'axios';
import { BASE_URL, REGISTERURL, LOGINURL, FORGOTPASSWORD, RESETPASSWORD } from './urls';

console.log('base: ', BASE_URL)
const API = axios.create({ baseURL: BASE_URL });


export const signup = userdata => API.post(REGISTERURL, userdata);
export const signin = userdata => API.post(LOGINURL, userdata);
export const forgotpassword = userdata => API.post(FORGOTPASSWORD, userdata);
export const resetpassword = userdata => API.post(RESETPASSWORD, userdata);



const validateStatusCode = (response) =>
  new Promise((resolve, reject) => {
    const status = response.status;
    const next = status < 400 ? resolve : reject;
    response.text().then(next);
  });

export const makePrediction = (image) =>
  fetch("/api/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image }),
  }).then(validateStatusCode);
