//We did'nt use capital S beacuse spotify is not a component
//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//When You hit on login button this website will throw you on spotify official website for authorisation with the help of lonk given below
export const authEndpoint = "https://accounts.spotify.com/authorize";

//When Authorisation is Done it will redirect to this website with the help of link given bellow
// this is tha same link we put in redirect option in spotify developer site
const redirectUri = "http://localhost:3000/";

const clientId = "fea643289d844280ba04bfce4b07d697";

//The screen we are going to show our user will allow the scopes given bellow
//if we add scope to delete things user will start deleteting random stuff from website
//that's why we can see scopes like read and modify
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//We Want Access_Token From redirected URL

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

//URL for Authorization
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
