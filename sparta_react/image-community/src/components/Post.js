import React from 'react';
import { Grid, Image, Text } from '../elements';

const Post = (props) => {
  const { userInfo, imageUrl, contents, commentCnt, insertDt } = props;
  return (
    <div>
      <Grid padding="16px">
        <Grid is_flex>
          <Image shape="circle" src={userInfo.userProfile} />
          <Text bold>{userInfo.userName}</Text>
          <Text bold>{insertDt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={imageUrl} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {commentCnt}개</Text>
        </Grid>
      </Grid>
    </div>
  );
};

Post.defaultProps = {
  userInfo: {
    userName: 'yoonk',
    userProfile:
      'https://lh3.googleusercontent.com/proxy/MCgGmXjcM_iYuvWaK97dlU3aNCgvG6wP2S3R1UpXlAJbPrtVV-3UcM6L0uEm1wg2IPatBkZ7pdnkDtAoAjArNIarhMq_rgVUfHxVLY2JJhV2pOP74XKgArRRSImOwU3y85ZtCaa1_Z9dT7dvCOiPo8G6UH52KmU7vP4xptxlJLKOMHEP9ixIvf82Wqmg'
  },
  imageUrl:
    'https://lh3.googleusercontent.com/proxy/MCgGmXjcM_iYuvWaK97dlU3aNCgvG6wP2S3R1UpXlAJbPrtVV-3UcM6L0uEm1wg2IPatBkZ7pdnkDtAoAjArNIarhMq_rgVUfHxVLY2JJhV2pOP74XKgArRRSImOwU3y85ZtCaa1_Z9dT7dvCOiPo8G6UH52KmU7vP4xptxlJLKOMHEP9ixIvf82Wqmg',
  contents: '헤이헤이헤이!!',
  commentCnt: 10,
  insertDt: '2021-03-26'
};

export default Post;
