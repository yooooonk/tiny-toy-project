import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PostList from '../pages/PostList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
