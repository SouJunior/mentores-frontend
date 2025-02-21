import { Button } from '@/components/atoms/Button';
import {
  CloseButton,
  ContainerButtons,
  ContainerModal,
  Description,
  DiscardButton,
  Heading,
  SaveButton,
} from './style';

interface ModalSaveProps {
  title: string;
  text: string;
  onSave: () => void;
  onDiscard: () => void;
}

export function ModalSave({ title, text, onSave, onDiscard }: ModalSaveProps) {
  return (
    <ContainerModal>
      <Heading>{title}</Heading>
      <CloseButton />
      <Description>{text}</Description>

      <ContainerButtons>
        <DiscardButton asChild>
          <Button variant="secondary" onClick={() => onDiscard()}>
            Não
          </Button>
        </DiscardButton>

        <SaveButton asChild>
          <Button type="submit" onClick={() => onSave()}>
            Sim
          </Button>
        </SaveButton>
      </ContainerButtons>
    </ContainerModal>
  );
}
