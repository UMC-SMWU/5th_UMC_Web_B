import { useState } from 'react';
import Ad from './Ad';

export default function AdPage() {
  const [isShow, setIsShowed] = useState(true);
  const handleToggleClick = () => {
    setIsShowed((prev) => !prev);
  };

  return (
    <>
      <Ad isShow={isShow} />
      <button onClick={handleToggleClick}>
        {isShow ? '광고 안 보기' : '광고 보기'}
      </button>
    </>
  );
}
