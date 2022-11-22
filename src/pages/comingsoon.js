import React, { useState, useContext } from "react";
import AuthContext from "../context/Auth";
import { login } from "../helpers/user";
import { Link, useHistory } from "react-router-dom";
import { ClipLoader } from 'react-spinners'
import Cookies from "js-cookie";

const CommingSoon = () => {
  let { user, setUser } = useContext(AuthContext)
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const signin = async () => {
    await login({ setUser, email, password, setLoading })
      .then((res) => {
        if (Cookies.get('token')) {
          console.log('loged in ')
          history.push('/urdu')
        }
      })
  }

  return (
    <>
      <div className='main-wrap'>
        <div className='row'>
          <div
            className='col-xl-5 d-none d-xl-block p-0 vh-100 bg-no-repeat bg-image-cover p-4 '
            style={{
              backgroundImage: `url("assets/images/signup-bg.webp")`,
            }}>
            <img
              src='assets/images/login.png'
              alt='banner'
              className='img-fluid aos-init aos-animate img-login'
            />
          </div>

          <div className='col-xl-7 vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden'>
            <div className='card shadow-none border-0 ml-auto mr-auto login-card'>
              <h1 className="fw-700 text-uppercase">Page Coming Soon</h1>

            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default CommingSoon;
