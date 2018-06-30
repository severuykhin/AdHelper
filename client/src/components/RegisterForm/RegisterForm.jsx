import React, { Component } from 'react';

class RegisterForm extends Component {
	render() {
		return (
			<div className="form_main">
				<h4>Зарегистрироваться</h4>
				<form className="ui form">
					<div className="field anim-item">
						<label>Email</label>
						<div className="ui input">
							<input type="text" placeholder="some@mail.com" />
						</div>
					</div>
					<div className="field anim-item">
						<label>Пароль</label>
						<div className="ui input">
							<input type="password" />
						</div>
					</div>
					<div className="anim-item">
						<button className="ui button">Зарегистрироваться</button>
					</div>
				</form>
			</div>
		);
	}
}

export default RegisterForm;