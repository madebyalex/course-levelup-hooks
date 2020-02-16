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

      <form
        onSubmit={e => {
          e.preventDefault();
          submitForm(name, setName);
        }}
      >
        <input type='text' onChange={handleChange} value={name} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

function submitForm(value, setValue) {
  const receiver = value !== '' ? value : 'somebody';

  console.log(`Email to ${receiver} was sent!`);
  setValue('');
}

export default App;
