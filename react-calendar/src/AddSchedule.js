import React from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const AddSchedule = ({ history }) => {
  return (
    <div>
      <Header>
        <MdChevronLeft
          onClick={() => {
            history.goBack();
          }}
        />
        Add Schedule
        <i />
      </Header>
    </div>
  );
};

const Header = styled.div`
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3px;

  font-size: 1.5em;

  & * {
    color: #cccccc;
  }
`;
export default AddSchedule;
