import { Calendar } from '@/features/account/components/calendar';
import { Eye } from '@/shared/components/eye';
import { InfoTooltip } from '@/shared/components/info-tooltip';
import { InputForm } from '@/shared/components/input-form';
import { ValuesFormType } from '@/shared/utils/registerSchema';
import { Field, useFormikContext } from 'formik';
import { useState } from 'react';

import dayjs from 'dayjs';
import { Calendar as EventRoundedIcon } from 'lucide-react';

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
        <label
          className={`flex flex-col gap-2 text-sm text-gray-700${formik.errors.dateBirthday ? ' [&_svg]:text-red-400' : ''} [&_span_span]:text-blue-500 [&_.error-message]:text-red-400 [&_.error-message]:font-bold [&_.error-message]:text-xs [&_[data-placeholder]]:text-gray-300`}
        >
          <span>
            Data de nascimento <span>*</span>
          </span>
          <Calendar.Control
            className={formik.errors.dateBirthday ? 'error' : ''}
          >
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
        </label>

        <Calendar.Content
          selected={formik.values.dateBirthday}
          onSelected={(date: Date) => {
            formik.setValues({
              ...formik.values,
              dateBirthday: date,
            });
            setShowCalendar(false);
          }}
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

      <label className="relative [&_input]:pr-[2.8rem] [&_button]:right-4 [&_button]:top-10 [&_button_svg]:w-6 [&_button_svg]:h-6">
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
      </label>

      <label className="relative [&_input]:pr-[2.8rem] [&_button]:right-4 [&_button]:top-10 [&_button_svg]:w-6 [&_button_svg]:h-6">
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
      </label>
    </>
  );
}
