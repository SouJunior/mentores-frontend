import { CheckboxContainer } from './style';

export default function Checkbox({ id, text, value, setValue }) {
	return (
		<CheckboxContainer>
			<input
				type='checkbox'
				id={id}
				onChange={(e) => setValue(e.target.checked)}
				value={value}
			/>
			<label htmlFor={id}>{text}</label>
		</CheckboxContainer>
	);
}
