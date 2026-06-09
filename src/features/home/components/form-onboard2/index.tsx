import EditPhotoModal from '@/features/account/components/edit-photo-modal';
import PhotoButton from '@/features/account/components/photo-button';
import { Button } from '@/shared/components/button';
import { InputForm } from '@/shared/components/input-form';
import { Modal } from '@/shared/components/modal';
import { Select } from '@/shared/components/select';
import { SelectItem } from '@/shared/components/select/SelectItem';
import { genders } from '@/shared/constants/static-info';
import {
  StepNumber,
  useOnBoardingContext,
} from '@/shared/context/OnBoardingContext';
import { isEmpty } from '@/shared/utils/is-empty';
import { Form } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormOnBoardProps {
  onStep: Dispatch<SetStateAction<StepNumber>>;
}

export default function FormOnboard2({ onStep }: FormOnBoardProps) {
  const { formik } = useOnBoardingContext();

  const isCompleted = !isEmpty(formik.touched);

  const handleImageEdit = (editedImage: string | null) => {
    formik.setFieldValue('profile', editedImage || '');
  };

  const handleBackToFirstStep = () => {
    onStep(1);
  };

  return (
    <>
      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
      />

      <Modal.Root>
        <Modal.Control asChild>
          <button
            type="button"
            className="flex flex-col items-center p-4 rounded-lg border-2 border-dashed border-gray-700 bg-transparent text-center"
          >
            <PhotoButton size={80} selectedPhoto={formik.values.profile} />

            <span className="text-[0.875rem] font-normal leading-4 text-black-200 pt-4 pb-2 max-w-[9.5rem]">
              Para inserir sua foto, clique aqui.
              <span className="text-blue-600">*</span>
            </span>
            <span className="text-[0.75rem] leading-4 text-black-200 max-w-[9.5rem]">
              Formato aceito: jpg ou png. Tamanho máx.: 8 MB.
            </span>
          </button>
        </Modal.Control>

        <EditPhotoModal
          selectedPhoto={formik.values.profile}
          onAddPhoto={photo => {
            formik.setFieldValue('profile', photo);
          }}
          onImageEdit={handleImageEdit}
        />
      </Modal.Root>

      <div className="w-full">
        <Form className="flex flex-col">
          <div className="flex flex-col gap-2">
            <InputForm
              label="Conte mais sobre você:"
              type="textarea"
              name="description"
              placeholder="Fale sobre sua trajetória profissional para que possam lhe conhecer melhor;"
              required
            />
            <span className="text-[0.75rem] leading-4 text-black-200 text-right">
              Máximo 600 caracteres.
            </span>
          </div>

          <label className="flex flex-col gap-2 mt-2">
            <span className="text-black-200 text-[0.875rem] leading-[120%]">
              Gênero
              <span className="text-blue-700">*</span>
            </span>
            <Select
              placeholder="Gênero"
              onValueChange={value => formik.setFieldValue('gender', value)}
            >
              {genders.map(gender => (
                <SelectItem key={gender} value={gender} className="!mx-0">
                  {gender}
                </SelectItem>
              ))}
            </Select>
          </label>

          <div className="w-full h-px bg-gray-700 mt-9" />

          <div className="flex w-full justify-end gap-4 mt-4">
            <Button
              onClick={handleBackToFirstStep}
              variant="secondary"
              type="button"
              className="self-end text-gray-700 border-gray-700 hover:text-gray-700 hover:border-gray-700"
            >
              Voltar
            </Button>
            <Button type="submit" disabled={!isCompleted} className="self-end">
              Concluir
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
