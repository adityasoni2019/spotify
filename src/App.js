import AuthorizationPage from "./Buttons/AuthorizationPage";
import GetLikedSongsComponent from "./Buttons/GetLikedSongsComponent";
import GetRandomUserPlaylist from "./Buttons/GetRandomUserPlaylist";
import Logout from "./Buttons/Logout";
import SetUserIdComponent from "./Buttons/SetUserId";
import Authorize_Exportify from "./Buttons/Authorize_Exportify";
import GetLikedSongsAndSaveThem from "./Buttons/GetLikedSongsAndSaveThem";
import MoveSongsToLiked from "./Buttons/MoveSongsToLiked";

function App() {

  return (
    <div className="App" class="flex flex-col">
      <div class="flex border border-red-600 justify-around">

        {/* <AuthorizationPage /> */}
        <Authorize_Exportify />
        <SetUserIdComponent />
        <GetLikedSongsComponent />
        {/* <GetRandomUserPlaylist /> */}
        <GetLikedSongsAndSaveThem />


      </div>

      <br></br>


      <br></br>
      <br></br>
      {/* <Random/> */}
      <br></br>
      -----------------------------------Automation-----------------------------------
      <MoveSongsToLiked />
      <br></br>
      -----------------------------------Footer-----------------------------------
      <br></br>
      <br></br>
      <br></br>
      <Logout />

    </div>
  );
}
export default App;