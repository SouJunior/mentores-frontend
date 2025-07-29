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
  FieldLabel,
  InputWrapper,
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
  // const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  const [maxCharsExceeded, setMaxCharsExceeded] = useState({
    reasonText: false,
    userExperienceFeedback: false,
  });

  const handleSelectChange = (e: any, attributeName: string) => {
    setFormValues((prevState: FormValues) => ({
      ...prevState,
      [attributeName ?? e?.target?.name]: isObject(e) ? e?.target?.value : e,
    }));

    // Opção Outros = 5
    if (attributeName === 'reasonOption') {
      setOtherOptionSelected(e === '5');
    }

    handleError(attributeName);
  };

  // const togglePasswordVisibility = () =>
  //   setHiddenPassword(prevState => !prevState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    name === 'reasonText' ? setReasonText(value) : setExperienceText(value);

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

  const handleError = (attributeName: string) => {
    setFormErrors((prevState: FormValues) => ({
      ...prevState,
      [attributeName]: null,
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
          name="reasonText"
          placeholder="Escreva seu motivo"
          isRequired={false}
          onChange={handleInputChange}
        />
        {formErrors.reasonText && (
          <ErrorLegend className="error">{formErrors.reasonText}</ErrorLegend>
        )}
        <CharactersLegend
          className={`${maxCharsExceeded.reasonText ? 'error' : ''}`}
        >
          {reasonText.length}/600
        </CharactersLegend>
      </InputWrapper>

      <FieldLabel>
        Como você avaliaria a facilidade de uso da plataforma?
        <span>*</span>
        {formErrors.usabilityRating && (
          <ErrorLegend className="error">
            {formErrors.usabilityRating}
          </ErrorLegend>
        )}
      </FieldLabel>

      <InputWrapper $flexDirection="column" $gap={1}>
        {[...reviewOptions].reverse().map(item => (
          <RadioButtonWrapper key={item.id}>
            <input
              type="radio"
              name="usabilityRating"
              value={item.id}
              onClick={e => handleSelectChange(e, 'usabilityRating')}
            />

            <RadioButtonLabel>{item.description}</RadioButtonLabel>
          </RadioButtonWrapper>
        ))}
      </InputWrapper>

      <FieldLabel>
        Em uma escala de 1 a 7, o quão satisfeito você estava com a plataforma?
        <span>*</span>
        {formErrors.satisfactionRating && (
          <ErrorLegend className="error">
            {formErrors.satisfactionRating}
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
              name="satisfactionRating"
              value={item.id}
              onClick={e => handleSelectChange(e, 'satisfactionRating')}
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
          name="userExperienceFeedback"
          isRequired={false}
          onChange={handleInputChange}
        />
        {formErrors.userExperienceFeedback && (
          <ErrorLegend className="error">
            {formErrors.userExperienceFeedback}
          </ErrorLegend>
        )}
        <CharactersLegend
          className={`${maxCharsExceeded.userExperienceFeedback ? 'error' : ''}`}
        >
          {experienceText.length}/600
        </CharactersLegend>
      </InputWrapper>

      {/* <InputWrapper
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
      </InputWrapper> */}
    </ContentContainer>
  );
}
