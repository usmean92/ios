import React, { useState, useEffect, useContext } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import AuthContext from "../context/Auth";
import { TbDots } from 'react-icons/tb'
import { HiOutlineTrash } from 'react-icons/hi'
import { useHistory } from "react-router-dom";
import Parentheader from "../components/Parentheader";
import { getChildren, childDelete } from "../helpers/child";
import '../css/parent.css'

const MyKids = () => {
  let history = useHistory()
  const [children, setChildren] = useState([])
  const [loading, setLoading] = useState(false)
  const [check, setCheck] = useState(false)
  const [error, setError] = useState('')
  const { setChildCount, setCurrentChild } = useContext(AuthContext)

  useEffect(() => {
    let response = getChildren({ setChildren, setLoading, setError, setChildCount })
  }, [check])
  return (
    <>
      <div className='main-wrapper'>
        <Navheader />

        <div className='main-content'>
          <Parentheader />


          <div className='middle-sidebar-bottom'>
            <div className='middle-sidebar-left'>
              <h2 className="container text-center mb-4 fw-bolder text-uppercase">Registered Childs</h2>
              <div className='row'>
                {children.length === 0 ? <h3 className='container txt-light mt-5'>{error}</h3> :
                  children.map((value, index) => (
                    <div
                      key={index}
                      className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                      <div className='card mb-4 d-block w-100 shadow-xss rounded-lg p-4 border-0 text-center'>
                        <button
                          className='btn btn-danger border-0 position-absolute right-0 mr-2 top-0 mt-2'
                          style={{ backgroundColor: 'transparent' }}
                          onClick={() => childDelete({ childId: value._id, setCheck, check })}
                        >
                          <HiOutlineTrash color='rgb(237, 76, 76)' size={20} />
                        </button>


                        <div
                          className='ml-auto mr-auto rounded-lg overflow-hidden d-inline-block'>
                          <div className="child-image-container">
                            <h3 className="text-uppercase">{value.firstname[0]}</h3>
                          </div>
                          <p className="txt-light mt-2">{value.firstname} {value.lastname}</p>

                        </div>
                        <h4 className='fw-700 font-xs mt-3 mb-1'>
                          {value.name}{" "}
                        </h4>

                        <div className='clearfix'></div>
                        <span className='font-xssss fw-600 text-grey-500 d-inline-block ml-1'>
                          Enlish
                        </span>
                        <span className='dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey'></span>
                        <span className='font-xssss fw-600 text-grey-500 d-inline-block ml-1'>
                          Urdu
                        </span>
                        <span className='dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey'></span>
                        <span className='font-xssss fw-600 text-grey-500 d-inline-block ml-1'>
                          Maths
                        </span>

                        <ul className='list-inline border-0 mt-4'></ul>
                        <button
                          onClick={() => {
                            setCurrentChild(value._id)
                            history.push('/maths')
                          }}
                          className='mt-3 p-0 btn p-2 lh-24 w-100 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white'>
                          Dashboard
                        </button>

                      </div>
                    </div>
                  ))}
              </div>

              {/* {poems && poems.map((poem, index) => (
                <iframe width="560" height="315" src={poem}
                  title="Twinkle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
              ))} */}

            </div>
          </div>
        </div>

        <Appfooter />
      </div>
    </>
  );
}

export default MyKids;
