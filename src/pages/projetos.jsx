import styles from "../styles/Projetos.module.css";

export async function getStaticProps() {
  const response = await fetch("https://api.github.com/users/lucas-bogos/repos");
  const data = await response.json();

  return {
    props: { 
      repositories: data
     }
  }
}
export default function projetos({ repositories }) {
  const getYearUpdated = (date) => {
    const yearUpdated = parseInt(date.slice(0, 4));
    return yearUpdated;
  }

  const getMonthUpdated = (date) => {
    const monthUpdated = parseInt(date.slice(6, 7));
    return monthUpdated;
  }

  return <>
    <h1 className={styles.title}>Projetos recentes</h1>
    <div className={styles.card_container}>
    {repositories.map((repo, index) => (
    <div>{repo.name !== "lucas-pixel" && getYearUpdated(repo.created_at) >= 2021 &&
      <div className={styles.card_repo} key={index}>
        <h3 className={styles.title}>{repo.name.replaceAll("-", " ")}</h3>
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