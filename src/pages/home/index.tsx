import { Footer } from "@/components/molecules/Footer";
import { DepoSection } from "@/components/organisms/DepoSection";
import { MentorSection } from "@/components/organisms/MentorSection";
import { Onboarding } from "@/components/organisms/Onboarding";
import { HeroSection } from "../../components/organisms/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Onboarding />
      <MentorSection />
      <DepoSection />
      <Footer />
    </>
  );
}
