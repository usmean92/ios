import React, { useState, useEffect, useContext } from "react";
import Appfooter from "../components/Appfooter";
import Navheader from "../components/Navheader";
import Appheader from "../components/Appheader";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { getCourseQuiz } from "../helpers/quiz";
import { ClipLoader } from "react-spinners";
import AuthContext from "../context/Auth";

const productList = [
  {
    id: "0901",
    name: "ا",
    imageUrl: "1.png",

    status: "alert-success text-success",
    tag: "Completed",
  },
  {
    id: "2323",
    name: "ب",
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


const UrduContent = () => {
  const [location, setLocation] = useState(false)
  const [loading, setLoading] = useState(false)
  const [check, setCheck] = useState(false)
  const [quizes, setQuizes] = useState([])
  let { currentChild, user, setCurrentChild } = useContext(AuthContext)

  useEffect(() => {
    async function fetchData() {
      if (currentChild === undefined) {
        setCurrentChild(Cookies.get('currentChild'))
        setCheck(!check)
      }
      await getCourseQuiz({ childId: currentChild, setQuizes, title: 'Urdu', setLoading })
    }
    fetchData()
  }, [check])

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
                      Urdu Lessons
                    </h4>
                  </div>
                  <div className='card-body p-4'>
                    <div className='table-responsive'>
                      <table className='table table-admin mb-0'>
                        <thead className='bg-greylight rounded-10 ovh'>
                          <tr>
                            <th className='border-0'></th>
                            <th className='border-0' scope='col'>
                              Name
                            </th>
                            <th className='border-0' scope='col'></th>
                            <th className='border-0' scope='col'></th>
                            <th scope='col' className='text-right border-0'>
                              Action
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {
                            productList.map((value, index) =>
                                (
                                  <tr key={productList[index].id}>

                                    <td className='product-thumbnail text-start ps-0'>
                                      <Link to='/#' className=' small-icon'>
                                        <img
                                          src={`assets/images/urdu/${productList[index].imageUrl}`}
                                          alt='product'
                                          className='w125 d-inline-block p-0 bg-greylight rounded-lg overflow-hidden'
                                        />
                                      </Link>
                                    </td>

                                    <td>
                                      <b>{productList[index].name}</b>
                                    </td>

                                    <td></td>

                                    <td></td>
                                    <td className='product-remove text-right'>
                                      <Link to={{ pathname: '/learning-video-player', state: { course: 'Urdu', content: 'لفظ', number: productList[index].name[productList[index].name.indexOf('(') + 1], qid: quizes._id, index } }} >
                                        <i className='feather-play mr-1 font-xs text-grey-500'></i>
                                        View
                                      </Link>
                                    </td>
                                  </tr>
                                )
                            )
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

export default UrduContent;
