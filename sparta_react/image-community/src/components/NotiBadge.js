import React, { useEffect, useState } from 'react';
import { Badge } from '@material-ui/core';
import { MdNotifications } from 'react-icons/md';
import { realtime } from '../shared/firebase';
import { useSelector } from 'react-redux';
const NotiBadge = (props) => {
  const { _onClick } = props;

  const { uid } = useSelector((state) => state.user.user);
  const [isRead, setIsRead] = useState(true);
  const notiCheck = () => {
    const notiDB = realtime.ref(`noti/${uid}`);
    notiDB.update({ read: true });
    _onClick();
  };

  useEffect(() => {
    const notiDB = realtime.ref(`noti/${uid}`);
    notiDB.on('value', (snapshot) => {
      setIsRead(snapshot.val().read);
    });
    return () => {
      notiDB.off(); // 구독해지
    };
  }, []);
  return (
    <div>
      {/*<Badge badgeContent={1000} max={100} /> */}
      <Badge
        color="secondary"
        variant="dot"
        invisible={isRead}
        onClick={notiCheck}
      >
        <MdNotifications />
      </Badge>
    </div>
  );
};

NotiBadge.defaultProps = {
  _onClick: () => {}
};

export default NotiBadge;
