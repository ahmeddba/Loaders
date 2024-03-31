import React from 'react';
import './Load.css';

const Load = () => {
  return (
    <div className="load-container">
      <div className="load-background"></div>
      <div className="load-inner-container">
        <div className="load-shapes-container">
          <div className="load-shape">
            <div className="shape1">
              <span className='icon1'></span>
              <span className='icon2'></span>
            </div>
            <div className="shape2">
              <span className='icon1'></span>
              <span className='icon2'></span>
            </div>
            <div className="shape3">
              <span className='icon1'></span>
              <span className='icon2'></span>
            </div>
            <div className="shape4">
              <span className='icon1'></span>
              <span className='icon2'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Load;
