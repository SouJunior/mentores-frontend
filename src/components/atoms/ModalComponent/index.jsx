import React from 'react';
import { Dialog, Box } from '@mui/material';
import { ButtonClose } from './style';
const ModalComponent = ({
	open,
	onClose,
	children,
	height,
	width,
	showBtn = false,
	bgColor = '#d7d9d7',
}) => {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			maxWidth='sm'
			PaperProps={{
				style: {
					boxShadow: 'none',
					backgroundColor: 'transparent',
					position: 'absolute',
					zIndex: '999999',
					maxWidth: width,
					maxHeight: height,
					overflow: 'hidden',
					borderRadius: '8px',
				},
			}}>
			<Box
				sx={{
					borderRadius: '8px 8px 0px 0px',
					background: bgColor,
					padding: '0px',
					paddingTop: '32px',
					boxShadow: 'none',
					border: 'none',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					maxHeight: height,
					maxWidth: width,
				}}>
				{children}
				<ButtonClose
					showBtn={showBtn}
					onClick={onClose}>
					X
				</ButtonClose>
			</Box>
		</Dialog>
	);
};

export default ModalComponent;
