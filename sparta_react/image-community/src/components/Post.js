import React from 'react';
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import { Grid, Image, Text } from '../elements';

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: 'yoonk',
    user_profile:
      'https://lh3.googleusercontent.com/proxy/MCgGmXjcM_iYuvWaK97dlU3aNCgvG6wP2S3R1UpXlAJbPrtVV-3UcM6L0uEm1wg2IPatBkZ7pdnkDtAoAjArNIarhMq_rgVUfHxVLY2JJhV2pOP74XKgArRRSImOwU3y85ZtCaa1_Z9dT7dvCOiPo8G6UH52KmU7vP4xptxlJLKOMHEP9ixIvf82Wqmg'
  },
  image_url:
    'https://lh3.googleusercontent.com/proxy/MCgGmXjcM_iYuvWaK97dlU3aNCgvG6wP2S3R1UpXlAJbPrtVV-3UcM6L0uEm1wg2IPatBkZ7pdnkDtAoAjArNIarhMq_rgVUfHxVLY2JJhV2pOP74XKgArRRSImOwU3y85ZtCaa1_Z9dT7dvCOiPo8G6UH52KmU7vP4xptxlJLKOMHEP9ixIvf82Wqmg',
  contents: '헤이헤이헤이!!',
  comment_cnt: 10,
  insert_dt: '2021-03-26'
};

export default Post;
