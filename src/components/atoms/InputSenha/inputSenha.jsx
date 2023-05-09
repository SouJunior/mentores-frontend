import Image from 'next/image';
import { useState } from 'react';
import { ContainerPassword, ContainerEye } from './style';
import PassDefault from '/public/icons/SenhaDefault.svg';
import PassHover from '/public/icons/SenhaHover.svg';
import PassFocus from '/public/icons/SenhaSelected.svg';
import EyeComponent from './EyeComponent';

export default function InputSenha({ setPassword, password }) {
	const [icon, setIcon] = useState(PassDefault);
	const [show, setShow] = useState(true);
	const [eye, setEye] = useState(true);

	function toggleShow(e) {
		e.preventDefault();
		setEye(!eye);
		setShow(!show);
	}

	return (
		<ContainerPassword
			onClick={() => setIcon(PassFocus)}
			onChange={() => setIcon(PassFocus)}
			onMouseEnter={() => setIcon(PassHover)}>
			<Image
				src={icon}
				alt='Ícone de Senha'
			/>
			<input
				type={show === false ? 'text' : 'password'}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<ContainerEye>
				<button
					type='button'
					onClick={(e) => toggleShow(e)}>
					<EyeComponent eye={eye} />
				</button>
			</ContainerEye>
		</ContainerPassword>
	);
}
