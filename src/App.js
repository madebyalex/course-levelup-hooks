import React, { useState, useEffect, useRef } from 'react';
import Toggle from './components/Toggle';
import { useDocumentsTitle } from './hooks/useDocumentsTitle';

const App = () => {
  const [name, setName] = useDocumentsTitle('');
  const submitBtn = useRef();
  const [dishes, setDishes] = useState([]);

  function handleChange(e) {
    setName(e.target.value);
  }

  const fetchDishes = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
    );
    const data = await res.json();
    setDishes(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchDishes();
  }, []);

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
        }}
      >
        <input type='text' onChange={handleChange} value={name} />

        <button className='btn-submit' ref={submitBtn} type='submit'>
          Submit
        </button>
      </form>

      {dishes.map(dish => (
        <article key={dish.name} className='dish-card dish-card--withImage'>
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className='ingredients'>
            {dish.ingredients.map(ingredient => (
              <span key={ingredient}>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default App;
