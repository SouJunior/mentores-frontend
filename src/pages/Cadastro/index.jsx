import FormRegister from '../../components/molecules/FormRegister/FormRegister';
import {
	ContainerCadastro,
	ContainerImageCadastro,
	MyImageCadastro,
} from '../../styles/pages/CadastroStyles';

function Cadastro() {
	return (
		<ContainerCadastro>
			<ContainerImageCadastro>
				<FormRegister />
				<MyImageCadastro
					src='/images/ilustracao.svg'
					alt='Figuras do Background'
				/>
			</ContainerImageCadastro>
		</ContainerCadastro>
	);
}

export default Cadastro;
