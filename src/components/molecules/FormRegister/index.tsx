import souJuniorLogoImg from '@/assets/logos/sou-junior.svg'
import { Eye } from '@/components/atoms/Eye'
import { InfoTooltip } from '@/components/atoms/InfoTooltip'
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
import { InputForm } from '../../atoms/InputForm'
import { ModalCancel } from '../ModalCancel'
import { ModalPrivacyPolicy } from '../ModalPrivacyPolicy'
import ModalTerms from '../ModalTerms'

import {
  ButtonLoading,
  ContainerBtn,
  ContainerForm,
  ContainerRegister,
  ContainerTerms,
  DatePickerContainer,
  WrapperInput,
  TxtTerms,
} from './style'
import { api } from '@/lib/axios'
import { Calendar } from '../Calendar'
import EventRoundedIcon from '@mui/icons-material/EventRounded'
import dayjs from 'dayjs'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'

export function FormRegister() {
  const [openTermos, setOpenTermos] = useState(false)
  const [openPoliticas, setOpenPoliticas] = useState(false)
  const [openModalCancel, setOpenModalCancel] = useState(false)
  const [openEmail, setOpenEmail] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false)

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
        specialties: ['Frontend'],
      })
      resetForm()
      handleModalEmail()
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error?.response?.status === 400) {
          alert(`${error?.response.status} ${error?.response.data.message}`)
          console.error(error)
          return
        }

        alert(
          'Ocorreu um erro na criação do mentor. Verifique a conexão de internet ou tente novamente mais tarde.',
        )
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
            <Field
              as={InputForm}
              type="input"
              name="name"
              label="Nome completo"
              placeholder="Preencha com seu nome"
              inputType="text"
            />

            <Calendar.Root
              open={showCalendar}
              onOpenChange={() => setShowCalendar(!showCalendar)}
            >
              <DatePickerContainer
                className={formik.errors.dataBirthday && 'error'}
              >
                <span>
                  Data de nascimento <span>*</span>
                </span>
                <Calendar.Control
                  className={formik.errors.dataBirthday && 'error'}
                >
                  {formik.values.dataBirthday ? (
                    <span>
                      {dayjs(formik.values.dataBirthday).format('DD/MM/YYYY')}
                    </span>
                  ) : (
                    <span data-placeholder>dd/mm/aaaa</span>
                  )}
                  <EventRoundedIcon />
                </Calendar.Control>

                {formik.errors.dataBirthday && (
                  <span className="error-message">
                    {formik.errors.dataBirthday}
                  </span>
                )}
              </DatePickerContainer>

              <Calendar.Content
                selected={formik.values.dataBirthday}
                onSelected={(date: Date) => {
                  formik.setValues({
                    ...formik.values,
                    dataBirthday: date,
                  })
                  setShowCalendar(false)
                }}
                avoidCollisions={false}
                sideOffset={10}
              />
            </Calendar.Root>

            <Field
              as={InputForm}
              type="input"
              label="E-mail"
              name="email"
              placeholder="Preencha com o seu e-mail"
              inputType="text"
            />

            <Field
              as={InputForm}
              type="input"
              label="Confirmar E-mail"
              name="confirmEmail"
              placeholder="Confirme seu e-mail"
              inputType="email"
            />

            <WrapperInput>
              <InfoTooltip right={0} />
              <Field
                as={InputForm}
                type="input"
                label="Senha"
                name="password"
                placeholder="********"
                inputType={isPasswordVisible ? 'text' : 'password'}
              />

              <Eye
                aria-label="Mostrar senha"
                pressed={isPasswordVisible}
                onPressedChange={setIsPasswordVisible}
              />
            </WrapperInput>

            <WrapperInput>
              <Field
                as={InputForm}
                type="input"
                label="Confirmar senha"
                name="confirmPassword"
                placeholder="********"
                inputType={isConfirmPasswordVisible ? 'text' : 'password'}
              />

              <Eye
                aria-label="Mostrar confirmação da senha"
                pressed={isConfirmPasswordVisible}
                onPressedChange={setIsConfirmPasswordVisible}
              />
            </WrapperInput>

            <ContainerTerms>
              <Field
                id="checkbox-terms-and-policies"
                type="checkbox"
                name="agreeWithTermsAndPolicies"
              />
              <TxtTerms htmlFor="checkbox-terms-and-policies">
                Concordo com os{' '}
                <Button
                  content={'Termos de uso'}
                  btnRole={'unstyled'}
                  onClick={handleOpenTermos}
                />{' '}
                e{' '}
                <Button
                  btnRole={'unstyled'}
                  content={'	Políticas de privacidade'}
                  onClick={handleOpenPoliticas}
                />{' '}
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
                  <span className="loader" />
                </ButtonLoading>
              ) : (
                <Button
                  btnRole={'form'}
                  content={'Concluir'}
                  disabled={isButtonDisabled}
                />
              )}

              <Button
                btnRole={'form-secondary'}
                content={'Cancelar'}
                onClick={handleModalCancel}
              />
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
  )
}
