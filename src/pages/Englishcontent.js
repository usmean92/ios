import React, { useState, useEffect } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";

import { Link } from "react-router-dom";
import { getCourseQuiz } from "../helpers/quiz";
import { ClipLoader } from "react-spinners";

import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";
import Adminfooter from "../components/Adminfooter";
import Pagination from "../components/Pagination";

const unattempted = "alert-warning text-warning"
const completed = "alert-success text-success"


const productlList = [
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

const EnglishContent = () => {
  const [location, setLocation] = useState(false)
  const [loading, setLoading] = useState(false)

  const [quizes, setQuizes] = useState([])
  const handleModel = () => {
    setLocation(!location)
  }

  useEffect(async () => {
    await getCourseQuiz({ setQuizes, title: 'English', setLoading })
  }, [])

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
                      English Lessons
                    </h4>
                  </div>
                  <div className='card-body p-4'>
                    <div className='table-responsive'>
                      <table className='table table-admin mb-0'>
                        <thead className='bg-greylight rounded-10 ovh'>
                          <tr>
                            <th className='border-0'></th>
                            <th className='border-0'></th>
                            <th className='border-0' scope='col'>
                              Name
                            </th>
                            <th className='border-0' scope='col'></th>
                            <th className='border-0' scope='col'>
                              Status
                            </th>
                            <th className='border-0' scope='col'></th>
                            <th scope='col' className='text-right border-0'>
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {!loading ? quizes.length !== 0 &&
                            productlList.map((value, index) => (
                              <tr key={index}>
                                <td></td>
                                <td className='product-thumbnail text-start ps-0'>
                                  <a href='/#' className=' small-icon'>
                                    <img
                                      src={`assets/images/eng/${value.imageUrl}`}
                                      alt='product'
                                      className='w125 d-inline-block p-0 bg-greylight rounded-lg overflow-hidden'
                                    />
                                  </a>
                                </td>

                                <td>
                                  <b>{value.name}</b>
                                </td>

                                <td></td>
                                <td>
                                  <span
                                    className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${quizes.status !== 'unattemped' ? unattempted : completed}`}>
                                    {quizes.status[index]}
                                  </span>
                                </td>
                                <td></td>
                                <td className='product-remove text-right'>
                                  {quizes.status[index] === 'unattemped' ?
                                    <Link to={{ pathname: '/video-player', state: { course: 'English', content: 'Alphabet', number: value.name[value.name.indexOf('(') + 1] } }} >
                                      <i className='feather-play mr-1 font-xs text-grey-500'></i>
                                      Start
                                    </Link>
                                    :
                                    <Link to={{ pathname: '/video-player', state: { course: 'Math', content: 'Alphabet', number: value.name[value.name.indexOf('(') + 1] } }} >
                                      <i className='feather-play mr-1 font-xs text-grey-500'></i>
                                      View
                                    </Link>}
                                  {/* <Button
                                    className='bg-transparent border-0'
                                    onClick={() => {
                                      this.handleModel();
                                    }}>
                                    <i className='ti-trash  font-xs text-danger'></i>
                                  </Button> */}
                                  {/* <Modal
                                    {...this.props}
                                    size='sm'
                                    aria-labelledby='contained-modal-title-vcenter'
                                    centered
                                    show={this.state.location}>
                                    <Button
                                      onClick={() => {
                                        this.handleModel();
                                      }}
                                      className='btn-close z-index-5 posa right-0 top-0 mt-3 me-3 font-xss'></Button>
                                    <Modal.Body className='text-center p-4'>
                                      <i className='ti-info-alt text-warning display4-size'></i>
                                      <p className='text-grey-500 font-xsss mt-3 mb-4'>
                                        Are you sure you want to delete product?
                                      </p>

                                      <Button
                                        onClick={() => {
                                          this.handleModel();
                                        }}
                                        className='border-0 btn rounded-6 lh-2 p-3 mt-0 mb-2 text-white bg-danger font-xssss text-uppercase fw-600 ls-3'>
                                        Yes, delete!
                                      </Button>
                                      <Button
                                        onClick={() => {
                                          this.handleModel();
                                        }}
                                        className='border-0 btn rounded-6 lh-2 p-3 mt-0 mb-2 text-grey-600 bg-greylight font-xssss text-uppercase fw-600 ls-3 ms-1'>
                                        No, cancle!
                                      </Button>
                                    </Modal.Body>
                                  </Modal> */}
                                </td>
                              </tr>
                            )) :
                            <ClipLoader size={20} />
                          }
                        </tbody>
                      </table>
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
}

export default EnglishContent;

