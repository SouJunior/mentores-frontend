import styles from '../InputEmail/inputEmail.module.scss'


export default function InputEmail({setEmail, email}) {

  return (
    <div className={styles.container}>
      <span className={styles.image}></span>
      <input className={styles.input} type="email" placeholder="mentorsoujunior@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
  )
}