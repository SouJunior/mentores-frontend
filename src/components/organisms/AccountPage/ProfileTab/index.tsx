import { Button } from '@/components/atoms/Button'
import {
  ButtonLoading,
  ButtonsContainer,
  Divider,
  SubtitleTab,
  TabContainer,
  TitleTab,
} from '../styles'

import { FormikProvider, useFormik } from 'formik'

import * as yup from 'yup'
import UserUpdateService from '@/services/user/userUpdateService'
import { handleError } from '@/utils/handleError'
import { AxiosError } from 'axios'
import { Modal } from '@/components/atoms/Modal'
import { ModalCancel } from '@/components/molecules/ModalCancel'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Spinner } from '@/components/atoms/Spinner'
import { useAuthContext } from '@/context/Auth/AuthContext'
import { ProfileContentForm } from './styles'
import { FormFields } from './FormFields'

const profileSchema = yup.object({
  specialties: yup.array(yup.string().required('Obrigatório')),
  description: yup.string().max(600, 'Limite máximo de caracteres atingido'),
  profile: yup.string(),
})

export type ProfileFormData = yup.InferType<typeof profileSchema>

export function ProfileTab() {
  const { handle } = UserUpdateService()
  const { mentor } = useAuthContext()
  const [openModalCancel, setOpenModalCancel] = useState(false)
  const router = useRouter()

  async function handleUpdateProfile(
    data: ProfileFormData,
    { resetForm }: { resetForm: () => void },
  ) {
    try {
      await handle({
        specialties: data.specialties,
        aboutMe: data.description,
        profile: data.profile,
      })

      resetForm()
    } catch (err) {
      if (err instanceof AxiosError) {
        handleError(JSON.stringify(err.response?.data))
      }
    }
  }

  const formik = useFormik<ProfileFormData>({
    initialValues: {
      specialties: mentor.data?.specialties,
      profile: mentor.data?.profile,
      description: mentor.data?.aboutMe,
    },
    onSubmit: handleUpdateProfile,
    validationSchema: profileSchema,
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
    <TabContainer value="tab-profile">
      <TitleTab>Perfil</TitleTab>
      <SubtitleTab>
        <span>*</span> Indica um campo obrigatório
      </SubtitleTab>

      <FormikProvider value={formik}>
        <ProfileContentForm>
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
        </ProfileContentForm>
      </FormikProvider>
    </TabContainer>
  )
}
