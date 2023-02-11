import React from "react";
import "./Sidebar.css";
import { useEffect, useState } from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

const Sidebar = ({ spotify }) => {
  const [{ datalayer }, dispatch] = useDataLayerValue();

  // const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {/* if you are confused here just console log player you will get to know that from where the items came from */}
      {/* {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))} */}
    </div>
  );
};

export default Sidebar;
