import { InputForm } from '@/components/input-form';
import { Select } from '@/components/select';
import { SelectItem } from '@/components/select/SelectItem';
import { genders } from '@/data/static-info';
import { Calendar } from '@/features/account/components/calendar';
import { IMentor } from '@/features/auth/types/types';
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
          className={`flex flex-col gap-2 text-[0.875rem] text-[#666666] [&_span_span]:text-[#338AFF] [&_.disabled]:text-[#ACACAC] [&_.disabled_span]:text-[#ACACAC] [&_.error-message]:text-[#E94242] [&_.error-message]:font-bold [&_.error-message]:text-xs [&_[data-placeholder]]:text-[#D9D9D9]${formik.errors.dateOfBirth ? ' [&_svg]:text-[#E94242]' : ''}`}
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

      <label className="flex flex-col gap-2 mt-2 [&_span]:text-[#323232] [&_span]:text-[0.875rem] [&_span]:leading-[120%] [&_span_.asterisk]:text-[#338AFF] [&_.select-trigger]:py-3 [&_.select-trigger]:px-4 [&_.select-trigger]:leading-6 [&_.select-trigger]:text-base">
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
