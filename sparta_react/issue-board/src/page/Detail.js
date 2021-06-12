import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import IssueCard from '../components/IssueCard';
import Header from '../components/Header';
import { issueActions } from '../redux/modules/issue';
const Detail = (props) => {
  const { detail } = useSelector((state) => state.issue);
  console.log(detail);
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
        <img src={detail[0].user.avatar_url} alt="writer" />
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
