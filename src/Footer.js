import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Record-Album-02.jpg"
          alt="Image"
          className="footer_image"
        />
        <div className="footer_songInfo">
          <h4>Yeah</h4>
          <p>user</p>
        </div>
      </div>

      <div className="footer_middle">
        <ShuffleIcon className="footer_green footer_icon" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_icon" />
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className="slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
