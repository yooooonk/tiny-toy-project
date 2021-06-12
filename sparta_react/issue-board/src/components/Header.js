import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = (props) => {
  const { url } = props;
  const [organization, setOrganization] = useState('');
  const [repository, setRepository] = useState('');

  useEffect(() => {
    const org = url.split('/')[1];
    const orgUpper = org.charAt(0).toUpperCase() + org.slice(1);
    setOrganization(orgUpper);

    const rep = url.split('/')[2];

    const repUpper = rep.charAt(0).toUpperCase() + rep.slice(1);
    setRepository(repUpper);
  }, []);

  return (
    <Container>
      {organization}/{repository}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.75rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

export default Header;
