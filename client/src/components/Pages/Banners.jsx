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
					<div className="row">

						<div className="col-xs-12 col-lg-2">
							<BannersNav items={categories} />
						</div>

						<div className="col-xs-12 col-lg-10">
							<Route path='/banners/:category' component={BannersContentContainer} />
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Banners);