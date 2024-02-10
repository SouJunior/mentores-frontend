import PhotoButton from '@/components/atoms/PhotoButton'
import {
  BackButton,
  ButtonContainer,
  CharactersWarnInput,
  Dotted,
  FormContainer,
  NextButton,
  SelectInputContainer,
  SelectItemStyled,
  StyledHR,
  StyledImportant,
  StyledInfo,
  StyledInfoContainer,
} from './styled'
import { Dispatch, SetStateAction, useState } from 'react'
import EditPhotoModal from '@/components/atoms/EditPhotoModal'
import { Form } from 'formik'
import { InputForm } from '@/components/atoms/InputForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { genders } from '@/data/static-info'
import { Select } from '@/components/atoms/Select'
import { useOnBoardingContext } from '@/context/OnBoardingContext'

interface FormOnBoardProps {
  onStep?: Dispatch<SetStateAction<1 | 2>>
}

export default function FormOnboard2({ onStep }: FormOnBoardProps) {
  const { formik } = useOnBoardingContext()

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const isCompleted = Object.keys(formik.touched).length > 0

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true)
  }

  const closeModal = () => setIsEditModalOpen(false)

  const handleImageEdit = (editedImage: string | null) => {
    formik.setFieldValue('profile', editedImage || '')
  }

  const handleBackToFirstStep = () => {
    if (onStep) {
      onStep(1)
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
      <Dotted>
        <PhotoButton
          size={80}
          selectedPhoto={formik.values.profile}
          onClick={handleOpenEditModal}
        />
        <StyledImportant>
          Para inserir sua foto, clique aqui.<span className="last">*</span>
        </StyledImportant>
        <StyledInfo>Formato aceito: jpg ou png. Tamanho máx.: 8 MB.</StyledInfo>
      </Dotted>

      <EditPhotoModal
        isOpen={isEditModalOpen}
        selectedPhoto={formik.values.profile}
        onAddPhoto={(photo) => {
          formik.setFieldValue('profile', photo)
        }}
        onClose={closeModal}
        onImageEdit={handleImageEdit}
        onEditPhoto={() => handleOpenEditModal()}
      />

      <FormContainer>
        <Form>
          <StyledInfoContainer>
            <InputForm
              label="Conte mais sobre você:"
              type="textarea"
              name="description"
              placeholder="Fale sobre sua trajetória profissional para que possam lhe conhecer melhor;"
              required
            />
            <CharactersWarnInput>Máximo 600 caracteres.</CharactersWarnInput>
          </StyledInfoContainer>

          <SelectInputContainer>
            <span>
              Gênero
              <span>*</span>
            </span>
            <Select
              placeholder="Gênero"
              onValueChange={(value) => formik.setFieldValue('gender', value)}
            >
              {genders.map((gender) => (
                <SelectItemStyled key={gender} value={gender}>
                  {gender}
                </SelectItemStyled>
              ))}
            </Select>
          </SelectInputContainer>
          <StyledHR />

          <ButtonContainer>
            <BackButton
              onClick={handleBackToFirstStep}
              variant="secondary"
              type="button"
            >
              Voltar
            </BackButton>
            <NextButton type="submit" disabled={!isCompleted}>
              Concluir
            </NextButton>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </>
  )
}
