import logo from './logo.svg';
import './App.css';

import One from './One';
import Two from './Two';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      pre render test!
      <BrowserRouter>
        <Route path="/" exact component={One} />
        <Route path="/two" exact component={Two} />
      </BrowserRouter>
    </div>
  );
}

export default App;
