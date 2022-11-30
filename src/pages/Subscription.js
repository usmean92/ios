import React, { useState, useEffect } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import { BsCheck } from 'react-icons/bs'
import { useHistory } from "react-router-dom";
import { BiDollarCircle } from 'react-icons/bi'
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";



import Parentheader from "../components/Parentheader";
import { getSubscribed } from "../helpers/user";

const Subscription = () => {
  const decoded = jwt_decode(Cookies.get('token'));
  console.log('decode: ', decoded)

  return (
    <>
      <div className='main-wrapper'>
        <Navheader />

        <div className='main-content'>
          <Parentheader />
          <div
            className='col-xl-4 col-lg-6 col-md-6 col-sm-6 mt-7' style={{ margin: 'auto' }}>
            <div className='card mb-4 d-block w-100 shadow-xss rounded-lg p-4 border-0 text-center'>
              <div
                className='ml-auto mr-auto rounded-lg overflow-hidden d-inline-block'>
                <BiDollarCircle size={90} color='#D9BB26' />

                <h4 className='fw-700 font-xs mt-3 mb-1'>
                  Subscription
                </h4>
                <p className="txt-light mt-2">Subscribe to our prenium package to get access to our poems section</p>

              </div>

              <ul className='list-inline border-0 mt-4'></ul>
              {console.log('ff:', decoded.subscribed)}
              <button
                onClick={() => getSubscribed()}
                disabled={decoded.subscribed}
                className='p-0 btn p-2 lh-24 w-100 ml-1 ls-3 d-inline-block rounded-xl font-xsssss fw-700 ls-lg text-white'
                style={{ backgroundColor: decoded.subscribed ? '#289968' : '#D9BB26' }}>
                {decoded.subscribed ? <BsCheck color='white' size={25} /> : 'Subscribe'}
              </button>

            </div>
          </div>
        </div>
        <Appfooter />
      </div>
    </>
  );
}


export default Subscription;
