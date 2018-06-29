import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<div className="content login">
				<div className="container">
					<div className="form_main">
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
							<button className="ui button">Войти</button>
						</div>
					</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;