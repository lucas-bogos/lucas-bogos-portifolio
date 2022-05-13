import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaUserAlt
} from "react-icons/fa";

import {
  MdWork
} from "react-icons/md";

import {
  AiFillHeart
} from "react-icons/ai";

export default function index() {
  const born = 2001;
  const yearCurrent = new Date().getFullYear();
  const monthCurrent = new Date().getMonth();
  let age = monthCurrent > 7 ? yearCurrent - born : (yearCurrent - born) - 1;

  return <>
    <div className={styles.home_container}>
      <div className={styles.informations}>
        <div className={styles.section_img}>
          <span className={styles.me}>
            <Image
              src="/images/lucas-bogos.jpeg"
              width="120"
              height="120"
              alt="programador-lucas-bogos"
            />
          </span>
        </div>
        <ul type="none">
          <li><FaUserAlt/> Lucas Bogos</li>
          <li><MdWork/> Full Stack Developer</li>
          <li><FaMapMarkerAlt/> Franco da Rocha - SP</li>
          <li><AiFillHeart /> {age} anos de idade</li>
        </ul>
      </div>
      <p className={styles.presentation}>Tenho uma paixão enorme por tecnologia, em especial, programação. Atualmente estou fazendo <strong>Freelance como programador</strong>, faço uso de boas práticas de desenvolvimento e arquitetura, em que seja legível para qualquer desenvolvedor que venha dar manutenção na <strong>aplicação ou site</strong>.</p>
      <Link href="/contato">
        <span className={styles.call_to_action}>
          <a>SOLICITAR ORÇAMENTO</a>
        </span>
      </Link>
    </div>
  </>
}