import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setBanners } from '../../../ducks/banners';

import BannersContent from './BannersContent';

const fakeBanners = [
	{
		id    : '1',
		category_id : '1',
		title : 'Первое объявление',
		slug  : 'pervoe',
		texttop : '',
		type    : '1',
		className : 'rsya-1',
		img : '',
		category :  {
			name : 'rsya'
		}
	},
	{
		id    : '2',
		category_id : '1',
		title : 'Второе объявление',
		slug  : 'vtoroe',
		texttop : '',
		img : '',
		type    : '2',
		className : 'rsya-2',
		category :  {
			name : 'rsya'
		}
	},
];

const fakeBanners2 = [
	{
		id    : '1',
		category_id : '1',
		title : 'lalala',
		slug  : 'pervoe',
		texttop : '',
		img : '',
		type    : '3',
		className : 'rsya-1',
		category :  {
			name : 'google'
		}
	},
	{
		id    : '2',
		category_id : '1',
		title : 'lalala 2',
		slug  : 'vtoroe',
		texttop : '',
		img : '',
		type    : '4',
		category :  {
			name : 'google'
		}
	},
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
			this.props.setBanners(fakeBanners);		
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