import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footertwo from "../components/Footertwo";

const grades = [
  {
    title: "Pre-K",
    des: "Grade",
  },
  {
    title: "K-1",
    des: "Grade",
  },
  {
    title: "K-2",
    des: "Grade",
  },
];

class GradeSelection extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <div className='banner-wrapper bg-lightblue-after vh-100'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8 text-center pt-lg--10 pt-7'>
                <h2 className='fw-700 text-grey-900 display4-size display4-xs-size lh-1 mb-3 pt-5 aos-init aos-animate'>
                  What grade is your child in?
                </h2>
                <p className='fw-300 font-xsss lh-28 text-black-500 pl-lg--5 pr-lg--5 aos-init aos-animate'>
                  You can always change this in Settings later
                </p>
              </div>
            </div>
            <div className='service-wrapper layer-after'>
              <div className='container'>
                <div className='row'>
                  {grades.map((value, index) => (
                    <div className='col-lg-4' key={index}>
                      <div className='card w-100 border-0 p-4 text-center d-block shadow-xss rounded-xxl'>
                        <div className='card-image p-3 bg-lightblue rounded-xxl'>
                          <h2 className='font-md fw-700 text-grey-900 mt-1 mb-0'>
                            {value.title}
                          </h2>
                        </div>

                        <p className='fw-300 font-xssss lh-28 text-grey-500 p-2'>
                          {value.des}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GradeSelection;
