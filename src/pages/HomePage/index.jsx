import React from 'react';
import HeroSection from '../../components/organisms/HeroSection';
import Onboarding from '@/components/organisms/Onboarding';
import Footer from '@/components/molecules/Footer';
export default function HomePage() {
	return (
		<>
			<HeroSection />
			<Onboarding />
			<Footer />
		</>
	);
}
