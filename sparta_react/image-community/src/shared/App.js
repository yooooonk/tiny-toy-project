import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PostList from '../pages/PostList';
import Login from '../pages/Login';

import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import Header from '../components/Header';
import Signup from '../pages/Signup';
function App() {
  return (
    <div className="App">
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact render={(props) => <Login />} />
        <Route path="/signup" exact render={(props) => <Signup />} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
