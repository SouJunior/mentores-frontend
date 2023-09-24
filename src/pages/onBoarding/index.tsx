import { ContainerOnBoarding, OnBoardImage } from "@/styles/pages/onBoarding";
import onBoardImage from '@/assets/onBoarding/Ilustrações.png'
import OnBoardModal from "@/components/molecules/OnBoardModal";

export default function OnBoarding() {
    return (
        <ContainerOnBoarding>
            <OnBoardImage src={onBoardImage} alt="Background"/>
            <OnBoardModal/>
        </ContainerOnBoarding>
    )
}