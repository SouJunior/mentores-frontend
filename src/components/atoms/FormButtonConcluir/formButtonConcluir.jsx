import styles from '../FormButtonConcluir/FormButtonConcluir.module.scss'

export default function FormButtonConcluir({disabled}){
    return(
        <div className={styles.containerModal}>
        <div >
            <button disabled={disabled}  className={styles.concluir}
            type="submit">
                Concluir
            </button>
        </div>
    </div>
    )
}