import React, { useState } from 'react';
import DishForm from './DishForm';

const Toggle = () => {
  const [status, setStatus] = useState(false);

  function toggle() {
    setStatus(!status);
  }

  return (
    <div>
      <button onClick={() => toggle()}>Toggle {status ? 'ON' : 'OFF'}</button>
      <br />
      <br />
      <hr />
      {/* {status && <h2>Hello!</h2>} */}

      {status && <DishForm />}
    </div>
  );
};

export default Toggle;
