import styles from '../FormDate/FormDate.module.scss'

export default function FormDate(){
    return(
    <div className={styles.botoes}>
        <input className={styles.date} type='date' placeholder='  dd/mm/aa' ></input>
    </div>
    )
}