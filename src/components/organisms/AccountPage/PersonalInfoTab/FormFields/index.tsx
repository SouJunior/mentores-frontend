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
import { useAuthContext } from '@/context/Auth/AuthContext'

export function FormFields() {
  const [showCalendar, setShowCalendar] = useState(false)
  const formik = useFormikContext<PersonalInfoFormData>()

  const { mentor } = useAuthContext()

  return (
    <>
      <InputForm
        label="Nome completo:"
        isRequired
        name="fullName"
        type="input"
        placeholder="Preencha com seu nome"
        defaultValue={mentor.data?.fullName}
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
            {formik.values.dateOfBirth || mentor.data?.dateOfBirth ? (
              <span>
                {dayjs(
                  formik.values.dateOfBirth ?? mentor.data?.dateOfBirth,
                ).format('DD/MM/YYYY')}
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
        defaultValue={mentor.data?.email}
      />

      <SelectInputContainer>
        <span>
          Gênero:
          <span className="asterisk">*</span>
        </span>
        <Select
          placeholder="Gênero"
          value={formik.values.gender ?? mentor.data?.gender}
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
