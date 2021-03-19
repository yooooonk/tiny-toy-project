import React from 'react';
import logo from './logo.svg';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import './style.css';

const Quiz = ({ name }) => {
  return (
    <div className="Quiz">
      <div>
        나는 <span className="name">{name}</span>에 대해서 <br /> 얼마나 알고
        있을까?
      </div>

      <input type="text" placeholder={'내 이름'} />
      <button>시작하기</button>
    </div>
  );
};

export default Quiz;
