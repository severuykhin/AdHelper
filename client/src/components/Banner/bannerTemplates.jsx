import React from 'react';

/**
 * Get banner template by given numeric type
 * @param { number } type - Banner template type
 * @returns { object }
 */
export default function getBannerTemplate(type) {
	const types = {
		1 : (src, bgSize, className) => {
			return <div className={className} 
						style={{
						backgroundImage : `url(${src})`,
						backgroundSize : bgSize}} 
					/>
		},

		/**
		 * @param { string } src
		 */
		2 : (src, bgSize, className) => {

			let isPlaceHolder = src.search('picture.svg') >= 0;

			return isPlaceHolder ? 
					types[1](src, bgSize, className) : 
					<img alt="banner" src={src} />;
		}
	}

	return types[type];
}