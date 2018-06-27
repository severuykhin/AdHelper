import React, { Component } from 'react';
import './Banner.css';

/**
 * Represents single banner entity
 */
class Banner extends Component {

	constructor(props) {
		super(props);
		this.fileUpload = React.createRef()
	}

	handleChange = () => {
		const file = this.fileUpload.current.files[0];
		this.props.handleFileUpload(file);
	}
	
	/**
	 * Resolve image layout
	 */
	getImage = () => {

		const { img } = this.props;
		
		let src    = img ? img : '/picture.svg',
			bgSize = img ? 'cover' : '40px',
			className = img ? 'banner__img-inner banner__img-inner_active' : 'banner__img-inner';
		return <div className={className} style={{
					backgroundImage : `url(${src})`,
					backgroundSize : bgSize,
				}}  />
	}


	/**
	 * Get banner file upload layout
	 */
	getFileUpload = (id) => {
		return ( 
			<label className="banner__file" htmlFor={id}>
				<input 
					ref={this.fileUpload} 
					id={id}
					onChange={this.handleChange} 
					type="file"/>
			</label>
		)
	}

	render() {

		const { id, type, category } = this.props;
		const className = `banner banner__${category.name}-${type}`;

		return (
			<div className={className}>
				<div className="banner__inner">
					<div className="banner__img">
						{this.getImage()}
						{this.getFileUpload(id)}
					</div>
				</div>	
			</div>
		);
	}
}

export default Banner;