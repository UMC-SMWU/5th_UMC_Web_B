import styles from './InputValidator.module.css';

export default function InputValidator({ condition, message, value }) {
  if (value !== '' && !condition)
    return <div className={styles.message}>{message}</div>;
  return null;
}
