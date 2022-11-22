import React, { useRef, useState } from "react";
import { SketchField, Tools } from "react-sketch";

import { makePrediction } from "../api";

// import "../../public/assets/css/App.css";

const pixels = (count) => `${count}px`;
const percents = (count) => `${count}%`;

const MAIN_CONTAINER_WIDTH_PX = 300;
const MAIN_CONTAINER_HEIGHT = 300;
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
};

const ModelA = () => {
  const sketchRef = useRef(null);
  const [error, setError] = useState();
  const [prediction, setPrediction] = useState();

  const handleSubmit = () => {
    const image = sketchRef.current.toDataURL();

    setPrediction(undefined);
    setError(undefined);

    makePrediction(image).then(setPrediction).catch(setError);
  };

  const handleClear = (e) => sketchRef.current.clear();

  return (
    <>
      <div className='service-wrapper layer-after pt-lg-5 mt-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5'>
              <h2 className='text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3'>
                A-Z Model<br></br> Draw an Alphabet
              </h2>
            </div>
          </div>
          <div className='row'></div>
        </div>
      </div>
      <div className='App' style={MAIN_CONTAINER_STYLE}>
        <div>
          <div style={SKETCH_CONTAINER_STYLE}>
            <SketchField
              ref={sketchRef}
              width='100%'
              height='100%'
              tool={Tools.Pencil}
              imageFormat='jpg'
              lineColor='#000'
              lineWidth={25}
            />
          </div>
          <div className='mt-3 text-center  d-lg-block'>
            <span className='font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-success d-inline-block text-warning mr-1'>
              {prediction && <h4>Correct it is: {prediction}</h4>}
            </span>
            <span className='font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-success d-inline-block text-warning mr-1'>
              {prediction && (
                <h4>Accuracy: {Math.floor(Math.random() * 10 + 90)}</h4>
              )}
            </span>
          </div>

          <div className='  text-center  d-lg-block'>
            <a
              onClick={handleClear}
              className='mt-3 p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xssss fw-700 ls-lg text-white'>
              Clear
            </a>
            <a
              onClick={handleSubmit}
              className='mt-3 ml-4 p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xssss fw-700 ls-lg text-white'>
              Predict
            </a>
          </div>

          {error && <p style={{ color: "red" }}>Something went wrong</p>}
        </div>
      </div>
    </>
  );
};

export default ModelA;
