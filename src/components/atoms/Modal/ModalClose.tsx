import * as Dialog from '@radix-ui/react-dialog';
import { ModalBtnClose } from './style';
import CloseIcon from '@mui/icons-material/Close';

export function ModalClose({ children, ...props }: Dialog.DialogCloseProps) {
  return <ModalBtnClose {...props}>{children ?? <CloseIcon />}</ModalBtnClose>;
}
