import './App.css';
// import Callback from './Components/Callback';
import GetAccessTokenComponent from './Components/GetAccessTokenComponent';
import GetLikedSongsComponent from './Components/GetLikedSongsComponent';
import Lance from './Components/Lance';
function App() {
  return (
    <div className="App">
      hello
      
      <GetAccessTokenComponent/>
      <GetLikedSongsComponent/>
      <Lance/>
      
    </div>
  );
}
export default App;