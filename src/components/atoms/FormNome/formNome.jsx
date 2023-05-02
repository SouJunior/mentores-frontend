import styles from '../FormNome/FormNome.module.scss'

export default function FormNome (){
    return (
    <div className={styles.botoes}>
        <input className={styles.inputs} placeholder='  Preencha com seu nome aqui' type='text'></input>
    </div>
    )
}