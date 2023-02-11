import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        {/* SideBar */}
        <Sidebar spotify={spotify} />
        {/* Body */}
        <Body spotify={spotify} />
      </div>
      {/*Footer Which will Have play button and etc etc*/}
      <Footer />
    </div>
  );
};

export default Player;
