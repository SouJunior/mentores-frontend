import styles from '../FormEmailRevalidation/FormEmailRevalidation.module.scss'

export default function FormEmailRevalidation(){
    return(
<div className={styles.botoes}>
    <input className={styles.inputs} placeholder='  Preencha com seu email novamente' type='email' ></input>
</div>
    )
}