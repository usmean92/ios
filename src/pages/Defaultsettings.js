import React, { useState, useEffect } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";
import Profile from "../components/Profile";
import Myclass from "../components/Myclass";
import Subscribe from "../components/Subscribe";
import { Link } from "react-router-dom";
import Parentheader from "../components/Parentheader";
import { ClipLoader } from "react-spinners";
import { BsPencil } from 'react-icons/bs'
import { getparentdetails } from "../api";
import { getDetails, updateParentProfile } from "../helpers/user";

const Defaultsettings = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [check, setCheck] = useState(true)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState()


  useEffect(async () => {
    await getDetails({ setName, setEmail, setPassword })
  }, [])

  const updateProfile = async () => {
    let data = {
      name,
      password
    }
    await updateParentProfile({ setLoading, data, setName, setPassword, setCheck })
  }

  return (
    <>
      <div className='main-wrapper'>
        <Navheader />
        <div className='main-content'>
          <Parentheader />

          <div className='middle-sidebar-bottom bg-lightblue theme-dark-bg'>
            <div className='middle-sidebar-left'>
              <div className='middle-wrap'>
                <div className='card w-100 border-0 bg-white shadow-xs p-0 mb-4'>
                  <div className='card-body p-4 w-100 bg-current border-0 d-flex rounded-lg d-flex justify-content-between'>
                    <div className="d-flex">
                      <Link
                        to='/mykids'
                        className='d-inline-block mt-2'>
                        <i className='ti-arrow-left font-sm text-white'></i>
                      </Link>
                      <h4 className='font-xs text-white fw-600 ml-4 mb-0 mt-2'>
                        Profile
                      </h4>
                    </div>

                    <div className="d-flex justify-content-end">
                      <button className="btn btn-primary" onClick={() => setCheck(!check)} ><BsPencil size={20} /></button>

                    </div>
                  </div>
                  <div className='card-body p-lg-5 p-4 w-100 border-0 '>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className='row'>
                        <div className='col-lg-6 mb-3'>
                          <div className='form-group'>
                            <label className='mont-font fw-600 font-xsss'>
                              Name
                            </label>
                            <input type='text' className='form-control'
                              value={name} onChange={(e) => setName(e.target.value)} required
                              readOnly={check}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-lg-6 mb-3'>
                          <div className='form-group'>
                            <label className='mont-font fw-600 font-xsss'>
                              Email
                            </label>
                            <input type='email' className='form-control'
                              value='nabiha@gmail.com'
                              readOnly
                            />
                          </div>
                        </div>

                        <div className='col-lg-6 mb-3'>
                          <div className='form-group'>
                            <label className='mont-font fw-600 font-xsss'>
                              password
                            </label>
                            <input type='password' className='form-control'
                              value={password} onChange={(e) => setPassword(e.target.value)}
                              readOnly={check}
                            />

                          </div>
                        </div>
                      </div>

                      {!check && (
                        <div className='row'>
                          <div className='col-lg-12'>
                            <button
                              className='bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block border-0'
                              onClick={() => updateProfile()}
                            >
                              {!loading ? 'Update' : <ClipLoader size={20} color='white' />}
                            </button>
                          </div>
                        </div>
                      )}

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Appfooter />
      </div>
    </>
  );
}

export default Defaultsettings;
