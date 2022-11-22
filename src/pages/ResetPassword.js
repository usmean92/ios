import React, { useState } from 'react';
import { resetPassword } from '../helpers/user';
import { ClipLoader } from 'react-spinners';
import { useLocation, useHistory } from 'react-router-dom';
import { message } from 'antd';

const ResetPassword = () => {
  let history = useHistory()
  let location = useLocation()
  const { email } = location.state
  console.log('email: ', location.state)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const reset_password = async () => {
    console.log(password, confirmPassword)
    if (password === confirmPassword) {
      setError('')
      console.log('fff')
      await resetPassword({ email, password, setLoading })
        .then((res) => {
          history.push('/login')
        })
    } else {
      setError('Both password should match')
    }

  }
  return (
    <>
      <div className="main-wrap">
        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{
              backgroundImage: `url("assets/images/signup-bg.webp")`,
            }}
          ></div>

          <div className="col-xl-7 vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
            <div className="card shadow-none border-0 ml-auto mr-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-4">
                  Reset Password
                </h2>
                <form onSubmit={(e) => e.preventDefault()}>
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


                  <div className="col-sm-12 p-0 text-left">
                    <div className="form-group mb-1">

                      <button
                        type="submit"
                        className='form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 '
                        onClick={() => reset_password()}>
                        {!loading ? 'Change Password' : <ClipLoader color='white' size={20} />}
                      </button>

                    </div>
                  </div>
                </form>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
