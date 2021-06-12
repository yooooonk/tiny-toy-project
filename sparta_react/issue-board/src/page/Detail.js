import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import IssueCard from '../components/IssueCard';
import Header from '../components/Header';
import { issueActions } from '../redux/modules/issue';
const Detail = (props) => {
  const { detail } = useSelector((state) => state.issue);
  const i = detail[0];
  console.log(i);
  const data = {
    number: i.number,
    title: i.title,
    comments: i.comments,
    userName: i.user.login,
    created: i.created_at
  };
  return (
    <Container>
      <Header url={props.match.url} />
      <Info>
        <img src={i.user.avatar_url} alt="writer" />
        <IssueCard data={data} />
      </Info>
      <Body>{i.body}</Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Info = styled.section`
  display: flex;

  & img {
    width: 10%;
    height: 10%;
  }
`;

const Img = styled.img``;

const Body = styled.section``;

export default Detail;
