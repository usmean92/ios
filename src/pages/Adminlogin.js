import React, { useState, useContext } from "react";
import AuthContext from "../context/Auth";
import { login } from "../helpers/user";
import { Link, useHistory } from "react-router-dom";
import { ClipLoader } from 'react-spinners'
import Cookies from "js-cookie";
import { adminlogin } from "../api";
import { message } from "antd";

const AdminLogin = () => {
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { admin, setAdmin } = useContext(AuthContext)

  const signin = async () => {
    setLoading(true)
    await adminlogin({ email, password })
      .then((response) => {
        try {
          if (response.data.message == false) {
            message.error(response.data.error)
          } else {
            // Cookies.remove('token')
            Cookies.set('admintoken', response.data.token)
            Cookies.set('role', 'admin')
            setAdmin(response.data.admin)
            history.push('/admin')
          }
        } catch (err) {
          message.error(err.message)
        }
        finally {
          setLoading(false)
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
                  Admin Login
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
