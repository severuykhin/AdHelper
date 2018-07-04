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
				const aside  = banners[2] && <BannerContainer key={banners[2].id} {...banners[2]}  />;
				const slider = banners[3] && <BannerContainer key={banners[3].id} {...banners[3]}  />;

				return (
					<div className="banners__vk">
						<div className="banners__vk-left">
							{ generateFakeText(8) }
							<div className="banners__vk-aside">
								{ aside }
							</div>	
						</div>
						<div className="banners__vk-right">
							<div className="banners__vk-head">
								{ head }
							</div>
							<div className="banners__vk-content">
								<div className="banners__vk-content-left">
									<div className="banner__vk-block">{ generateFakeText(5) }</div>																	
									<div className="banner__vk-block">
										<div className="banner__vk-slider">
											<div className="banner__vk-slider-info">
												{ generateFakeText(1) }
											</div>
											<div className="banner__vk-slider-items">
												{[1,2,3].map( i => <div key={i} className="banner__vk-slider-item">{ slider }</div>)}
											</div>	
										</div>
									</div>							
									<div className="banner__vk-block">{ generateFakeText(3) }</div>							
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