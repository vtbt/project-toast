import React from 'react';

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.key === 'Escape') {
        callback();
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [callback]);
};
//   Adding the callback parameter to the dependency array silences the warning.

// The one downside is that it's likely that this callback is being regenerated on every render. We can solve that with useCallback:
// const handleEscape = React.useCallback(() => {
//   setToasts([]);
// }, []);

// useEscapeKey(handleEscape);

// instead
// useEscapeKey(() => setToasts([]));
