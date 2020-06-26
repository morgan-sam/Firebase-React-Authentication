import React from 'react';
import { capitalizeFirstLetter } from 'js/utlity';

const Form = (props) => {
	const { submitText, onSubmit, inputs } = props;

	return (
		<form className="form" onSubmit={onSubmit}>
			{inputs.map((el, i) => (
				<label key={i} className="formInput">
					<span className="formLabel">{capitalizeFirstLetter(el)}</span>
					<input name={el} type={el} placeholder={capitalizeFirstLetter(el)} />
				</label>
			))}

			<button className="formBtn" type="submit">
				{submitText}
			</button>
		</form>
	);
};

export default Form;
