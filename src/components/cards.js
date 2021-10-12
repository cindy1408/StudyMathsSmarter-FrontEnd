import './cards.css';
import React from 'react';

function Banner (props){
    return(
        <div className="banner">
            <h1 className="bannerTitle">{props.title}</h1>
            <h3 className="bannerSubText">{props.subText}</h3>
        </div>
        
    )
}
function BannerGcse (props){
    return(
        <div className="bannerGcse">
            <h1 className="bannerTitle">{props.title}</h1>
            <h3 className="bannerSubText">{props.subText}</h3>
        </div>
        
    )
}

    

export{
    Banner, BannerGcse,
};