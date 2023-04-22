import styles from "../styles/Projetos.module.css";
import { getYearUpdated } from "../utils";

export async function getStaticProps() {
  const BASE_URL = "https://api.github.com/users/lucas-bogos";
  const SIX_HOURS = 60 * 60 * 6;

  const response = await fetch(`${BASE_URL}/repos`);
  const data = await response.json();

  return {
    props: {
      repositories: data
    },
    revalidate: SIX_HOURS
  }
}

export default function projetos({ repositories }) {
  return <>
    <h1 className={styles.title}>Projetos recentes</h1>
    <div className={styles.card_container}>
      {repositories.map((repo, index) => (
        <div>{
          repo.name !== "lucas-bogos-portifolio"
          && repo.name !== "lucas-bogos"
          && repo.name !== "email-marketing"
          && getYearUpdated(repo.created_at) >= 2021 &&
          <div className={styles.card_repo} key={index}>
            <h3 className={styles.title}>{repo.name.replace(/-/g, " ")}</h3>
            <p>Descrição: {repo.description}</p>
            <div className={`${styles.stack} ${styles[repo.language]}`}>
              <p>{repo.language}</p>
            </div>
            <div className={styles.cta_container}>
              <a href={`https://github.com/${repo.full_name}`} target="_blank">
                <span className={styles.cta}>
                  Saiba mais
                </span>
              </a>
            </div>
          </div>
        }</div>
      ))}</div>
  </>
}
