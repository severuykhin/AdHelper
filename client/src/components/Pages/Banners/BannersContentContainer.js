import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setBanners } from '../../../ducks/banners';

import BannersContent from './BannersContent';

const fakeBanners = [
	{
		a : 1
	}
];

const fakeBanners2 = [
	{
		a : 2
	}
];

/**
 * Represents Banners Content data provider
 */
class BannersContentContainer extends Component {


	componentDidMount = () => {
		this.props.setBanners(fakeBanners);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const oldSlug = prevProps.match.params.category;
		const currentSlug = this.props.match.params.category;
		if (oldSlug !== currentSlug) {
			this.props.setBanners(fakeBanners2);		
		}
	}

	render() {
		const { banners } = this.props;
		return (
			<div>
				<BannersContent items={banners} />	
			</div>
		);
	}
}

const mapStateToProps = state => ({
	banners : state.banners.get('banners').toJS()
})

const mapDispatchToProps = (dispatch) => ({
	setBanners : (banners) => dispatch(setBanners(banners))
});

export default connect(mapStateToProps, mapDispatchToProps)(BannersContentContainer);