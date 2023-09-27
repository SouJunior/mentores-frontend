import PhotoButtom from "@/components/atoms/PhotoButtom";
import { Dotted, StyledImportant, StyledInfo } from "./styled";
import { useState } from "react";
import EditPhotoModal from "@/components/atoms/EditPhotoModal";
import { Field, Form, FormikProvider, useFormik } from "formik";

export default function FormOnboard2() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const initialValues = {
    imageUrl: "",
    description: "",
    gender: "",
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    console.log(selectedPhoto);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeModal = () => setIsEditModalOpen(false);

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

      <FormikProvider value={formik}>
        <Form>
          <Field type="text" component="textarea" name="description" />
          <Field
            name="gender"
            placeholder="Selecione um gênero"
            component="select"
          >
            <option value="red">Red</option>

            <option value="green">Green</option>

            <option value="blue">Blue</option>
          </Field>
          <button type="submit">send</button>
        </Form>
      </FormikProvider>
    </>
  );
}
