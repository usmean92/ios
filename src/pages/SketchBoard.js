import React, { useRef, useState, useContext } from "react";
import AuthContext from "../context/Auth";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { SketchField, Tools } from "react-sketch";
import { makePrediction, updatequiz } from "../api/index";
import 'antd/dist/antd.css'
import { message } from 'antd';
import { useLocation, useHistory } from "react-router-dom";
import '../css/sketchboard.css'

const logo = '/logo.png'
const pixels = (count) => `${count}px`;
const percents = (count) => `${count}%`;

const MAIN_CONTAINER_WIDTH_PX = 400;
const MAIN_CONTAINER_HEIGHT = 400;
const MAIN_CONTAINER_STYLE = {
  width: pixels(MAIN_CONTAINER_WIDTH_PX),
  height: percents(MAIN_CONTAINER_HEIGHT),
  margin: "0 auto",
};

const SKETCH_CONTAINER_STYLE = {
  border: "1px solid black",
  width: pixels(MAIN_CONTAINER_WIDTH_PX - 2),
  height: pixels(MAIN_CONTAINER_WIDTH_PX - 2),
  backgroundColor: "white",
  marginTop: 40
};

const SketchBoard = () => {
  let location = useLocation()
  let history = useHistory()
  const sketchRef = useRef(null);
  const [error, setError] = useState();
  const { answer, course, index, qid } = location.state;
  const { user, setUser } = useContext(AuthContext)
  let currentUser = user

  if (currentUser.length === undefined) {
    var decoded = jwt_decode(Cookies.get('token'));
    currentUser._id = decoded.id
    currentUser.name = decoded.name
    setUser(currentUser)
  }

  const handleSubmit = async () => {
    const port = course === 'Math' ? '5000' : course == 'English' ? '5001' : '5002'
    const image = sketchRef.current.toDataURL();
    setError(undefined);
    await makePrediction(image, port).then(res => {
      compute(res)
    }).catch(setError);
  };

  const handleClear = (e) => sketchRef.current.clear();

  const compute = async (predicted) => {
    if (!predicted) {
      message.error("Press 'Check' button first")
    }
    else {
      if (answer === predicted) {
        let response = await updatequiz(qid, { index })
        if (response.data.message) {
          message.success('Correct Answer')
          history.goBack()
          history.goBack()
        } else {
          message.error(response.data.error)
        }

      } else {
        message.error('Wrong Answer. Try again!')
        history.goBack()

      }
    }

  }

  return (
    <div className='App' style={MAIN_CONTAINER_STYLE}>
      <div>
        <header className='header'>
          <img src={logo} className='logo' alt='logo' />
          <h1 className='title'>Draw a digit</h1>
        </header>
        <div style={SKETCH_CONTAINER_STYLE}>
          <SketchField
            ref={sketchRef}
            width='100%'
            height='100%'
            tool={Tools.Pencil}
            imageFormat='jpg'
            lineColor='#111'
            lineWidth={10}
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className='button-container'>
            <button id='button' className='sketchbutton' onClick={handleClear}>
              Clear
            </button>
          </div>
          <div className='button-container'>
            <button id='button' className='sketchbutton predict' onClick={() => handleSubmit()}>
              Check
            </button>
          </div>

        </div>

        {error && <p style={{ color: "red" }}>Something went wrong</p>}
      </div>
    </div>
  );
};

export default SketchBoard;
