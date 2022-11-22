import React, { Component, Fragment } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";

import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";
import Adminfooter from "../components/Adminfooter";
import Pagination from "../components/Pagination";

const productlList = [
  {
    id: "0901",
    name: "ا",
    imageUrl: "1.png",

    status: "alert-success text-success",
    tag: "Completed",
  },
  {
    id: "2323",
    name: "ب ",
    imageUrl: "2.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "پ",
    imageUrl: "3.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ت ",
    imageUrl: "4.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ٹ ",
    imageUrl: "5.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ث",
    imageUrl: "6.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ج",
    imageUrl: "7.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "چ",
    imageUrl: "8.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ح ",
    imageUrl: "9.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "خ",
    imageUrl: "10.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "د",
    imageUrl: "11.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ڈ",
    imageUrl: "12.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ذ ",
    imageUrl: "13.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ر",
    imageUrl: "14.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ڑ",
    imageUrl: "15.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ز",
    imageUrl: "16.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ژ",
    imageUrl: "17.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "س",
    imageUrl: "18.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ش",
    imageUrl: "19.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ص",
    imageUrl: "20.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ض",
    imageUrl: "21.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ط",
    imageUrl: "22.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ظ",
    imageUrl: "23.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },

  {
    id: "2323",
    name: "ع",
    imageUrl: "24.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "غ",
    imageUrl: "25.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ف",
    imageUrl: "26.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ق",
    imageUrl: "27.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ک",
    imageUrl: "28.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "گ",
    imageUrl: "29.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ل",
    imageUrl: "30.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "م",
    imageUrl: "31.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ن",
    imageUrl: "32.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "و",
    imageUrl: "33.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ہ",
    imageUrl: "34.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ی",
    imageUrl: "35.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
  {
    id: "2323",
    name: "ے",
    imageUrl: "36.png",
    status: "alert-warning text-warning",
    tag: "Yet to start",
  },
];

class UrduContent extends Component {
  constructor() {
    super();
    this.state = {
      location: false,
    };
  }
  handleModel() {
    this.setState({ location: !this.state.location });
  }
  render() {
    const popularSlider = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 300,
      centerMode: false,
      variableWidth: true,
    };

    return (
      <Fragment>
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
                        Urdu Lessons
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
                            {productlList.map((value, index) => (
                              <tr key={index}>
                                <td></td>
                                <td className='product-thumbnail text-start ps-0'>
                                  <a href='/#' className='small-icon'>
                                    <img
                                      src={`assets/images/urdu/${value.imageUrl}`}
                                      alt='product'
                                      className='w125 d-inline-block p-0 bg-greylight rounded-lg overflow-hidden'
                                    />
                                  </a>
                                </td>

                                <td>
                                  <b className='font-xxl pl-3 '>{value.name}</b>
                                </td>

                                <td></td>
                                <td>
                                  <span
                                    className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 d-inline-block mr-1 ${value.status}`}>
                                    {value.tag}
                                  </span>
                                </td>
                                <td></td>
                                <td className='product-remove text-right'>
                                  <a href='/#'>
                                    <i className='feather-play mr-1 font-xs text-grey-500'></i>
                                    Start
                                  </a>
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
                            ))}
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
      </Fragment>
    );
  }
}

export default UrduContent;
