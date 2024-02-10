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
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import EditPhotoModal from '@/components/atoms/EditPhotoModal'
import { Form, FormikProvider, useFormik } from 'formik'
import { InputForm } from '@/components/atoms/InputForm'
import UserUpdateService from '@/services/user/userUpdateService'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { genders } from '@/data/static-info'
import { Select } from '@/components/atoms/Select'
import { handleError } from '@/utils/handleError'

interface FormOnBoardProps {
  onStep?: Dispatch<SetStateAction<1 | 2>>
}

export default function FormOnboard2({ onStep }: FormOnBoardProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [isCompleted, setCompleted] = useState(false)
  const [requestError, setError] = useState(false)

  const router = useRouter()

  const { handle } = UserUpdateService()

  const initialValues = {
    imageFile: null,
    description: '',
    gender: '',
  }

  const handleSubmit = async (values: any) => {
    const data = {
      aboutMe: values.description,
      profile: values.imageUrl,
      gender: values.gender,
    }

    const response = await handle(data)
    if (response) {
      setError(false)
      router.push('/?connect-calendly=true')
    } else {
      setError(true)
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  })

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true)
  }

  const closeModal = () => setIsEditModalOpen(false)

  useEffect(() => {
    setCompleted(Object.keys(formik.touched).length > 0)
  }, [formik.touched])

  useEffect(() => {
    if (requestError) {
      handleError('Algum erro aconteceu. Entre em contato com a gente.')
    }
  }, [requestError])

  const handleImageEdit = (editedImage: string | null) => {
    setSelectedPhoto(editedImage)
    formik.setFieldValue('imageUrl', editedImage || '')
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
          selectedPhoto={selectedPhoto}
          onClick={handleOpenEditModal}
        />
        <StyledImportant>
          Para inserir sua foto, clique aqui.<span className="last">*</span>
        </StyledImportant>
        <StyledInfo>Formato aceito: jpg ou png. Tamanho máx.: 8 MB.</StyledInfo>
      </Dotted>

      <EditPhotoModal
        isOpen={isEditModalOpen}
        onAddPhoto={(photo) => setSelectedPhoto(photo)}
        onClose={closeModal}
        onImageEdit={handleImageEdit}
        onEditPhoto={() => handleOpenEditModal()}
      />

      <FormContainer>
        <FormikProvider value={formik}>
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
        </FormikProvider>
      </FormContainer>
    </>
  )
}
