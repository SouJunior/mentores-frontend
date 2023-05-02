import React from 'react';
import logo from '/public/logos/LogoSJ.svg';
import { ContainerHeader, GroupBtn } from './style';
import Image from 'next/image';
import ButtonPrimary from '@/components/atoms/ButtonPrimary';
import ButtonSecondary from '@/components/atoms/ButtonSecondary';

export default function Header() {
	return (
		<ContainerHeader>
			<div>
				<a href='/'>
					<Image
						src={logo}
						alt='Logo Sou Júnior'
					/>
				</a>
				<span />
				<a href='#'>Como Funciona</a>
				<a href='#'>Encontre Seu Mentor</a>
			</div>
			<GroupBtn>
				<ButtonPrimary text='Cadastro de Mentores' />
				<ButtonSecondary text='Login para Mentores' />
			</GroupBtn>
		</ContainerHeader>
	);
}
