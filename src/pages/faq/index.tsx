import {
  AccordionContainer,
  AccordionTitle,
  FaqContainer,
  ImageContainer,
  TitleSpan,
} from '@/styles/pages/faq'
import Image from 'next/image'
import ImagemFAQ from '@/assets/seo.svg'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Footer } from '@/components/molecules/Footer'
import Link from 'next/link'

export default function FaqPage() {
  return (
    <>
      <FaqContainer>
        <ImageContainer>
          <Image src={ImagemFAQ} alt="Image" width={493} height={324} />
        </ImageContainer>
        <AccordionContainer>
          <TitleSpan>Ficou com alguma dúvida?</TitleSpan>
          <Accordion style={{ marginTop: '24px', width: '699px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTitle>A SouJunior é gratuita?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              É totalmente gratuita! Não há cobranças para ser mentorado ou
              mentorar.
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: '699px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTitle>Quem pode ser mentor?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              Qualquer pessoa que domine uma ou mais habilidades e
              especialidades disponibilizadas pela plataforma e queira
              contribuir com o desenvolvimento de outros profissionais
              compartilhando conhecimento e experiências.
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: '699px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTitle>Quem pode ser mentorado?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              Qualquer pessoa que tenha interesse em desenvolver habilidades e
              especialidades disponibilizadas pela plataforma
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: '699px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTitle>
                Como funciona uma sessão de mentoria?
              </AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              Um papo individual sobre as habilidades e especialidades que
              deseja desenvolver com o(a) mentor(a)
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: '699px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTitle>Onde agendar minha mentoria?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              Para agendar sua mentoria basta acessar a Página de mentores,
              escolher seu mentor e clicar em agendar mentoria. Você será
              redirecionado para a página do Calendly do mentor escolhido com os
              horários e disponíveis para agendamento.
              <br />
              <br />
              Para acessar a Página de mentores clique{' '}
              <Link href="/mentores">aqui</Link>.
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: '699px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTitle>Qual o tempo de cada sessão?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              Cada mentor pode disponibilizar um tempo específico para as
              mentorias de acordo com a sua agenda. Recomendamos que o tempo de
              cada conversa seja de, no mínimo, 30 minutos e no máximo 1h
            </AccordionDetails>
          </Accordion>
        </AccordionContainer>
      </FaqContainer>
      <Footer />
    </>
  )
}
