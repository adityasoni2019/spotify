import './App.css';
// import Callback from './Components/Callback';
import GetAccessTokenComponent from './Components/GetAccessTokenComponent';
import GetLikedSongsComponent from './Components/GetLikedSongsComponent';
import AuthorizationPage from './Components/AuthorizationPage';

function App() {
  return (
    <div className="App">
      hello
      
      <GetAccessTokenComponent/>
      <AuthorizationPage/>
      <GetLikedSongsComponent/>
    </div>
  );
}
export default App;