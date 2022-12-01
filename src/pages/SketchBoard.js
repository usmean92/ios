import React, { useRef, useState } from "react";
import { SketchField, Tools } from "react-sketch";
import { AiOutlineCheck } from 'react-icons/ai'
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
  const [prediction, setPrediction] = useState();
  const { answer, course, index, qid } = location.state;

  const handleSubmit = () => {
    const port = course === 'Math' ? '5000' : course == 'English' ? '5001' : '5002'
    const image = sketchRef.current.toDataURL();

    setPrediction(undefined);
    setError(undefined);
    makePrediction(image, port).then(setPrediction).catch(setError);
  };

  const handleClear = (e) => sketchRef.current.clear();

  const compute = async () => {
    if (!prediction) {
      message.error("Press 'Check' button first")
    }
    else {
      if (answer === prediction) {
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
        {prediction && <h3 className="mt-3">Your answer is: {prediction}</h3>}
        <div className="d-flex">
          <div className='button-container'>
            <button id='button' className='sketchbutton' onClick={handleClear}>
              Clear
            </button>
          </div>
          <div className='button-container'>
            <button id='button' className='sketchbutton predict' onClick={handleSubmit}>
              Check
            </button>
          </div>
          <div className='button-container'>
            <button id='button' className='btn btn-success' onClick={() => compute()}>
              <AiOutlineCheck color='white' />
            </button>
          </div>
        </div>

        {error && <p style={{ color: "red" }}>Something went wrong</p>}
      </div>
    </div>
  );
};

export default SketchBoard;
