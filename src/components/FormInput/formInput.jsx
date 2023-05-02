import styles from '../FormInput/Cadastro.module.scss'
import FormNome from '../FormNome/formNome'
import ForEmail from '../FormEmail/formEmail'
import FormSenha from '../FormSenha/formSenha'
import FormEmailRevalidation from '../FormEmailRevalidation/formEmailRevalidation'
import FormPasswordRevalidation from '../FormPasswordRevalidation/formPasswordRevalidation'
import FormDate from '../FormDate/formDate'
import FormButtonDescarta from '../FormButtonDescarta/formButtonDescarta'
import FormButtonConcluir from '../FormButtonConcluir/formButtonConcluir'
import Image from 'next/image'
import { useForm } from 'react-hook-form' 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React, {useState} from "react";

const schema = yup.object({
    nome: yup.
    string().
    required("Campo obrigatório"),
    data: yup.
    string().
    required("Campo obrigatório"),
    email: yup.
    string().
    email().
    required("E-mail inválido"),
    Confemail:yup.
    string().
    required("E-mail inválido").
    oneOf([yup.ref("email")], "Os campos informados não coincidem "),
    senha:yup.
    string().
    max(8).
    required("senha inválida"),
    Confsenha: yup.
    string().
    required("senha inválida").
    oneOf([yup.ref("senha")], "Os campos informados não coincidem "),
  }).required();

export default function FormInput (props){
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const [showModal, setshowModal] = useState(false);
    const [showSecondModal, setshowSeconModal] = useState(false);
    const [TermodModal, setTermoModal] = useState(false);
    const [showTermodModal, setshowTermoModal] = useState(false);
    const [senhaModal, setsenhaModal] = useState(false);

    function createUser(data){console.log(data)}
    return(
        <main className={styles.layout}>
    <div className={styles.boxLogin}>
    <form className={styles.login} onSubmit={handleSubmit(createUser)}>
        <Image className= {styles.souj}
                src="/LogoSJ.svg"
                    alt="logo"
                    width={100}
                    height={200}
            />
        <p className={styles.nomes}>Nome completo<span className={styles.asteristico}>*</span></p>
            <FormNome {...register("nome",{required:true})}/>
            {errors.nome && <span className={styles.error}>{errors.nome?.message}</span>}
        <p className={styles.nomes}>Data de nascimento<span className={styles.asteristico}>*</span></p>
            <FormDate {...register("data",{required:true})}/>
            {errors.data && <span className={styles.error}>{errors.data?.message}</span>}
        <p className={styles.nomes}>E-mail<span className={styles.asteristico}>*</span></p>
            <ForEmail {...register("email",{required:true})}/>
            {errors.email && <span className={styles.error}>{errors.email?.message}</span>}
        <p className={styles.nomes}> Confirma e-mail<span className={styles.asteristico}>*</span></p>    
            <FormEmailRevalidation {...register("Confemail",{required:true})}/>
            {errors.Confemail && <span className={styles.error}>{errors.Confemail?.message}</span>}
        <p className={styles.nomes}>Senha<span className={styles.asteristico}>*</span></p>
            <FormSenha {...register("senha",{required:true})}/>
            {errors.senha && <span className={styles.error}>{errors.senha?.message}</span>}
        <p className={styles.nomes}>Confirmar senha<span className={styles.asteristico}>*</span></p>
            <FormPasswordRevalidation {...register("Confsenha",{required:true})}/>
            {errors.Confsenha && <span className={styles.error}>{errors.Confsenha?.message}</span>}
    <div className={styles.check}>
        <input type='checkbox'></input>
        <span className={styles.termo}>Concordo com os <button type='button' className={styles.termos}   onClick={() => setTermoModal(true)}>Termos de uso </button> e <button type='button' onClick={() => setshowTermoModal(true)} className={styles.termos}>Políticas de privacidade</button> do Sou Junior.</span>
    </div>
            <FormButtonConcluir/>
            <FormButtonDescarta/>
    </form>
    </div>
</main>
    ) 
}