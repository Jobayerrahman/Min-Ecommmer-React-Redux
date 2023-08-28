import React from 'react';

function TopBanner(props) {
    return (
        <div className='topFixBanner'>
            <div className='topBannerOverlay'>
                <div className='topBannerContent'>
                    <h1 className="topTitle">mini-E-commerce</h1>
                    <h5 className="topSubTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    <a className='bannerButton'>View Collection</a>
                </div>
            </div>
        </div>
    );
}

export default TopBanner;