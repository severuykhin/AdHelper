import React, { Component } from 'react';
import BannerContainer from '../../Banner/BannerContainer';

class BannersContent extends Component {

	buildItems = (items) => {
		return items.map( item => {
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