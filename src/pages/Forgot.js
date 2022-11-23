import React, { useState } from 'react';
import { forgotPassword } from '../helpers/user';
import { ClipLoader } from 'react-spinners';
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'
import { message } from 'antd';

const Forgot = () => {
  let history = useHistory()
  const [resetCode, setResetCode] = useState(null)
  const [email, setEmail] = useState('')
  const [digitCode, setDigitCode] = useState('')
  const [loading, setLoading] = useState(false)

  const send_mail = async () => {
    let response = await forgotPassword({ email, setLoading, setResetCode })
  }

  const check_code = () => {
    if (resetCode == digitCode) {
      history.push('/reset-password', { email })
    } else {
      message.error('Invalid Reset Code')
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
                  {resetCode === null ? 'Forgot Password?' : 'Reset Password'}
                </h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  {resetCode === null ? (<div className="form-group icon-input mb-3">
                    <input
                      type="email"
                      className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                  </div>)
                    :
                    <>
                      <div className='form-group icon-input mb-1'>
                        <input
                          type='text'
                          className='style2-input pl-5 form-control text-grey-900 font-xssss ls-3'
                          placeholder='Digit Code'
                          name="resetcode"
                          value={digitCode}
                          onChange={(e) => setDigitCode(e.target.value)}
                          required
                        />
                        <i className='font-sm ti-lock text-grey-500 pr-0'></i>
                      </div>
                    </>}

                  <div className="col-sm-12 p-0 text-left">
                    <div className="form-group mb-1">
                      {resetCode === null ?
                        <button
                          type="submit"
                          className='form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 '
                          onClick={() => send_mail()}>
                          {!loading ? 'Send Reset Code' : <ClipLoader color='white' size={20} />}
                        </button>
                        :
                        <button
                          type="submit"
                          className='form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 '
                          onClick={() => check_code()}>
                          {!loading ? 'Submit' : <ClipLoader color='white' size={20} />}
                        </button>}
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

export default Forgot;
