import PhotoButtom from "@/components/atoms/PhotoButtom";
import {
  BackButton,
  ButtonContainer,
  Dotted,
  FormContainer,
  NextButton,
  StyledHR,
  StyledImportant,
  StyledInfo,
  StyledInfoContainer,
} from "./styled";
import { useEffect, useState } from "react";
import EditPhotoModal from "@/components/atoms/EditPhotoModal";
import { Field, Form, FormikProvider, useFormik } from "formik";
import { InputForm } from "@/components/atoms/InputForm";
import UserUpdateService from "@/services/user/userUpdateService";
import { useRouter } from "next/router";

export default function FormOnboard2() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isCompleted, setCompleted] = useState(false);
  const router = useRouter()

  const genders = [
    "Homem cis",
    "Mulher cis",
    "Homem trans",
    "Mulher trans",
    "Bigenero",
    "Genero fluido",
    "Nao Binario",
    "Agenero",
    "Prefiro não dizer",
    "Outros",
  ];

  const { handle } = UserUpdateService();

  const initialValues = {
    imageFile: null,
    description: "",
    gender: "",
  };

  const handleSubmit = async (values: any) => {
    const data = {
      aboutMe: values.description,
      profile: values.imageUrl,
      gender: values.gender,
    };

    try {
      await handle(data);
      router.push('/genericPage')
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleStep = () => {
    console.log("ok");
  };

  const closeModal = () => setIsEditModalOpen(false);

  useEffect(() => {
    if (Object.keys(formik.touched).length > 0) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }, [formik.touched]);
  
  const handleImageEdit = (editedImage: string | null) => {
    setSelectedPhoto(editedImage);
    formik.setFieldValue("imageUrl", editedImage || "");
  };

  return (
    <>
      <Dotted>
        <PhotoButtom
          size={80}
          selectedPhoto={selectedPhoto}
          onClick={handleOpenEditModal}
        />
        <StyledImportant>
          Para inserir sua foto, clique aqui.<span className="last">*</span>
        </StyledImportant>
        <StyledInfo>Formato aceito: jpg ou png. Tamanho máx.: 8 MB.</StyledInfo>
      </Dotted>
      <EditPhotoModal
        isOpen={isEditModalOpen}
        onAddPhoto={(photo) => setSelectedPhoto(photo)}
        onClose={closeModal}
        onImageEdit={handleImageEdit}
        onEditPhoto={() => handleOpenEditModal()}
      />

      <FormContainer>
        <FormikProvider value={formik}>
          <Form>
            <Field
              as={InputForm}
              label="Conte mais sobre você:"
              type="textarea"
              name="description"
              placeholder="Fale sobre sua trajetória profissional para que possam lhe conhecer melhor;"
              required
            />
            <StyledInfoContainer>
              <StyledInfo>Máximo 600 caracteres.</StyledInfo>
            </StyledInfoContainer>
            <Field
              as={InputForm}
              label="Gênero:"
              name="gender"
              placeholder="Selecione um gênero"
              type="select"
              required
            >
              <option disabled value="">
                Gênero
              </option>
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </Field>
            <StyledHR />

            <ButtonContainer>
              <BackButton onClick={handleStep}>Voltar</BackButton>
              <NextButton type="submit" disabled={!isCompleted}>
                Concluir
              </NextButton>
            </ButtonContainer>
          </Form>
        </FormikProvider>
      </FormContainer>
    </>
  );
}
