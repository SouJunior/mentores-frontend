import React from 'react';
import ModalComponent from '@/components/atoms/ModalComponent';
import { ContainerModalCancel, HeadingModal, ContainerBtn } from './style';
import Button from '@/components/atoms/Button';

export default function ModalCancel({ open, onClose, height, width, bgColor }) {
	return (
		<ModalComponent
			open={open}
			width={width}
			onClose={onClose}
			bgColor={bgColor}
			showBtn={true}
			height={height}>
			<ContainerModalCancel>
				<HeadingModal>Deseja descartar o cadastro?</HeadingModal>
				<p>As informações inseridas não serão salvas.</p>
				<ContainerBtn>
					<Button
						onClick={onClose}
						content={'Cancelar'}
						btnRole={'ModalSecondary'}
					/>
					<Button
						content={'Descartar'}
						btnRole={'ModalDefault'}
					/>
				</ContainerBtn>
			</ContainerModalCancel>
		</ModalComponent>
	);
}
