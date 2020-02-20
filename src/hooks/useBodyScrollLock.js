import { useLayoutEffect } from 'react';

function useBodyScrollLock(props) {
  const originalOverflow = window.getComputedStyle(document.body).overflow;
  console.log(originalOverflow);

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

    // return function cleanup() {
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
}

export { useBodyScrollLock };
