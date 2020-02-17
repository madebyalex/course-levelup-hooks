import React, { useState, useEffect, useRef } from 'react';
import Toggle from './components/Toggle';
import { useDocumentsTitle } from './hooks/useDocumentsTitle';

const App = () => {
  const [name, setName] = useDocumentsTitle('');
  const submitBtn = useRef();

  function handleChange(e) {
    setName(e.target.value);
    console.log(submitBtn.current.classList.value);
  }

  return (
    <div className='main-wrapper'>
      <h1 onClick={() => submitBtn.current.classList.add('new-fake-class')}>
        Level Up Dishes
      </h1>

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
          // submitForm(name, setName);
        }}
      >
        <input type='text' onChange={handleChange} value={name} />

        <button className='btn-submit' ref={submitBtn} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

// function submitForm(value, setValue) {
//   const receiver = value !== '' ? value : 'somebody';

//   console.log(`Email to ${receiver} was sent!`);
//   setValue('');
// }

export default App;
