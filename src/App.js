import './App.css';
// import Callback from './Components/Callback';
import GetAccessTokenComponent from './Components/GetAccessTokenComponent';
import GetLikedSongsComponent from './Components/GetLikedSongsComponent';
import Lance from './Components/Lance';
import AuthorizationPage from './Components/AuthorizationPage';

function App() {
  return (
    <div className="App">
      hello
      
      <GetAccessTokenComponent/>
      <GetLikedSongsComponent/>
      <Lance/>
      <AuthorizationPage/>
    </div>
  );
}
export default App;