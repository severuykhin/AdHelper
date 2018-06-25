import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import BannersNav from './Banners/BannersNav';
import BannersContent from './Banners/BannersContent';

import { categories } from '../../config/banner-categories';

class Banners extends Component {
	render() {
		return (
			<div className="banners content">
				<div className="container">
					<div className="row">

						<div className="col-xs-12 col-lg-2">
							<BannersNav items={categories} />
						</div>

						<div className="col-xs-12 col-lg-10">
							<Route path='/banners/:category' component={BannersContent} />
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(connect()(Banners));