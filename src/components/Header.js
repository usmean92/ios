import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const navClass = `${isOpen ? " show" : ""}`;
  const { divClass, color = "light" } = props;
  let colorClass;
  if (color === "dark") {
    colorClass = "text-white";
  }
  let history = useHistory();
  return (
    <div className={`header-wrapper pt-3 pb-3 shadow-xss ${divClass}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 navbar pt-0 pb-0'>
            <Link to='/'>
              <h1 className='fredoka-font ls-3 fw-700 text-current font-xxl'>
                Maktub
                <span className='d-block font-xsssss ls-1 text-grey-500 open-font '></span>
              </h1>
            </Link>
            <button className='navbar-toggler' onClick={toggleOpen}>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className={`collapse navbar-collapse ${navClass}`}
              id='navbarNavDropdown'>
              <Navbar
                expand='lg'
                className='dropdown-navbar slide-navmenu nav-menu'>
                <Navbar id='basic-navbar-nav' className='w-100 d-block'>
                  <Nav className={`${colorClass} navbar-nav`}>
                    <Nav.Link className='nav-link' href='/'>
                      Home
                    </Nav.Link>

                    <Nav.Link className='nav-link' href='/#service'>
                      What we do
                    </Nav.Link>
                    <Nav.Link className='nav-link' href='/price'>
                      Pricing
                    </Nav.Link>
                    <Nav.Link href='/contact-2'>Contact</Nav.Link>
                  </Nav>
                </Navbar>
              </Navbar>
            </div>
          </div>
          <div className='col-lg-4 text-right d-none d-lg-block'>
            {!Cookies.get("token") ? (
              <>
                <a
                  href='/login'
                  className='mt-3 p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xssss fw-700 ls-lg text-white'>
                  Login
                </a>
                <a
                  href='/register'
                  className='mt-3 ml-4 p-0 btn p-2 lh-24 w200 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xssss fw-700 ls-lg text-white'>
                  Start Your Free Trial
                </a>
              </>
            ) : (
              <button
                className='mt-3 ml-4 p-0 btn p-2 lh-24 w200 ml-1 ls-3 d-inline-block rounded-xl bg-current font-xssss fw-700 ls-lg text-white'
                onClick={() => {
                  Cookies.remove("token");
                  history.push("/");
                }}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
