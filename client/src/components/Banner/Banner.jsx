import React, { Component, Fragment } from 'react';
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
	 * @param { string } img - base64 img file content
	 */
	getImage = (img) => {

		let src       = img ? img : '/picture.svg',
			bgSize    = img ? 'cover' : '40px',
			className = img ? 'banner__img-inner banner__img-inner_active' : 'banner__img-inner';

		return <div className={className} 
					style={{
						backgroundImage : `url(${src})`,
						backgroundSize : bgSize}} 
				/>
	}


	/**
	 * Get banner file upload layout
	 * @param { string } id - Banner uniq id
	 * @param { boolean } img - Is img already set
	 */
	getFileUpload = (id, img) => {
		return ( 
			<Fragment>
				<button className="banner__button ui icon button">
					<i aria-hidden="true" className="file image outline icon"></i>
					<label className="banner__file" htmlFor={id}>
					<input 
						ref={this.fileUpload} 
						id={id}
						onChange={this.handleChange} 
						type="file"/>
					</label>
				</button>

				{ img && <button className="banner__button ui icon button">
					<i aria-hidden="true" className="trash alternate outline icon"></i>
				</button> }

			</Fragment>
		)
	}

	render() {
		
		const { id, type, category, img, title } = this.props;
		const isImgSet = img ? true : false;
		const className = `banner banner__${category.name}-${type}`;

		return (
			<div className={className}>
				<div className="banner__inner">
					<div className="banner__img">
						{this.getImage(img)}
						{this.getFileUpload(id, isImgSet)}
					</div>
					<div className="banner__title"><span>{ title }</span></div>
				</div>	
			</div>
		);
	}
}

export default Banner;