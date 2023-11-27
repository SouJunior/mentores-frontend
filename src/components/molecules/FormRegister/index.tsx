import souJuniorLogoImg from '@/assets/logos/sou-junior.svg'
import { Checkbox } from '@/components/atoms/Checkbox'
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
import { MouseEvent, useEffect, useState } from 'react'
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
  const [agree, setIsAgree] = useState(false)
  const [concluidoDesabilitado, setIsConcluidoDesabilitado] = useState(true)
  const [openEmail, setOpenEmail] = useState(false)
  const [show, setShow] = useState(true)
  const [eye, setEye] = useState(true)
  const [showConfirm, setShowConfirm] = useState(true)
  const [eyeConfirm, setEyeConfirm] = useState(true)
  const [showCalendar, setShowCalendar] = useState(false)

  const router = useRouter()

  const handleOpenTermos = () => setOpenTermos(true)
  const handleCloseTermos = () => setOpenTermos(false)
  const handleOpenPoliticas = () => setOpenPoliticas(true)
  const handleClosePoliticas = () => setOpenPoliticas(false)
  const handleModalEmail = () => setOpenEmail(true)
  const closeModalEmail = () => setOpenEmail(false)
  const closeModalCancel = () => setOpenModalCancel(false)

  const handleShowPassword = (
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
    setEye(!eye)
    setShow(!show)
  }

  const handleConfirmPassword = (
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
    setEyeConfirm(!eyeConfirm)
    setShowConfirm(!showConfirm)
  }

  const handleSubmit = async (
    values: ValuesFormType,
    { resetForm }: { resetForm: () => void }
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
          alert(`${error?.response.status} ${error?.response.data.message[0]}`)
          return
        }

        alert(
          'Ocorreu um erro na criação do mentor. Verifique a conexão de internet ou tente novamente mais tarde.'
        )
        return
      }

      console.error(error)
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: handleSubmit,
    validateOnChange: true,
  })

  const handleModalCancel = () => {
    const {
      name,
      password,
      confirmEmail,
      confirmPassword,
      dataBirthday,
      email,
    } = formik.values
    const isSomeFieldFilled =
      name ||
      password ||
      email ||
      dataBirthday ||
      confirmEmail ||
      confirmPassword

    if (isSomeFieldFilled) {
      setOpenModalCancel(true)
      return
    }

    router.back()
  }

  useEffect(() => {
    if (agree && formik.isValid && Object.keys(formik.touched).length > 0) {
      setIsConcluidoDesabilitado(false)
    } else {
      setIsConcluidoDesabilitado(true)
    }
  }, [agree, formik.isValid, formik.touched])

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  const hundredYearsAgo = new Date()
  hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100)

  return (
    <ContainerForm>
      <ContainerRegister>
        <FormikProvider value={formik}>
          <Form>
            <Image src={souJuniorLogoImg} alt="logo" width={240} height={36} />
            <p>
              <span className="asterisk">*</span> Indica um campo obrigatório
            </p>
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
              <DatePickerContainer>
                <span>
                  Data de nascimento <span>*</span>
                </span>
                <Calendar.Control>
                  {formik.values.dataBirthday ? (
                    <span>
                      {dayjs(formik.values.dataBirthday).format('DD/MM/YYYY')}
                    </span>
                  ) : (
                    <span data-placeholder>dd/mm/aaaa</span>
                  )}
                  <EventRoundedIcon />
                </Calendar.Control>
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

            <InfoTooltip right={-6} />

            <WrapperInput>
              <Eye
                onClick={(e) => handleShowPassword(e)}
                eye={eye}
                size={20}
                right="1rem"
                top="2.1rem"
                color={'#5D5F5D'}
              />

              <Field
                as={InputForm}
                type="input"
                label="Senha"
                name="password"
                placeholder="********"
                inputType={show ? 'password' : 'text'}
              />
            </WrapperInput>

            <WrapperInput>
              <Eye
                onClick={(e) => handleConfirmPassword(e)}
                eye={eyeConfirm}
                size={20}
                right="1rem"
                top="2.1rem"
                color={'#5D5F5D'}
              />

              <Field
                as={InputForm}
                type="input"
                label="Confirmar senha"
                name="confirmPassword"
                placeholder="********"
                inputType={showConfirm ? 'password' : 'text'}
              />
            </WrapperInput>
            <ContainerTerms>
              <Checkbox setValue={setIsAgree} isChecked={agree} />
              <TxtTerms>
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
                  disabled={concluidoDesabilitado}
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
