import './App.css';
// import Callback from './Components/Callback';
import GetAccessTokenComponent from './Components/GetAccessTokenComponent';
import GetLikedSongsComponent from './Components/GetLikedSongsComponent';
import AuthorizationPage from './Components/AuthorizationPage';
import AddSongs from './Components/AddSongs';
import DeleteTracks from './Components/DeleteTracks';
import GetPlaylist from './Components/GetPlaylist';

function App() {
  return (
    <div className="App">
      hello
      
      <GetAccessTokenComponent/>
      <AuthorizationPage/>
      <GetLikedSongsComponent/>
      <AddSongs/>
      <DeleteTracks/>
      <GetPlaylist/>
      
    </div>
  );
}
export default App;