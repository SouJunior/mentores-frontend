import FormEmailToReset from "@/components/molecules/FormEmailToReset";
import { ResetPassContainer } from "./styled";

 function ResetPassword() {
  return (
    <ResetPassContainer>
      <FormEmailToReset />
    </ResetPassContainer>
  );
}

export default ResetPassword