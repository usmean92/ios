import React, { useState, useContext } from "react";
import AuthContext from "../context/Auth";
import { login } from "../helpers/user";
import { Link, useHistory } from "react-router-dom";
import { ClipLoader } from 'react-spinners'
import Cookies from "js-cookie";

const Login = () => {
  let { user, setUser } = useContext(AuthContext)
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const signin = async () => {
    await login({ setUser, email, password, setLoading })
      .then((res) => {
        if (Cookies.get('token')) {
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
              <div className='card-body rounded-0 text-left'>
                <h2 className='fw-700 display1-size display2-md-size mb-3'>
                  Login into <br />
                  your account
                </h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className='form-group icon-input mb-3'>
                    <i className='font-sm ti-email text-grey-500 pr-0'></i>
                    <input
                      type='email'
                      className='style2-input pl-5 form-control text-grey-900 font-xssss fw-600'
                      placeholder='Email Address'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-group icon-input mb-1'>
                    <input
                      type='password'
                      className='style2-input pl-5 form-control text-grey-900 font-xssss ls-3'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <i className='font-sm ti-lock text-grey-500 pr-0'></i>
                  </div>
                  <div className='form-check text-left mb-3'>
                    <input
                      type='checkbox'
                      className='form-check-input mt-2'
                      id='exampleCheck1'
                    />
                    <label
                      className='form-check-label font-xssss text-grey-500'
                      htmlFor='exampleCheck1'>
                      Remember me
                    </label>
                    <Link
                      to='/forgot'
                      className='fw-600 font-xssss text-grey-700 mt-1 float-right'>
                      Forgot your Password?
                    </Link>
                  </div>
                </form>

                <div className='col-sm-12 p-0 text-left'>
                  <div className='form-group mb-1'>
                    <button
                      type="submit"
                      className='form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 '
                      onClick={() => signin()}>
                      {!loading ? 'Login' : <ClipLoader color='white' size={20} />}
                    </button>
                  </div>
                  <h6 className='text-grey-500 font-xssss fw-500 mt-0 mb-0 lh-32'>
                    Dont have account{" "}
                    <Link to='/register' className='fw-700 ml-1'>
                      Register
                    </Link>
                  </h6>
                </div>
                <div className='col-sm-12 p-0 text-center mt-2'>
                  <h6 className='mb-0 d-inline-block bg-white fw-500 font-xssss text-grey-500 mb-3'>
                    Or, Sign in with your social account{" "}
                  </h6>
                  <div className='form-group mb-1'>
                    <Link
                      to='/login'
                      className='form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2'>
                      <img
                        src='https://via.placeholder.com/50x50.png'
                        alt='icon'
                        className='ml-2 w40 mb-1 mr-5'
                      />{" "}
                      Sign in with Google
                    </Link>
                  </div>
                  <div className='form-group mb-1'>
                    <Link
                      to='/login'
                      className='form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 '>
                      <img
                        src='https://via.placeholder.com/50x50.png'
                        alt='icon'
                        className='ml-2 w40 mb-1 mr-5'
                      />{" "}
                      Sign in with Facebook
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
