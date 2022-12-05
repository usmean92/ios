import React, { useState, useEffect, useContext } from "react";
import { getReport } from '../helpers/child'
import Appheader from "../components/Appheader";
import Navheader from "../components/Navheader";
import { useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import AuthContext from "../context/Auth";
import { GiCheckMark } from 'react-icons/gi'
import { RiErrorWarningLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import { MdSchool } from 'react-icons/md'

// const paymentList = [
//   {
//     id: "0901",
//     name: "Paypal",
//     imageUrl: "user.png",
//     number: "4321 4432 6565 ****",
//     color: "success",
//     status: "Active",
//   },
//   {
//     id: "1233",
//     name: "Master Card",
//     imageUrl: "user.png",
//     number: "***port@gmail.com",
//     color: "success",
//     status: "Active",
//   },
//   {
//     id: "2323",
//     name: "Payonner",
//     imageUrl: "user.png",
//     number: "**herry@payoner.com",
//     color: "danger",
//     status: "Deactive",
//   },
//   {
//     id: "0901",
//     name: "Visa",
//     imageUrl: "user.png",
//     number: "4321 4432 6565 ****",
//     color: "success",
//     status: "Active",
//   },
// ];

const ChildReport = (props) => {
  const [location, setLocation] = useState(false)
  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState([])
  const [child, setChild] = useState([])

  let { currentChild } = useContext(AuthContext)
  console.log('current: ', currentChild)


  let locationState = useLocation()

  useEffect(() => {
    getReport({ childId: currentChild, setReport, setLoading, setChild })
  }, [])

  return (
    <>
      <div className='main-wrapper'>
        <Navheader />

        <div className='main-content'>
          <Appheader />
          <div id='content'>

            <div className='container px-3 py-4'>
              {loading ? <ClipLoader size={30} /> :
                child !== undefined &&
                (
                  <>
                    <div className='row'>
                      {console.log('ff: ', child)}
                      <div className='col-xl-4 col-xxl-3 col-lg-4 pe-0'>
                        <div className='card w-100 shadow-xss rounded-lg overflow-hidden border-0 mb-3 mt-0 pb-3'>
                          <div className='card-body d-block pt-4 text-center'>
                            <div
                              className='ml-auto mr-auto rounded-lg overflow-hidden d-inline-block'>
                              <div className="child-image-container">
                                <h3 className="text-uppercase">{child.firstname}</h3>
                              </div>

                            </div>
                            <h4 className='font-xs ls-1 fw-700 text-grey-900'>
                              {child.firstname} {child.lastname}
                              {/* <span className='d-block font-xssss fw-500 mt-1 lh-3 text-grey-500'>
                          {report.child.age}
                        </span> */}
                            </h4>
                          </div>

                          <div className='card-body d-flex pt-0'>
                            <AiOutlineUser className='text-grey-500 mr-3 font-lg' />
                            <h4 className='fw-700 text-grey-900 font-xssss mt-1'>
                              {child.age}
                            </h4>
                          </div>
                          <div className='card-body d-flex pt-0'>

                            <MdSchool className='text-grey-500 mr-3 font-lg' />
                            <h4 className='fw-700 text-grey-900 font-xssss mt-1'>
                              {child.grade}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-8 col-xxl-9 col-lg-8'>
                        <div className='card border-0 mt-3 rounded-lg'>
                          <div className='card-body d-flex pt-4 px-4 pb-0'>
                            <h4 className='font-xss text-grey-800 mt-3 fw-700'>
                              Kid Report
                            </h4>
                          </div>
                          {report.map((item) => (
                            <tr>
                              <div className={`card-body m-4 mb-0 ${item.percentage > 50 ? 'bg-lightgreen' : 'bg-lightred'} p-4 rounded-lg`}>
                                <h4 className='fw-700 mt-2 font-xss text-grey-900 d-flex mb-0'>
                                  {item.course}
                                  <div className='txt-green font-xs fw-600 ls-3 p-2 rounded-lg ml-auto'>
                                    {item.attempted} <span><GiCheckMark size={15} color="green" /></span>
                                  </div>
                                  <div
                                    className='text-red font-xs fw-600 ls-3 p-2 rounded-lg ml-auto'>
                                    {item.unattemped > 0 && (
                                      <>
                                        {item.unattemped} < span > <RiErrorWarningLine size={20} color="red" /></span></>
                                    )}

                                  </div>
                                  <span className={`${item.percentage > 50 ? 'bg-success' : 'bg-danger'} text-white font-xs fw-bold ls-3 p-2 rounded-lg ml-auto`}>
                                    {Math.round(item.percentage)} %
                                  </span>
                                </h4>
                              </div>
                            </tr>

                          ))}


                          {/* <div className='card-body m-4 bg-lightgreen p-4 rounded-lg'>
                      <h4 className='fw-700 mt-2 font-xss text-grey-900 d-flex mb-0'>
                        Surfiya Zakir
                        <span className='bg-success text-white font-xsssss fw-600 ls-3 p-2 rounded-lg ml-auto'>
                          Grade Pre-School
                        </span>
                      </h4>
                    </div> */}
                        </div>
                      </div >
                    </div >
                  </>
                )}
            </div >
          </div >
        </div >
      </div >
    </>
  );
}


export default ChildReport;
