import "./cards.css";
import React from "react";
import { useHistory } from "react-router";

<<<<<<< HEAD
function Banner (props){
    return(
        <div className="banner">
            <div className="bannerContent">
            <h1 className="bannerTitle">{props.title}</h1>
            <h3 className="bannerSubText">{props.subText}</h3>
            </div>
        </div>
        
    )
=======
function Banner(props) {
  return (
    <div className="banner">
      <div className="bannerContent">
        <h1 className="bannerTitle">{props.title}</h1>
        <h3 className="bannerSubText">{props.subText}</h3>
      </div>
    </div>
  );
>>>>>>> b43c461649c6619908f44f795093f6b4334ca351
}
function BannerGcse(props) {
  return (
    <div className="bannerGcse">
      <h1 className="bannerTitle">{props.title}</h1>
      <h3 className="bannerSubText">{props.subText}</h3>
    </div>
  );
}

function MainBody(props) {
  return (
    <div className="mainBody">
      <img className="mainBodyImage" src={props.imageSrc} />
      <div className="mainBodyContent">
        <h1 className="mainBodyTitle">{props.title}</h1>
        <h3 className="mainBodySubText">{props.subText}</h3>
      </div>
    </div>
  );
}
function MainBody2(props) {
  return (
    <div className="mainBody2">
      {/* <img className="mainBodyImage2" src={props.imageSrc}/> */}
      <div className="mainBodyContent">
        <h1 className="mainBodyTitle">{props.title}</h1>
        <h3 className="mainBodySubText">{props.subText}</h3>
        <h3 className="mainBodySubText">{props.subText2}</h3>
      </div>
    </div>
  );
}
function MainBody4(props) {
  return (
    <div className="mainBody4">
      <img className="mainBodyImage" src={props.imageSrc} />
      <div className="mainBodyContent">
        <h1 className="mainBodyTitle">{props.title}</h1>
        <h3 className="mainBodySubText">{props.subText}</h3>
        <h3 className="mainBodySubText">{props.subText2}</h3>
      </div>
    </div>
  );
}
function MainBody2 (props){
    return(
        <div className="mainBody2">
            {/* <img className="mainBodyImage2" src={props.imageSrc}/> */}
            <div className="mainBodyContent">
            <h1 className="mainBodyTitle">{props.title}</h1>
            <h3 className="mainBodySubText">{props.subText}</h3>
            </div>
        </div>
        
    )
}

<<<<<<< HEAD
function MainBody3 (props){
    return(
        <div className="mainBody3">
            <div className="mainBodyContent3">
            <h1 className="mainBodyTitle3">{props.title}</h1>
            <button class="startButton"  ><span>Start </span></button>
            </div>
        </div>
        
    )
}

export{
    Banner, BannerGcse, MainBody, MainBody2,MainBody3
};
=======
function MainBody3(props) {
  const history = useHistory();
  function RedirectGcse() {
    // alert("I am working")

    history.push("/GCSEStart");
  }
  return (
    <div className="mainBody3">
      <div className="mainBodyContent3">
        <h1 className="mainBodyTitle3">{props.title}</h1>
        <button class="startButton" onClick={() => RedirectGcse()}>
          <span>Start </span>
        </button>
      </div>
    </div>
  );
}

export { Banner, BannerGcse, MainBody, MainBody2, MainBody3, MainBody4 };
>>>>>>> b43c461649c6619908f44f795093f6b4334ca351
