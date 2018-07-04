import React from 'react';
import { NavLink } from 'react-router-dom';
import { moduleName } from '../../../ducks/banners';


const BannersNav = (props) => {

	const buildItems = (items) => {
		return items.map( item => {
			return (
				<NavLink
					key={ item.id } 
					to={ `/${moduleName}/${item.slug}` } 
					className="item"
					activeClassName="active">
					{/* <div className="ui teal label">{ item.count }</div> */}
					{ item.name }
				</NavLink>
			); 
		});
	}

	return (
		<div className="banners__nav">
			<div className="ui menu">
				<div className="header item">
					Баннеры
				</div>
				{ buildItems(props.items) }
			</div>		
		</div>
	);
};

export default BannersNav;