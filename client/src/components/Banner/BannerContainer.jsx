import React, { Component } from 'react';
import Banner from './Banner';


class BannerContainer extends Component {

	handleFileUpload = (file) => {
		console.log(file);
	}

	render() {
		return <Banner handleFileUpload={this.handleFileUpload} {...this.props} />
	}
}

export default BannerContainer;