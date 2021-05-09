import React from "react";
import "./top.scss";
import { ReactComponent as Work } from "../../assets/work.svg";
import { ReactComponent as Workstation } from "../../assets/workstation.svg";
import {
  AiOutlineArrowRight,
  AiTwotoneCalendar,
  AiOutlineSearch,
} from "react-icons/ai";
import { explorer } from "../../data";

const Top = () => {
  return (
    <div className="top-container">
      <div className="title">InvestSuite</div>
      <div className="top">
        <div className="card">
          <div className="work">
            <Work />
            <div className="imgcontain">
              <div className="workstation">
                <Workstation />
                workstation
              </div>
              <div className="check">Check your work station</div>
            </div>
          </div>
          <div className="complete">
            Complete Tasks
            <AiOutlineArrowRight />
          </div>
          <div className="events">
            <p>6 upcoming events</p>
            <div className="event">
              <AiTwotoneCalendar />
              Events
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="tabs">
            <div className="tab">Uniswap</div>
            <div className="tab">Pancake Swap</div>
          </div>

          <div className="search">
            <AiOutlineSearch />
            <div className="inputcontain">
              <input placeholder="Search pair by symble / name" type="text" />
            </div>
          </div>
          <div className="explore">
            {explorer.map((data) => (
              <div className="explorelist">
                {data.icon}
                <div className="content">
                  <div className="content-title">{data.title}</div>
                  <div className="content-sub">{data.sub}</div>{" "}
                </div>
                <div className="arr">{">"}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card"></div>
      </div>
    </div>
  );
};

export default Top;
