import React, { Component, Fragment } from 'react';
import BannerContainer from '../../Banner/BannerContainer';

class BannersContent extends Component {

	buildItems = (items) => {

		const banners = [...items].sort( (a,b) => a.order > b.order );

		return banners.map( item => {
			const { id } = item;
			return <BannerContainer key={id} {...item}  />
		})
	}

	render() {

		const { items, children } = this.props;

		return (
			<Fragment>
				<div className="banners-content">
					{ children }
					{ items && this.buildItems(items) }					
				</div>
			</Fragment>
		);
	}
}

export default BannersContent;