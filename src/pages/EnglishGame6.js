import React, { useState, useEffect, useContext } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { getCourseQuiz } from "../helpers/quiz";
import { ClipLoader } from "react-spinners";
import AuthContext from "../context/Auth";
import Iframe from "react-iframe";

const EnglishGame6 = () => {
  const [location, setLocation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);

  let { currentChild, user, setCurrentChild } = useContext(AuthContext);

  const [quizes, setQuizes] = useState([]);

  useEffect(async () => {
    if (currentChild === undefined) {
      setCurrentChild(Cookies.get("currentChild"));
      setCheck(!check);
    }
    await getCourseQuiz({
      childId: currentChild,
      setQuizes,
      title: "English",
      setLoading,
    });
  }, [check]);

  const popularSlider = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
  };

  return (
    <>
      <div className='main-wrapper'>
        <Navheader />

        <div className='main-content'>
          <Appheader />

          <div className='container px-3 py-4'>
            <div className='row'>
              <div className='col-lg-12 mt-4'>
                <div className='card border-0 mt-2 rounded-10'>
                  <div className='card-body d-flex px-4 pb-0 pt-4'>
                    <h4 className='font-xss text-grey-800 mt-3 fw-700'>
                      Alphabet Memory
                    </h4>
                  </div>
                  <div className='card-body p-4'>
                    <div className='table-responsive'>
                      <Iframe
                        url='https://www.turtlediary.com/game/alphabet-memory.html'
                        width='1000px'
                        height='790'
                        id=''
                        className=''
                        display='block'
                        position='relative'
                        scrolling='no'
                        styles={{ marginTop: "-170px" }}
                      />
                    </div>
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
};

export default EnglishGame6;
