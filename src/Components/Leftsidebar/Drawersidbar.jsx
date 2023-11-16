import React from "react";
import "./Leftbar.css";
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";
import shorts from "./shorts.png";
import { FaHistory } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Drawersidbar({toggleDrawer, toggleDrawerSidebar}) {
  return (
    <div className="container_DrawerLeftSidebar" style={toggleDrawerSidebar}>
      <div className="container2_DrawerLeftSidebar">
        <div className="Drawer_leftsidebar">
          <NavLink to={'/'} className="icon_sidebar_div">
            <p>
              <AiOutlineHome
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar_icon">Home</span>
            </p>
          </NavLink>
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineExplore
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar_icon">Explore</span>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <img
                src={shorts}
                width={20}
                alt=".."
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar_icon">Shorts</span>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <MdSubscriptions
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar_icon">Subscriptions</span>
            </p>
          </div>
        </div>
        <div className="libraryBtn_Drawerleftsidbar">
          <NavLink to={'/Library'} className="icon_sidebar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar_icon">Library</span>
            </p>
          </NavLink>
          <NavLink to={'/WatchHistory'} className="icon_sidebar_div">
            <p>
              <FaHistory
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar_icon">History</span>
            </p>
          </NavLink>
          <NavLink to={'/YourVideo'} className="icon_sidebar_div">
            <p>
              <AiFillPlaySquare
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar_icon">Your Video</span>
            </p>
          </NavLink>
          <NavLink to={'/WatchLater'} className="icon_sidebar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar_icon">Watch Later</span>
            </p>
          </NavLink>
          <NavLink to={'/LikedVideo'} className="icon_sidebar_div">
            <p>
              <AiFillLike
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar_icon">Liked Video</span>
            </p>
          </NavLink>
        </div>
        <div className="subScriptions_lsdbar">
          <h3>Your Subscriptions</h3>
          <div className="Channel_lsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
          <div className="Channel_lsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
          <div className="Channel_lsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
          <div className="Channel_lsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
          <div className="Channel_lsdbar">
            <p>C</p>
            <div>Channel</div>
          </div>
        </div>
      </div>
      <div
        className="container3_DrawerLeftSidebar"
        onClick={toggleDrawer}
      ></div>
    </div>
  );
}

export default Drawersidbar;
