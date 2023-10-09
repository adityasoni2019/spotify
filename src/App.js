import AuthorizationPage from "./Buttons/AuthorizationPage";
import GetLikedSongsComponent from "./Buttons/GetLikedSongsComponent";
import GetRandomUserPlaylist from "./Buttons/GetRandomUserPlaylist";
import Logout from "./Buttons/Logout";
import SetUserIdComponent from "./Buttons/SetUserId";

function App() {

  return (
    <div className="App" class = "flex flex-col">

      <AuthorizationPage />
      <SetUserIdComponent />
      <GetLikedSongsComponent />
      <GetRandomUserPlaylist />

      <br></br>
      <br></br>
      
      <br></br>
      <Logout />

    </div>
  );
}
export default App;