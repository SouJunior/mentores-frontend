import { Button } from '@/components/button';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { StepNumber, useOnBoardingContext } from '@/context/OnBoardingContext';
import { specialties as specialtiesOptions } from '@/data/static-info';
import { Check as CheckIcon } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface GridSpecialitiesProps {
  onStep: (step: StepNumber) => void;
}

export default function GridSpecialities({ onStep }: GridSpecialitiesProps) {
  const { specialties, setSpecialties, formik } = useOnBoardingContext();

  const selectedCount = specialties.length;
  const isSelectionComplete = specialties.length > 0 && specialties.length < 7;

  const {
    mentor: { data },
  } = useAuthContext();

  const toggleSpeciality = (value: string): void => {
    if (specialties.includes(value)) {
      setSpecialties(state => state.filter(item => item !== value));
      formik.setFieldValue(
        'specialties',
        specialties.filter(item => item !== value)
      );
    } else if (selectedCount < 6) {
      setSpecialties(state => [...state, value]);
      formik.setFieldValue('specialties', [...specialties, value]);
    }
  };

  const handleMoveToNextStep = () => {
    onStep(2);
  };

  return (
    <>
      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
      />
      <span className="mt-5 text-base font-normal leading-[19.2px]">
        Olá, {data?.fullName}!
      </span>
      <span className="text-xl font-medium leading-6 text-center mt-6.25 [&_.last]:text-[#175CB7]">
        Em quais áreas você deseja mentorar?<span className="last">*</span>
      </span>
      <span className="text-[0.875rem] font-normal leading-4 text-left w-full mt-4 text-[#323232] [&_span]:text-[#175CB7]">
        <span>*</span> Indica um campo obrigatório
      </span>
      <div className="grid grid-cols-[repeat(3,165px)] gap-5 mt-7.5">
        {specialtiesOptions.map((speciality, index) => (
          <div
            key={index}
            onClick={() => toggleSpeciality(speciality)}
            className={`w-43 h-8 rounded-[50px] py-2 pr-3 pl-1 text-center cursor-pointer flex items-center justify-center gap-0.5 ${
              specialties.includes(speciality)
                ? 'bg-[#175CB7] text-white'
                : 'bg-[#CBCBCB] text-[#666666]'
            }`}
          >
            {specialties.includes(speciality) && (
              <CheckIcon fontSize={'small'} />
            )}
            {speciality}
          </div>
        ))}
      </div>
      <span className="text-base font-normal leading-4.75 text-right w-full text-green-600 mt-3.75">
        {`${selectedCount}/6 especialidades `}
      </span>
      <div className="w-full h-px bg-[#666666] mt-9" />
      <Button
        className="mt-3.75 self-end"
        onClick={handleMoveToNextStep}
        disabled={!isSelectionComplete}
      >
        Continuar
      </Button>
    </>
  );
}
