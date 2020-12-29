import logo from './logo2.png';
import './App.css';

function App() {

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

        <a
          className="App-link"
          href="http://localhost:5050/login/loginPage?username=bob"
          target="_top"
          rel="noopener noreferrer"
        >
          fk w bakEnd
        </a>
      </header>
    </div>
  );
}

export default App;
