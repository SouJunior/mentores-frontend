import { Button } from '@/components/atoms/Button';
import {
  ContainerBtn,
  ContainerModalCancel,
  DescriptionModal,
  HeadingModal,
  ModalCloseButton,
  ModalCloseCancelBtn,
  ModalCloseDiscardBtn,
} from './style';

export function ModalSave({
  title,
  text,
  onSave,
  onDiscard,
}: {
  title: string;
  text: string;
  onSave: () => void;
  onDiscard: () => void;
}) {
  return (
    <ContainerModalCancel>
      <HeadingModal>{title}</HeadingModal>
      <ModalCloseButton />
      <DescriptionModal>{text}</DescriptionModal>

      <ContainerBtn>
        <ModalCloseCancelBtn asChild>
          <Button variant="secondary" onClick={() => onDiscard()}>
            Não
          </Button>
        </ModalCloseCancelBtn>

        <ModalCloseDiscardBtn asChild>
          <Button type="submit" onClick={() => onSave()}>
            Sim
          </Button>
        </ModalCloseDiscardBtn>
      </ContainerBtn>
    </ContainerModalCancel>
  );
}
