import './App.css';
import Callback from './Components/callback';
import Home from './Components/home';
import Play from './Components/play';
import Profile from './Components/profile';
import About from './Components/about';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/callback" component={Callback} />
          <Route path="/play" component={Play} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
  );
}

export default App;
