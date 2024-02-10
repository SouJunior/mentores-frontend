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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { specialties } from '@/data/static-info'
import { useAuthContext } from '@/context/Auth/AuthContext'
import { handleError } from '@/utils/handleError'

interface GridSpecialitiesProps {
  stepNumber: (step: number) => void
}

export default function GridSpecialities({
  stepNumber,
}: GridSpecialitiesProps) {
  const [requestError, setError] = useState(false)

  const [selectedSpecialities, setSelectedSpecialities] = useState<string[]>([])
  const [selectedCount, setSelectedCount] = useState<number>(0)
  const [isComplete, setComplete] = useState(false)

  const { handle } = UserUpdateService()
  const {
    mentor: { data },
  } = useAuthContext()

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

  useEffect(() => {
    selectedCount >= 1 ? setComplete(true) : setComplete(false)
  }, [selectedCount, isComplete])

  useEffect(() => {
    if (requestError) {
      handleError('Algum erro aconteceu. Entre em contato com a gente.')
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
      />
      <StyledSpan>Olá, {data?.fullName}!</StyledSpan>
      <StyledTitle>
        Em quais áreas você deseja mentorar?<span className="last">*</span>
      </StyledTitle>
      <StyledImportant>
        <span>*</span> Indica um campo obrigatório
      </StyledImportant>
      <GridContainer>
        {specialties.map((speciality, index) => (
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
