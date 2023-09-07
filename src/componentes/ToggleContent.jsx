import React, { useState } from 'react';

const ToggleContent = (props) => {
  const { title, children } = props;
  const [isContentVisible, setContentVisibility] = useState(true);

  const toggleContentVisibility = () => {
    setContentVisibility(!isContentVisible);
  };

  return (
    <div className='toggle-content'>
      <div onClick={toggleContentVisibility}>{title}</div>
      {isContentVisible && <div>{children}</div>}
    </div>
  );
};

export default ToggleContent;
