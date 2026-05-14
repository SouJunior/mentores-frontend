import PhotoButton from '@/components/atoms/PhotoButton';
import {
  BackButton,
  ButtonContainer,
  CharactersWarnInput,
  Dotted,
  ErrorMessageText,
  FormContainer,
  NextButton,
  SelectInputContainer,
  SelectItemStyled,
  StyledHR,
  StyledImportant,
  StyledInfo,
  StyledInfoContainer,
} from './styled';
import { Dispatch, SetStateAction } from 'react';
import EditPhotoModal from '@/components/atoms/EditPhotoModal';
import { ErrorMessage, Form } from 'formik';
import { InputForm } from '@/components/atoms/InputForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { genders } from '@/data/static-info';
import { Select } from '@/components/atoms/Select';
import { StepNumber, useOnBoardingContext } from '@/context/OnBoardingContext';
import { Modal } from '@/components/atoms/Modal';

interface FormOnBoardProps {
  onStep: Dispatch<SetStateAction<StepNumber>>;
}

export default function FormOnboard2({ onStep }: FormOnBoardProps) {
  const { formik } = useOnBoardingContext();

  const handleImageEdit = (editedImage: string | null) => {
    formik.setFieldValue('profile', editedImage || '');
    formik.setFieldTouched('profile', true, false);
  };

  const handleBackToFirstStep = () => {
    onStep(1);
  };

  const handleSubmitAttempt = () => {
    formik.setTouched(
      {
        ...formik.touched,
        profile: true,
        description: true,
        gender: true,
      },
      true
    );
  };

  const hasProfileError = Boolean(
    formik.errors.profile && formik.touched.profile
  );
  const hasGenderError = Boolean(formik.errors.gender && formik.touched.gender);

  return (
    <>
      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
      />

      <Modal.Root>
        <Modal.Control asChild>
          <Dotted className={hasProfileError ? 'error' : ''}>
            <PhotoButton size={80} selectedPhoto={formik.values.profile} />

            <StyledImportant>
              Para inserir sua foto, clique aqui.<span className="last">*</span>
            </StyledImportant>
            <StyledInfo>
              Formato aceito: jpg ou png. Tamanho máx.: 8 MB.
            </StyledInfo>
          </Dotted>
        </Modal.Control>
        {hasProfileError && (
          <ErrorMessageText>
            <ErrorMessage name="profile" />
          </ErrorMessageText>
        )}

        <EditPhotoModal
          selectedPhoto={formik.values.profile}
          onAddPhoto={photo => {
            formik.setFieldValue('profile', photo);
            formik.setFieldTouched('profile', true, false);
          }}
          onImageEdit={handleImageEdit}
        />
      </Modal.Root>

      <FormContainer>
        <Form>
          <StyledInfoContainer>
            <InputForm
              label="Conte mais sobre você:"
              type="textarea"
              name="description"
              placeholder="Fale sobre sua trajetória profissional para que possam lhe conhecer melhor;"
              required
            />
            <CharactersWarnInput>Máximo 600 caracteres.</CharactersWarnInput>
          </StyledInfoContainer>

          <SelectInputContainer className={hasGenderError ? 'error' : ''}>
            <span>
              Gênero
              <span className="asterisk">*</span>
            </span>
            <Select
              placeholder="Gênero"
              onValueChange={value => {
                formik.setFieldValue('gender', value);
                formik.setFieldTouched('gender', true, false);
              }}
            >
              {genders.map(gender => (
                <SelectItemStyled key={gender} value={gender}>
                  {gender}
                </SelectItemStyled>
              ))}
            </Select>
            {hasGenderError && (
              <ErrorMessageText>
                <ErrorMessage name="gender" />
              </ErrorMessageText>
            )}
          </SelectInputContainer>
          <StyledHR />

          <ButtonContainer>
            <BackButton
              onClick={handleBackToFirstStep}
              variant="secondary"
              type="button"
            >
              Voltar
            </BackButton>
            <NextButton
              type="submit"
              disabled={formik.isSubmitting}
              onClick={handleSubmitAttempt}
            >
              Concluir
            </NextButton>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </>
  );
}
