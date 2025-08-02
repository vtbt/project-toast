import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastList, handleDismissToast }) {
  return (
    <ol className={styles.wrapper}>
      {toastList.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            variant={variant}
            handleDismissToast={() => handleDismissToast(id)}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
