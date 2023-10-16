import AuthorizationPage from "./Buttons/AuthorizationPage";
import GetLikedSongsComponent from "./Buttons/GetLikedSongsComponent";
import GetRandomUserPlaylist from "./Buttons/GetRandomUserPlaylist";
import Logout from "./Buttons/Logout";
import SetUserIdComponent from "./Buttons/SetUserId";
import Random from "./Buttons/Random";
import Authorize_Exportify from "./Buttons/Authorize_Exportify";

function App() {

  return (
    <div className="App" class = "flex flex-col">
      <Authorize_Exportify/>
      <AuthorizationPage />
      <SetUserIdComponent />
      <GetLikedSongsComponent />
      <GetRandomUserPlaylist />
      {/* <Random/> */}


      <br></br>
      <br></br>
      
      <br></br>
      <Logout />

    </div>
  );
}
export default App;