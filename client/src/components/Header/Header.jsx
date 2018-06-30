import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header">
			<Menu color="blue" borderless inverted >
				<div className="container">
					<Menu.Item >
						<NavLink to='/'>Logo</NavLink>
					</Menu.Item>

					<Menu.Item >
						<NavLink to='/banners'>Баннеры</NavLink>					
					</Menu.Item>

					<Menu.Menu position='right'>
						<Menu.Item >
							<NavLink to='/user/login'>Войти</NavLink>											
						</Menu.Item>

						{/* <Menu.Item >
							<NavLink to='/user/register'>Регистрация</NavLink>											
						</Menu.Item> */}
					</Menu.Menu>
				</div>
			</Menu>
		</div>
	);
};

export default Header;	