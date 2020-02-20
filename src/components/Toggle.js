import React, { useState } from 'react';
import DishForm from './DishForm';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  function toggle() {
    setIsToggled(!isToggled);
  }

  return (
    <div>
      {isToggled ? (
        <DishForm setToggle={setIsToggled} />
      ) : (
        <button onClick={() => toggle()}>
          {isToggled ? 'Close' : 'Show'} the form
        </button>
      )}
    </div>
  );
};

export default Toggle;
