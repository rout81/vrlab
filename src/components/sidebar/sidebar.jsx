import React from "react";
import logo from "../../assets/logo.png";
import { ReactComponent as User } from "../../assets/user.svg";
import "./sidebar.scss";
import {
  AiOutlinePushpin,
  AiOutlineHome,
  AiOutlineSafety,
  AiOutlineSearch,
  AiOutlineScan,
} from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" width="40px" height="40px" />
        <span>InvestDex</span>
        <AiOutlinePushpin />
      </div>
      <div className="menu">
        <div className="menu__item">
          <AiOutlineHome />
          <span>Dashboard</span>
        </div>
        <div className="menu__item">
          <AiOutlineSafety />
          <span>Risk Management</span>
        </div>
        <div className="menu__item">
          <AiOutlineSearch />
          <div className="menu__item--accordion">
            <span>Explorer</span>
            <div className="accordion">
              <div>hello</div>
              <div>world</div>
              <div>what</div>
              <div>are</div>
              <div>you</div>
              <div>doing</div>
              <div>now</div>
            </div>
          </div>
        </div>
        <div className="menu__item">
          <AiOutlineScan />
          <span>Swaps</span>
        </div>
      </div>
      <div className="user">
        <User />
        <span>Login</span>
      </div>
    </div>
  );
};

export default Sidebar;
