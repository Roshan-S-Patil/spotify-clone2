export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //its very hectic to login again and again to check every thing is working
  //so we will set default value of token as a token we got
  //REMEMBER TO CHANGE TO NULL AFTER DEVELOPMENT
  // token:
  //   "BQAof2EZkJj_zAupeacPnCwOFta6G_IQBl-E77LYqmWdFjoQf-gYLQnSi6xTx8hnljUITxkBToy6vLymWs7zwHBd-76-ljXqfkFYVUqI36G4h70MzwKyjMdS3BxDAH0oOi0OTGnxyCxNBJuhBKYyNBfgSx__e0DOthx2HbOM0RNDcFdww07vA1_SWf36asPfdty-qadh8hCedulk9RYl",
};

//State is  how Datalayer is currently looks like
//action is used to manipulate how Datalayer will look like
//in short action sets state
const reducer = (state, action) => {
  console.log(action);

  //Action -> type,[Payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
