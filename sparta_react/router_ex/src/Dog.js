import React from 'react';

const Dog = (props) => {
  console.log(props.match);
  return <div>귀여운 {props.match.params.dog_name}</div>;
};

export default Dog;
