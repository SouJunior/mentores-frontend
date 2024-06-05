import React, { ChangeEvent, useState } from 'react'
import { Button } from '@/components/atoms/Button'
import { ModalButton, ModalDescription, ModalTitle } from '@/styles/pages/home'
import { ModalCalendlyStep2Props } from '@/components/atoms/ModalCalendlyStep2'
import { FormikProvider, Field, Form, useFormik } from 'formik'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { Spinner } from '@/components/atoms/Spinner'
import { ButtonLoading } from '@/components/molecules/FormRegister/style'
import { throwErrorMessages } from '@/utils/throw-error-messages'
import { errorTranslations } from '@/services/errors/error-messages-translations'
import { InputForm } from '@/components/atoms/InputForm'
import {
  isCalendlyLink,
  isValidHttpUrl,
  splitCalendlyName,
} from '@/utils/ValidateCalendlyInput'
import { handleError } from '@/utils/handleError'

interface ModalCalendlyStep3Props extends ModalCalendlyStep2Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export interface ICalendlyInput {
  calendlyLink: string
}

export default function ModalCalendlyStep3({
  handleNextStep,
  handlePreviousStep,
  setCurrentStep,
}: ModalCalendlyStep3Props) {
  const [linkValue, setLinkValue] = useState('')

  const handleNextStepFromChild = () => {
    handleNextStep()
  }

  const handlePreviousStepFromChild = () => {
    handlePreviousStep()
  }

  const initialValues = {
    calendlyLink: '',
  }

  const handleModalStep4 = () => {
    setCurrentStep(4)
  }

  const handleSubmit = async (
    values: ICalendlyInput,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      if (
        isValidHttpUrl(linkValue) === true &&
        isCalendlyLink(linkValue) === true
      ) {
        const { firstPathName, secondPathName } = splitCalendlyName(linkValue)

        await api.post('/mentor', {
          calendlyName: firstPathName,
          agendaName: secondPathName,
        })

        resetForm()
        handleModalStep4()
      } else {
        handleError(
          'O link precisa ser nesse formato: https://calendly.com/your-calendly-name/your-agenda-name'
        )
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const messageKey = error.response?.data.message

        throwErrorMessages({
          messages: errorTranslations,
          currentMessageKey: messageKey,
        })
      }
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validateOnChange: true,
  })

  const isButtonDisabled = Object.entries(formik.values).some(
    ([key, value]) => !value || formik.errors[key as keyof ICalendlyInput]
  )

  return (
    <>
      <ModalTitle>Compartilhe seus horários.</ModalTitle>
      <ModalDescription>
        Agora, insira o link da sua agenda do Calendly no campo abaixo.
      </ModalDescription>
      <FormikProvider value={formik}>
        <Form>
          <Field
            as={InputForm}
            isRequired={false}
            type="input"
            name="calendlyLink"
            placeholder="Calendly Link"
            inputType="text"
            value={linkValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLinkValue(e.target.value)
            }
          />
        </Form>
      </FormikProvider>
      {formik.isSubmitting ? (
        <ButtonLoading disabled>
          <Spinner />
        </ButtonLoading>
      ) : (
        <Button
          disabled={isButtonDisabled}
          as={ModalButton}
          onClick={handleNextStepFromChild}
        >
          Salvar
        </Button>
      )}

      <Button
        as={ModalButton}
        onClick={handlePreviousStepFromChild}
        variant="secondary"
      >
        Voltar
      </Button>
    </>
  )
}
