import React, { Component } from 'react';
import BannerContainer from '../../Banner/BannerContainer';

class BannerContent extends Component {

	buildItems = (items) => {
		return items.map( item => {
			const {id, ...rest} = item;
			return <BannerContainer key={id} {...rest}  />
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

export default BannerContent;