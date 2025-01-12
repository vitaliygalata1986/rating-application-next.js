import styles from './Button.module.css';

function Button({ tag, children }: ButtonProps) {
  return (
    <>
      <button className={styles.h1}>{children}</button>
    </>
  );
}

export default Button;
