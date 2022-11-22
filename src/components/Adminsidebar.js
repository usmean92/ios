import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Adminsidebar extends Component {
  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    return (
      <ul
        className='navbar-nav bg-gradient-primary sidebar sidebar-dark scroll-bar'
        id='accordionSidebar'>
        <div
          className='sidebar-brand d-flex align-items-start justify-content-start'
          href='/admin'>
          <span className='d-inline-block fredoka-font ls-3 fw-600 text-success font-xl logo-text mb-0 text-capitalize lh-1'>
            Maktub.
          </span>
          <button className='ms-auto mt-2 d-lg-none' id='sidebarClose'>
            <i className='ti-close text-white font-sm text-grey-100 '></i>
          </button>
        </div>
        <div className='sidebar-heading'>Pages</div>
        <li className='nav-item'>
          <NavLink className='navi-link' to='/admin'>
            <i className='feather-pie-chart mr-2'></i>
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink className='navi-link' to='/admin-customer'>
            <i className='feather-user mr-2'></i>
            <span>Users</span>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='navi-link' to='/admin-customerview'>
            <i className='feather-user mr-2'></i>
            <span>Users Details</span>
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink className='navi-link' to='/admin-chat'>
            <i className='feather-message-square mr-2'></i>
            <span>Chat</span>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='navi-link' to='/logout'>
            <i className='feather-log-out mr-2'></i>
            <span>Logout</span>
          </NavLink>
        </li>
        <div className='mt-3'></div>
      </ul>
    );
  }
}

export default Adminsidebar;
