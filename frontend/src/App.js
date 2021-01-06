import './App.css';
import Callback from './Components/callback';
import Home from './Components/home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/callback" component={Callback} />
        </Switch>
      </Router>
  );
}

export default App;
