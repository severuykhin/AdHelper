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

/**
 * Represents Banners Content data provider
 */
class BannersContentContainer extends Component {


	getSlug() {
		return this.props.match.params.category;
	}

	componentDidMount = () => {
		this.props.setBanners({
			category : this.getSlug(),
			items    : fakeBanners 
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const oldSlug = prevProps.match.params.category;
		const currentSlug = this.getSlug();
		if (oldSlug !== currentSlug) {
			this.props.setBanners({
				category : currentSlug,
				items    : fakeBanners 
			});		
		}
	}

	render() {

		const slug = this.getSlug();
		const banners = this.props.banners[slug];

		// console.log(this.props.banners);

		return (
			<div>
				<BannersContent items={banners} />	
			</div>
		);
	}
}

const mapStateToProps = state => ({
	banners : state.banners.toJS().banners().toJS()
})

const mapDispatchToProps = (dispatch) => ({
	setBanners : (banners) => dispatch(setBanners(banners))
});

export default connect(mapStateToProps, mapDispatchToProps)(BannersContentContainer);