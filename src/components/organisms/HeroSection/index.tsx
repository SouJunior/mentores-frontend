import { ListItemsHero } from '@/components/molecules/ListItemsHero'
import { AnimatePresence, motion } from 'framer-motion'
import { FormEvent, useEffect, useState } from 'react'
import { AnimationTextHero } from '../../../styles/animations'
import { ContainerHero, ContainerInputForm, Title } from './style'
import Search from '@mui/icons-material/Search'
import { useRouter } from 'next/router'
import { Button } from '@/components/atoms/Button'

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
              placeholder="Pesquisar por nome ou especialidade"
              aria-label="Pesquisar por nome ou especialidade"
              value={queryMentor}
              onChange={(e) => setQueryMentor(e.target.value)}
            />
            <Search />
          </div>
          <Button>Encontre seu mentor</Button>
        </ContainerInputForm>
      </section>

      <ListItemsHero />
    </ContainerHero>
  )
}
