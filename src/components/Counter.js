import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + action.value
      };
    case 'MINUS':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: initialState.count
      };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: 'MINUS' })}>-</button>&nbsp;
      <button onClick={() => dispatch({ type: 'ADD', value: 10 })}>+</button>
      &nbsp;
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default Counter;
