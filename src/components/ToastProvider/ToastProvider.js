import React from 'react';
import { useEscapeKey } from '../../hooks';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  function addNewToast(newToast) {
    setToastList([...toastList, newToast]);
  }

  function handleDismissToast(toastId) {
    // without toastId we will dismiss all toasts
    if (toastId === undefined) {
      setToastList([]);
      return;
    }
    const newToastList = toastList.filter((toast) => toast.id !== toastId);
    setToastList(newToastList);
  }

  useEscapeKey(handleDismissToast);

  return (
    <ToastContext.Provider
      value={{ toastList, addNewToast, handleDismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
