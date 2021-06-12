import React from 'react';
import styled from 'styled-components';

const IssueCard = () => {
  return (
    <Container>
      <Info>
        <div>#111 issuetitle</div>
        <div>작성자:name, 작성일:1231233</div>
      </Info>
      <Comment></Comment>
    </Container>
  );
};

const Container = styled.div``;
const Info = styled.section``;
const Comment = styled.section``;
export default IssueCard;
