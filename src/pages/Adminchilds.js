import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Adminsidebar from '../components/Adminsidebar';
import AdminTopnav from '../components/AdminTopnav';
import Adminfooter from '../components/Adminfooter';
import Pagination from '../components/Pagination';
import { ClipLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';
import Time from 'react-time-format'
import { getChildren, getParents } from '../helpers/admin';
import { deletechild } from '../api';
import { convertNeSwToNwSe } from 'google-map-react';

const AdminChild = (props) => {
  let locationState = useLocation()
  const [location, setLocation] = useState(false)
  const [loading, setLoading] = useState(false)
  const [check, setCheck] = useState(false)
  const [children, setChildren] = useState([])
  const [current, setCurrent] = useState()
  const { pid } = locationState.state

  useEffect(async () => {
    await getChildren({ pid, setChildren, setLoading })
  }, [check])

  const handleModel = (parentId) => {
    setLocation(!location)
    setCurrent(parentId)
  }

  const deleteChild = async () => {
    let response = await deletechild(current)
    if (response.data.message) {
      setCheck(!check)
      handleModel()
    }
  }
  return (
    <>
      <div id="wrapper">
        <Adminsidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminTopnav />

            <div className="container px-3 py-4">
              <div className="row">
                <div className="col-lg-12 mt-4">
                  <div className="card border-0 mt-2 rounded-10">
                    <div className="card-body d-flex p-4 pb-0">
                      <h4 className="font-xss text-grey-800 mt-3 fw-700">
                        Child List
                      </h4>
                      <select
                        className="form-select ml-auto float-right border-0 font-xssss fw-600 text-grey-700 bg-transparent"
                        aria-label="Default select example"
                      >
                        <option>Sort by latest</option>
                        <option defaultValue="1">Sort by popularity</option>
                        <option defaultValue="2">
                          Sort by price : low to high
                        </option>
                        <option defaultValue="3">
                          Sort by price : high to low
                        </option>
                      </select>
                    </div>
                    <div className="card-body p-4">
                      <div className="table-responsive">
                        <table className="table table-admin mb-0">
                          <thead className="bg-greylight rounded-10 ovh">
                            <tr>
                              <th className="border-0" scope="col">
                                Name
                              </th>
                              <th className="border-0" scope="col">
                                Age
                              </th>
                              {/* <th className="border-0" scope="col">
                                Last Login
                              </th> */}

                              <th className="border-0" scope="col">
                                Grade
                              </th>
                              <th className="border-0" scope="col">
                                Join
                              </th>
                              <th scope="col" className="text-end border-0">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {loading ? <ClipLoader size={30} color='blue' />
                              :
                              children.map((value, index) => (
                                <tr key={index}>

                                  {/* <td className="product-thumbnail text-start pl-0">
                                    <img
                                      src={`assets/images/${value.imageUrl}`}
                                      alt="product"
                                      className="w45 d-inline-block"
                                    />
                                  </td> */}

                                  <td>
                                    <b>{value.firstname} {value.lastname}</b>
                                  </td>
                                  <td>
                                    <b>{value.age}</b>
                                  </td>
                                  <td>
                                    <b>{value.grade}</b>
                                  </td>

                                  {/* <td>
                                    <span
                                      className={`badge rounded-pill font-xsssss fw-700 pl-3 pr-3 lh-24 text-uppercase rounded-3 ls-2 ms-n2 alert-${value.subscribed ? 'success' : 'danger'}`}
                                    >
                                      {value.subscribed ? 'subscribed' : 'unsubscribed'}
                                    </span>
                                  </td> */}
                                  <td>{<Time value={value.createdAt} format="YYYY-MM-DD" />}</td>
                                  <td className="product-remove text-end">

                                    <Button
                                      className="bg-transparent border-0"
                                      onClick={() => {
                                        handleModel(value._id);
                                      }}
                                    >
                                      <i className="ti-trash  font-xs text-danger"></i>
                                    </Button>
                                    <Modal
                                      {...props}
                                      size="sm"
                                      aria-labelledby="contained-modal-title-vcenter"
                                      centered
                                      show={location}
                                    >
                                      <Button
                                        onClick={() => {
                                          handleModel(current);
                                        }}
                                        className="btn-close z-index-5 posa right-0 top-0 mt-3 me-3 font-xss"
                                      ></Button>
                                      <Modal.Body className="text-center p-4">
                                        <i className="ti-info-alt text-warning display4-size"></i>
                                        <p className="text-grey-500 font-xsss mt-3 mb-4">
                                          Are you sure you want to delete
                                          the user?{' '}
                                        </p>

                                        <Button
                                          onClick={() => {
                                            deleteChild()
                                          }}
                                          className="border-0 btn rounded-6 lh-2 p-3 mt-0 mb-2 text-white bg-danger font-xssss text-uppercase fw-600 ls-3"
                                        >
                                          Yes, delete!{' '}
                                        </Button>
                                        <Button
                                          onClick={() => {
                                            handleModel();
                                          }}
                                          className="border-0 btn rounded-6 lh-2 p-3 mt-0 mb-2 text-grey-600 bg-greylight font-xssss text-uppercase fw-600 ls-3 ms-1"
                                        >
                                          No, cancle!
                                        </Button>
                                      </Modal.Body>
                                    </Modal>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <Pagination divClass="pagination justify-content-center mt-5" />
                </div>
              </div>
            </div>

            <Adminfooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminChild;
