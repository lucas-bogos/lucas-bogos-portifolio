import styles from "../styles/Agradecimento.module.css";
import Image from "next/image";

export default function agradecimento() {
  return <div className={styles.agradecimento}>
    <h1>Obrigado pelo contato!</h1>
    <p>Devido à várias requisições diariamente, a resposta de seu contato <strong>poderá levar até 72h</strong>.</p>
    <Image
      src="/images/thank-you.jpg"
      width="300"
      height="300"
      alt="lucas-bogos-agradece-pelo-contato"
    />
  </div>
}
