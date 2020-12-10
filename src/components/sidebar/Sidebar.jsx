import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo-saf.png";
import ico from "../../assets/img/ico.png";
import * as Icon from "react-feather";
import routes from "../../routes";

const Sidebar = ({ collapsed }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-content-center">
        <Link to={routes.dashboard}>
          <img src={logo} className="img-logo" alt="" />
        </Link>
      </div>
      <span className="d-flex justify-content-center mb-2">
        {" "}
        <small className="font-weight-bold">EUDA INVENTORY SYSTEM</small>
      </span>

      <div className="aside-body">
        <div className="aside-loggedin">
          <div className="d-flex align-items-center justify-content-start">
            <a href className="avatar">
              <img src={ico} className="rounded-circle" alt="" />
            </a>
            {/* <div className="aside-alert-link">
                  <a href className="new" data-toggle="tooltip" title="You have 2 unread messages"><Icon.MessageSquare/></a>
                  <a href className="new" data-toggle="tooltip" title="You have 4 new notifications"><Icon.Bell/></a>
                  <a href data-toggle="tooltip" title="Sign out"><Icon.LogOut/></a>
                </div> */}
          </div>
          <div className="aside-loggedin-user">
            <a
              href="#loggedinMenu"
              className="d-flex align-items-center justify-content-between mg-b-2"
              data-toggle="collapse"
            >
              <h6 className="tx-semibold mg-b-0">Bruno Brian</h6>
              <i data-feather="chevron-down" />
            </a>
            <p className="tx-color-03 tx-12 mg-b-0">Administrator</p>
          </div>
          <div className="collapse" id="loggedinMenu">
            <ul className="nav nav-aside mg-b-0">
              <li className="nav-item">
                <a href className="nav-link">
                  <Icon.Edit /> <span>Edit Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                  <Icon.User /> <span>View Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                  <Icon.Settings /> <span>Account Settings</span>
                </a>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                  <Icon.HelpCircle /> <span>Help Center</span>
                </a>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                  <Icon.LogOut /> <span>Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* aside-loggedin */}
        <ul className="nav nav-aside">
          <li className="nav-label">Dashboard</li>
          <li className="nav-item active">
            <NavLink to={routes.dashboard} className="nav-link">
              <Icon.Home /> <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-label mg-t-25">Apps</li>
          <li className="nav-item">
            <NavLink to="#" className="nav-link">
              <Icon.Trello /> <span>Department</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="#" className="nav-link">
              <Icon.MapPin /> <span>Location</span>
            </NavLink>
          </li>
          <li className="nav-label mg-t-25">Features</li>
          <li className="nav-item">
            <NavLink to="#" className="nav-link">
              <Icon.Cpu /> <span>Devices</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="#" className="nav-link">
              <Icon.Airplay /> <span>Accessories</span>
            </NavLink>
          </li>

          <li className="nav-label mg-t-25">People</li>
          <li className="nav-item">
            <NavLink to={routes.employee} className="nav-link">
              <Icon.Users /> <span>Employees</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="#" className="nav-link">
              <Icon.Lock /> <span>Administrators</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
