import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setBanners } from '../../../ducks/banners';

import BannersContent from './BannersContent';

import banners from '../../../config/banners.json';


// const fakeBanners = {
// 	rsya : [{
// 		id    : '1',
// 		category_id : '1',
// 		title : 'Первое объявление',
// 		slug  : 'pervoe',
// 		texttop : '',
// 		url     : 'site.ru',
// 		type    : '1',
// 		className : 'rsya-1',
// 		img : '',
// 		category :  {
// 			name : 'rsya'
// 		}
// 	},
// 	{
// 		id    : '2',
// 		category_id : '1',
// 		title : 'РСЯ большой баннер 355px-290px. Жми ёкарны-бабай!',
// 		slug  : 'vtoroe',
// 		url     : 'site.ru',
// 		texttop : '',
// 		img : '',
// 		type    : '2',
// 		className : 'rsya-2',
// 		category :  {
// 			name : 'rsya'
// 		}
// 	},
// 	{
// 		id    : '3',
// 		category_id : '1',
// 		title : 'Название 3',
// 		slug  : 'tretie',
// 		url     : 'site.ru',
// 		texttop : '',
// 		img : '',
// 		type    : '3',
// 		className : 'rsya-3',
// 		category :  {
// 			name : 'rsya'
// 		}
// 	}
// ],
// 	vk : [
// 		{
// 			id    : '1',
// 			category_id : '1',
// 			title : 'Первое объявление',
// 			slug  : 'pervoe',
// 			url     : 'site.ru',
// 			texttop : '',
// 			type    : '1',
// 			className : 'vk-1',
// 			img : '',
// 			category :  {
// 				name : 'vk'
// 			}
// 		},
// 		{
// 			id    : '2',
// 			category_id : '1',
// 			title : 'Второе объявление',
// 			slug  : 'vtoroe',
// 			url     : 'site.ru',
// 			texttop : '',
// 			img : '',
// 			type    : '2',
// 			className : 'vk-2',
// 			category :  {
// 				name : 'vk'
// 			}
// 		}	
// 	]
// }

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
		// console.log('update');
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
			<div>
				<BannersContent items={banners} />	
			</div>
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