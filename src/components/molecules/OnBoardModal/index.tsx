import GridSpecialities from "@/components/atoms/GridSpecialities";
import {
  ModalContainer,
  TabsContainer,
  Tab,
  TabLabel,
  TabWrapper,
  TabLine,
} from "./styled";
import { useState } from "react";
import PerfilTab from "../PerfilTab";

export default function OnBoardModal() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabs = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <ModalContainer>
      <TabsContainer>
        <TabWrapper>
          <Tab>
            <TabLabel onClick={() => handleTabs(0)}>ESPECIALIDADES</TabLabel>
            <TabLine style={{ width: activeTab === 0 ? '258px' : '0' }} />
          </Tab>
        </TabWrapper>
        <TabWrapper>
          <Tab>
            <TabLabel onClick={() => handleTabs(1)}>PERFIL</TabLabel>
            <TabLine style={{ width: activeTab === 1 ? '258px' : '0' }} />
          </Tab>
        </TabWrapper>      </TabsContainer>
      {activeTab === 0 && <GridSpecialities />}
      {activeTab === 1 && <PerfilTab/>}
    </ModalContainer>
  );
}
