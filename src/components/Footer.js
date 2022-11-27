import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const { bgColor } = this.props;
    return (
      <div className={`footer-wrapper mt-0 ${bgColor}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='row'>
                <div className='col-md-12 col-lg-4 col-sm-9 col-xs-12 md-mb-2'>
                  <Link to='/'>
                    <h1 className='fredoka-font ls-3 fw-700 text-current font-xxl'>
                      Maktub
                      <span className='d-block font-xsssss ls-1 text-grey-500 open-font '>
                        Kids Learning Platform
                      </span>
                    </h1>
                  </Link>
                  <p className='w-100 mt-5'>
                    Islamabad Pakistan <br />
                    NY 10010 1-877-932-7111 <br /> maktub@mail.com
                  </p>
                  <ul className='list-inline'>
                    <li className='list-inline-item mr-3'>
                      <Link to='#'>
                        <i className='ti-facebook'></i>
                      </Link>
                    </li>
                    <li className='list-inline-item mr-3'>
                      <Link to='#'>
                        <i className='ti-twitter-alt'></i>
                      </Link>
                    </li>
                    <li className='list-inline-item mr-3'>
                      <Link to='#'>
                        <i className='ti-linkedin'></i>
                      </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link to='#'>
                        <i className='ti-instagram'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='col-md-3 col-lg-2 col-sm-3 col-xs-6 md-mb-2'>
                  <h5>Language</h5>
                  <ul>
                    <li>
                      <Link to='#'>English</Link>
                    </li>
                    <li>
                      <Link to='#'>Spanish</Link>
                    </li>
                    <li>
                      <Link to='#'>Arab</Link>
                    </li>
                    <li>
                      <Link to='#'>Urdu</Link>
                    </li>
                    <li>
                      <Link to='#'>Brazil</Link>
                    </li>
                  </ul>
                </div>
                <div className='col-md-3 col-lg-2 col-sm-4 col-xs-6'>
                  <h5>Activites</h5>
                  <ul>
                    <li>
                      <Link to='/maths'>Childern Dashboard</Link>
                    </li>
                    <li>
                      <Link to='/mykids'>Parent Dashboard</Link>
                    </li>
                    <li>
                      <Link to='/modela'>Alphabet Drawing</Link>
                    </li>
                    <li>
                      <Link to='/modelmath'>Math Drawing</Link>
                    </li>
                    <li>
                      <Link to='#'>Urdu Drawing</Link>
                    </li>
                  </ul>
                </div>
                <div className='col-md-3 col-lg-2 col-sm-4 col-xs-6'>
                  <h5>About</h5>
                  <ul>
                    <li>
                      <Link to='#'>FAQ</Link>
                    </li>
                    <li>
                      <Link to='#'>Term of use</Link>
                    </li>
                    <li>
                      <Link to='#'>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to='#'>Feedback</Link>
                    </li>
                    <li>
                      <Link to='#'>Careers</Link>
                    </li>
                  </ul>
                </div>
                <div className='col-md-3 col-lg-2 col-sm-4 col-xs-6'>
                  <h5 className='mb-3'>Contact</h5>
                  <p className='w-100'>
                    Comsats Islamabad <br />
                    1-877-932-7111
                  </p>
                  <p className='w-100'>
                    maktub@gmail.com <br />
                    1-877-932-7111
                  </p>
                </div>
              </div>
              <div className='middle-footer mt-5 pt-4'></div>
            </div>
            <div className='col-sm-12 lower-footer pt-0'></div>
            <div className='col-sm-6 col-xs-12'>
              <p className='copyright-text'>
                © 2022 copyright. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
