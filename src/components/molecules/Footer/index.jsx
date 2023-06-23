import React, { useState } from 'react';
import {
	ContainerFooter,
	ContainerSocialMedias,
	ContainerModais,
	SectionFooterLinks,
	SectionFooter,
} from './style';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import logo from '/public/logos/LogoSouJunior-Black.png';
import ModalTerms from '../ModalTerms';
import ModalPoliticas from '../ModalPoliticas';
import Link from 'next/link';
import linkedin from '/public/images/homepage/footer/linkedin.png';
import github from '/public/images/homepage/footer/github.png';
import discord from '/public/images/homepage/footer/discord.png';
import youtube from '/public/images/homepage/footer/youtube.png';
import twitter from '/public/images/homepage/footer/twitter.png';
import insta from '/public/images/homepage/footer/insta.png';
import facebook from '/public/images/homepage/footer/face.png';
import telegram from '/public/images/homepage/footer/telegram.png';
import twitch from '/public/images/homepage/footer/twitch.png';

export default function Footer() {
	const [openTermos, setOpenTermos] = useState(false);
	const [openPoliticas, setOpenPoliticas] = useState(false);
	const handleOpenTermos = () => setOpenTermos(true);
	const handleCloseTermos = () => setOpenTermos(false);
	const handleOpenPoliticas = () => setOpenPoliticas(true);
	const handleClosePoliticas = () => setOpenPoliticas(false);
	return (
		<>
			<ContainerFooter>
				<SectionFooter>
					<Image
						src={logo}
						alt='Logo'
						width={260}
						height={40}
					/>
					<ContainerModais>
						<Button
							content={'Termos de uso'}
							btnRole={'unstyled'}
							onClick={handleOpenTermos}
						/>

						<span />
						<Button
							content={'Políticas de Privacidade'}
							btnRole={'unstyled'}
							onClick={handleOpenPoliticas}
						/>
					</ContainerModais>
					<ModalTerms
						open={openTermos}
						onClose={handleCloseTermos}
						height={'590px'}
						width={'600px'}
					/>
					<ModalPoliticas
						open={openPoliticas}
						onClose={handleClosePoliticas}
						height={'590px'}
						width={'600px'}
					/>
				</SectionFooter>
				<SectionFooterLinks>
					<h2>Tenha mentoria</h2>
					<a href='#mentor'>Encontre seu mentor</a>
					<a href='#onboarding'>Como funciona</a>
				</SectionFooterLinks>
				<SectionFooterLinks>
					<h2>Mentore</h2>
					<Link href='/Cadastro'>Cadastrar</Link>
					<Link href='/LoginPage'>Entrar</Link>
				</SectionFooterLinks>
				<SectionFooterLinks>
					<h2>Suporte</h2>
					<Link href='#'>FAQ</Link>
				</SectionFooterLinks>
			</ContainerFooter>
			<ContainerSocialMedias>
				<Link
					href={'https://www.linkedin.com/company/soujunior/'}
					target='_blank'
					referrerPolicy='no-referrer'>
					<Image
						width={40}
						height={40}
						src={linkedin}
						alt='logo Linkedin'
					/>
				</Link>
				<Link
					href={'https://github.com/SouJunior'}
					target='_blank'
					referrerPolicy='no-referrer'>
					<Image
						width={40}
						height={40}
						src={github}
						alt='logo github'
					/>
				</Link>
				<Link
					href={
						'https://discord.com/invite/soujunior-community-759176734460346423'
					}
					target='_blank'
					referrerPolicy='no-referrer'>
					<Image
						width={40}
						height={40}
						src={discord}
						alt='logo discord'
					/>
				</Link>
				<Link
					href={'https://www.youtube.com/@soujuniortech'}
					target='_blank'
					referrerPolicy='no-referrer'>
					<Image
						width={40}
						height={40}
						src={youtube}
						alt='logo youtube'
					/>
				</Link>{' '}
				<Link
					href={'https://twitter.com/SouJunior_Tech'}
					target='_blank'
					referrerPolicy='no-referrer'>
					<Image
						width={40}
						height={40}
						src={twitter}
						alt='logo twitter'
					/>
				</Link>{' '}
				<Link
					href={'https://www.instagram.com/soujunior.tech/'}
					target='_blank'
					referrerPolicy='no-referrer'>
					<Image
						width={40}
						height={40}
						src={insta}
						alt='logo instagram'
					/>
				</Link>{' '}
				<Link
					href={'https://www.facebook.com/people/SouJunior/100086671131030'}
					target='_blank'
					referrerPolicy='no-referrer'>
					<Image
						width={40}
						height={40}
						src={facebook}
						alt='logo facebook'
					/>
				</Link>{' '}
				<Link
					href={'https://t.me/soujuniortech'}
					target='_blank'
					referrerPolicy='no-referrer'>
					<Image
						width={40}
						height={40}
						src={telegram}
						alt='logo telegram'
					/>
				</Link>{' '}
				<Link
					href={'https://www.twitch.tv/soujuniortech'}
					target='_blank'
					referrerPolicy='no-referrer'>
					<Image
						width={40}
						height={40}
						src={twitch}
						alt='logo twitch'
					/>
				</Link>
			</ContainerSocialMedias>
		</>
	);
}
