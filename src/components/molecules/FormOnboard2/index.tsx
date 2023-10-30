import PhotoButtom from '@/components/atoms/PhotoButtom'
import {
  BackButton,
  ButtonContainer,
  Dotted,
  FormContainer,
  NextButton,
  StyledHR,
  StyledImportant,
  StyledInfo,
  StyledInfoContainer,
} from './styled'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import EditPhotoModal from '@/components/atoms/EditPhotoModal'
import { Field, Form, FormikProvider, useFormik } from 'formik'
import { InputForm } from '@/components/atoms/InputForm'
import UserUpdateService from '@/services/user/userUpdateService'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import useUser from '@/context/Auth/useUser'

interface FormOnBoardProps {
  onStep?: Dispatch<SetStateAction<1 | 2>>
}

export default function FormOnboard2({ onStep }: FormOnBoardProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [isCompleted, setCompleted] = useState(false)
  const [requestError, setError] = useState(false)

  const user = useUser()
  const router = useRouter()

  const genders = [
    'Homem Cis',
    'Mulher Cis',
    'Homem Trans',
    'Mulher Trans',
    'Bigênero',
    'Gênero-fluido',
    'Não Binário',
    'Agênero',
    'Prefiro não dizer',
    'Outros',
  ]

  const { handle } = UserUpdateService()

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
      user.updateUser({ ...user, ...data })
      router.push('/genericPage')
    } else {
      setError(true)
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  })

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true)
  }

  const closeModal = () => setIsEditModalOpen(false)

  useEffect(() => {
    if (Object.keys(formik.touched).length > 0) {
      setCompleted(true)
    } else {
      setCompleted(false)
    }
  }, [formik.touched])

  useEffect(() => {
    if (requestError) {
      handleNotification()
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
        style={{
          textAlign: 'justify',
          fontSize: '16px',
          width: '550px',
          lineHeight: '32px',
        }}
      />
      <Dotted>
        <PhotoButtom
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
            <Field
              as={InputForm}
              label="Conte mais sobre você:"
              type="textarea"
              name="description"
              placeholder="Fale sobre sua trajetória profissional para que possam lhe conhecer melhor;"
              required
            />
            <StyledInfoContainer>
              <StyledInfo>Máximo 600 caracteres.</StyledInfo>
            </StyledInfoContainer>
            <Field
              as={InputForm}
              label="Gênero:"
              name="gender"
              placeholder="Selecione um gênero"
              type="select"
              required
            >
              <option disabled value="">
                Gênero
              </option>
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </Field>
            <StyledHR />

            <ButtonContainer>
              <BackButton onClick={handleBackToFirstStep} type="button">
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
