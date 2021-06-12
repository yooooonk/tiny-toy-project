import React from 'react';
import styled from 'styled-components';

const IssueCard = (props) => {
  const { data, _onClick } = props;
  const { number, title, comments, userName, created } = data;
  return (
    <Container onClick={_onClick}>
      <Info>
        <Title>
          #{number} {title}
        </Title>
        <Write>
          작성자:{userName}, 작성일:{created}
        </Write>
      </Info>
      <Comment>코멘트:{comments}</Comment>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 1rem;
  box-sizing: border-box;
  cursor: pointer;
`;
const Info = styled.section`
  width: 85%;
  justify-content: space-between;

  & div {
    margin: 0.1rem 0;
  }
`;
const Title = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.25rem;
`;

const Write = styled.div``;
const Comment = styled.section`
  display: flex;
  align-items: center;
  width: 15%;
`;
export default IssueCard;
