import React from 'react';
import BannerContainer from '../../Banner/BannerContainer';

export const generateFakeText = (rows) => {
	const fakeRows = [];
	for (let i = 0; i <= rows; i++) {
		fakeRows.push(<div key={i} className="fake-text__item"></div>);
	}

	return (
		<div className="fake-text">
			{ fakeRows }
		</div>
	);
}

export default function getTemplate(category) {
	
	switch(category) {
		case 'vk':
			return (banners) => {

				const head   = banners[0] && <BannerContainer key={banners[0].id} {...banners[0]}  />;
				const avatar = banners[1] && <BannerContainer key={banners[1].id} {...banners[1]}  />;

				return (
					<div className="banners__vk">
						<div className="banners__vk-left">
							{ generateFakeText(8) }
						</div>
						<div className="banners__vk-right">
							<div className="banners__vk-head">
								{ head }
							</div>
							<div className="banners__vk-content">
								<div className="banners__vk-content-left">
									{ generateFakeText(7) }							
								</div>
								<div className="banners__vk-content-right">
									<div className="banners__vk-avatar">
										{ avatar }
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			}

		default:
			return (banners) => {
				return banners.map( item => {
					const { id } = item;
					return <BannerContainer key={id} {...item}  />
				})
			}
	}
}