import styles from "../styles/utils.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <div class={styles.container}>
      <h1 className={styles.header}>404 - Not Found</h1>
      <p className={styles.text}>The page you are looking for does not exist.</p>
      <Link className={styles.text} href="/">Go To Home</Link>
    </div>
  );
}
