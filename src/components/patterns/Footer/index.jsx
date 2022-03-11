import Link from "next/link";
import styles from "./Footer.module.css";

export default () => {
  return <footer className={styles.footer}>
    <p>Build with &hearts; by <Link href="https://github.com/lucas-bogos">
      <a>Lucas Bogos</a>
    </Link></p>
  </footer>
}