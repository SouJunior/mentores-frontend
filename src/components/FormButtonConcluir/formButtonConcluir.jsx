import styles from '../FormButtonConcluir/FormButtonConcluir.module.scss'

export default function FormButtonConcluir(){
    return(
        <div className={styles.containerModal}>
        <div >
            <button className={styles.concluir}
            type="submit"
            onClick={() => setshowModal(true)}>
                Concluir
            </button>
        </div>
    </div>
    )
}