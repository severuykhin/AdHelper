import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { setCategorySlug,
		 setIsTouched } from '../../../ducks/banners';

import BannersContent from './BannersContent';
import BannersActions from './BannersActions';

/**
 * Represents Banners Content data provider
 */
class BannersContentContainer extends Component {

	getSlug() {
		return this.props.match.params.category;
	}

	componentDidMount = () => {
		this.props.setCategorySlug(this.getSlug());
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const oldSlug = prevProps.match.params.category;
		const currentSlug = this.getSlug();
		if (oldSlug !== currentSlug) {
			this.props.setCategorySlug(currentSlug);
			this.props.setIsTouched(this.props.banners[currentSlug]);		
		}
	}

	render() {

		const slug = this.getSlug();
		const banners = this.props.banners[slug];

		return (
			<Fragment>
				<BannersContent 
					category={slug}
					items={banners}>

					<BannersActions />

				</BannersContent>	
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	banners : state.banners.banners
})

const mapDispatchToProps = (dispatch) => ({
	setCategorySlug : (categorySlug)    => dispatch(setCategorySlug(categorySlug)),
	setIsTouched    : (categoryBanners) => dispatch(setIsTouched(categoryBanners))
});

export default connect(mapStateToProps, mapDispatchToProps)(BannersContentContainer);