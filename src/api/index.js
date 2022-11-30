import axios from 'axios';
import { BASE_URL, REGISTERURL, LOGINURL, FORGOTPASSWORD, RESETPASSWORD, CREATEQUIZ, UPDATEQUIZ, FETCHCOURSEQUIZ, FETCHCHILDREN, REGISTERCHILD, FETCHSTATS, FETCHPOEMS } from './urls';
import Cookies from 'js-cookie'

const API = axios.create({ baseURL: BASE_URL });
API.interceptors.request.use(req => {
  if (Cookies.get('token')) {
    req.headers.authorization = `Bearer ${Cookies.get('token')}`;
  }
  return req;
})

export const signup = userdata => API.post(REGISTERURL, userdata);
export const signin = userdata => API.post(LOGINURL, userdata);
export const forgotpassword = userdata => API.post(FORGOTPASSWORD, userdata);
export const resetpassword = userdata => API.post(RESETPASSWORD, userdata);
export const fetchchildrens = () => API.get(FETCHCHILDREN);
export const registerchild = userdata => API.post(REGISTERCHILD, userdata);
export const createquiz = userdata => API.post(CREATEQUIZ, userdata);
export const fetchcoursequiz = (childId, userdata) => API.post(FETCHCOURSEQUIZ(childId), userdata);
export const updatequiz = (quizId, userdata) => API.post(UPDATEQUIZ(quizId), userdata);
export const fetchstatics = () => API.get(FETCHSTATS);
export const fetchpoems = () => API.get(FETCHPOEMS);


const validateStatusCode = response =>
  new Promise((resolve, reject) => {
    const status = response.status;
    const next = status < 400 ? resolve : reject;
    response.text().then(next);
  });

export const makePrediction = (image, port) =>
  fetch(`http://127.0.0.1:${port}/api/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ image })
  }).then(validateStatusCode);

