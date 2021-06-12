import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueCard from '../components/IssueCard';
import { IssueApi } from '../shared/api';
import Header from '../components/Header';
import AddBox from '../components/AddBox';
import { useDispatch, useSelector } from 'react-redux';
import { issueActions } from '../redux/modules/issue';

const Main = (props) => {
  const { history, match } = props;

  const dispatch = useDispatch();
  const { issueList } = useSelector((state) => state.issue);

  useEffect(() => {
    dispatch(issueActions.fetchIssues());
  }, []);

  const onClickCard = async (id) => {
    await dispatch(issueActions.setDetailIssue(id));
    history.push(`${match.url}issue/${id}`);
  };

  const issueListComponent = issueList.map((i, idx) => {
    const data = {
      number: i.number,
      title: i.title,
      comments: i.comments,
      userName: i.user.login,
      created: i.created_at
    };
    return (
      <IssueCard _onClick={() => onClickCard(i.id)} data={data} key={idx} />
    );
  });

  return (
    <div>
      <Header url={props.match.url} />
      {issueListComponent}
    </div>
  );
};

export default Main;
