import { Calendar } from '@/components/molecules/Calendar'
import EventRoundedIcon from '@mui/icons-material/EventRounded'
import dayjs from 'dayjs'
import { useFormikContext } from 'formik'
import { InputForm } from '@/components/atoms/InputForm'
import { Select } from '@/components/atoms/Select'
import { genders } from '@/data/static-info'
import {
  DatePickerContainer,
  SelectInputContainer,
  SelectItemStyled,
} from './styles'
import { useState } from 'react'
import { PersonalInfoFormData } from '..'

export function FormFields() {
  const [showCalendar, setShowCalendar] = useState(false)
  const formik = useFormikContext<PersonalInfoFormData>()

  return (
    <>
      <InputForm
        label="Nome completo:"
        isRequired
        name="name"
        type="input"
        placeholder="Preencha com seu nome"
      />

      <Calendar.Root
        open={showCalendar}
        onOpenChange={() => setShowCalendar(!showCalendar)}
        modal={false}
      >
        <DatePickerContainer className={formik.errors.dateOfBirth && 'error'}>
          <span className="disabled">
            Data de nascimento <span>*</span>
          </span>
          <Calendar.Control
            disabled
            className={formik.errors.dateOfBirth && 'error'}
          >
            {formik.values.dateOfBirth ? (
              <span>
                {dayjs(formik.values.dateOfBirth).format('DD/MM/YYYY')}
              </span>
            ) : (
              <span data-placeholder>dd/mm/aaaa</span>
            )}
            <EventRoundedIcon />
          </Calendar.Control>

          {formik.errors.dateOfBirth && (
            <span className="error-message">{formik.errors.dateOfBirth}</span>
          )}
        </DatePickerContainer>

        <Calendar.Content
          selected={formik.values.dateOfBirth}
          onSelected={(date: Date) => {
            formik.setValues({
              ...formik.values,
              dateOfBirth: date,
            })
            setShowCalendar(false)
          }}
          avoidCollisions={false}
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
      />

      <SelectInputContainer>
        <span>
          Gênero:
          <span className="asterisk">*</span>
        </span>
        <Select
          placeholder="Gênero"
          value={formik.values.gender}
          onValueChange={(value) => formik.setFieldValue('gender', value)}
        >
          {genders.map((gender) => (
            <SelectItemStyled key={gender} value={gender}>
              {gender}
            </SelectItemStyled>
          ))}
        </Select>
      </SelectInputContainer>
    </>
  )
}
