import React from 'react';
import styled from 'styled-components';
const Input = (props) => {
  const { title, setValue, placeholder } = props;
  return (
    <InputContainer>
      <span>{title}</span>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 10px;

  & > input {
    height: 25px;
  }
`;
Input.defaultProps = {
  title: null,
  setValue: null
};

export default Input;
