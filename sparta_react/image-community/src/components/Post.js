import React from 'react';

const Post = (props) => {
  return (
    <div>
      <div>헤더 - 사용자 사진, 이름, 게시글작성날짜, 수정버튼</div>
      <div>contents</div>
      <div>사진</div>
      <div>댓글</div>
    </div>
  );
};

Post.defaultProps = {
  userInfo: {
    userName: 'yoonk',
    userProfile: ''
  },
  imageUrl: '',
  contents: '',
  commentCnt: 10,
  insertDt: '2021-03-26'
};

export default Post;
