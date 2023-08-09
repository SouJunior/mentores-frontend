import FormEmailToReset from "@/components/molecules/FormEmailToReset";
import { ResetPassContainer } from "./styled";

export default function ResetPassword() {
  return (
    <ResetPassContainer>
      <FormEmailToReset />
    </ResetPassContainer>
  );
}
