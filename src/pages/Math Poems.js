import React, { useEffect, useState } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";
import { getPoems } from "../helpers/child";
import { ClipLoader } from "react-spinners";
import { useHistory, NavLink } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { message } from "antd";

const channelList = [
  {
    imageUrl: "stories.webp",
    title: "Chu Chu",

    tag1: "Maths",
    tag2: "",
    tag3: "2 MIN",
  },

  {
    imageUrl: "stories.webp",
    title: "Buckle My Shoe",

    tag1: "Maths",
    tag2: "",
    tag3: "21 HOUR",
  },
  {
    imageUrl: "star.png",
    title: "Numbers",

    tag1: "Maths",
    tag2: "",
    tag3: "5 MIN",
  },
  {
    imageUrl: "poem.svg",
    title: "Shapes",

    tag1: "Maths",
    tag2: "",
    tag3: "5 MIN",
  },
];

const MathPoems = () => {
  // const [poems, setPoems] = useState([])
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const poems = [
    "https://www.youtube.com/embed/2SZE6M69iHQ",
    "https://www.youtube.com/embed/eMhsvYHhTNQ",
    "https://www.youtube.com/embed/fHqjNHxmB7c",
    "https://www.youtube.com/embed/uaUnTxoF4hU"
  ]
  // let history = useHistory()

  // var decoded = jwt_decode(Cookies.get('token'));
  // useEffect(async () => {
  //   let response2 = await getPoems({ setPoems, setLoading })
  // }, [])

  return (
    <>
      <div className='main-wrapper'>
        <Navheader />

        <div className='main-content'>
          <Appheader />

          <div className='middle-sidebar-bottom theme-dark-bg'>
            <div className='middle-sidebar-left'>
              <div className='row'>
                {loading ? (
                  <ClipLoader />
                ) : (
                  channelList.map((value, index) => (
                    <div className='col-xl-4 col-lg-6 col-md-6' key={index}>
                      <div className='card mb-4 d-block w-100 shadow-xss rounded-lg p-xxl-5 p-4 border-0 text-center'>
                        <a
                          href='/default-channel'
                          className='position-absolute right-0 mr-4 top-0 mt-3'>
                          <i className='ti-more text-grey-500 font-xs'></i>
                        </a>
                        <a
                          href='/default-channel'
                          className='btn-round-xxxl rounded-lg bg-lightblue ml-auto mr-auto'>
                          <img
                            src={`assets/images/${value.imageUrl}`}
                            alt='icon'
                            className='p-1 w-100'
                          />
                        </a>
                        <h4 className='fw-700 font-xs mt-4'>{value.title}</h4>
                        <p className='fw-500 font-xssss text-grey-500 mt-3'>
                          {value.des}
                        </p>
                        <div className='clearfix'></div>
                        {value.tag1 ? (
                          <span className='font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mb-1 mr-1'>
                            {value.tag1}
                          </span>
                        ) : (
                          ""
                        )}
                        {value.tag2 ? (
                          <span className='font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 bg-lightblue d-inline-block text-grey-800 mb-1 mr-1'>
                            {value.tag2}
                          </span>
                        ) : (
                          ""
                        )}

                        <div className='clearfix'></div>

                        <NavLink
                          to={{
                            pathname: "/play-poem",
                            state: { title: value.title, poem: poems[index] },
                          }}
                          className='p-2 mt-4 d-inline-block border-0 text-white fw-700 lh-30 rounded-lg w200 text-center text-uppercase font-xsssss ls-3 bg-current'
                          onClick={() =>
                             history.push({
                                  pathname: "/play-poem",
                                  state: {
                                    title: value.title,
                                    poem: poems[index],
                                  },
                                })
                          }>
                          Play
                        </NavLink>

                        {/* <Link
                          to={{ pathname: '/play-poem', state: { title: value.title, poem: poems[index] } }}
                          className='p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current'>
                          PLAY
                        </Link> */}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <Appfooter />
      </div>
    </>
  );
};

export default MathPoems;
