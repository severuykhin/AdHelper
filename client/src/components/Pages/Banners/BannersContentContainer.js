import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { setBanners } from '../../../ducks/banners';

import BannersContent from './BannersContent';

import banners from '../../../config/banners.json';

/**
 * Represents Banners Content data provider
 */
class BannersContentContainer extends Component {

	getSlug() {
		return this.props.match.params.category;
	}

	componentDidMount = () => {

		const slug = this.getSlug();

		this.props.setBanners({
			category : slug,
			items    : [...banners[slug]] 
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const oldSlug = prevProps.match.params.category;
		const currentSlug = this.getSlug();
		if (oldSlug !== currentSlug) {
			this.props.setBanners({
				category : currentSlug,
				items    : [...banners[currentSlug]] 
			});		
		}
	}

	render() {

		const slug = this.getSlug();
		const banners = this.props.banners[slug];

		return (
			<Fragment>
				<BannersContent 
					category={slug}
					items={banners} />	
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	banners : state.banners.banners
})

const mapDispatchToProps = (dispatch) => ({
	setBanners : (banners) => dispatch(setBanners(banners))
});

export default connect(mapStateToProps, mapDispatchToProps)(BannersContentContainer);