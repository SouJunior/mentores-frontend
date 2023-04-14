import styles from './formCard.module.scss';
import Image from 'next/image';
import Checkbox from "../Checkbox/checkbox";

export default function FormCard(props) {
  return (
    <div>
      <form className={styles.formCard}>
        <Image
          src="LogoSouJunior.svg"
          alt="Logo SouJunior"
          width={263}
          height={39.47}
        />

        <h1 className={styles.titulo}>Bem-vindo de volta</h1>

        <h2 className={styles.texto}>E-mail</h2>
        <input type="email" id="email" className={styles.email} />

        <h2 className={styles.texto}>Senha</h2>
        <input type="password" id="senha" className={styles.senha} />

        <label>
          <Checkbox />
          <a href="#" className={styles.link}>Esqueci a senha</a>
        </label>


        <button type='button' className={styles.botao}>Entrar</button>

        <p className={styles.texto}>
          Ainda não possui cadastro?{' '}
          <a href="#" className={styles.link}>Cique aqui e cadastre-se</a>
        </p>

      </form>
    </div>

  )
}