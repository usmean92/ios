import React from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";
import { NavLink, useHistory } from "react-router-dom";
import { message } from "antd";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";


const memberList = [
  {
    imageUrl: "apoem.svg",
    name: "Reading words",
    email: "support@gmail.com",
    Connections: "500+",
    Follower: "80 M",
    Followings: "1,334",
  },
  {
    imageUrl: "abc.png",
    name: "Color games",
    email: "support@gmail.com",
    Connections: "22 M",
    Follower: "822 k",
    Followings: "1,334",
  },
  {
    imageUrl: "123.svg",
    name: "Math Letters",
    email: "support@gmail.com",
    Connections: "45 k",
    Follower: "88.7 k",
    Followings: "4,532 ",
  },
  {
    imageUrl: "urdu2.jpg",
    name: "Urdu Sounds",
    email: "support@gmail.com",
    Connections: "500+",
    Follower: "88.7 k",
    Followings: "1,334",
  },
];

const Games = () => {
  var decoded = jwt_decode(Cookies.get('token'));
  let history = useHistory()

  return (
    <>
      <div className='main-wrapper'>
        <Navheader />

        <div className='main-content'>
          <Appheader />

          <div className='middle-sidebar-bottom'>
            <div className='middle-sidebar-left'>
              <div className='row'>
                {memberList.map((value, index) => (
                  <div
                    key={index}
                    className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                    <div className='card mb-4 d-block w-100 shadow-xss rounded-lg p-4 border-0 text-center'>
                      <a
                        href='/default-follower'
                        className='position-absolute right-0 mr-4 top-0 mt-3'>
                        <i className='ti-more text-grey-500 font-xs'></i>
                      </a>
                      <a
                        href='/default-follower'
                        className='ml-auto mr-auto rounded-lg overflow-hidden d-inline-block'>
                        <img
                          src={`assets/images/${value.imageUrl}`}
                          alt='avater'
                          className='p-0 w100 shadow-xss'
                        />
                      </a>
                      <h4 className='fw-700 font-xs mt-3 mb-1'>
                        {value.name}{" "}
                        <i className='ti-check font-xssss btn-round-xs bg-success text-white ml-1'></i>
                      </h4>

                      <div className='clearfix'></div>
                      <button
                        className='p-2 mt-4 d-inline-block border-0 text-white fw-700 lh-30 rounded-lg w200 text-center text-uppercase font-xsssss ls-3 bg-current'
                        onClick={() => decoded.subscribed ? history.push({ pathname: '/enggame', state: {} }) : message.warning('You need to subscribe to use this feature')}
                      >
                        Play
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

export default Games;
