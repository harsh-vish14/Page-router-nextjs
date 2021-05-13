import Link from "next/link";
import styles from "./button.module.css";
const Button = ({ url, children, onClick }) => {
  return url ? (
    <Link href={url}>
      <a className={styles.btn}>{children}</a>
    </Link>
  ) : (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
