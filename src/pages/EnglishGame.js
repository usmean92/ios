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

const productList = [
  {
    id: "0901",
    name: "Letter Drawing For (A)",
    imageUrl: "1.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (B)",
    imageUrl: "2.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (C)",
    imageUrl: "3.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (D)",
    imageUrl: "4.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (E) ",
    imageUrl: "5.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (F)",
    imageUrl: "6.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (G)",
    imageUrl: "7.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (H)",
    imageUrl: "8.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (I)",
    imageUrl: "9.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (J)",
    imageUrl: "10.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (K)",
    imageUrl: "11.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (L)",
    imageUrl: "12.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (M)",
    imageUrl: "13.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (N)",
    imageUrl: "14.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (O)",
    imageUrl: "15.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (P)",
    imageUrl: "16.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (Q)",
    imageUrl: "17.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (R)",
    imageUrl: "18.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (S)",
    imageUrl: "19.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (T)",
    imageUrl: "20.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (U)",
    imageUrl: "21.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (V)",
    imageUrl: "22.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (W0",
    imageUrl: "23.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (X)",
    imageUrl: "24.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (Y)",
    imageUrl: "25.png",
  },
  {
    id: "2323",
    name: "Letter Drawing For (Z)",
    imageUrl: "26.png",
  },
];

const EnglishGame = () => {
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
                      Alphabet Bubble Game
                    </h4>
                  </div>
                  <div className='card-body p-4'>
                    <div className='table-responsive'>
                      <Iframe
                        url='https://www.turtlediary.com/game/abc-puzzle.html'
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

export default EnglishGame;
