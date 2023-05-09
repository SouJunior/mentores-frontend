import styles from '../FormButtonConcluir/FormButtonConcluir.module.scss'

export default function FormButtonConcluir(){
    return(
        <div className={styles.containerModal}>
        <div >
            <button className={styles.concluir}
            type="submit">
                Concluir
            </button>
        </div>
    </div>
    )
}