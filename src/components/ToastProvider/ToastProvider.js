import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  function addNewToast(newToast) {
    setToastList([...toastList, newToast]);
  }

  function handleDismissToast(toastId) {
    const newToastList = toastList.filter((toast) => toast.id !== toastId);
    setToastList(newToastList);
  }

  return (
    <ToastContext.Provider
      value={{ toastList, addNewToast, handleDismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
