import React from 'react';
import logo from './logo.svg';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList';
import styled from 'styled-components';
import LifecycleEx from './LifecycleEx';
import { Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import { withRouter } from 'react-router';
import NotFound from './NotFound';

import { connect } from 'react-redux';
import {
  addBucketFB,
  createBucket,
  loadBucket,
  loadBucketFB
} from './redux/modules/bucket';
import Progress from './Progress';
import { firestore } from './firebase';
import Spinner from './Spinner';
const mapStateToProps = (state) => {
  return { bucket_list: state.bucket.list };
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadBucketFB());
    },
    create: (bucket) => {
      dispatch(addBucketFB(bucket));
    }
  };
};
// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);

    this.text = React.createRef();
  }
  componentDidMount() {
    this.props.load();
  }
  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
  };
  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Progress />
          <Line />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <BucketList
                  history={this.props.history}
                  list={this.props.bucket_list}
                />
              )}
            />
            <Route path="/detail/:index" component={Detail} />
            <Route
              render={(props) => <NotFound history={this.props.history} />}
            />
          </Switch>
          <Input>
            <input type="text" ref={this.text} />
            <button onClick={this.addBucketList}>추가하기</button>
          </Input>
          {/* <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            위로가기
          </button> */}
          <Spinner />
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 10px 0;
  border-top: 3px pink dotted;
  & * {
    padding: 3px;
  }
  & input {
    width: 60%;
    &:focus {
      border: 2px solid orange;
    }
  }

  & button {
    color: white;
    width: 25%;
    background-color: orange;
    border: orange solid 1px;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
