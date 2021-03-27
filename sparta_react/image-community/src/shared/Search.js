import React from 'react';
import _ from 'lodash';
const Search = () => {
  /* 함수형 컴포넌트의 특징 
    - debounse, throttle을 onChnage안에서 발생시키면? d잘 작동함
    - text, setText를 이용하면? state값이 바뀌면 계속 리렌더링이 됨
    - 이럴 때 쓰는게 useCallback!! : 함수를 memoigation해서 컴포넌트를 재렌더링하더라고
    함수는 렌더링하지않음
    
*/
  const [text, setText] = React.useState('');

  const debounce = _.debounce((e) => {
    console.log('debounce', e.target.value);
  }, 1000);

  const throttle = _.throttle((e) => {
    console.log('throttle', e.target.value);
  }, 1000);

  const keyPress = React.useCallback(debounce, []);
  const onChagne = (e) => {
    setText(e.target.value);
    setText(e.target.value);
    keyPress(e);
    throttle(e);
  };

  return (
    <div>
      <input type="text" onChange={onChagne} />
    </div>
  );
};

export default Search;
