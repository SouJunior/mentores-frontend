import { ContainerDiv, ContainerError, ContainerInput } from './style';
import { Field, ErrorMessage } from 'formik';
import Label from './label';

export default function InputForm({ name, type, placeholder, label }) {
	return (
		<ContainerDiv>
			<Label name={label} />
			<span className='asteristico'>*</span>
			<ContainerInput>
				<Field
					as='input'
					name={name}
					type={type}
					placeholder={placeholder}
				/>
			</ContainerInput>
			<ContainerError>
				<ErrorMessage
					name={name}
					component='div'
					className='error-message'
				/>
			</ContainerError>
		</ContainerDiv>
	);
}
