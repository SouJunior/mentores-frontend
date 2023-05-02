import styles from '../FormEmail/FormEmail.module.scss'

export default function FormEmail () {
    return (
    <div className={styles.botoes}>
        <input className={styles.inputs} placeholder='  Preencha com seu email aqui' type='email'></input>
    </div>
    )
}