import React from 'react';
import { useRecoilValue, selector } from 'recoil';

import { textState } from './TextInput';


const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCounter() {
  
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default CharacterCounter;