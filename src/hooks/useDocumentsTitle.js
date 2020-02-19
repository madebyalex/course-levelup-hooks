import { useState, useEffect, useDebugValue } from 'react';

function useDocumentsTitle(initialValue) {
  const [value, setValue] = useState('');

  useEffect(() => {
    document.title = value;
  });

  useDebugValue(value.length > 0 ? 'Full' : 'Empty');

  return [value, setValue];
}

export { useDocumentsTitle };
