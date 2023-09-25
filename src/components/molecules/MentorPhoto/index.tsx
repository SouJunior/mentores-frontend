import PhotoButtom from "@/components/atoms/PhotoButtom";
import { Dotted, StyledImportant, StyledInfo } from "./styled";

export default function MentorPhoto() {
  return (
    <>
      <Dotted>
        <PhotoButtom />
        <StyledImportant>
          Para inserir sua foto, clique aqui.<span className="last">*</span>
        </StyledImportant>
        <StyledInfo>Formato aceito: jpg ou png. Tamanho máx.: 8 MB.</StyledInfo>
      </Dotted>
    </>
  );
}
