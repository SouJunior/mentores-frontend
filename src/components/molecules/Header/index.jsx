import Button from '@/components/atoms/Button';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerHeader, GroupBtn } from './style';
import logo from '/public/logos/LogoSJ.svg';

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
				<Button
					text='Cadastro de Mentores'
					btnRole={'primary'}
				/>
				<Link href={'/LoginPage'}>
					<Button
						text='Login para Mentores'
						btnRole={'secondary'}
					/>
				</Link>
			</GroupBtn>
		</ContainerHeader>
	);
}
