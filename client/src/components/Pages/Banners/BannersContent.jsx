import React, { Component, Fragment } from 'react';
import BannerContainer from '../../Banner/BannerContainer';
import BannersActions from './BannersActions';

class BannersContent extends Component {

	buildItems = (items) => {

		const banners = [...items].sort( (a,b) => a.order > b.order );

		return banners.map( item => {
			const { id } = item;
			return <BannerContainer key={id} {...item}  />
		})
	}

	render() {

		const { items } = this.props;

		return (
			<Fragment>
				<BannersActions />
				<div className="banners-content">
					{items && this.buildItems(items)}					
				</div>
			</Fragment>
		);
	}
}

export default BannersContent;