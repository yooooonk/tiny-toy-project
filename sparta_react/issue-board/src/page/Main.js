import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueCard from '../components/IssueCard';
import { IssueApi } from '../shared/api';
import Header from '../components/Header';
import AddBox from '../components/AddBox';

const Main = (props) => {
  const { history, match } = props;
  useEffect(() => {
    console.log('실행');
    fetchIssue();
  }, []);

  const [issueList, setIssueList] = useState([]);
  const [page, setPage] = useState(1);

  const fetchIssue = async () => {
    try {
      const issue = await IssueApi.getIssues(page);
      setIssueList(issue.data);
      console.log(issue.data[0]);
      // setIssueList(issueList);
    } catch (error) {
      console.error(error);
      alert('목록을 가져올 수 없습니다');
    }
  };

  const onClickCard = (id) => {
    //history.pushState();
    console.log(props.match);
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
