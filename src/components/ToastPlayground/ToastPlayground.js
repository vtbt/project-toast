import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastList, setToastList] = React.useState([]);

  function handlePopToast(event) {
    event.preventDefault();
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    setToastList([...toastList, newToast]);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  function handleDismissToast(toastId) {
    const newToastList = toastList.filter((toast) => toast.id !== toastId);
    setToastList(newToastList);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf
        toastList={toastList}
        handleDismissToast={handleDismissToast}
      />
      <form className={styles.controlsWrapper} onSubmit={handlePopToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={option} htmlFor={option}>
                <input
                  id={option}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === variant}
                  onChange={(event) => {
                    setVariant(event.target.value);
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
