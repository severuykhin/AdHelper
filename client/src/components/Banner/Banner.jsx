import React, { Component, Fragment } from 'react';
import './Banner.css';
import getBannerTemplate from './bannerTemplates';


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

	handleDeleteClick = () => {
		this.props.handleDeleteFile();
	}
	
	/**
	 * Resolve image layout
	 * @param { string } img - base64 img file content
	 * @param { number } type - Image display type
	 */
	getImage = (img, type) => {

		let src       = img ? img : '/picture.svg',
			bgSize    = img ? 'cover' : '40px',
			className = img ? 'banner__img-inner banner__img-inner_active' : 'banner__img-inner';

		return getBannerTemplate(type)(src, bgSize, className);
	}


	/**
	 * Get banner url layout
	 * @param { string } url - Banner url
	 */
	getUrl = url => {
		return <div className="banner__url">{ url }</div>
	}


	/**
	 * Get banner file upload layout
	 * @param { string } id - Banner uniq id
	 * @param { boolean } img - Is img already set
	 */
	getFileUpload = (id, img) => {
		return ( 
			<Fragment>
					<label className="banner__file banner__button circular ui icon button" htmlFor={id}>
						<i aria-hidden="true" className="file image outline icon"></i>
						<input 
							ref={this.fileUpload} 
							id={id}
							onChange={this.handleChange} 
							type="file"/>
					</label>

				{ img && 
					<button
						onClick={this.props.handleDelete}
						className="banner__button banner__delete cilcular ui icon button">
						<i aria-hidden="true" className="trash alternate outline icon"></i>
					</button> }

			</Fragment>
		)
	}

	render() {
		
		const { id, type, category, img, imgType, title, text, url } = this.props;
		const isImgSet = img ? true : false;
		const className = `banner banner__item banner__${category.name}-${type}`;

		const metaInInfo = (type !== 6) && (category.name === 'rsya');

		return (
			<div className={className}>
				{ title && !metaInInfo && <div className="banner__title"><span>{ title }</span></div>}				
				<div className="banner__inner">
					<div className="banner__img">
						{this.getImage(img, imgType)}
					</div>
					<div className="banner__info">
						{ title && metaInInfo && <div className="banner__title"><span>{ title }</span></div>}
						{ text && <div className="banner__text">{ text }</div> }
						{ url && metaInInfo && this.getUrl(url) }
					</div>
				</div>
				{ url && !metaInInfo && this.getUrl(url) }
				{this.getFileUpload(id, isImgSet)}													
			</div>
		);
	}
}

export default Banner;