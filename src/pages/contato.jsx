import styles from "../styles/Contato.module.css";

export default function contato() {
  return <div className={styles.contact_container}>
    <h1>Solicite um serviço</h1>
    <div className={styles.contact}>
      <form action="https://formsubmit.co/bogoslucas1@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="Novo contato para trabalho" />
        <input type="hidden" name="_next" value="https://lucas-bogos.vercel.app/agradecimento"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <div><input
          type="text"
          name="name"
          minLength="8"
          placeholder="Nome completo"
          required />
        </div>
        <div><input
          type="email"
          name="email"
          placeholder="Seu email"
          required />
        </div>
        <div><input
          type="tel"
          name="tel"
          placeholder="Telefone"
        /></div>
        <div><textarea
          cols="30"
          rows="5"
          name="message"
          placeholder="Detalhe sua solicitação com no máximo 150 caracteres">
        </textarea></div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
}
