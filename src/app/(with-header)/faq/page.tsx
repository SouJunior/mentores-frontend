'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Footer } from '@/layout/footer';
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
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <main className="flex flex-col min-h-screen [&_footer]:mt-auto">
      <section className="flex justify-center gap-[74px] pt-24 pb-12">
        <div className="mt-[80px]">
          <Image src={'/seo.svg'} alt="Image" width={493} height={324} />
        </div>

        <div className="flex flex-col max-w-[43.75rem]">
          <h1 className="text-[#002C66] text-[32px] font-semibold leading-[38px] mb-6">
            Ficou com alguma dúvida?
          </h1>

          <Accordion value={expanded} onValueChange={setExpanded}>
            {faqItems.map(item => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>
                  <span className="text-[20px] font-medium leading-[24px] text-[#002C66] text-left">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}

            <AccordionItem value="5">
              <AccordionTrigger>
                <span className="text-[20px] font-medium leading-[24px] text-[#002C66] text-left">
                  Onde agendar minha mentoria?
                </span>
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
