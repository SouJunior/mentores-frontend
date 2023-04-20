import styles from './checkbox.module.scss';

export default function Checkbox(props) {
  return (
    <label className={styles.container}>Me manter conectado
      <input type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  )
}