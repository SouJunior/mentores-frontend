import Image from 'next/image';
import styles from './inputEmail.module.scss'

export default function InputEmail() {
  return (
    <div className={styles.container}>
      <span className={styles.image}></span>
      <input className={styles.input} type="email" placeholder="mentorsoujunior@gmail.com" />
    </div>
  )
}