import React from 'react';

const Two = (props) => {
  return (
    <div>
      <h2>Hi, there :) ! page two</h2>
      <button
        onClick={() => {
          props.history.push('/');
        }}
      >
        page one
      </button>
      <button
        onClick={() => {
          props.history.push('/two');
        }}
      >
        page two
      </button>
    </div>
  );
};

export default Two;
