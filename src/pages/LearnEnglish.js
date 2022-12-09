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
    name: "Letter Listening For (A)",
    imageUrl: "1.png",

  },
  {
    id: "2323",
    name: "Letter Listening For (B)",
    imageUrl: "2.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (C)",
    imageUrl: "3.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (D)",
    imageUrl: "4.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (E) ",
    imageUrl: "5.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (F)",
    imageUrl: "6.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (G)",
    imageUrl: "7.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (H)",
    imageUrl: "8.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (I)",
    imageUrl: "9.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (J)",
    imageUrl: "10.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (K)",
    imageUrl: "11.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (L)",
    imageUrl: "12.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (M)",
    imageUrl: "13.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (N)",
    imageUrl: "14.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (O)",
    imageUrl: "15.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (P)",
    imageUrl: "16.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (Q)",
    imageUrl: "17.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (R)",
    imageUrl: "18.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (S)",
    imageUrl: "19.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (T)",
    imageUrl: "20.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (U)",
    imageUrl: "21.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (V)",
    imageUrl: "22.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (W0",
    imageUrl: "23.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (X)",
    imageUrl: "24.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (Y)",
    imageUrl: "25.png",


  },
  {
    id: "2323",
    name: "Letter Listening For (Z)",
    imageUrl: "26.png",


  },
];

const LearnEnglish = () => {
  const [location, setLocation] = useState(false)
  const [loading, setLoading] = useState(false)
  const [check, setCheck] = useState(false)

  let { currentChild, user, setCurrentChild } = useContext(AuthContext)


  const [quizes, setQuizes] = useState([])

  useEffect(async () => {
    if (currentChild === undefined) {
      setCurrentChild(Cookies.get('currentChild'))
      setCheck(!check)
    }
    await getCourseQuiz({ childId: currentChild, setQuizes, title: 'English', setLoading })
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
                      English Lessons
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
                                          src={`assets/images/eng/${productList[index].imageUrl}`}
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
                                      <Link to={{ pathname: '/learning-video-player', state: { course: 'English', content: 'alphabet', number: productList[index].name[productList[index].name.indexOf('(') + 1], qid: quizes._id, index } }} >
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

export default LearnEnglish;

