import EditPhotoModal from '@/components/atoms/EditPhotoModal';
import { InputForm } from '@/components/atoms/InputForm';
import { Modal } from '@/components/atoms/Modal';
import PhotoButton from '@/components/atoms/PhotoButton';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { useEditPhotoContext } from '@/context/EditPhotoContext';
import { specialties as specialtiesOptions } from '@/data/static-info';
import CheckIcon from '@mui/icons-material/Check';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { ProfileFormData } from '..';
import {
  ButtonEditPhoto,
  CharacterSectionLegend,
  ContentContainer,
  DescriptionContainer,
  GridSpecialties,
  SectionLegend,
  SelectedSpecialtyCount,
  SpecialtyItem,
} from '../styles';

export function FormFields() {
  const [isMaxCharactersExceeded, setIsMaxCharactersExceeded] = useState(false);
  const [isEditPhotoModalOpen, setIsEditPhotoModalOpen] = useState(false);
  const { mentor, activeProfileType } = useAuthContext();
  const [specialties, setSpecialties] = useState<string[]>(
    mentor.data?.specialties ?? []
  );
  const formik = useFormikContext<ProfileFormData>();
  const selectedCount = specialties.length;
  const { setOriginalImage } = useEditPhotoContext();

  const specialtiesLabel =
    activeProfileType === 'mentor'
      ? 'As áreas que você mentora:'
      : 'Áreas de interesse:';
  const aboutMePlaceholder =
    activeProfileType === 'mentor'
      ? 'Fale sobre sua trajetória profissional para que possam lhe conhecer melhor.'
      : 'Fale um pouco sobre você, suas expectativas e o que deseja aprender.';

  const handleImageEdit = (editedImage: string | null) => {
    formik.setFieldValue('profile', editedImage || '');
    setIsEditPhotoModalOpen(false);
  };

  const toggleSpecialty = (value: string): void => {
    if (specialties.includes(value)) {
      const updatedSpecialties = specialties.filter(item => item !== value);
      setSpecialties(updatedSpecialties);
      formik.setFieldValue('specialties', updatedSpecialties);
      return;
    }

    if (selectedCount < 6) {
      const updatedSpecialties = [...specialties, value];
      setSpecialties(updatedSpecialties);
      formik.setFieldValue('specialties', updatedSpecialties);
    }
  };

  useEffect(() => {
    setOriginalImage(mentor.data?.profile ?? '');
  }, [mentor.data?.profile, setOriginalImage]);

  useEffect(() => {
    const aboutMeLength =
      formik.values.aboutMe?.length ?? mentor.data?.aboutMe?.length ?? 0;

    setIsMaxCharactersExceeded(aboutMeLength > 600);
  }, [formik.values.aboutMe, mentor.data?.aboutMe]);

  const handleMaxCharacters = () => {
    const aboutMeLength =
      formik.values.aboutMe?.length ?? mentor.data?.aboutMe?.length ?? 0;

    if (aboutMeLength <= 600) {
      return `${aboutMeLength} / 600`;
    }

    return 600 - aboutMeLength;
  };

  return (
    <ContentContainer>
      <Modal.Root
        open={isEditPhotoModalOpen}
        onOpenChange={setIsEditPhotoModalOpen}
      >
        <ButtonEditPhoto>
          <PhotoButton
            selectedPhoto={formik.values.profile ?? mentor.data?.profile}
          />
          <PhotoCameraOutlinedIcon className="camera-icon" />
        </ButtonEditPhoto>

        <EditPhotoModal
          selectedPhoto={formik.values.profile ?? mentor.data?.profile ?? ''}
          onAddPhoto={photo => {
            formik.setFieldValue('profile', photo);
            setIsEditPhotoModalOpen(false);
          }}
          onImageEdit={handleImageEdit}
        />
      </Modal.Root>

      <div>
        <SectionLegend>
          {specialtiesLabel} <span>*</span>
        </SectionLegend>
        <GridSpecialties>
          {specialtiesOptions.map(specialty => (
            <SpecialtyItem
              key={specialty}
              selected={
                formik.values.specialties?.includes(specialty) ??
                mentor.data?.specialties?.includes(specialty)
              }
              onClick={() => toggleSpecialty(specialty)}
            >
              <CheckIcon fontSize="small" />
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
          name="aboutMe"
          placeholder={aboutMePlaceholder}
          defaultValue={mentor.data?.aboutMe}
        />

        <CharacterSectionLegend
          className={`${isMaxCharactersExceeded ? 'error' : ''}`}
        >
          {handleMaxCharacters()}
        </CharacterSectionLegend>
      </DescriptionContainer>
    </ContentContainer>
  );
}
