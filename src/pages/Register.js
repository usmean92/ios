import React, { useState, useContext } from "react";
import AuthContext from "../context/Auth";
import { register } from "../helpers/user";
import { Link, useHistory } from "react-router-dom";
import { ClipLoader } from 'react-spinners'
import 'antd/dist/antd.css'
import { message } from 'antd';

const Register = () => {
  let { user, setUser } = useContext(AuthContext)
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const signup = async () => {
    let values = {
      name, email, password
    }
    if (!name || !email || !password) {
      message.error('Fill out all field')
    } else {
      if (password === confirmPassword) {
        setError('')
        await register({ setUser, values, setError, setLoading })
          .then((res) => {
            if (!error) {
              history.push('/urdu')

            }
          })
      }
      else {
        setError('Both password should match')
      }
    }

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
              src='assets/images/1.webp'
              alt='banner'
              className='img-fluid aos-init aos-animate img-login'
            />
          </div>

          <div className='col-xl-7 vh-100 align-items-center d-flex bg-white rounded-lg overflow-hidden'>
            <div className='card shadow-none border-0 ml-auto mr-auto login-card'>
              <div className='card-body rounded-0 text-left'>
                <h2 className='fw-700 display1-size display2-md-size mb-4'>
                  Create <br />
                  your account
                </h2>
                <form>
                  <div className='form-group icon-input mb-3'>
                    <i className='font-sm ti-user text-grey-500 pr-0'></i>
                    <input
                      type='text'
                      className='style2-input pl-5 form-control text-grey-900 font-xsss fw-600'
                      placeholder='Your Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='form-group icon-input mb-3'>
                    <i className='font-sm ti-email text-grey-500 pr-0'></i>
                    <input
                      type='email'
                      className='style2-input pl-5 form-control text-grey-900 font-xssss fw-600'
                      placeholder='Email Address'
                      name="email"
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
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <i className='font-sm ti-lock text-grey-500 pr-0'></i>
                  </div>
                  <div className='form-group icon-input mb-1'>
                    <input
                      type='Password'
                      className='style2-input pl-5 form-control text-grey-900 font-xss ls-3'
                      placeholder='Confirm Password'
                      name="confirmpassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <i className='font-sm ti-lock text-grey-500 pr-0'></i>
                  </div>
                  {error ? <p className="error">{error}</p> : ''}
                  <div className='form-check text-left mb-3'>
                    <input
                      type='checkbox'
                      className='form-check-input mt-2'
                      id='exampleCheck1'
                    />
                    <label
                      className='form-check-label font-xssss text-grey-500'
                      htmlFor='exampleCheck1'>
                      Accept Term and Conditions
                    </label>
                  </div>
                </form>

                <div className='col-sm-12 p-0 text-left'>
                  <div className='form-group mb-1'>
                    <button
                      type="submit"
                      className='form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 '
                      onClick={() => signup()}>
                      {!loading ? 'Register' : <ClipLoader color='white' size={20} />}
                    </button>
                  </div>
                  <h6 className='text-grey-500 font-xssss fw-500 mt-0 mb-0 lh-32'>
                    Already have account{" "}
                    <Link to='/login' className='fw-700 ml-1'>
                      Login
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
