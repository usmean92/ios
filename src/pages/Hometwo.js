import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Upperheader from "../components/Upperheader";
import Footer from "../components/Footer";

const iconList = [
  {
    title: "Makes learning fun",
    des: "Immersive games that educate and entertain in equal measure",
  },
  {
    title: "Covers the curriculum",
    des: "Practice Alphabets - in a fun avatar - for extra reinforcement",
  },
  {
    title: "Safe and easy to use",
    des: "From new to classics, find hundreds of exciting bedtime stories for all age groups",
  },
];

const serviceList = [
  {
    title: "Games",
    des: "Immersive games that educate and entertain in equal measure",
    img: "games.webp",
  },
  {
    title: "Alphabet Drawing",
    des: "Practice Alphabets - in a fun avatar - for extra reinforcement",
    img: "alphabet.png",
  },
  {
    title: "Bedtime Stories",
    des: "From new to classics, find hundreds of exciting bedtime stories for all age groups",
    img: "stories.webp",
  },
];
class Hometwo extends Component {
  render() {
    return (
      <Fragment>
        <Upperheader />
        <Header divclassName='shadow-none' />

        <div className='banner-wrapper bg-after-fluid'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6 col-lg-5 order-lg-2 '>
                <img
                  src='assets/images/slider-1.png'
                  alt='banner'
                  className='pt-lg--5 pl-lg-1 w-100'
                />
              </div>
              <div className='col-xl-6 col-lg-7 order-lg-1 pt-lg--10 pb-lg--10 xl-p-5'>
                <h2 className='display3-size display2-md-size fw-700'>
                  Kids see fun. <br></br>You see real learning outcomes.
                </h2>
                <h4 className='text-500 font-xsss fw-500 ml-1 aos-init lh-24'>
                  Watch your kids fall in love with Urdu & maths practicing
                  through our Learning platform.
                </h4>
                <div className='form-group mt-lg-4 p-0   rounded-lg'>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <a
                        href='/'
                        className='btn border-0 bg-dark text-uppercase p-3 text-white fw-700 ls-3 rounded-lg d-inline-block font-xssss btn-light mt-3 w200 aos-init aos-animate'>
                        Start Free Trial
                      </a>
                    </div>

                    <div className='col-lg-4'>
                      <a
                        href='/'
                        className='btn border-0 bg-primary text-uppercase p-3 text-white fw-700 ls-3 rounded-lg d-inline-block font-xssss btn-light mt-3 w200 aos-init aos-animate'>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="service" className='service-wrapper layer-after pt-lg-5 mt-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5'>
                <span  className='font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-xl ls-2 alert-warning d-inline-block text-warning mr-1'>
                  what we do
                </span>
                <h2 className='text-grey-900 fw-700 font-xxl pb-3 mb-0 mt-3 d-block lh-3'>
                  Enables your child to master the curriculum on their own.
                </h2>
                <p className='fw-300 font-xssss lh-28 text-grey-500'>
                  Dive into the Maktub - a magical place where learning happens
                  through stories and games.
                </p>
              </div>
            </div>
            <div className='row'>
              {serviceList.map((value, index) => (
                <div className='col-lg-4' key={index}>
                  <div className='card w-100 border-0 p-4 text-center d-block shadow-xss rounded-xxl'>
                    <div className='card-image p-4 bg-lightblue rounded-xxl'>
                      <img
                        src={`assets/images/${value.img}`}
                        alt='service'
                        className='p-4'
                      />
                    </div>
                    <h2 className='font-md fw-700 text-grey-900 mt-4 mb-0'>
                      {value.title}
                    </h2>
                    <p className='fw-300 font-xssss lh-28 text-grey-500 p-3'>
                      {value.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="about" className='feature-wrapper layer-after pt-lg--7 mt-5 pb-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <img
                  src='assets/images/services.png'
                  alt='banner'
                  className='img-fluid aos-init aos-animate'
                />
              </div>
              <div className='col-lg-4 offset-lg-1'>
                <span  className='font-xsssss fw-700 pl-3 pr-3 lh-32 mt-4 text-uppercase rounded-xl ls-2 alert-warning d-inline-block text-warning mr-1'>
                  Why Maktub
                </span>
                <h2 className='text-grey-900 fw-700 display1-size pb-3 mb-0 mt-3 d-block lh-3 aos-init aos-animate'>
                  Experience games that educate
                </h2>
                <p className='fw-400 font-xsss lh-28 text-grey-500 aos-init aos-animate'>
                  As your child explores new worlds and befriends magical
                  creatures, they discover more than one way to solve a problem
                </p>
                <p className='fw-400 font-xsss lh-28 text-grey-500 aos-init aos-animate'>
                  With no timed challenges or overbearing skill progression, our
                  games offer a safe space for your child to explore and make
                  mistakes Whether it's extra practice or a fun challenge,
                  Maktub's games deliver real learning outcomes, always!
                </p>
                <h4 className='font-xsss fw-600 text-grey-500 mb-3 aos-init aos-animate'>
                  <i className='ti-check font-xssss mr-2 btn-round-xs alert-success text-success'></i>
                  ا-ے Urdu Letters
                </h4>
                <h4 className='font-xsss fw-600 text-grey-500 mb-3 aos-init aos-animate'>
                  <i className='ti-check font-xssss mr-2 btn-round-xs alert-success text-success'></i>
                  A-Z English Alphabets
                </h4>
                <h4 className='font-xsss fw-600 text-grey-500 mb-3 aos-init aos-animate'>
                  <i className='ti-check font-xssss mr-2 btn-round-xs alert-success text-success'></i>
                  1-50 Maths Letters
                </h4>
                <h4 className='font-xsss fw-600 text-grey-500 mb-3 aos-init aos-animate'>
                  <i className='ti-check font-xssss mr-2 btn-round-xs alert-success text-success'></i>
                  Color games
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className='how-to-work pb-lg--7 mt-lg-7 mt-5 pb-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='page-title style1 col-xl-8 col-lg-8 col-md-10 text-center mb-5'>
                <h2 className='text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block'>
                  Unlock your child's true potential with us
                </h2>
                <p className='fw-300 font-xsss lh-28 text-grey-500'>
                  Saves the hassle of hunting for learning plans Adapts to your
                  child's learning needs Leads to curriculum mastery, one day at
                  a time
                </p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-lg-10'>
                <div
                  className='card border-0 mb-0 rounded-lg overflow-hidden live-stream bg-image-center bg-image-contain'
                  style={{
                    backgroundImage: `url("assets/images/bg-img-1.png")`,
                  }}>
                  <div className='card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom'>
                    <a
                      href='/'
                      className='btn-round-xl d-md-inline-block d-none bg-blur m-3 mr-0 z-index-1'>
                      <i className='feather-grid text-white font-md'></i>
                    </a>
                    <a
                      href='/'
                      className='btn-round-xl d-md-inline-block d-none bg-blur m-3 z-index-1'>
                      <i className='feather-mic-off text-white font-md'></i>
                    </a>
                    <a href='/' className='btn-round-xxl bg-danger z-index-1'>
                      <i className='feather-phone-off text-white font-md'></i>
                    </a>
                    <a
                      href='/'
                      className='btn-round-xl d-md-inline-block d-none bg-blur m-3 z-index-1'>
                      <i className='ti-video-camera text-white font-md'></i>
                    </a>
                    <a
                      href='/'
                      className='btn-round-xl d-md-inline-block d-none bg-blur m-3 ml-0 z-index-1'>
                      <i className='ti-settings text-white font-md'></i>
                    </a>
                    <span className='p-2 bg-blur z-index-1 text-white fw-700 font-xssss rounded-lg right-15 position-absolute mb-4 bottom-0'>
                      44:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='feature-wrapper layer-after pt-lg--7 pt-5 '>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 order-lg-2 offset-lg-1'>
                <img
                  src='assets/images/bg-2.png'
                  alt='banner'
                  className='w-100 aos-init aos-animate'
                />
              </div>

              <div className='col-lg-4 order-lg-1 pt-lg--5'>
                <span className='font-xsssss fw-700 pl-3 pr-3 lh-32 mt-4 text-uppercase rounded-xl alert-warning ls-2 d-inline-block text-warning mr-1'>
                  Our features
                </span>
                <h2 className='text-grey-900 fw-700 display1-size pb-3 mb-0 mt-3 d-block lh-3 aos-init aos-animate'>
                  Something new to choose from, every day
                </h2>
                <p className='fw-400 font-xsss lh-28 text-grey-500 aos-init aos-animate'>
                  With plenty of games, doodle boards, books and videos at their
                  fingertips, your child will never want to stop learning
                </p>
                <h4 className='font-xssss fw-600 text-grey-500 mb-3 aos-init aos-animate'>
                  <i className='ti-check font-xssss mr-2 btn-round-xs alert-success text-success'></i>
                  Weekly reports
                </h4>
                <h4 className='font-xssss fw-600 text-grey-500 mb-3 aos-init aos-animate'>
                  <i className='ti-check font-xssss mr-2 btn-round-xs alert-success text-success'></i>
                  Detailed progress
                </h4>
                <h4 className='font-xssss fw-600 text-grey-500 mb-3 aos-init aos-animate'>
                  <i className='ti-check font-xssss mr-2 btn-round-xs alert-success text-success'></i>
                  Dedicated Parent Dashboard
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className='how-to-work pt-lg--7 pb-lg--7 mt-5 pb-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5'>
                <h2 className='text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block'>
                  Try Maktub for free
                </h2>
              </div>
            </div>

            <div className='row'>
              {iconList.map((value, index) => (
                <div className='col-lg-4' key={index}>
                  <div className='card p-4 border-0 text-center d-block'>
                    <h2 className='font-xs fw-700 text-grey-900 mt-2 mb-2'>
                      {value.title}
                    </h2>
                    <p className='fw-500 font-xssss lh-28 text-grey-500'>
                      {value.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-center'>
              <a
                href='/'
                className='btn border-0  bg-primary text-uppercase p-3 text-white fw-700 ls-3 rounded-lg d-inline-block font-xssss btn-light mt-3 w200 aos-init aos-animate'>
                Sign up for free
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default Hometwo;
