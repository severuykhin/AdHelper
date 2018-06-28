import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import Validator from '../../utils/Validator';


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

	}

	/**
	 * Updates file errors in banner layout
	 * @param { array } errors
	 */
	updateErrors(errors) {
		console.log(errors);
	}

	render() {
		return <Banner handleFileUpload={this.handleFileUpload} {...this.props} />
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
	// setErrors : 
});



export default connect(mapStateToProps, mapDispatchToProps)(BannerContainer);