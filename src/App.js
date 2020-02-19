import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useMemo
} from 'react';
import Toggle from './components/Toggle';
// import Counter from './components/Counter';
import { useDocumentsTitle } from './hooks/useDocumentsTitle';

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useDocumentsTitle('');
  const submitBtn = useRef();

  const reverseWord = word => {
    console.log('Function called:', word);

    return word
      .split('')
      .reverse()
      .join('');
  };

  const title = 'Level Up Dishes';

  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  function handleChange(e) {
    setName(e.target.value);
    // console.log(submitBtn.current.classList.value);
  }

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className='main-wrapper'>
        <h1
          onClick={() => {
            submitBtn.current.classList.contains('new-fake-class')
              ? submitBtn.current.classList.remove('new-fake-class')
              : submitBtn.current.classList.add('new-fake-class');
          }}
        >
          {TitleReversed}
        </h1>

        <Toggle />

        {/* <br />
        <br />

        <Counter /> */}

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
    </UserContext.Provider>
  );
};

// function submitForm(value, setValue) {
//   const receiver = value !== '' ? value : 'somebody';

//   console.log(`Email to ${receiver} was sent!`);
//   setValue('');
// }

export default App;
