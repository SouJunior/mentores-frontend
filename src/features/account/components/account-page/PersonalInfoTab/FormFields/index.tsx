import { Calendar } from '@/features/account/components/calendar';
import { InputForm } from '@/shared/components/input-form';
import { Select } from '@/shared/components/select';
import { SelectItem } from '@/shared/components/select/SelectItem';
import { genders } from '@/shared/constants/static-info';
import { IMentor } from '@/shared/types/Auth';
import dayjs from 'dayjs';
import { useFormikContext } from 'formik';
import { Calendar as EventRoundedIcon } from 'lucide-react';
import { useState } from 'react';
import { PersonalInfoFormData } from '..';

interface FormFieldsProps {
  mentor: IMentor;
}

export function FormFields({ mentor }: FormFieldsProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const formik = useFormikContext<PersonalInfoFormData>();

  return (
    <>
      <InputForm
        label="Nome completo:"
        isRequired
        name="fullName"
        type="input"
        placeholder="Preencha com seu nome"
        defaultValue={mentor.fullName}
      />

      <Calendar.Root
        open={showCalendar}
        onOpenChange={() => setShowCalendar(!showCalendar)}
        modal={false}
      >
        <label
          className={`flex flex-col gap-2 text-[0.875rem] text-gray-700 [&_span_span]:text-blue-700 [&_.disabled]:text-gray-600 [&_.disabled_span]:text-gray-600 [&_.error-message]:text-red-400 [&_.error-message]:font-bold [&_.error-message]:text-xs [&_[data-placeholder]]:text-gray-250${formik.errors.dateOfBirth ? ' [&_svg]:text-red-400' : ''}`}
        >
          <span className="disabled">
            Data de nascimento <span>*</span>
          </span>
          <Calendar.Control
            disabled
            className={formik.errors.dateOfBirth ? 'error' : undefined}
          >
            {formik.values.dateOfBirth || mentor.dateOfBirth ? (
              <span>
                {dayjs(formik.values.dateOfBirth ?? mentor.dateOfBirth).format(
                  'DD/MM/YYYY'
                )}
              </span>
            ) : (
              <span data-placeholder>dd/mm/aaaa</span>
            )}
            <EventRoundedIcon />
          </Calendar.Control>

          {formik.errors.dateOfBirth && (
            <span className="error-message">{formik.errors.dateOfBirth}</span>
          )}
        </label>

        <Calendar.Content
          selected={formik.values.dateOfBirth}
          onSelected={(date: Date) => {
            formik.setValues({ ...formik.values, dateOfBirth: date });
            setShowCalendar(false);
          }}
          sideOffset={10}
        />
      </Calendar.Root>

      <InputForm
        label="E-mail:"
        isRequired
        name="email"
        type="input"
        placeholder="Preencha com seu e-mail"
        disabled
        defaultValue={mentor.email}
      />

      <label className="flex flex-col gap-2 mt-2 [&_span]:text-black-200 [&_span]:text-[0.875rem] [&_span]:leading-[120%] [&_span_.asterisk]:text-blue-700 [&_.select-trigger]:py-3 [&_.select-trigger]:px-4 [&_.select-trigger]:leading-6 [&_.select-trigger]:text-base">
        <span>
          Gênero:
          <span className="asterisk">*</span>
        </span>
        <Select
          placeholder="Gênero"
          value={formik.values.gender ?? mentor.gender}
          onValueChange={value => formik.setFieldValue('gender', value)}
        >
          {genders.map(gender => (
            <SelectItem key={gender} value={gender} className="m-0">
              {gender}
            </SelectItem>
          ))}
        </Select>
      </label>
    </>
  );
}
