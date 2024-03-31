import React, { useEffect, useState } from 'react';
import './Load1.css';
import Load2 from './Load2';

const Load1 = () => {
  const [rerenderCount, setRerenderCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRerenderCount(prevCount => prevCount + 1);
    }, 4500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="parent1">
        {/* ... */}
        <Load2 key={rerenderCount} />
      </div>
    </>
  );
};

export default Load1;
