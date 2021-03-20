import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Cat from './Cat';
import Dog from './Dog';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    console.log('app.js', this.props);
  }
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home으로 가기</Link>
          <Link to="/cat/마야">Cat으로 가기</Link>
          <Link to="/dog/바미토리송이">Dog로 가기</Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/cat/:cat_name" component={Cat} />
        <Route exact path="/dog/:dog_name" component={Dog} />
        <button
          onClick={() => {
            this.props.history.push('/dog/꾸꾸백호루니');
          }}
        >
          dog로 가기
        </button>
        <button
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          뒤로가기
        </button>
      </div>
    );
  }
}

export default withRouter(App);
