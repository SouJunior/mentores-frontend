import Image from 'next/image';
import { useState } from 'react';
import { ContainerPassword } from './style';
import PassDefault from '/public/icons/SenhaDefault.svg';
import PassHover from '/public/icons/SenhaHover.svg';
import PassFocus from '/public/icons/SenhaSelected.svg';
import EyeComponent from './EyeComponent';

export default function InputSenha({ setPassword, password }) {
	const [icon, setIcon] = useState(PassDefault);

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
				placeholder='senha123'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<EyeComponent />
		</ContainerPassword>
	);
}
