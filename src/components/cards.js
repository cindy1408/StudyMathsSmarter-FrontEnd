import './cards.css';
import React from 'react';

function Banner (props){
    return(
        <div className="banner">
            <div className="bannerContent">
            <h1 className="bannerTitle">{props.title}</h1>
            <h3 className="bannerSubText">{props.subText}</h3>
            </div>
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

function MainBody (props){
    return(
        <div className="mainBody">
            <img className="mainBodyImage" src={props.imageSrc}/>
            <div className="mainBodyContent">
            <h1 className="mainBodyTitle">{props.title}</h1>
            <h3 className="mainBodySubText">{props.subText}</h3>
            </div>
        </div>
        
    )
}
function MainBody2 (props){
    return(
        <div className="mainBody2">
            <img className="mainBodyImage2" src={props.imageSrc}/>
            <div className="mainBodyContent">
            <h1 className="mainBodyTitle">{props.title}</h1>
            <h3 className="mainBodySubText">{props.subText}</h3>
            </div>
        </div>
        
    )
}

    

export{
    Banner, BannerGcse, MainBody, MainBody2,
};