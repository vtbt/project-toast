import React from 'react';

export const useEscapeKey = (callbackFn) => {
  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.key === 'Escape') {
        callbackFn();
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [callbackFn]);
};
