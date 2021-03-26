import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
//import Login from '../pages/Login';
import Header from '../components/Header';
import Signup from '../pages/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact render={(props) => <Login />} />
        <Route path="/signup" exact render={(props) => <Signup />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
