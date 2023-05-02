import styles from '../FormButtonDescarta/FormButtonDescarta.module.scss'

export default function FormButtonDescarta(){
    return(
        <div className={styles.containerModal}>
        <div >
            <button className={styles.cancelar}
            type="submit"
            onClick={() => setshowSeconModal(true)}>
                Cancelar
            </button>
        </div>
    </div>
    )
}