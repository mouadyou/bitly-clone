import React from 'react';
import TextBox from '../text-box'
import './form.css';

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { action, method, inputs, submitHandler, ...rest } = this.props;
		const formControl = inputs.map(item => (
			<TextBox key={item.name} name={item.name} label={item.label} type={item.type} />
		));

		return (
			<form className="form" action={action} onSubmit={submitHandler}
				method={method === undefined ? "GET" : method} {...rest}>
				{formControl}
				<div className="form-buttons">
					<button type="submit">Submit</button>
				</div>
			</form>
		);
	}
}

export default Form;