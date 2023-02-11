import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
//after npm i spotify-web-api-js i.e. aster installing spotify api
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

//ew called that API
const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(null);
  //Instead of Using useState to set token we can use Dispatch
  //to pull information
  //{ } used to get information
  //we can also use {} as {user,Token} bur at this time we dont need any thing
  // dispatch is like a gun, special gun we use to shoot at Datalayer

  const [{ token }, dispatch] = useDataLayerValue(); //if we put user in {} that means we are pulling user from DataLayer
  //instead of {user} we can also pull DataLayer and then use user as DataLayer.user

  //run code on given conditions
  //condition is in baracket at the end of useEffect
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      // setToken(_token);
      //Instead of setToken we will use dispatch
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //we are giving token to spotify so that it allows us to communicate with spotify
      spotify.setAccessToken(_token); //spotify.**** are not functions of react they are provided by Spotify website

      //To test we will do following
      spotify.getMe().then((user) => {
        //we deleted console.log("person in spotify.getMe", user)

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      //Get data from Spotify to show Playlist
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
      //Now we will pull discover weekly playlist from spotify

      spotify.getPlaylist("7lZB02RIQpgh9t46NQ7zZ9").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      //we Deleted console.log("I HAVE A TOKEN", token)
    }
  }, []);

  // we seleted console.log("Person before return", user)
  // console.log("Token", token);
  return (
    <div className="app">
      {/* If We are logged in show player else show login page */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
