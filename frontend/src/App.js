import logo from './logo2.png';
import axios from 'axios';
import './App.css';

function App() {

  const linkClick = () => { 
    axios
    .get('http://localhost:5050/login/access_token', {'callback_uri':'bob', 'code':'bob'})
    .then((res) => {
      console.log(res.data)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You must <code>login</code> with your Spotify Account...
        </p>
        <a
          className="App-link"
          href="https://accounts.spotify.com/authorize?response_type=code&client_id=c040d3bbb7854c27a1e4ca23de239e5e&redirect_uri=http://localhost:3000/"
          target="_top"
          rel="noopener noreferrer"
        >
          Spotify Login
        </a>

        <button
          className="App-link"
          target="_top"
          rel="noopener noreferrer"
          onClick = {linkClick}
        >
          fk w bakEnd
        </button>
      </header>
    </div>
  );
}

export default App;
