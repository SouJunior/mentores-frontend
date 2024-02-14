import { Button } from '@/components/atoms/Button'
import {
  ButtonLoading,
  ButtonsContainer,
  Divider,
  PersonalInfoContent,
  SubtitleTab,
  TabContainer,
  TitleTab,
} from '../styles'

import { FormikProvider, useFormik } from 'formik'
import { FormFields } from './FormFields'

import * as yup from 'yup'
import { genders } from '@/data/static-info'
import UserUpdateService from '@/services/user/userUpdateService'
import { handleError } from '@/utils/handleError'
import { AxiosError } from 'axios'
import { Modal } from '@/components/atoms/Modal'
import { ModalCancel } from '@/components/molecules/ModalCancel'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Spinner } from '@/components/atoms/Spinner'
import { useAuthContext } from '@/context/Auth/AuthContext'

const personalInfoSchema = yup.object({
  name: yup.string().optional(),
  dateOfBirth: yup.date().optional(),
  email: yup.string().email('E-mail inválido').optional(),
  gender: yup.string().oneOf(genders).optional(),
})

export type PersonalInfoFormData = yup.InferType<typeof personalInfoSchema>

export function PersonalInfoTab() {
  const { handle } = UserUpdateService()
  const { mentor } = useAuthContext()
  const [openModalCancel, setOpenModalCancel] = useState(false)
  const router = useRouter()

  async function handleUpdatePersonalInfo(
    data: PersonalInfoFormData,
    { resetForm }: { resetForm: () => void },
  ) {
    try {
      await handle({
        fullName: data.name,
        gender: data.gender,
      })

      mentor.refetch()
      resetForm()
    } catch (err) {
      if (err instanceof AxiosError) {
        handleError(JSON.stringify(err.response?.data))
      }
    }
  }

  const formik = useFormik<PersonalInfoFormData>({
    initialValues: {
      gender: '',
      name: mentor.data?.fullName,
      email: mentor.data?.email,
    },
    onSubmit: handleUpdatePersonalInfo,
    validationSchema: personalInfoSchema,
  })

  const handleModalCancel = () => {
    const isSomeFieldFilled = Object.values(formik.values).some(
      (field) => field,
    )

    if (isSomeFieldFilled) {
      setOpenModalCancel(true)
      return
    }

    router.push('/')
  }

  return (
    <TabContainer value="tab-personal-info">
      <TitleTab>Informações de cadastro</TitleTab>
      <SubtitleTab>
        <span>*</span> Indica um campo obrigatório
      </SubtitleTab>

      <FormikProvider value={formik}>
        <PersonalInfoContent>
          <FormFields />

          <Divider />

          <ButtonsContainer>
            <Button
              type="button"
              variant="tertiary"
              onClick={handleModalCancel}
              disabled={formik.isSubmitting}
            >
              Descartar
            </Button>

            <Modal.Root
              open={openModalCancel}
              onOpenChange={() => setOpenModalCancel(false)}
            >
              <ModalCancel />
            </Modal.Root>

            {formik.isSubmitting ? (
              <ButtonLoading disabled>
                <Spinner />
              </ButtonLoading>
            ) : (
              <Button type="submit">Salvar</Button>
            )}
          </ButtonsContainer>
        </PersonalInfoContent>
      </FormikProvider>
    </TabContainer>
  )
}
