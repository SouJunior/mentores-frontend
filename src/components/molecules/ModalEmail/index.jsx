import ModalComponent from '@/components/atoms/ModalComponent';
import {
	ContainerModal,
	ImageEmail,
	Message,
	TitleModal,
	Hash,
	FooterModal,
} from './style';
import Image from 'next/image';

export default function ModalEmail({ open, onClose, height }) {
	return (
		<ModalComponent
			open={open}
			onClose={onClose}
			height={height}>
			<ContainerModal>
				<TitleModal>Cheque seu email</TitleModal>
				<ImageEmail
					src='images/ConfirmEmail.png'
					alt='Garoto mexendo em nootebook'
				/>
				<Message>Enviamos um email para você de confirmação.</Message>
				<FooterModal>
					<Image
						src={'logos/LogoSJ.svg'}
						alt='logo da SouJunior'
						width={108}
						height={17}
					/>
					<Hash>#MovimentoSouJunior</Hash>
				</FooterModal>
			</ContainerModal>
		</ModalComponent>
	);
}
