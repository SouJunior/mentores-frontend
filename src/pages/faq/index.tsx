import { useState } from 'react';
import {
  Accordion,
  AccordionContainer,
  AccordionTitle,
  FaqContainer,
  FaqMain,
  ImageContainer,
  TitleSpan,
} from '@/styles/pages/faq';
import Image from 'next/image';
import ImagemFAQ from '@/assets/seo.svg';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Footer } from '@/components/organisms/Footer';
import Link from 'next/link';

export default function FaqPage() {
  const [expanded, setExpanded] = useState<null | number>(null);

  function handleChangeAccordion(id: number) {
    setExpanded(expanded === id ? null : id);
  }

  return (
    <FaqContainer>
      <FaqMain>
        <ImageContainer>
          <Image src={ImagemFAQ} alt="Image" width={493} height={324} />
        </ImageContainer>

        <AccordionContainer>
          <TitleSpan>Ficou com alguma dúvida?</TitleSpan>

          <Accordion
            expanded={expanded === 1}
            onChange={() => handleChangeAccordion(1)}
            elevation={0}
            disableGutters
          >
            <AccordionSummary expandIcon={<ArrowBackIosNewRoundedIcon />}>
              <AccordionTitle>A SouJunior é gratuita?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              É totalmente gratuita! Não há cobranças para ser mentorado ou
              mentorar.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 2}
            onChange={() => handleChangeAccordion(2)}
            elevation={0}
            disableGutters
          >
            <AccordionSummary expandIcon={<ArrowBackIosNewRoundedIcon />}>
              <AccordionTitle>Quem pode ser mentor?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              Qualquer pessoa que domine uma ou mais habilidades e
              especialidades disponibilizadas pela plataforma e queira
              contribuir com o desenvolvimento de outros profissionais
              compartilhando conhecimento e experiências.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 3}
            onChange={() => handleChangeAccordion(3)}
            elevation={0}
            disableGutters
          >
            <AccordionSummary expandIcon={<ArrowBackIosNewRoundedIcon />}>
              <AccordionTitle>Quem pode ser mentorado?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              Qualquer pessoa que tenha interesse em desenvolver habilidades e
              especialidades disponibilizadas pela plataforma
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 4}
            onChange={() => handleChangeAccordion(4)}
            elevation={0}
            disableGutters
          >
            <AccordionSummary expandIcon={<ArrowBackIosNewRoundedIcon />}>
              <AccordionTitle>
                Como funciona uma sessão de mentoria?
              </AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              Um papo individual sobre as habilidades e especialidades que
              deseja desenvolver com o(a) mentor(a)
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 5}
            onChange={() => handleChangeAccordion(5)}
            elevation={0}
            disableGutters
          >
            <AccordionSummary expandIcon={<ArrowBackIosNewRoundedIcon />}>
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

          <Accordion
            expanded={expanded === 6}
            onChange={() => handleChangeAccordion(6)}
            elevation={0}
            disableGutters
          >
            <AccordionSummary expandIcon={<ArrowBackIosNewRoundedIcon />}>
              <AccordionTitle>Qual o tempo de cada sessão?</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              Cada mentor pode disponibilizar um tempo específico para as
              mentorias de acordo com a sua agenda. Recomendamos que o tempo de
              cada conversa seja de, no mínimo, 30 minutos e no máximo 1h
            </AccordionDetails>
          </Accordion>
        </AccordionContainer>
      </FaqMain>

      <Footer />
    </FaqContainer>
  );
}
