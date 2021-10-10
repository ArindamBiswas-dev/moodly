import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Profile from './pages/profile';
import Home from './pages/home';
import Feed from './pages/feed';
import Logout from './pages/logout';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/feed">
            <Feed />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
