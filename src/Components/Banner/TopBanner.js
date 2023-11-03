import React from 'react';

function TopBanner(props) {
    return (
        <div className='topFixBanner'>
            <div className='topBannerOverlay'>
                <div className='topBannerContent'>
                    <h1 className="topSubTitle slideup-75">welcome to restura</h1>
                    <h1 className="topTitle slideup-85">Enjoy Foods, with your Friends & Family</h1>
                    <a className='bg-trasparnt border-2 border-gray-50 
                        text-white font-semibold 
                        p-2 rounded text-base font-serif
                        hover:bg-[#e6ac0e] 
                        hover:border-[#f8c331]
                        hover:cursor-pointer slideup-95'>
                            Book A Table
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopBanner;