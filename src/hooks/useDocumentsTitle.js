import { useState, useEffect } from 'react';

function useDocumentsTitle(initialValue) {
  const [value, setValue] = useState('');

  useEffect(() => {
    document.title = value;
  });

  return [value, setValue];
}

export { useDocumentsTitle };
