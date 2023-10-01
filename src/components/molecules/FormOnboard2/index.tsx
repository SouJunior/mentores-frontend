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

export default function FormOnboard2() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isCompleted, setCompleted] = useState(false);

  const { handle } = UserUpdateService();

  const initialValues = {
    imageUrl: "",
    description: "",
    gender: "",
  };

  const handleSubmit = async (values: any) => {
    const data = {
      profile: values.description,
      profileKey: values.imageUrl,
    };
  
    try {
      await handle(data);
      console.log(values);
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
              <option value="">Gênero</option>

              <option value="red">Masculino</option>

              <option value="green">Feminino</option>

              <option value="blue">Prefiro não dizer</option>
            </Field>
            <StyledHR />

            <ButtonContainer>
              <BackButton>Voltar</BackButton>
              <NextButton disabled={!isCompleted}>Concluir</NextButton>
            </ButtonContainer>
          </Form>
        </FormikProvider>
      </FormContainer>
    </>
  );
}
