import React, { useRef } from 'react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

const DishForm = ({ setToggle }) => {
  useBodyScrollLock();

  const ref = useRef();

  useOnClickOutside(ref, () => setToggle(false));

  return (
    <div className='dish-card' ref={ref}>
      <form>
        <div className='form-row'>
          <label htmlFor='name'>Name</label>
          <input id='name' type='text' />
        </div>
      </form>
    </div>
  );
};

export default DishForm;
