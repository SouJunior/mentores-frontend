import souJuniorLogoImg from '@/assets/logos/sou-junior.svg'
import ModalEmail from '@/components/molecules/ModalEmail'
import {
  ValuesFormType,
  registerSchema,
  initialValues,
} from '@/utils/registerSchema'
import { Field, Form, FormikProvider, useFormik } from 'formik'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../../atoms/Button'
import { ModalCancel } from '../ModalCancel'
import { ModalPrivacyPolicy } from '../ModalPrivacyPolicy'
import ModalTerms from '../ModalTerms'

import {
  ButtonLoading,
  ContainerBtn,
  ContainerForm,
  ContainerRegister,
  ContainerTerms,
  ModalUserExistsButton,
  ModalUserExistsContainer,
  ModalUserExistsTitle,
  TxtTerms,
} from './style'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { throwErrorMessages } from '@/utils/throw-error-messages'
import { FormRegisterFields } from './FormRegisterFields'
import { Spinner } from '@/components/atoms/Spinner'
import { Modal } from '@/components/atoms/Modal'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function FormRegister() {
  const [openTermos, setOpenTermos] = useState(false)
  const [openPoliticas, setOpenPoliticas] = useState(false)
  const [openModalCancel, setOpenModalCancel] = useState(false)
  const [openEmail, setOpenEmail] = useState(false)
  const [isUserAlreadyExists, setIsUserAlreadyExists] = useState(false)

  const router = useRouter()

  const handleOpenTermos = () => setOpenTermos(true)
  const handleCloseTermos = () => setOpenTermos(false)
  const handleOpenPoliticas = () => setOpenPoliticas(true)
  const handleClosePoliticas = () => setOpenPoliticas(false)
  const handleModalEmail = () => setOpenEmail(true)
  const closeModalEmail = () => setOpenEmail(false)
  const closeModalCancel = () => setOpenModalCancel(false)

  const handleSubmit = async (
    values: ValuesFormType,
    { resetForm }: { resetForm: () => void },
  ) => {
    try {
      await api.post('/mentor', {
        fullName: values.name,
        email: values.email,
        dateOfBirth: values.dataBirthday,
        emailConfirm: values.confirmEmail,
        password: values.password,
        passwordConfirmation: values.confirmPassword,
      })
      resetForm()
      handleModalEmail()
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message
        const messages = {
          'The date must be before the current date':
            'Data de nascimento inválida',
          'Bad Request: User already exists':
            'O e-mail informado já possui cadastro.',
        }

        if (message === 'Bad Request: User already exists') {
          setIsUserAlreadyExists(true)
          return
        }

        throwErrorMessages({ messages, currentMessageKey: message })
      }
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: handleSubmit,
    validateOnChange: true,
  })

  const isButtonDisabled = Object.entries(formik.values).some(
    ([key, value]) => !value || formik.errors[key as keyof ValuesFormType],
  )

  const handleModalCancel = () => {
    const isSomeFieldFilled = Object.values(formik.values).some(
      (field) => field,
    )

    if (isSomeFieldFilled) {
      setOpenModalCancel(true)
      return
    }

    router.back()
  }

  return (
    <>
      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
        icon={false}
      />

      {isUserAlreadyExists && (
        <Modal
          open={isUserAlreadyExists}
          onClose={() => setIsUserAlreadyExists(false)}
        >
          <ModalUserExistsContainer>
            <ModalUserExistsTitle>
              O e-mail informado já possui cadastro.
            </ModalUserExistsTitle>

            <ModalUserExistsButton href="/login">
              Ir para o login
            </ModalUserExistsButton>
            <ModalUserExistsButton href="/resetPassword">
              Recuperar senha
            </ModalUserExistsButton>
          </ModalUserExistsContainer>
        </Modal>
      )}

      <ContainerForm>
        <ContainerRegister>
          <div className="container-logo-form">
            <Image src={souJuniorLogoImg} alt="logo" width={240} height={36} />
            <p>
              <span className="asterisk">*</span> Indica um campo obrigatório
            </p>
          </div>

          <FormikProvider value={formik}>
            <Form>
              <FormRegisterFields />

              <ContainerTerms>
                <Field
                  id="checkbox-terms-and-policies"
                  type="checkbox"
                  name="agreeWithTermsAndPolicies"
                />
                <TxtTerms htmlFor="checkbox-terms-and-policies">
                  Concordo com os{' '}
                  <Button
                    type="button"
                    variant="tertiary"
                    onClick={handleOpenTermos}
                  >
                    Termos de uso
                  </Button>{' '}
                  e{' '}
                  <Button
                    type="button"
                    variant="tertiary"
                    onClick={handleOpenPoliticas}
                  >
                    Políticas de privacidade
                  </Button>{' '}
                  do SouJunior.
                </TxtTerms>
              </ContainerTerms>

              <ModalTerms
                open={openTermos}
                onClose={handleCloseTermos}
                height={590}
                width={600}
              />

              <ModalPrivacyPolicy
                open={openPoliticas}
                onClose={handleClosePoliticas}
                height={590}
                width={600}
              />

              <ModalEmail
                open={openEmail}
                onClose={closeModalEmail}
                height={730}
              />
              <ContainerBtn>
                {formik.isSubmitting ? (
                  <ButtonLoading disabled>
                    <Spinner />
                  </ButtonLoading>
                ) : (
                  <Button disabled={isButtonDisabled}>Concluir</Button>
                )}

                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleModalCancel}
                >
                  Cancelar
                </Button>
              </ContainerBtn>

              <ModalCancel
                open={openModalCancel}
                width={400}
                height={216}
                bgColor={'#fff'}
                onClose={closeModalCancel}
              />
            </Form>
          </FormikProvider>
        </ContainerRegister>
      </ContainerForm>
    </>
  )
}
