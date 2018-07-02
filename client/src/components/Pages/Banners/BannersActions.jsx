import React, { Component } from 'react';
import { connect } from 'react-redux';
import Validator from '../../../utils/Validator';
import { setImageToAll } from '../../../ducks/banners';

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
	 * Clears all banners of active category
	 */
	handleClickClearAll = () => {
		const { category } = this.props;		
		this.props.setImageToAll('', category);
	}

	/**
	 * Set new uploaded image to all banners in collection
	 * @param { object } file - Uploaded file instance
	 */
	updateImage = file => {

		const reader = new FileReader();
		const component = this;
		const { category } = this.props;

		reader.readAsDataURL(file);
		
		reader.onload = function () {
			component.props.setImageToAll(this.result, category);
		}
	}

	/**
	 * Display errors
	 * @param { array } errors - Validation errors
	 */
	updateErrors = (errors) => {
		console.log(errors);
	}

	render() {

		const { isTouched } = this.props;

		return (
			<div className="banners__actions">
				<div className="banners__actions-item banners__actions-fill">
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
				{ isTouched && <div className="banners__actions-item banners__actions-clear">
					<button 
						onClick={this.handleClickClearAll}
						className="ui labeled icon button">
						<i className="trash icon"></i>
						Очистить все
					</button>
				</div> }
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isTouched : state.banners.get('isTouched')
});

const mapDispatchToProps = dispatch => ({
	setImageToAll : (data, category) => dispatch(setImageToAll(data, category))
});

export default connect(mapStateToProps, mapDispatchToProps)(BannersActions);