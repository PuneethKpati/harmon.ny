import './App.css';
import Callback from './Components/callback';
import Login from './Components/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/callback" component={Callback} />
        </Switch>
      </Router>
  );
}

export default App;
