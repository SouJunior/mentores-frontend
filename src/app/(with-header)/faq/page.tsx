'use client';

import ImagemFAQ from '@/assets/seo.svg';
import { Footer } from '@/components/organisms/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  AccordionContainer,
  AccordionTitle,
  FaqContainer,
  FaqMain,
  ImageContainer,
  TitleSpan,
} from '@/styles/pages/faq';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const faqItems = [
  {
    id: '1',
    question: 'A SouJunior é gratuita?',
    answer:
      'É totalmente gratuita! Não há cobranças para ser mentorado ou mentorar.',
  },
  {
    id: '2',
    question: 'Quem pode ser mentor?',
    answer:
      'Qualquer pessoa que domine uma ou mais habilidades e especialidades disponibilizadas pela plataforma e queira contribuir com o desenvolvimento de outros profissionais compartilhando conhecimento e experiências.',
  },
  {
    id: '3',
    question: 'Quem pode ser mentorado?',
    answer:
      'Qualquer pessoa que tenha interesse em desenvolver habilidades e especialidades disponibilizadas pela plataforma',
  },
  {
    id: '4',
    question: 'Como funciona uma sessão de mentoria?',
    answer:
      'Um papo individual sobre as habilidades e especialidades que deseja desenvolver com o(a) mentor(a)',
  },
  {
    id: '6',
    question: 'Qual o tempo de cada sessão?',
    answer:
      'Cada mentor pode disponibilizar um tempo específico para as mentorias de acordo com a sua agenda. Recomendamos que o tempo de cada conversa seja de, no mínimo, 30 minutos e no máximo 1h',
  },
];

export default function FaqPage() {
  const [expanded, setExpanded] = useState<string>('');

  return (
    <FaqContainer>
      <FaqMain>
        <ImageContainer>
          <Image src={ImagemFAQ} alt="Image" width={493} height={324} />
        </ImageContainer>

        <AccordionContainer>
          <TitleSpan>Ficou com alguma dúvida?</TitleSpan>

          <Accordion
            type="single"
            collapsible
            value={expanded}
            onValueChange={setExpanded}
          >
            {faqItems.map(item => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>
                  <AccordionTitle>{item.question}</AccordionTitle>
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}

            <AccordionItem value="5">
              <AccordionTrigger>
                <AccordionTitle>Onde agendar minha mentoria?</AccordionTitle>
              </AccordionTrigger>
              <AccordionContent>
                Para agendar sua mentoria basta acessar a Página de mentores,
                escolher seu mentor e clicar em agendar mentoria. Você será
                redirecionado para a página do Calendly do mentor escolhido com
                os horários e disponíveis para agendamento.
                <br />
                <br />
                Para acessar a Página de mentores clique{' '}
                <Link href="/mentores">aqui</Link>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContainer>
      </FaqMain>

      <Footer />
    </FaqContainer>
  );
}
