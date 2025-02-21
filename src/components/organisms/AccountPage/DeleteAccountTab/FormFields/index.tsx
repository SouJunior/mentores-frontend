import { InputForm } from '@/components/atoms/InputForm';
import { reasons, reviewOptions } from '@/data/static-info';
import { isObject } from 'formik';
import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { FormValues } from '..';
import {
  CharactersLegend,
  ContentContainer,
  DropdownItemStyled,
  DropdownStyled,
  DropdownWrapper,
  ErrorLegend,
  EyeStyled,
  FieldLabel,
  InputWrapper,
  PasswordLabel,
  RadioButtonLabel,
  RadioButtonWrapper,
} from '../styles';

interface FormFieldsProps {
  setFormValues: Dispatch<SetStateAction<FormValues>>;
  formErrors: FormValues;
  setFormErrors: Dispatch<SetStateAction<FormValues>>;
}

export default function FormFields({
  setFormValues,
  formErrors,
  setFormErrors,
}: FormFieldsProps) {
  const [otherOptionSelected, setOtherOptionSelected] =
    useState<boolean>(false);
  const [reasonText, setReasonText] = useState<string>('');
  const [experienceText, setExperienceText] = useState<string>('');
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  const [maxCharsExceeded, setMaxCharsExceeded] = useState({
    inputReason: false,
    inputExperience: false,
  });

  const handleSelectChange = (e: any, name: string) => {
    setFormValues((prevState: FormValues) => ({
      ...prevState,
      [name ?? e?.target?.name]: isObject(e) ? e?.target?.value : e,
    }));

    // '5' is the "Outros" option
    if (name === 'reasonOption') {
      setOtherOptionSelected(e === '5');
    }
    handleError(name);
  };

  const togglePasswordVisibility = () =>
    setHiddenPassword(prevState => !prevState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    name === 'inputReason' ? setReasonText(value) : setExperienceText(value);

    setMaxCharsExceeded(prevState => ({
      ...prevState,
      [name]: value.length > 600,
    }));

    setFormValues((prevState: FormValues) => ({
      ...prevState,
      [name ?? event?.target?.name]: isObject(event)
        ? event?.target?.value
        : event,
    }));

    if (value.length <= 600) {
      handleError(name);
    }
  };

  const handleError = (name: string) => {
    setFormErrors((prevState: FormValues) => ({
      ...prevState,
      [name]: '',
    }));
  };

  return (
    <ContentContainer>
      <FieldLabel>
        O que o motivou a excluir sua conta na plataforma para mentores?
        <span>*</span>
        {formErrors.reasonOption && (
          <ErrorLegend className="error">{formErrors.reasonOption}</ErrorLegend>
        )}
      </FieldLabel>

      <DropdownWrapper>
        <DropdownStyled
          placeholder=""
          name="reasonOption"
          onValueChange={e => handleSelectChange(e, 'reasonOption')}
        >
          {reasons.map(reason => (
            <DropdownItemStyled key={reason.id} value={String(reason.id)}>
              {reason.description}
            </DropdownItemStyled>
          ))}
        </DropdownStyled>
      </DropdownWrapper>

      <InputWrapper
        $flexDirection="column"
        $alignItems="end"
        className={`${otherOptionSelected ? '' : 'hidden'}`}
      >
        <InputForm
          type="textarea"
          name="inputReason"
          placeholder="Escreva seu motivo"
          isRequired={false}
          onChange={handleInputChange}
        />
        {formErrors.inputReason && (
          <ErrorLegend className="error">{formErrors.inputReason}</ErrorLegend>
        )}
        <CharactersLegend
          className={`${maxCharsExceeded.inputReason ? 'error' : ''}`}
        >
          {reasonText.length}/600
        </CharactersLegend>
      </InputWrapper>

      <FieldLabel>
        Como você avaliaria a facilidade de uso da plataforma?
        <span>*</span>
        {formErrors.useReview && (
          <ErrorLegend className="error">{formErrors.useReview}</ErrorLegend>
        )}
      </FieldLabel>

      <InputWrapper $flexDirection="column" $gap={1}>
        {[...reviewOptions].reverse().map(item => (
          <RadioButtonWrapper key={item.id}>
            <input
              type="radio"
              name="useReview"
              value={item.id}
              onClick={e => handleSelectChange(e, 'useReview')}
            />

            <RadioButtonLabel>{item.description}</RadioButtonLabel>
          </RadioButtonWrapper>
        ))}
      </InputWrapper>

      <FieldLabel>
        Em uma escala de 1 a 7, o quão satisfeito você estava com a plataforma?
        <span>*</span>
        {formErrors.platformReview && (
          <ErrorLegend className="error">
            {formErrors.platformReview}
          </ErrorLegend>
        )}
      </FieldLabel>
      <InputWrapper $justifyContent="space-evenly">
        {reviewOptions.map(item => (
          <RadioButtonWrapper
            key={item.id}
            $flexDirection="column"
            $gap={0.25}
            $alignItems="center"
          >
            <RadioButtonLabel>
              <Image
                src={item.imgUrl}
                alt={item.description}
                width={20}
                height={20}
              />
            </RadioButtonLabel>

            <input
              type="radio"
              name="platformReview"
              value={item.id}
              onClick={e => handleSelectChange(e, 'platformReview')}
            />
          </RadioButtonWrapper>
        ))}
      </InputWrapper>

      <FieldLabel>
        Existe algo que você gostaria de compartilhar sobre sua experiência com
        a plataforma de mentores?
      </FieldLabel>

      <InputWrapper $flexDirection="column" $alignItems="end">
        <InputForm
          type="textarea"
          name="inputExperience"
          isRequired={false}
          onChange={handleInputChange}
        />
        {formErrors.inputExperience && (
          <ErrorLegend className="error">
            {formErrors.inputExperience}
          </ErrorLegend>
        )}
        <CharactersLegend
          className={`${maxCharsExceeded.inputExperience ? 'error' : ''}`}
        >
          {experienceText.length}/600
        </CharactersLegend>
      </InputWrapper>

      <InputWrapper
        $flexDirection="column"
        $alignItems="start"
        $relative={true}
      >
        <InputForm
          type="input"
          inputType={hiddenPassword ? 'password' : 'text'}
          name="password"
          isRequired={false}
          placeholder="Senha*"
        />

        <EyeStyled
          pressed={!hiddenPassword}
          onPressedChange={togglePasswordVisibility}
        />
        <PasswordLabel>Insira a senha para excluir sua conta</PasswordLabel>
      </InputWrapper>
    </ContentContainer>
  );
}
