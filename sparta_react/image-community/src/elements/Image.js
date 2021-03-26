import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { shape, src, size } = props;
  const styles = {
    src,
    size
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles} />;
  }

  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles} />
      </AspectOutter>
    );
  }
};

Image.defaultProps = {
  shape: 'rectangle',
  src:
    'https://lh3.googleusercontent.com/proxy/MCgGmXjcM_iYuvWaK97dlU3aNCgvG6wP2S3R1UpXlAJbPrtVV-3UcM6L0uEm1wg2IPatBkZ7pdnkDtAoAjArNIarhMq_rgVUfHxVLY2JJhV2pOP74XKgArRRSImOwU3y85ZtCaa1_Z9dT7dvCOiPo8G6UH52KmU7vP4xptxlJLKOMHEP9ixIvf82Wqmg',
  size: 36
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
`;
const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 4px;
`;
export default Image;
