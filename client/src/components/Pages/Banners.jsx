import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import BannersNav from './Banners/BannersNav';
import BannersContentContainer from './Banners/BannersContentContainer';

class Banners extends Component {

	render() {

		const { categories } = this.props;

		return (
			<div className="banners content">
				<div className="container">
						<br/>
					<div className="row">
						<div className="col-12">
							<BannersNav items={categories} />
						</div>
						<div className="col-12">
							<Route path='/banners/:category' component={BannersContentContainer} />
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Banners);