import styles from '../../styles/Cadastro.module.scss'

export default function Cadastro (){
    return (
        <main className={styles.layout}>
        <div className={styles.boxLogin}>
            <div className={styles.login}>
            <p className={styles.title}>Sou <b>Junior</b></p>
            <p className={styles.indica}> <span className={styles.asteristico}>*</span> Indica um campo obrigatório</p>
            <p className={styles.nomes}>Nome completo <span className={styles.asteristico}>*</span></p>
            <div className={styles.botoes}>
            <input className={styles.inputs} placeholder='Preencha com seu nome aqui'></input>
            </div>
            <p className={styles.nomes}>Data de nascimento<span className={styles.asteristico}>*</span></p>
            <div className={styles.botoes}>
            <input className={styles.inputs} placeholder='Preencha com seu nome aqui' type='date'></input>
            </div>
            </div>
        </div>
        </main>
    )
}
