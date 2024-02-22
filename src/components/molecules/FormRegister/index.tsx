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
import { ModalPrivacyPolicy } from '../ModalTermsAndPolicies/ModalPrivacyPolicy'
import ModalTerms from '../ModalTermsAndPolicies/ModalTerms'

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
  const [openModalCancel, setOpenModalCancel] = useState(false)
  const [openEmail, setOpenEmail] = useState(false)
  const [isUserAlreadyExists, setIsUserAlreadyExists] = useState(false)

  const router = useRouter()

  const handleModalEmail = () => setOpenEmail(!openEmail)
  const closeModalCancel = () => setOpenModalCancel(false)

  const handleSubmit = async (
    values: ValuesFormType,
    { resetForm }: { resetForm: () => void },
  ) => {
    try {
      await api.post('/mentor', {
        fullName: values.name,
        email: values.email,
        dateOfBirth: values.dateBirthday,
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
        <Modal.Root
          open={isUserAlreadyExists}
          onOpenChange={() => setIsUserAlreadyExists(false)}
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
            <Modal.Close />
          </ModalUserExistsContainer>
        </Modal.Root>
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
                  <Modal.Root>
                    <Modal.Control asChild>
                      <Button type="button" variant="tertiary">
                        Termos de uso
                      </Button>
                    </Modal.Control>

                    <ModalTerms />
                  </Modal.Root>{' '}
                  e{' '}
                  <Modal.Root>
                    <Modal.Control asChild>
                      <Button type="button" variant="tertiary">
                        Políticas de privacidade
                      </Button>
                    </Modal.Control>

                    <ModalPrivacyPolicy />
                  </Modal.Root>{' '}
                  do SouJunior.
                </TxtTerms>
              </ContainerTerms>

              <Modal.Root open={openEmail} onOpenChange={handleModalEmail}>
                <ModalEmail />
              </Modal.Root>

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

                <Modal.Root
                  open={openModalCancel}
                  onOpenChange={closeModalCancel}
                >
                  <ModalCancel />
                </Modal.Root>
              </ContainerBtn>
            </Form>
          </FormikProvider>
        </ContainerRegister>
      </ContainerForm>
    </>
  )
}
