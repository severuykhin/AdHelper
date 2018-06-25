import React from 'react';
import { NavLink } from 'react-router-dom';

const BannersNav = () => {
	return (
		<div>
			<div className="ui vertical menu">
				<NavLink to="/banners/vk" className="item">
					<div className="ui teal label">1</div>VK</NavLink>

				<NavLink to="/banners/rsya" className="item">
					<div className="ui label">51</div>РСЯ</NavLink>
			</div>		
		</div>
	);
};

export default BannersNav;