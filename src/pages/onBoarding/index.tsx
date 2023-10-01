import { ContainerOnBoarding, OnBoardImage } from "@/styles/pages/onBoarding";
import onBoardImage from '@/assets/onBoarding/Ilustrações.png'
import OnBoardModal from "@/components/molecules/OnBoardModal";
import { withAuth } from "@/context/Auth/withAuth"


function OnBoarding() {
    return (
        <ContainerOnBoarding>
            <OnBoardImage src={onBoardImage} alt="Background"/>
            <OnBoardModal/>
        </ContainerOnBoarding>
    )
}

export default withAuth(OnBoarding)