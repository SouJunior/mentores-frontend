import { Eye } from '@/components/atoms/Eye';
import { InfoTooltip } from '@/components/atoms/InfoTooltip';
import { DatePickerContainer, WrapperInput } from './styles';
import { InputForm } from '../../../atoms/InputForm';
import { Calendar } from '../../Calendar';
import { Field, useFormikContext } from 'formik';
import { useState } from 'react';
import { ValuesFormType } from '@/utils/registerSchema';

import EventRoundedIcon from '@mui/icons-material/EventRounded';
import dayjs from 'dayjs';

export function FormRegisterFields() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const formik = useFormikContext<ValuesFormType>();

  return (
    <>
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
        <DatePickerContainer className={formik.errors.dateBirthday && 'error'}>
          <span>
            Data de nascimento <span>*</span>
          </span>
          <Calendar.Control className={formik.errors.dateBirthday && 'error'}>
            {formik.values.dateBirthday ? (
              <span>
                {dayjs(formik.values.dateBirthday).format('DD/MM/YYYY')}
              </span>
            ) : (
              <span data-placeholder>dd/mm/aaaa</span>
            )}
            <EventRoundedIcon />
          </Calendar.Control>

          {formik.errors.dateBirthday && (
            <span className="error-message">{formik.errors.dateBirthday}</span>
          )}
        </DatePickerContainer>

        <Calendar.Content
          selected={formik.values.dateBirthday}
          onSelected={(date: Date) => {
            formik.setValues({
              ...formik.values,
              dateBirthday: date,
            });
            setShowCalendar(false);
          }}
          avoidCollisions={false}
          sideOffset={10}
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

      <WrapperInput>
        <InfoTooltip right={0} />
        <Field
          as={InputForm}
          type="input"
          label="Senha"
          name="password"
          placeholder="********"
          inputType={isPasswordVisible ? 'text' : 'password'}
        />

        <Eye
          aria-label="Mostrar senha"
          pressed={isPasswordVisible}
          onPressedChange={setIsPasswordVisible}
        />
      </WrapperInput>

      <WrapperInput>
        <Field
          as={InputForm}
          type="input"
          label="Confirmar senha"
          name="confirmPassword"
          placeholder="********"
          inputType={isConfirmPasswordVisible ? 'text' : 'password'}
        />

        <Eye
          aria-label="Mostrar confirmação da senha"
          pressed={isConfirmPasswordVisible}
          onPressedChange={setIsConfirmPasswordVisible}
        />
      </WrapperInput>
    </>
  );
}
