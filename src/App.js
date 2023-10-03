import './App.css';
// import Callback from './Components/Callback';
// import GetAccessTokenComponent from './Components/GetAccessTokenComponent';
import GetLikedSongsComponent from './Components/GetLikedSongsComponent';
// import Lance from './Components/Lance';
import GetRandomUserPlaylist from './Components/GetRandomUserPlaylist';
import AuthorizationPage from './Components/AuthorizationPage';
import Logout from './Components/Logout';


function App() {
  return (
    <div className="App">
      hello
      
      <GetLikedSongsComponent/>
      <AuthorizationPage/>
      <GetRandomUserPlaylist/>
      <br></br>
      <br></br>
      <br></br>
      <Logout/>
      
    </div>
  );
}
export default App;