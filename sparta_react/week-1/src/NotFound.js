import React from 'react';
import PropTypes from 'prop-types';

const NotFound = (props) => {
  console.log(props);
  return (
    <div>
      <h1>주소가 올바르지 않아요</h1>
      <button onClick={() => props.history.push('/')}>홈으로 가기</button>
    </div>
  );
};

export default NotFound;
