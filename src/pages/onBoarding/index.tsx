import { ContainerOnBoarding, OnBoardImage } from "@/styles/pages/onBoarding";
import onBoardImage from '@/assets/onBoarding/Ilustrações.png'

export default function OnBoarding() {
    return (
        <ContainerOnBoarding>
            <OnBoardImage src={onBoardImage} alt="Background"/>
        </ContainerOnBoarding>
    )
}