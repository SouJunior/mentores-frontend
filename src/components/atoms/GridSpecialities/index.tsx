import React, { useEffect, useState } from 'react'
import {
  GridContainer,
  SpecialityItem,
  StyledCount,
  StyledSpan,
  StyledTitle,
  StyledImportant,
  StyledHR,
  NextButton,
} from './styled'
import CheckIcon from '@mui/icons-material/Check'
import UserUpdateService from '@/services/user/userUpdateService'
import useUser from '@/context/Auth/useUser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface GridSpecialitiesProps {
  stepNumber: (step: number) => void
}
export default function GridSpecialities({
  stepNumber,
}: GridSpecialitiesProps) {
  const { user } = useUser()
  const { handle } = UserUpdateService()
  const [requestError, setError] = useState(false)

  const specialities: string[] = [
    'Carreira',
    'Liderança',
    'Produto',
    'Agilidade',
    'UX Design',
    'UI Design',
    'Front-End',
    'Back-End',
    'Mobile',
    'QA',
    'Dev Ops',
    'Dados',
  ]

  const [selectedSpecialities, setSelectedSpecialities] = useState<string[]>([])
  const [selectedCount, setSelectedCount] = useState<number>(0)
  const [isComplete, setComplete] = useState(false)

  const toggleSpeciality = (speciality: string): void => {
    if (selectedSpecialities.includes(speciality)) {
      setSelectedSpecialities(
        selectedSpecialities.filter((item) => item !== speciality),
      )
      setSelectedCount(selectedCount - 1)
    } else if (selectedCount < 6) {
      setSelectedSpecialities([...selectedSpecialities, speciality])
      setSelectedCount(selectedCount + 1)
    }
  }

  const handleError = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      toastId: 'customId',
    })
  }

  const handleNotification = () => {
    if (requestError) {
      handleError('Algum erro aconteceu. Entre em contato com a gente.')
    }
  }
  useEffect(() => {
    selectedCount >= 1 ? setComplete(true) : setComplete(false)
  }, [selectedCount, isComplete])

  useEffect(() => {
    if (requestError) {
      handleNotification()
    }
  }, [requestError])

  const handleUpdate = async () => {
    const data = {
      specialties: selectedSpecialities,
    }
    try {
      const apiRequest = await handle(data)
      if (apiRequest) {
        stepNumber(2)
        setError(false)
      } else {
        setError(true)
      }
    } catch (error) {
      console.error('Erro ao atualizar:', error)
    }
  }

  return (
    <>
      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
        style={{
          textAlign: 'justify',
          fontSize: '16px',
          width: '550px',
          lineHeight: '32px',
        }}
      />
      <StyledSpan>Olá, {user?.fullName}!</StyledSpan>
      <StyledTitle>
        Em quais áreas você deseja mentorar?<span className="last">*</span>
      </StyledTitle>
      <StyledImportant>
        <>*</> Indica um campo obrigatório
      </StyledImportant>
      <GridContainer>
        {specialities.map((speciality, index) => (
          <SpecialityItem
            key={index}
            onClick={() => toggleSpeciality(speciality)}
            selected={selectedSpecialities.includes(speciality)}
          >
            {selectedSpecialities.includes(speciality) && (
              <CheckIcon fontSize={'small'} />
            )}
            {speciality}
          </SpecialityItem>
        ))}
      </GridContainer>
      <StyledCount>{`${selectedCount}/6 especialidades `}</StyledCount>
      <StyledHR />
      <NextButton onClick={handleUpdate} disabled={!isComplete}>
        Continuar
      </NextButton>
    </>
  )
}
