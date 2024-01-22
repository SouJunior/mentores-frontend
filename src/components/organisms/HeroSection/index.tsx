import { PersonTitle } from '@/components/atoms/PersonTitle'
import { ListItemsHero } from '@/components/molecules/ListItemsHero'
import { AnimatePresence, motion } from 'framer-motion'
import { FormEvent, useEffect, useState } from 'react'
import { AnimationTextHero } from '../../../styles/animations'
import {
  ButtonMentor,
  ContainerHero,
  ContainerInputForm,
  TextAnimated,
} from './style'
import Search from '@mui/icons-material/Search'
import { useRouter } from 'next/router'

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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <AnimatePresence>
            <PersonTitle text={'Decole sua carreira mais rápido com'} />
            <TextAnimated
              as={motion.h3}
              key={textHero}
              variants={AnimationTextHero}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
            >
              {textHero}
            </TextAnimated>
          </AnimatePresence>
          <p>
            Tenha acesso a mentorias individuais e <br /> gratuitas com
            profissionais renomados.
          </p>
          <ContainerInputForm onSubmit={handleSearchMentor}>
            <div>
              <Search />
              <input
                type="text"
                placeholder="Pesquisar por nome ou especialidade"
                aria-label="Pesquisar por nome ou especialidade"
                value={queryMentor}
                onChange={(e) => setQueryMentor(e.target.value)}
              />
            </div>
            <ButtonMentor disabled={!queryMentor}>
              Encontre seu mentor
            </ButtonMentor>
          </ContainerInputForm>
        </div>
        <ListItemsHero />
      </div>
    </ContainerHero>
  )
}
