import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import Validator from '../../utils/Validator';
import { setImage } from '../../ducks/banners';


class BannerContainer extends Component {

	/**
	 * Handles file upload
	 * @param { object } file - Uploaded file instance 
	 */
	handleFileUpload = (file) => {
		
		const validator = new Validator();
		const validation = validator.checkFile(file);

		if (true === validation.status && validation.errors.length <= 0) {
			this.updateImage(file);
		} else {
			this.updateErrors(validation.errors);	
		}

	}

	/**
	 * Updates banner image through redux
	 * @param { object } file - Uploaded file instance 
	 */
	updateImage(file) {

		const reader = new FileReader();
		const category = this.props.category.name;
		const { id, banners, setImage } = this.props;

		reader.onload = (e) => {
			const data = e.currentTarget.result;			
			setImage(data, id, category, banners[category]);
		}

		reader.readAsDataURL(file);
	}

	/**
	 * Updates file errors in banner layout
	 * @param { array } errors
	 */
	updateErrors(errors) {
		alert('Ошибка');
		console.log(errors);
	}

	render() {
		return <Banner handleFileUpload={this.handleFileUpload} {...this.props} />
	}
}

const mapStateToProps = state => ({
	banners : state.banners.banners 
});

const mapDispatchToProps = dispatch => ({
	setImage : (data, id, slug, banners) => dispatch(setImage(data, id, slug, banners)) 
});



export default connect(mapStateToProps, mapDispatchToProps)(BannerContainer);