import { InputForm } from '@/components/atoms/InputForm';
import { reasons, reviewOptions } from '@/data/static-info';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import {
  CharactersLegend,
  ContentContainer,
  DropdownItemStyled,
  DropdownStyled,
  DropdownWrapper,
  EyeStyled,
  FieldLabel,
  InputWrapper,
  PasswordLabel,
  RadioButtonLabel,
  RadioButtonWrapper,
} from '../styles';

export default function FormFields() {
  const [otherOptionSelected, setOtherOptionSelected] =
    useState<boolean>(false);
  const [reasonText, setReasonText] = useState<string>('');
  const [experienceText, setExperienceText] = useState<string>('');
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  const [maxCharsExceeded, setMaxCharsExceeded] = useState({
    inputReason: false,
    inputExperience: false,
  });

  // '5' is the "Outros" option
  const handleSelectChange = (option: string) => {
    setOtherOptionSelected(option === '5');
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
  };

  return (
    <ContentContainer>
      <FieldLabel>
        O que o motivou a excluir sua conta na plataforma para mentores?
        <span>*</span>
      </FieldLabel>

      <DropdownWrapper>
        <DropdownStyled
          placeholder=""
          name="reasonOption"
          onValueChange={handleSelectChange}
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

        <CharactersLegend
          className={`${maxCharsExceeded.inputReason ? 'error' : ''}`}
        >
          {reasonText.length}/600
        </CharactersLegend>
      </InputWrapper>

      <FieldLabel>
        Como você avaliaria a facilidade de uso da plataforma?
        <span>*</span>
      </FieldLabel>

      <InputWrapper $flexDirection="column" $gap={1}>
        {[...reviewOptions].reverse().map(item => (
          <RadioButtonWrapper key={item.id}>
            <input type="radio" name="useReview" value={item.id} />

            <RadioButtonLabel>{item.description}</RadioButtonLabel>
          </RadioButtonWrapper>
        ))}
      </InputWrapper>

      <FieldLabel>
        Em uma escala de 1 a 7, o quão satisfeito você estava com a plataforma?
        <span>*</span>
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

            <input type="radio" name="platformReview" value={item.id} />
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
