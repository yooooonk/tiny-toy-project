import React from 'react';
import { useSelector } from 'react-redux';
import { apiKey } from './firebase';

const Permit = (props) => {
  const { is_login } = useSelector((state) => state.user);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key);

  if (is_session && is_login) {
    return <div>{props.children}</div>;
  }
  return null;
};

export default Permit;
