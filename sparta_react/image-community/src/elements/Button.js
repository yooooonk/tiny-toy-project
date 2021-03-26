import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { type, bgColor, color, children, onClick, disable } = props;
  const styles = { bgColor, color, type, disable };
  return (
    <Btn {...styles} onClick={onClick}>
      {children}
    </Btn>
  );
};

const Btn = styled.button`
  background-color: ${(props) => (props.disabled ? 'gray' : props.bgColor)};
  color: ${(props) => props.color};
  width: ${(props) =>
    props.type === 'full' ? '90vw' : props.type === 'half' ? '50vw' : '25vw'};
  height: 45px;
`;

Button.defaultProps = {
  type: 'full',
  value: null,
  bgColor: '#dcdcdc',
  color: 'black',
  onClick: null,
  disable: false
};

export default Button;
