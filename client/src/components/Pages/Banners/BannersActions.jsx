import React, { Component } from 'react';
import Validator from '../../../utils/Validator';

class BannersActions extends Component {

	constructor(props) {
		super(props);
		this.fileUpload = React.createRef();
	}
	
	/**
	 * Handles file upload via file input
	 */
	handleFileUpload = () => {
		const file = this.fileUpload.current.files[0];
		const validator = new Validator();

		const validation = validator.checkFile(file);

		if (true === validation.status && validation.errors.length <= 0) {
			this.updateImage(file);
		} else {
			this.updateErrors(validation.errors);	
		}		
	}

	/**
	 * Set new uploaded image to all banners in collection
	 * @param { object } file - Uploaded file instance
	 */
	updateImage = file => {
		console.log(file);
	}

	/**
	 * Display errors
	 * @param { array } errors - Validation errors
	 */
	updateErrors = (errors) => {
		console.log(errors);
	}

	render() {
		return (
			<div className="banners__actions">
				<div className="banners__action-item banners__action-fill">
					<label htmlFor="fill-all" className="ui labeled icon button">
						<i className="image icon"></i>
						Заполнить все
					</label>
					<input
						onChange={this.handleFileUpload}
						ref={this.fileUpload} 
						id="fill-all" 
						type="file"/>
				</div>
			</div>
		);
	}
}

export default BannersActions;