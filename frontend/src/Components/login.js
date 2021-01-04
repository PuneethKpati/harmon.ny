import React from 'react';
import logo from '../res/logo2.png';


const Login = (props) => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                You must <code>login</code> with your Spotify Account...
                </p>
                <a
                href="https://accounts.spotify.com/authorize?response_type=code&client_id=c040d3bbb7854c27a1e4ca23de239e5e&redirect_uri=http://localhost:3000/callback"
                target="_top"
                rel="noopener noreferrer"
                >
                Spotify Logins
                </a>
            </header>
            
        </div>
    );
}

export default Login;
