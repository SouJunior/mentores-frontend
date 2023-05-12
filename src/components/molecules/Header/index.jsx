import Button from '@/components/atoms/Button';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerHeader, GroupBtn } from './style';
import logo from '/public/logos/LogoSJ.svg';
import Link from 'next/link';

export default function Header() {
	return (
		<ContainerHeader>
			<div>
				<Link href='/'>
					<Image
						src={logo}
						alt='Logo Sou Júnior'
					/>
				</Link>
				<span />
				<Link href='#'>Como Funciona</Link>
				<Link href='#'>Encontre Seu Mentor</Link>
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
