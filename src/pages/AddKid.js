import React, { useState } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import { Link, useHistory } from "react-router-dom";
import { createquiz, registerchild } from "../api/index";
import Parentheader from "../components/Parentheader";
import { ClipLoader } from 'react-spinners'
import 'antd/dist/antd.css'
import { message } from 'antd';

const AddKid = () => {
  let history = useHistory()
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [age, setAge] = useState()
  const [grade, setGrade] = useState()
  const [error, setError] = useState()
  const [child, setChild] = useState('')
  const [loading, setLoading] = useState(false)

  const registerChild = async () => {

    if (firstname && lastname && age && grade) {
      setLoading(true)
      let data = {}
      data.firstname = firstname
      data.lastname = lastname
      data.age = age
      data.grade = grade
      let response = await registerchild({ data })
      if (response.data.message === false) {
        message.error(response.data.error)
        setLoading(false)
      } else {
        let child = response.data.child._id
        let grade = response.data.child.grade
        let math, eng, urdu
        if (grade == 'pg') {
          math = 4; eng = 8; urdu = 10;
        }
        else if (grade == 'kg1') {
          math = 6; eng = 15; urdu = 18;
        }
        else if (grade === 'kg2') {
          math = 10; eng = 26; urdu = 36;
        }
        const quizes = [{ title: 'Math', items: math }, { title: 'English', items: eng }, { title: 'Urdu', items: urdu }]

        var i;
        for (i = 0; i < 3; i++) {
          await createquiz({ course: quizes[i], child })
        }
        if (i === 3) {
          setLoading(false)
          message.success('New Kid Registered')
          history.push('/mykids')
        }
      }

    } else {
      message.error('Fill all fields')
    }

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
                  <div className='card-body p-4 w-100 bg-current border-0 d-flex rounded-lg'>
                    <Link
                      to='/mykids'
                      className='d-inline-block mt-2'>
                      <i className='ti-arrow-left font-sm text-white'></i>
                    </Link>
                    <h4 className='font-xs text-white fw-600 ml-4 mb-0 mt-2'>
                      Register Kid
                    </h4>
                  </div>
                  <div className='card-body p-lg-5 p-4 w-100 border-0 '>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className='row'>
                        <div className='col-lg-6 mb-3'>
                          <div className='form-group'>
                            <label className='mont-font fw-600 font-xsss'>
                              First Name
                            </label>
                            <input type='text' className='form-control'
                              value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                          </div>
                        </div>

                        <div className='col-lg-6 mb-3'>
                          <div className='form-group'>
                            <label className='mont-font fw-600 font-xsss'>
                              Last Name
                            </label>
                            <input type='text' className='form-control'
                              value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                          </div>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-lg-6 mb-3'>
                          <div className='form-group'>
                            <label className='mont-font fw-600 font-xsss'>
                              Age
                            </label>
                            <input type='number' className='form-control'
                              value={age} onChange={(e) => setAge(e.target.value)} required />
                          </div>
                        </div>

                        <div className='col-lg-6 mb-3'>
                          <div className='form-group'>
                            <label className='mont-font fw-600 font-xsss'>
                              Grade
                            </label>
                            <select name='grade' className='form-control'
                              value={grade} onChange={(e) => setGrade(e.target.value)} required>
                              <option value='pg'>Playgroup</option>
                              <option value='kg1'>KG 1</option>
                              <option value='kg2'>KG 2</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-lg-12'>
                          <button
                            className='bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block border-0'
                            onClick={() => registerChild()}>
                            {!loading ? 'Register' : <ClipLoader size={20} color='white' />}
                          </button>
                        </div>
                      </div>
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

export default AddKid;
