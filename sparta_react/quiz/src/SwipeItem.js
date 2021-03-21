import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import tory from './asset/tory1.jpg';

const SwipeItem = React.memo(({ onSwipe }) => {
  const swipeDiv = useRef(null);
  let swipeStatus = 'ready';
  let targetClassName = '';
  let coordinate = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0
  };

  useEffect(() => {
    const reset = () => {
      swipeStatus = 'ready';
      coordinate = {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
      };

      swipeDiv.current.className = targetClassName;
      swipeDiv.current.style.left = 0 + 'px';
      swipeDiv.current.style.top = 0 + 'px';
    };

    const touchStart = (e) => {
      swipeStatus = 'touchstart';
      targetClassName = swipeDiv.current.className;

      coordinate = {
        ...coordinate,
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY
      };
    };

    const touchEnd = (e) => {
      swipeStatus = 'touchend';
      targetClassName = swipeDiv.current.className;

      coordinate = {
        ...coordinate,
        endX: e.changedTouches[0].clientX,
        endY: e.changedTouches[0].clientY
      };

      let diffX = coordinate.endX - coordinate.startX;
      let direction = 'left';
      if (Math.abs(diffX) > 50) {
        swipeDiv.current.className = targetClassName + ' swipe';
      }

      if (diffX > 0) {
        direction = 'right';
        swipeDiv.current.style.left = diffX + 150 + 'px';
        swipeDiv.current.style.opacity = 0;
      } else {
        direction = 'left';
        swipeDiv.current.style.left = diffX - 150 + 'px';
        swipeDiv.current.style.opacity = 0;
      }

      window.setTimeout(() => {
        reset();
        onSwipe(direction);
      }, 300);
      //reset();
    };
    const touchMove = (e) => {
      e.preventDefault();

      let currentCoordinate = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
      swipeDiv.current.style.left =
        currentCoordinate.x - coordinate.startX + 'px';
      swipeDiv.current.style.top =
        currentCoordinate.y - coordinate.startY + 'px';
    };
    const touchCancel = (e) => {
      console.log('zostmf');
      swipeStatus = 'cancel';
      reset();
    };

    swipeDiv.current.addEventListener('touchstart', touchStart);
    swipeDiv.current.addEventListener('touchmove', touchMove);
    swipeDiv.current.addEventListener('touchend', touchEnd);
    swipeDiv.current.addEventListener('touchcancel', touchCancel);

    return () => {
      // 초기회

      if (!swipeDiv.current) {
        return;
      }
      swipeDiv.current.removeEventListener('touchstart', touchStart);
      swipeDiv.current.removeEventListener('touchmove', touchMove);
      swipeDiv.current.removeEventListener('touchend', touchEnd);
      swipeDiv.current.removeEventListener('touchcancel', touchStart);
    };
  }, []); // 처음 한번만 []
  return (
    <DragItem ref={swipeDiv}>
      <Img />
    </DragItem>
  );
});

const DragItem = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;
  &.swipe {
    transition: 300ms;
  }
`;

const Img = styled.div`
  background-image: url(${tory});
  background-size: 100%;
  background-position-y: center;
  border-radius: 50%;
  width: 35vw;
  height: 35vw;
`;

SwipeItem.defaultProps = {
  onSwipe: () => {}
};
export default SwipeItem;
