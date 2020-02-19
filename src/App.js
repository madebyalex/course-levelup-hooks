import React, { useState, useEffect, useRef } from 'react';
import Toggle from './components/Toggle';
import { useDocumentsTitle } from './hooks/useDocumentsTitle';

const App = () => {
  const [name, setName] = useDocumentsTitle('');
  const submitBtn = useRef();

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className='main-wrapper'>
      <h1
        onClick={() => {
          submitBtn.current.classList.contains('new-fake-class')
            ? submitBtn.current.classList.remove('new-fake-class')
            : submitBtn.current.classList.add('new-fake-class');
        }}
      >
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

export default App;
