import React, { useState, useEffect, useContext } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import AuthContext from "../context/Auth";
import { useHistory } from "react-router-dom";
import Parentheader from "../components/Parentheader";
import { getChildren } from "../helpers/child";
import '../css/parent.css'

const memberList = [
  {
    imageUrl: "user.png",
    name: "Aliqa khan",
    email: "support@gmail.com",
    Connections: "500+",
    Follower: "80 M",
    Followings: "1,334",
  },
  {
    imageUrl: "user.png",
    name: "Usman Mh",
    email: "support@gmail.com",
    Connections: "22 M",
    Follower: "822 k",
    Followings: "1,334",
  },
  {
    imageUrl: "user.png",
    name: "Mohannad Omer",
    email: "support@gmail.com",
    Connections: "45 k",
    Follower: "88.7 k",
    Followings: "4,532 ",
  },
  {
    imageUrl: "user.png",
    name: "Bilal Nasir",
    email: "support@gmail.com",
    Connections: "500+",
    Follower: "88.7 k",
    Followings: "1,334",
  },
  {
    imageUrl: "user.png",
    name: "Issa Khan",
    email: "support@gmail.com",
    Connections: "500+",
    Follower: "88.7 k",
    Followings: "1,334",
  },
  {
    imageUrl: "user.png",
    name: "Ayesha Nasir",
    email: "support@gmail.com",
    Connections: "500+",
    Follower: "88.7 k",
    Followings: "1,334",
  },
];

const MyKids = () => {

  let history = useHistory()
  const [children, setChildren] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { setChildCount, setCurrentChild } = useContext(AuthContext)

  useEffect(() => {
    let response = getChildren({ setChildren, setLoading, setError, setChildCount })
  }, [])
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
                        <a
                          href='/#'
                          className='position-absolute right-0 mr-4 top-0 mt-3'>
                          <i className='ti-more text-grey-500 font-xs'></i>
                        </a>
                        <a
                          href='/#'
                          className='ml-auto mr-auto rounded-lg overflow-hidden d-inline-block'>
                          <div className="child-image-container">
                            <h3 className="text-uppercase">{value.firstname[0]}</h3>
                          </div>
                          <p className="txt-light mt-2">{value.firstname} {value.lastname}</p>
                          {/* <img
                            src={`assets/images/${value.imageUrl}`}
                            alt='avater'
                            className='p-0 w100 shadow-xss'
                          /> */}
                        </a>
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
            </div>
          </div>
        </div>

        <Appfooter />
      </div>
    </>
  );
}

export default MyKids;
