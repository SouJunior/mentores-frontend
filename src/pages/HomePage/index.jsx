import React from 'react';
import HeroSection from '../../components/organisms/HeroSection';
import Onboarding from '@/components/organisms/Onboarding';
import Footer from '@/components/molecules/Footer';
import MentorSection from '@/components/organisms/MentorSection';
export default function HomePage() {
	return (
		<>
			<HeroSection />
			<Onboarding />
			<MentorSection />
			<Footer />
		</>
	);
}
