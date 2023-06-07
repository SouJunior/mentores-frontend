import FormButtonDescarta from "../FormButtonDescarta/formButtonDescarta";
import FormButtonConcluir from "../FormButtonConcluir/formButtonConcluir";
import { customStyles } from "@/utils/modalStyles";
import Image from "next/image";
import { Formik, Field, Form } from "formik";
import React, { useState } from "react";
import {
  ContainerCadastro,
  ContainerForm,
  ContainerTerms,
  ModalBox,
  ModalBoxParagrafo,
  ModalBoxSubTitulo,
  ModalBoxTitulo,
  ModalHash,
  ModalLogo,
  TxtTerms,
} from "./style";
import InputForm from "../InputForm";
import axios from "axios";
import Modal from "react-modal";
import registerSchema from "@/utils/registerSchema";
import RadioAgree from "../RadioAgree";
import ModalComponent from "../Modal";
export default function FormRegister(props) {
  const [openTermos, setOpenTermos] = useState(false);
  const [openPoliticas, setOpenPoliticas] = useState(false);
  const [agree, setIsAgree] = useState(false);

  const handleOpenTermos = () => setOpenTermos(true);
  const handleCloseTermos = () => setOpenTermos(false);
  const handleOpenPoliticas = () => setOpenPoliticas(true);
  const handleClosePoliticas = () => setOpenPoliticas(false);

  // const handleOpenModal = () => setIsOpen(true);
  // const handleCloseModal = () => setIsOpen(false);
  const handleModalEmail = () => setOpenEmail(true);
  const closeModalEmail = () => setOpenEmail(false);

  const handleSubmit = async (event, values, { resetForm }) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://mentores-backend.onrender.com/user",
        {
          fullName: values.name,
          email: values.email,
          dateOfBirth: values.dataBirthday,
          emailConfirm: values.confirmEmail,
          password: values.password,
          passwordConfirmation: values.confirmPassword,
        }
      );

      console.log(response.data);
      resetForm();
      handleModalEmail();
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    dataBirthday: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <ContainerForm>
      <ContainerCadastro>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Image
              className="souj"
              src="logos/LogoSJ.svg"
              alt="logo"
              width={100}
              height={200}
            />
            <p>
              <span className="asteristico">*</span> Indica um campo obrigatório
            </p>
            <Field
              as={InputForm}
              type="text"
              name="name"
              label="Nome completo"
              placeholder="Preencha com seu nome"
            />

            <Field
              as={InputForm}
              type="date"
              name="dataBirthday"
              label="Data de nascimento"
              placeholder="MM/DD/YYY"
            />

            <Field
              as={InputForm}
              type="email"
              label="E-mail"
              name="email"
              placeholder="Preencha com o seu email"
            />

            <Field
              as={InputForm}
              type="email"
              label="Confirmar E-mail"
              name="confirmEmail"
              placeholder="Confirme seu email"
            />

            <Field
              as={InputForm}
              type="password"
              label="Senha"
              name="password"
              placeholder="*******"
            />

            <Field
              as={InputForm}
              type="password"
              label="Confirmar Senha"
              name="confirmPassword"
              placeholder="******"
            />
            <ContainerTerms>
              <RadioAgree
                checked={agree}
                onChange={(e) => setIsAgree(e.target.checked)}
              />
              <TxtTerms className="termo">
                Concordo com os{" "}
                <button
                  className="termo-button"
                  onClick={handleOpenTermos}
                  type="button"
                >
                  Termos de uso
                </button>
                e{" "}
                <button
                  className="termo-button"
                  onClick={handleOpenPoliticas}
                  type="button"
                >
                  Políticas de privacidade
                </button>{" "}
                do SouJunior.
              </TxtTerms>
            </ContainerTerms>

            <ModalComponent open={openTermos} onClose={handleCloseTermos}>
              <ModalLogo src="logos/LogoSJ.svg" />
              <ModalHash>#MovimentoSouJunior</ModalHash>
              <ModalBox>
                <ModalBoxTitulo>
                  Termos e condições gerais de uso SouJunior{" "}
                </ModalBoxTitulo>
                <ModalBoxParagrafo>
                  Ao navegar neste site e usar os serviços que são fornecidos
                  pelo SouJunior, você afima que leu, compreendeu e concorda com
                  nossos Termos e Condições. Estes Termos e Condições abrangem
                  todos os aplicativos, serviços de Internet ou extensões dos
                  sites relacionados. Você é livre para recusar a nosos termos e
                  condições de uso, entendendo que talvez não possamos fornecer
                  alguns dos serviços desejados e caso aceite você poderá ainda,
                  a qualquer tempo, retornar ao site, clicar em termos de uso e
                  reler quantas vezes desejar.
                </ModalBoxParagrafo>
                <ModalBoxSubTitulo>Termos e Condições</ModalBoxSubTitulo>
                <ModalBoxParagrafo>
                  Os Termos e Condições do SouJunior regem o uso deste Site e
                  todo o seu conteúdo (`Site`). Estes Termos descrevem as regras
                  e regulamentos que orientam o uso do SouJunior. Todos os
                  materiais, informações, documentos, serviços ou todas as
                  outras entidades (coletivamente referidas como `conteúdo`) que
                  aparecem no SouJunior serão administrados de acordo com estes
                  Termos e Condições. O site é destinado a usuários com 18
                  (dezoito) anos de idade ou mais. Se você tem menos de 18
                  (dezoito) anos, não poderá usar ou registrar-se para usar este
                  site ou seus serviços sem a permissão ou consentimento dos
                  pais. Ao concordar com estes Termos e Condições, você tem a
                  capacidade legal necessária para cumprir e ficar vinculado por
                  estes Termos e Condições. Áreas específicas deste site podem
                  ser restritas ao acesso do usuário, e o SouJunior pode
                  estender ainda mais essa restrição a todo o site, a qualquer
                  momento e a seu exclusivo critério. Qualquer identificação de
                  usuário, chave de segurança ou senha que você possa ter neste
                  site são confidenciais e você é responsável por manter a
                  confidencialidade dessas informações. Nós nos reservamos o
                  direito de registrar solicitações para que você remova todos
                  os links ou qualquer link específico criado por você que
                  redirecione para o nosso site, e você aprova a remoção
                  imediata desses links para o nosso site, mediante solicitação.
                  Podemos alterar os termos e condições desses direitos de
                  vinculação a qualquer momento. Ao conectar-se continuamente ao
                  nosso site, você concorda em se comprometer e seguir os termos
                  desta política de links. Por favor, entre em contato conosco
                  se encontrar algum link em nosso site que seja ofensivo, e
                  poderemos considerar e analisar solicitações de remoção de
                  tais links seja do SouJunior ou conteúdo feito por terceiros.
                  Este site pode conter links para sites ou aplicativos operados
                  por terceiros. Não controlamos nenhum desses sites ou
                  aplicativos de terceiros ou o operador de terceiros. Este
                  Site, objeto do presente Termos de Uso não é responsável e não
                  endossa quaisquer sites ou aplicativos de terceiros ou sua
                  disponibilidade ou conteúdo. SouJunior não se responsabiliza
                  pelos anúncios contidos no site. Você concorda em fazê-lo por
                  sua própria conta e risco ao adquirir quaisquer bens e / ou
                  serviços de terceiros. O anunciante é quem permanece
                  responsável por tais bens e/ou serviços, e se você tiver
                  alguma dúvida ou reclamação sobre eles, você deve entrar em
                  contato com o anunciante “Conteúdo do usuário”. Importante
                  salientar que o termo usado `Conteúdo do Usuário` significa
                  qualquer áudio, vídeo, texto, imagens ou outro material ou
                  conteúdo que você decida exibir neste Site. Com relação ao
                  conteúdo do usuário, ao exibi-lo, você concede ao SouJunior
                  uma licença não exclusiva, mundial, irrevogável, isenta de
                  royalties e sublicenciável para usar, reproduzir, adaptar,
                  publicar, traduzir e distribuir em qualquer mídia. O Conteúdo
                  do Usuário deve ser seu e não deve infringir os direitos de
                  terceiros. SouJunior reserva-se o direito de remover qualquer
                  parte do seu conteúdo deste site a qualquer momento, sem aviso
                  prévio. SouJunior tem permissão para monitorar suas atividades
                  no site e remover qualquer conteúdo do usuário considerado
                  impróprio, ofensivo, contrário às leis e regulamentos
                  aplicáveis, ou que cause uma violação destes Termos e
                  Condições. Ao acessar este Site, informações específicas sobre
                  o Usuário, como endereços de protocolo de Internet (IP),
                  navegação no site, software do usuário e tempo de navegação,
                  juntamente com outras informações semelhantes, serão
                  armazenadas nos servidores do SouJunior. As informações sobre
                  suas identidades, como nome, endereço, detalhes de contato,
                  informações de faturamento e outras informações armazenadas
                  neste site, serão estritamente usadas apenas para fins
                  estatísticos e não serão publicadas para acesso geral.
                  SouJunior, no entanto, não assume nenhuma responsabilidade
                  pela segurança dessas informações. O site é fornecido, com
                  todas as responsabilidades e não assume compromissos,
                  representações ou garantias expressas ou implícitas de
                  qualquer tipo relacionadas a este site ou ao conteúdo nele
                  contido.
                </ModalBoxParagrafo>
                <ModalBoxSubTitulo>Indenização</ModalBoxSubTitulo>
                <ModalBoxParagrafo>
                  O usuário concorda em indenizar o Site e suas afiliadas em
                  toda a extensão, frente à todas as ações, reclamações,
                  responsabilidades, perdas, danos, custos, demandas e despesas
                  decorrentes do uso deste Site pelo Usuário, incluindo, sem
                  limitação, qualquer reclamação relacionada à violação de
                  qualquer uma das disposições destes Termos e Condições. Se
                  estiver insatisfeito com algum ou todo o conteúdo deste site
                  ou qualquer um ou todos os seus Termos e Condições, o usuário
                  pode interromper o uso deste site. Em qualquer momento, os
                  usuários podem interromper o uso do Site para isso, no site,
                  estão disponíveis as orientações necessárias. Caso ainda fique
                  algum dúvida, não hesite em enviar um e-mail para . Nós nos
                  reservamos o direito e critério exclusivo de, e sem aviso
                  prévio ou responsabilidade, negar o acesso e uso do site
                  (incluindo o bloqueio de endereços IP específicos) a qualquer
                  usuário por qualquer motivo, incluindo, mas não se limitando à
                  violação de qualquer representação, garantia ou acordo nestes
                  Termos ou em qualquer lei ou regulamento aplicável.
                </ModalBoxParagrafo>
                <ModalBoxSubTitulo>Disposições Gerais</ModalBoxSubTitulo>
                <ModalBoxParagrafo>
                  Os Termos e Condições deste site serão regidos e interpretados
                  de acordo com as leis do país ou estado em que o Site opera.
                  Você, por meio deste, se submete incondicionalmente à
                  jurisdição não exclusiva dos tribunais localizados no Brasil
                  para a resolução de quaisquer disputas. Este Site reserva-se o
                  direito de revisar estes Termos a qualquer momento conforme
                  julgar adequado. Por isso é fundamental que os seus usuários
                  estejam atentos à essas aleterações. O Site reserva-se o
                  direito de ceder, transferir e subcontratar seus direitos e/ou
                  obrigações sob este Acordo sem qualquer notificação ou
                  consentimento prévio necessário. Os usuários não terão
                  permissão para atribuir, transferir ou subcontratar qualquer
                  um de seus direitos e/ou obrigações sob estes Termos. Além
                  disso, uma pessoa que não seja parte destes Termos e Condições
                  não terá o direito de fazer cumprir qualquer disposição neles
                  contida. Estes Termos e Condições, incluindo quaisquer avisos
                  legais e isenções de responsabilidade neste site, constituem o
                  acordo completo entre o Site e você em relação ao uso deste
                  site. Qualquer dúvida, entre em contato por meio do endereço
                  de e-mail: [AVALIAR O E-MAIL]
                </ModalBoxParagrafo>
              </ModalBox>
            </ModalComponent>

            <ModalComponent open={openPoliticas} onClose={handleClosePoliticas}>
              <h2>Título do Modal Politicas</h2>
              <p>Conteúdo do modal Politicas</p>
            </ModalComponent>
            {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
              >
                <h2>Teste</h2>
                <button onClick={handleCloseModal}>close</button>
                <div>Termos de uso</div>
              </Modal>

            <FormButtonConcluir disabled={!agree} />
            <Modal
              isOpen={modalEmail}
              onRequestClose={!handleModalEmail}
              style={customStyles}
            >
              <button onClick={closeModalEmail}>X</button>
              <h1>Modal envio email</h1>
              <span>Aqui será o componente modal de confirmação de email!</span>
            </Modal> */}
            <FormButtonDescarta />
          </Form>
        </Formik>
      </ContainerCadastro>
    </ContainerForm>
  );
}
