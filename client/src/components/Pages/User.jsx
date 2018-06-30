import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import { login } from '../../ducks/auth';

class User extends Component {

	handleLogin = values => {
		console.log('Login atmpt', values);
	}

	render() {
		return (
			<div className="content login">
				<div className="container">

					<Route 
						path="/user/login" 
						render={ () => <LoginForm onSubmit={this.handleLogin} /> } />
					
					<Route 
						path="/user/register" 
						render={ () => <RegisterForm /> } />

				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { login })(User);