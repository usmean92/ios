import React from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";

import Slider from "react-slick";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { message } from "antd";
import { useHistory } from "react-router-dom";

const popularList = [
  {
    imageUrl: "abc.svg",
    title: "Alphabet Sequence",

    tag: "Drawing Activity",
    lesson: "26 ",
    status: "alert-warning text-warning",
    link: "engcourse",
  },
  {
    imageUrl: "apoem.svg",
    title: "Poems",

    tag: "Listening Activity",
    lesson: "14 ",
    status: "alert-warning text-warning",
    link: "poems",
  },
];

const MainEnglish = () => {
  const popularSlider = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
  };

  let history = useHistory()
  var decoded = jwt_decode(Cookies.get('token'));

  return (
    <>
      <div className='main-wrapper'>
        <Navheader />

        <div className='main-content'>
          <Appheader />

          <div className='middle-sidebar-bottom theme-dark-bg'>
            <div className='middle-sidebar-left'>
              <div className='row'>
                <div className='col-lg-12 pt-4 mb-3'>
                  <h2 className='fw-400 font-lg d-block'>
                    My <b> Learning Path</b>
                  </h2>
                </div>
                <div className='col-lg-12 mt-3'>
                  <Slider {...popularSlider}>
                    {popularList.map((value, index) => (
                      <div
                        className='card course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-3 mb-4'
                        key={index}>
                        <div className='card-image w-100 mb-3'>
                          <button
                            onClick={() => decoded.subscribed ? history.push(`/${value.link}`) : message.warning('You need to subscribe to use this feature')}
                            className=' position-relative d-block border-0'>
                            <img
                              src={`assets/images/${value.imageUrl}`}
                              alt='course'
                              className='w-100'
                            />
                          </button>
                        </div>
                        <div className='card-body pt-0'>
                          <span
                            className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${value.status}`}>
                            {value.tag}
                          </span>

                          <h4 className='fw-700 font-xss mt-3 lh-28 mt-0'>
                            <Link
                              to={`/${value.link}`}
                              className='text-dark text-grey-900'>
                              {value.title}
                            </Link>
                          </h4>
                          <h6 className='font-xssss text-grey-500 fw-600 ml-0 mt-2'>
                            {value.lesson} Lesson
                          </h6>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className='middle-sidebar-right scroll-bar'>
              <div className='middle-sidebar-right-content'></div>
            </div>
          </div>
        </div>

        <Appfooter />
      </div>
    </>
  );
}

export default MainEnglish;
