import { ListItemsHero } from '@/components/molecules/ListItemsHero'
import { AnimatePresence, motion } from 'framer-motion'
import { FormEvent, useEffect, useState } from 'react'
import { AnimationTextHero } from '../../../styles/animations'
import {
  BtnSearchForm,
  ContainerHero,
  ContainerInputForm,
  Title,
} from './style'
import { useRouter } from 'next/router'
import { Button } from '@/components/atoms/Button'
import { MagnifyingGlass } from 'phosphor-react'

const text = ['mentorias personalizadas', 'profissionais experientes']

export function HeroSection() {
  const router = useRouter()
  const [textHero, setTextHero] = useState(text[0])
  const [queryMentor, setQueryMentor] = useState('')

  function textSwitch() {
    setTimeout(() => {
      if (textHero === text[0]) {
        setTextHero(text[1])
      }
    }, 1500)

    setTimeout(() => {
      if (textHero === text[1]) {
        setTextHero(text[0])
      }
    }, 1500)
  }

  function handleSearchMentor(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push(`/mentores?q=${queryMentor}`)
  }

  useEffect(() => {
    textSwitch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textHero])

  return (
    <ContainerHero>
      <section className="hero-texts">
        <AnimatePresence>
          <Title>
            Decole sua carreira mais rápido com
            <motion.span
              key={textHero}
              variants={AnimationTextHero}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
            >
              {textHero}
            </motion.span>
          </Title>
        </AnimatePresence>

        <p>
          Tenha acesso a mentorias individuais e gratuitas com profissionais
          renomados.
        </p>

        <ContainerInputForm onSubmit={handleSearchMentor}>
          <div>
            <input
              type="text"
              placeholder="Encontre seu mentor"
              aria-label="Encontre seu mentor"
              value={queryMentor}
              onChange={(e) => setQueryMentor(e.target.value)}
            />
            <MagnifyingGlass
              weight="bold"
              className="search-form-icon only-icon"
            />
            <BtnSearchForm title="Buscar mentor" aria-label="Buscar mentor">
              <MagnifyingGlass weight="bold" className="search-form-icon" />
            </BtnSearchForm>
          </div>
          <Button className="button-find-mentor">Encontre seu mentor</Button>
        </ContainerInputForm>
      </section>

      <ListItemsHero className="list-items-hero" />
    </ContainerHero>
  )
}
