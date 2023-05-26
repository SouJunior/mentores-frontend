import Button from '@/components/atoms/Button';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerHeader, GroupBtn } from './style';
import logo from '/public/logos/LogoSJ.svg';


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
				<a href='#onboarding'>Como Funciona</a>
				<Link href='#'>Encontre Seu Mentor</Link>
			</div>
			<GroupBtn>
				<Link href={'/Cadastro'}>
					<Button
						content='Cadastro de Mentores'
						btnRole={'primary'}
					/>
				</Link>
				<Link href={'/LoginPage'}>
					<Button
						content='Login para Mentores'
						btnRole={'secondary'}
					/>
				</Link>
			</GroupBtn>
		</ContainerHeader>
	);
}
