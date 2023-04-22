import styles from "./Menubar.module.css";
import Link from "next/link";

export default function Menubar() {
  return <header className={styles.menubar}>
    <div>
      <Link href="/">
        <a>
          <i className={`fi fi-rr-bold ${styles.logo}`} />
        </a>
      </Link>
    </div>
    <nav className={styles.items_container}>
      <ul>
        <li>
          <Link href="/">
            <a>Começo</a>
          </Link>
        </li>
        <li>
          <Link href="/projetos">
            <a>Projetos</a>
          </Link>
        </li>
        <li>
          <Link href="https://lucasbogos.com/">
            <a target="_blank">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="contato">
            <a>Contato</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
}
