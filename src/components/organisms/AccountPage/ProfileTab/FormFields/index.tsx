import {
  ButtonEditPhoto,
  ContentContainer,
  DescriptionContainer,
  GridSpecialties,
  SectionLegend,
  SelectedSpecialtyCount,
  SpecialtyItem,
} from '../styles'
import PhotoButton from '@/components/atoms/PhotoButton'
import EditPhotoModal from '@/components/atoms/EditPhotoModal'
import { useFormikContext } from 'formik'
import { ProfileFormData } from '..'
import { Modal } from '@/components/atoms/Modal'

import CheckIcon from '@mui/icons-material/Check'
import { specialties as specialtiesOptions } from '@/data/static-info'
import { useAuthContext } from '@/context/Auth/AuthContext'
import { useState } from 'react'
import { InputForm } from '@/components/atoms/InputForm'

export function FormFields() {
  const { mentor } = useAuthContext()
  const [specialties, setSpecialties] = useState<string[]>(
    mentor.data?.specialties ?? [],
  )
  const formik = useFormikContext<ProfileFormData>()

  const handleImageEdit = (editedImage: string | null) => {
    formik.setFieldValue('profile', editedImage || '')
  }

  const selectedCount = specialties.length ?? mentor.data?.specialties

  const toggleSpecialty = (value: string): void => {
    if (specialties.includes(value)) {
      setSpecialties((state) => state.filter((item) => item !== value))

      formik.setFieldValue(
        'specialties',
        specialties.filter((item) => item !== value),
      )
    } else if (selectedCount < 6) {
      setSpecialties((state) => [...state, value])
      formik.setFieldValue('specialties', [...specialties, value])
    }
  }

  return (
    <ContentContainer>
      <Modal.Root>
        <ButtonEditPhoto>
          <PhotoButton selectedPhoto={formik.values.profile ?? ''} />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="camera-icon"
          >
            <path
              d="M32.5 8.125H28.5031L26.5625 5.20938C26.391 4.95231 26.1586 4.74162 25.886 4.59605C25.6134 4.45048 25.309 4.37454 25 4.375H15C14.691 4.37454 14.3866 4.45048 14.114 4.59605C13.8414 4.74162 13.609 4.95231 13.4375 5.20938L11.4953 8.125H7.5C6.33968 8.125 5.22688 8.58594 4.40641 9.40641C3.58594 10.2269 3.125 11.3397 3.125 12.5V30C3.125 31.1603 3.58594 32.2731 4.40641 33.0936C5.22688 33.9141 6.33968 34.375 7.5 34.375H32.5C33.0745 34.375 33.6434 34.2618 34.1742 34.042C34.705 33.8221 35.1873 33.4999 35.5936 33.0936C35.9999 32.6873 36.3221 32.205 36.542 31.6742C36.7618 31.1434 36.875 30.5745 36.875 30V12.5C36.875 11.9255 36.7618 11.3566 36.542 10.8258C36.3221 10.295 35.9999 9.81267 35.5936 9.40641C35.1873 9.00015 34.705 8.67789 34.1742 8.45803C33.6434 8.23816 33.0745 8.125 32.5 8.125ZM33.125 30C33.125 30.1658 33.0592 30.3247 32.9419 30.4419C32.8247 30.5592 32.6658 30.625 32.5 30.625H7.5C7.33424 30.625 7.17527 30.5592 7.05806 30.4419C6.94085 30.3247 6.875 30.1658 6.875 30V12.5C6.875 12.3342 6.94085 12.1753 7.05806 12.0581C7.17527 11.9408 7.33424 11.875 7.5 11.875H12.5C12.809 11.8755 13.1134 11.7995 13.386 11.654C13.6586 11.5084 13.891 11.2977 14.0625 11.0406L16.0031 8.125H23.9953L25.9375 11.0406C26.109 11.2977 26.3414 11.5084 26.614 11.654C26.8866 11.7995 27.191 11.8755 27.5 11.875H32.5C32.6658 11.875 32.8247 11.9408 32.9419 12.0581C33.0592 12.1753 33.125 12.3342 33.125 12.5V30ZM26.875 21.25C26.875 21.7473 26.6775 22.2242 26.3258 22.5758C25.9742 22.9275 25.4973 23.125 25 23.125H21.875V26.25C21.875 26.7473 21.6775 27.2242 21.3258 27.5758C20.9742 27.9275 20.4973 28.125 20 28.125C19.5027 28.125 19.0258 27.9275 18.6742 27.5758C18.3225 27.2242 18.125 26.7473 18.125 26.25V23.125H15C14.5027 23.125 14.0258 22.9275 13.6742 22.5758C13.3225 22.2242 13.125 21.7473 13.125 21.25C13.125 20.7527 13.3225 20.2758 13.6742 19.9242C14.0258 19.5725 14.5027 19.375 15 19.375H18.125V16.25C18.125 15.7527 18.3225 15.2758 18.6742 14.9242C19.0258 14.5725 19.5027 14.375 20 14.375C20.4973 14.375 20.9742 14.5725 21.3258 14.9242C21.6775 15.2758 21.875 15.7527 21.875 16.25V19.375H25C25.4973 19.375 25.9742 19.5725 26.3258 19.9242C26.6775 20.2758 26.875 20.7527 26.875 21.25Z"
              fill="#666666"
            />
          </svg>
        </ButtonEditPhoto>

        <EditPhotoModal
          selectedPhoto={formik.values.profile ?? ''}
          onAddPhoto={(photo) => {
            formik.setFieldValue('profile', photo)
          }}
          onImageEdit={handleImageEdit}
        />
      </Modal.Root>

      <div>
        <SectionLegend>
          As áreas que você mentora: <span>*</span>
        </SectionLegend>
        <GridSpecialties>
          {specialtiesOptions.map((specialty) => (
            <SpecialtyItem
              key={specialty}
              selected={
                formik.values.specialties?.includes(specialty) ??
                mentor.data?.specialties.includes(specialty)
              }
              onClick={() => toggleSpecialty(specialty)}
            >
              <CheckIcon fontSize={'small'} />
              {specialty}
            </SpecialtyItem>
          ))}

          <SelectedSpecialtyCount>
            <strong>{selectedCount}/6</strong> especialidades
          </SelectedSpecialtyCount>
        </GridSpecialties>
      </div>

      <div aria-hidden />
      <DescriptionContainer>
        <InputForm
          label="Conte mais sobre você:"
          type="textarea"
          name="description"
          placeholder="Fale sobre sua trajetória profissional para que possam lhe conhecer melhor;"
          defaultValue={mentor.data?.aboutMe}
        />

        <SectionLegend>Máximo 600 caracteres.</SectionLegend>
      </DescriptionContainer>
    </ContentContainer>
  )
}
