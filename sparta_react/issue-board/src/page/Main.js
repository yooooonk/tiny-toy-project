import React, { useEffect } from 'react';
import styled from 'styled-components';
import IssueCard from '../components/IssueCard';
import { IssueApi } from '../shared/api';

const Main = () => {
  useEffect(() => {
    console.log('실행');
    fetchIssue();
  });

  const fetchIssue = async () => {
    const issue = await IssueApi.getIssues();
    console.log(issue);
  };
  return (
    <div>
      <IssueCard></IssueCard>
    </div>
  );
};

export default Main;
