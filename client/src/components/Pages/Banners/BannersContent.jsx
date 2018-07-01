import React, { Component } from 'react';
import BannerContainer from '../../Banner/BannerContainer';

class BannersContent extends Component {

	buildItems = (items) => {

		const banners = [...items].sort( (a,b) => a.order > b.order );

		console.log(banners);

		return banners.map( item => {
			const { id } = item;
			return <BannerContainer key={id} {...item}  />
		})
	}

	render() {

		const { items } = this.props;

		return (
			<div className="banners-content">
				{items && this.buildItems(items)}					
			</div>
		);
	}
}

export default BannersContent;