import React from 'react';
import styled from 'styled-components';
const Grid = (props) => {
  const { is_flex, width, padding, margin, bg, children } = props;
  const styles = {
    is_flex,
    width,
    padding,
    margin,
    bg
  };
  return (
    <div>
      <GridBox {...styles}>{children}</GridBox>
    </div>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: '100%',
  padding: false,
  margin: false,
  bg: false
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  padding: ${(props) => (props.padding ? `${props.padding}` : '')};
  margin: ${(props) => (props.margin ? `${props.margin}` : '')};
  background-color: ${(props) => (props.bg ? `${props.bg}` : '')};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items:center; justify-content:space-between`
      : ''}
`;
export default Grid;
