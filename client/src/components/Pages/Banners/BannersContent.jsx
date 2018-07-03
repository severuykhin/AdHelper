import React, { Component, Fragment } from 'react';
import getTemplate from './BannersTemplates';

class BannersContent extends Component {

	/**
	 * @param { array } items - Banners to render
	 * @param { string } category - Category slug
	 */
	buildItems = (items, category) => {

		const banners = [...items].sort( (a,b) => a.order > b.order );

		return getTemplate(category)(banners);
	}

	render() {

		const { items, children, category } = this.props;

		return (
			<Fragment>
				<div className="banners-content">
					{ children }
					{ items && this.buildItems(items, category) }					
				</div>
			</Fragment>
		);
	}
}

export default BannersContent;