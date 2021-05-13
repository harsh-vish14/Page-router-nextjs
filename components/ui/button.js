import Link from "next/link";
import styles from "./button.module.css";
const Button = ({ url, children }) => {
  return (
    <Link href={url}>
      <a className={styles.btn}>{children}</a>
    </Link>
  );
};

export default Button;
