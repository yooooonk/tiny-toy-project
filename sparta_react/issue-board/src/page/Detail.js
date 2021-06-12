import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import IssueCard from '../components/IssueCard';
import Header from '../components/Header';
const Detail = (props) => {
  const { match } = props;
  const { issueList } = useSelector((state) => state.issue);
  let issue;
  useEffect(() => {
    const issue = issueList.filter((i) => {
      return i.id === parseInt(match.params.id);
    });
  }, []);
  console.log(issueList);
  /* const data = {
    number: i.number,
    title: i.title,
    comments: i.comments,
    userName: i.user.login,
    created: i.created_at
  }; */
  return (
    <Container>
      <Header url={props.match.url} />
      <Info>
        <img src="" alt="writer" />
        {/* <IssueCard /> */}
      </Info>
      <Body>내요오옹</Body>
    </Container>
  );
};

const Container = styled.div``;
const Info = styled.section``;

const Img = styled.img``;

const Body = styled.section``;

export default Detail;
