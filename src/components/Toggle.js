import React, { useState } from 'react';

const Toggle = () => {
  const [status, setStatus] = useState(false);

  function toggle() {
    setStatus(!status);
  }

  return (
    <div>
      <button onClick={() => toggle()}>Toggle {status ? 'ON' : 'OFF'}</button>
      {status && <h2>Hello!</h2>}
    </div>
  );
};

export default Toggle;
