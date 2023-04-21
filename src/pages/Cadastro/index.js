import styles from '../Cadastro/Cadastro.module.scss'
import { useForm } from 'react-hook-form' 
import Image from 'next/image'
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

function Cadastro () {
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const [showModal, setshowModal] = useState(false);
    const [showSecondModal, setshowSeconModal] = useState(false);
    const [TermodModal, setTermoModal] = useState(false);
    const [showTermodModal, setshowTermoModal] = useState(false);
    const [senhaModal, setsenhaModal] = useState(false);

    function createUser(data){console.log(data)}
    return (
        <main className={styles.layout}>

        <div className={styles.boxLogin}>
<form onSubmit={handleSubmit(createUser)} className={styles.login}>
            <Image className= {styles.souj}
                src="/LogoSJ.svg"
                    alt="logo"
                    width={100}
                    height={200}
            />
            <p className={styles.indica}><span className={styles.asteristico}>*</span> Indica um campo obrigatório</p>
           
            <p className={styles.nomes}>Nome completo<span className={styles.asteristico}>*</span></p>
    <div className={styles.botoes}>
            <input className={styles.inputs} placeholder='  Preencha com seu nome aqui' type='text' {...register("nome",{required:true})}></input>
            {errors.nome && <span className={styles.error}>{errors.nome?.message}</span>}
        </div>
            <p className={styles.nomes}>Data de nascimento<span className={styles.asteristico}>*</span></p>
        <div className={styles.botoes}>
            <input className={styles.date} type='date' placeholder='  dd/mm/aa' {...register("data",{required:true})}></input>
            {errors.data && <span className={styles.error}>{errors.data?.message}</span>}
        </div>
            <p className={styles.nomes}>E-mail<span className={styles.asteristico}>*</span></p>
            <div className={styles.botoes}>
            <input className={styles.inputs} placeholder='  Preencha com seu email aqui' type='email'{...register("email",{required:true})}></input>
            {errors.email && <span className={styles.error}>{errors.email?.message}</span>}
        </div>
        <p className={styles.nomes}> Confirma e-mail<span className={styles.asteristico}>*</span></p>
            <div className={styles.botoes}>
            <input className={styles.inputs} placeholder='  Preencha com seu email novamente' type='email' {...register("Confemail",{required:true})}></input>
            {errors.Confemail && <span className={styles.error}>{errors.Confemail?.message}</span>}
        </div>
        <p className={styles.nomes}>Senha<span className={styles.asteristico}>*</span> 
        <button type='button' className={styles.senhaDefinicao}><Image alt="Group" src="/Group.svg" width={15} height={15} onClick={() => setsenhaModal(true)}/></button> </p>
            <div className={styles.botoes}>
            <input className={styles.inputs} placeholder='  xxxxxxxxx' type='password' {...register("senha",{required:true})}></input>
            {errors.senha && <span className={styles.error}>{errors.senha?.message}</span>}
        </div>
        <p className={styles.nomes}>Confirmar senha<span className={styles.asteristico}>*</span></p>
        <div className={styles.botoes}>
            <input className={styles.inputs} placeholder='  xxxxxxxxx' type='password' {...register("Confsenha",{required:true})}></input>
            {errors.Confsenha && <span className={styles.error}>{errors.Confsenha?.message}</span>}
        </div>
        <div className={styles.check}>
        <input type='checkbox'></input>
        <span className={styles.termo}>Concordo com os <button type='button' className={styles.termos}   onClick={() => setTermoModal(true)}>Termos de uso </button> e <button type='button' onClick={() => setshowTermoModal(true)} className={styles.termos}>Políticas de privacidade</button> do Sou Junior.</span>
        </div>
        <div className={styles.containerModal}>
            <div >
                <button className={styles.concluir}
                type="submit"
                onClick={() => setshowModal(true)}>
                    Concluir
                </button>
                <button className={styles.cancelar}
                type="submit"
                onClick={() => setshowSeconModal(true)}>
                    Cancelar
                </button>
            </div>
        </div>
            {showModal ? (
            <div className={styles.modalChequeEmail}>
                <button className={styles.buttonModal} onClick={() => setshowModal(false)}> 
                    X
                </button>
                <h2 className={styles.chequeEmail}>Cheque seu email.</h2>
                <Image className={styles.fundoModal}
                 src={'fundoModal.svg'}
                 alt="fundo"
                 width={0}
                 height={0}
                />
                <Image className={styles.imagemModal}
                alt="modal"
                src={'modal.svg'}
                width={0}
                height={0}/>
                <p className={styles.confirmacao}>Enviamos para você um e-mail de confirmação.</p>
                <Image className={styles.logoModal}
                alt="Logo"
                src={'LogoSJ.svg'}
                width={0}
                height={0}/>
                <p className={styles.movimentoModal}>#MovimentoSouJunior</p>
            </div>): null}
            {showSecondModal ? (
            <div className={styles.modalPai}>
                <span className={styles.cadastro}>Deseja descartar o cadastro?</span>
                <p className={styles.informacoes}>As informações inseridas não seram salva</p>
                <div className={styles.ModalFilho}>
                <button className={styles.descartar}  onClick={() => setshowSeconModal(false)}>
                Decartar
                </button>
                <button className={styles.cancelarModal}  onClick={() => setshowSeconModal(false)}>
                Cancelar
                </button>
                </div>
            </div>): null}

            {TermodModal ? (
            <div className={styles.termoPai}>
                <div className={styles.backTermo}>
                <Image alt="Logo" src='LogoSJ.svg' width={100} height={50}/>
                <button type='button'className={styles.buttonTermo} onClick={() => setTermoModal(false)}>X</button>
                </div>
               <p className={styles.informacoes}>Termos e condições gerais de uso SouJunior</p>
               <p>Ao navegar neste site e usar os serviços que são fornecidos pelo SouJunior, você afima que leu, 
                compreendeu e concorda com nossos Termos e Condições. Estes Termos e Condições abrangem todos os aplicativos, 
                serviços de Internet ou extensões dos sites relacionados. Você é livre para recusar a nosos termos e condições de uso, 
                entendendo que talvez não possamos fornecer alguns dos serviços desejados e caso aceite você poderá ainda, a qualquer tempo, 
                retornar ao site, 
                clicar em termos de uso e reler quantas vezes desejar.</p> 
                <span>Termo e Condições</span>
                Os Termos e Condições do SouJunior regem o uso deste Site e todo o seu conteúdo ("Site"). Estes Termos descrevem as regras e regulamentos que orientam o uso do SouJunior. Todos os materiais, informações, documentos, serviços ou todas as outras entidades (coletivamente referidas como "conteúdo'') que aparecem no SouJunior serão administrados de acordo com estes Termos e Condições.
            </div>): null}
            {showTermodModal ? (
            <div className={styles.termoPai}>
                <div className={styles.backTermo}>
                    <Image alt="Logo" src='LogoSJ.svg' width={100} height={50}/>
                    <button type='button' className={styles.buttonPolitica} onClick={() => setshowTermoModal(false)}>X</button>
                </div>
               <p className={styles.informacoes}>Termos e condições gerais de uso SouJunior</p>
               <p>Ao navegar neste site e usar os serviços que são fornecidos pelo SouJunior, você afima que leu, 
                compreendeu e concorda com nossos Termos e Condições. Estes Termos e Condições abrangem todos os aplicativos, 
                serviços de Internet ou extensões dos sites relacionados. Você é livre para recusar a nosos termos e condições de uso, 
                entendendo que talvez não possamos fornecer alguns dos serviços desejados e caso aceite você poderá ainda, a qualquer tempo, 
                retornar ao site, 
                clicar em termos de uso e reler quantas vezes desejar.</p> 
                <span>Termo e Condições</span>
                <ul>
                    <li>Os Termos e Condições do SouJunior regem o uso deste Site e todo o seu conteúdo ("Site"). Estes Termos descrevem as regras e regulamentos que orientam o uso do SouJunior. Todos os materiais, informações, documentos, serviços ou todas as outras entidades (coletivamente referidas como "conteúdo'') que aparecem no SouJunior serão administrados de acordo com estes Termos e Condições.</li>
                </ul>
            </div>): null}
            {senhaModal ? (
            <div className={styles.senhaPai}>
                <button className={styles.buttonFecha} type='button' onClick={() => setsenhaModal(false)}><strong>X</strong></button>
                <p className={styles.senhaEdit}>Sua senha deve conter:</p>
                <p className={styles.subSenha}>Máximo 8 caracteres;</p>
                <p className={styles.subSenha}>Pelo menos uma letra maiúsculo;</p>
                <p className={styles.subSenha}>Pelo menos um número;</p>
                <p className={styles.subSenha}>Pelo menos um caractere especial (ex.: #$%)</p>
            </div>): null}
    </form>
        </div>
        <div className={styles.divlogo}>
        <Image
        className={styles.logo}
        src="/ilustracao.svg"
        alt="logo"
        width={0}
        height={0}
        />
        </div>
    </main>
   
    )
}

export default Cadastro;