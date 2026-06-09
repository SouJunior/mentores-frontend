'use client';

import { InputForm } from '@/shared/components/input-form';
import { Select } from '@/shared/components/select';
import { SelectItem } from '@/shared/components/select/SelectItem';
import { reasons, reviewOptions } from '@/shared/constants/static-info';
import { isObject } from 'formik';
import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { FormValues } from '..';

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
  const [otherOptionSelected, setOtherOptionSelected] = useState(false);
  const [reasonText, setReasonText] = useState('');
  const [experienceText, setExperienceText] = useState('');
  const [maxCharsExceeded, setMaxCharsExceeded] = useState({
    reasonText: false,
    userExperienceFeedback: false,
  });

  const handleSelectChange = (e: any, attributeName: string) => {
    setFormValues((prevState: FormValues) => ({
      ...prevState,
      [attributeName ?? e?.target?.name]: isObject(e) ? e?.target?.value : e,
    }));
    if (attributeName === 'reasonOption') setOtherOptionSelected(e === '5');
    handleError(attributeName);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    name === 'reasonText' ? setReasonText(value) : setExperienceText(value);
    setMaxCharsExceeded(prev => ({ ...prev, [name]: value.length > 600 }));
    setFormValues((prevState: FormValues) => ({
      ...prevState,
      [name ?? event?.target?.name]: isObject(event)
        ? event?.target?.value
        : event,
    }));
    if (value.length <= 600) handleError(name);
  };

  const handleError = (attributeName: string) => {
    setFormErrors((prevState: FormValues) => ({
      ...prevState,
      [attributeName]: null,
    }));
  };

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <label className="text-base font-normal leading-[1.4rem] [&_span]:text-blue-700">
        O que o motivou a excluir sua conta na plataforma para mentores?
        <span>*</span>
        {formErrors.reasonOption && (
          <p className="text-red-400 font-bold text-xs leading-[1.05rem] mt-1">
            {formErrors.reasonOption}
          </p>
        )}
      </label>

      <label className="flex [&_.select-trigger]:text-black-200 [&_.select-trigger]:text-base [&_.select-trigger]:leading-[1.4rem] [&_.select-trigger]:py-2.5 [&_.select-trigger]:px-4">
        <Select
          placeholder=""
          name="reasonOption"
          onValueChange={e => handleSelectChange(e, 'reasonOption')}
        >
          {reasons.map(reason => (
            <SelectItem
              key={reason.id}
              value={String(reason.id)}
              className="m-0"
            >
              {reason.description}
            </SelectItem>
          ))}
        </Select>
      </label>

      <div
        className={`flex-col items-end gap-4 ${otherOptionSelected ? 'flex' : 'hidden'}`}
      >
        <InputForm
          type="textarea"
          name="reasonText"
          placeholder="Escreva seu motivo"
          isRequired={false}
          onChange={handleInputChange}
        />
        {formErrors.reasonText && (
          <p className="text-red-400 font-bold text-xs leading-[1.05rem] mt-1">
            {formErrors.reasonText}
          </p>
        )}
        <p
          className={`text-xs leading-[1.05rem] mt-1 ${maxCharsExceeded.reasonText ? 'text-red-400' : 'text-black-200'}`}
        >
          {reasonText.length}/600
        </p>
      </div>

      <label className="text-base font-normal leading-[1.4rem] [&_span]:text-blue-700">
        Como você avaliaria a facilidade de uso da plataforma?
        <span>*</span>
        {formErrors.usabilityRating && (
          <p className="text-red-400 font-bold text-xs leading-[1.05rem] mt-1">
            {formErrors.usabilityRating}
          </p>
        )}
      </label>

      <div className="flex flex-col gap-4">
        {[...reviewOptions].reverse().map(item => (
          <div key={item.id} className="flex gap-2 items-start">
            <input
              type="radio"
              name="usabilityRating"
              value={item.id}
              onClick={e => handleSelectChange(e, 'usabilityRating')}
            />
            <label className="text-[0.875rem] font-normal leading-[1.05rem]">
              {item.description}
            </label>
          </div>
        ))}
      </div>

      <label className="text-base font-normal leading-[1.4rem] [&_span]:text-blue-700">
        Em uma escala de 1 a 7, o quão satisfeito você estava com a plataforma?
        <span>*</span>
        {formErrors.satisfactionRating && (
          <p className="text-red-400 font-bold text-xs leading-[1.05rem] mt-1">
            {formErrors.satisfactionRating}
          </p>
        )}
      </label>
      <div className="flex justify-evenly">
        {reviewOptions.map(item => (
          <div key={item.id} className="flex flex-col gap-1 items-center">
            <label>
              <Image
                src={item.imgUrl}
                alt={item.description}
                width={20}
                height={20}
              />
            </label>
            <input
              type="radio"
              name="satisfactionRating"
              value={item.id}
              onClick={e => handleSelectChange(e, 'satisfactionRating')}
            />
          </div>
        ))}
      </div>

      <label className="text-base font-normal leading-[1.4rem]">
        Existe algo que você gostaria de compartilhar sobre sua experiência com
        a plataforma de mentores?
      </label>

      <div className="flex flex-col items-end gap-2">
        <InputForm
          type="textarea"
          name="userExperienceFeedback"
          isRequired={false}
          onChange={handleInputChange}
        />
        {formErrors.userExperienceFeedback && (
          <p className="text-red-400 font-bold text-xs leading-[1.05rem]">
            {formErrors.userExperienceFeedback}
          </p>
        )}
        <p
          className={`text-xs leading-[1.05rem] ${maxCharsExceeded.userExperienceFeedback ? 'text-red-400' : 'text-black-200'}`}
        >
          {experienceText.length}/600
        </p>
      </div>
    </div>
  );
}
