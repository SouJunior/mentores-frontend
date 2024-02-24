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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { specialties as specialtiesOptions } from '@/data/static-info'
import { useAuthContext } from '@/context/Auth/AuthContext'
import { StepNumber, useOnBoardingContext } from '@/context/OnBoardingContext'

interface GridSpecialitiesProps {
  onStep: (step: StepNumber) => void
}

export default function GridSpecialities({ onStep }: GridSpecialitiesProps) {
  const { specialties, setSpecialties, formik } = useOnBoardingContext()

  const selectedCount = specialties.length
  const isSelectionComplete = specialties.length > 0 && specialties.length < 7

  const {
    mentor: { data },
  } = useAuthContext()

  const toggleSpeciality = (value: string): void => {
    if (specialties.includes(value)) {
      setSpecialties((state) => state.filter((item) => item !== value))

      formik.setFieldValue(
        'specialties',
        specialties.filter((item) => item !== value),
      )
    } else if (selectedCount < 6) {
      setSpecialties((state) => [...state, value])
      formik.setFieldValue('specialties', [...specialties, value])
    }
  }

  const handleMoveToNextStep = () => {
    onStep(2)
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
        {specialtiesOptions.map((speciality, index) => (
          <SpecialityItem
            key={index}
            onClick={() => toggleSpeciality(speciality)}
            selected={specialties.includes(speciality)}
          >
            {specialties.includes(speciality) && (
              <CheckIcon fontSize={'small'} />
            )}
            {speciality}
          </SpecialityItem>
        ))}
      </GridContainer>
      <StyledCount>{`${selectedCount}/6 especialidades `}</StyledCount>
      <StyledHR />
      <NextButton
        onClick={handleMoveToNextStep}
        disabled={!isSelectionComplete}
      >
        Continuar
      </NextButton>
    </>
  )
}
