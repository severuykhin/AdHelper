import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class LoginForm extends Component { 

	render() {

		const { handleSubmit } = this.props;

		return (
			<div className="form_main">
				<h4>Вход</h4>
				<br />
				<form
					onSubmit={handleSubmit}
					className="ui form">
					<div className="field anim-item">
						<label>Email</label>
						<Field name="email" placeholder="some@mail.com" component="input"/>			
					</div>
					<div className="field anim-item">
						<label>Пароль</label>
						<Field name="password" type="password" component="input"/>									
					</div>
					<div className="anim-item">
						<button className="ui button">Войти</button>
					</div>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form : 'login'
})(LoginForm);