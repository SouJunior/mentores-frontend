import FormInput from '../../components/atoms/FormRegister/FormRegister';
import {
	ContainerCadastro,
	ContainerImageCadastro,
	MyImageCadastro,
} from '../../styles/pages/CadastroStyles';

function Cadastro() {
	return (
		<ContainerCadastro>
			<ContainerImageCadastro>
				<FormInput />
				<MyImageCadastro
					src='/images/ilustracao.svg'
					alt='Figuras do Background'
				/>
			</ContainerImageCadastro>
		</ContainerCadastro>
	);
}

export default Cadastro;
