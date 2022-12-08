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
    imageUrl: "alphabet.png",
    name: "Alphabet Bubbles",
    url: "enggame",
  },
  {
    imageUrl: "poems.png",
    name: "Color by letter",
    url: "enggame2",
  },
  {
    imageUrl: "123.svg",
    name: "Color By Number",
    url: "mathgame",
  },
  {
    imageUrl: "urdu2.jpg",
    name: "Missing Number",
    url: "mathgame2",
  },
  {
    imageUrl: "apoem.svg",
    name: "Identify the shapes",
    url: "mathgame3",
  },
  {
    imageUrl: "stories.webp",
    name: "Number Macthing",
    url: "mathgame4",
  },
  {
    imageUrl: "abc.png",
    name: "Animal Crossword",
    url: "enggame3",
  },
  {
    imageUrl: "agame.png",
    name: "Connect ABC",
    url: "enggame4",
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
                      <NavLink
                        to={`/${value.url}`}
                        className='p-2 mt-4 d-inline-block border-0 text-white fw-700 lh-30 rounded-lg w200 text-center text-uppercase font-xsssss ls-3 bg-current'
                      >
                        Play
                      </NavLink>


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
