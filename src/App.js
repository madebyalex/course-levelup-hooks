import React, { useState } from 'react';
import Toggle from './components/Toggle';

const App = () => {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className='main-wrapper'>
      <h1>Level Up Dishes</h1>

      <Toggle />

      <br />
      <br />

      {name && (
        <p>
          <strong>Orders for: </strong>
          {name}
        </p>
      )}

      <input type='text' onChange={handleChange} value={name} />
    </div>
  );
};

export default App;
