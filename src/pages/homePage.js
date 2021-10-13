import { logDOM } from "@testing-library/react";
import React from "react";
import {Banner, MainBody} from "../components/cards.js";
import Logo from '../images/FR_English.png';
import "./homePage.css";

function homePage(){
    return (
       <>
      <Banner title="This is the home page" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat orci, vehicula id suscipit in, scelerisque sed sapien. In vulputate euismod justo, id sagittis sem pellentesque sed. Aliquam in quam vehicula, sodales arcu vitae, laoreet risus. Sed nec tellus sed risus lacinia aliquet. Ut luctus lorem erat, et feugiat leo molestie a. Maecenas auctor finibus mauris a vulputate. Ut aliquet, velit in venenatis iaculis, erat nisl gravida odio, eu semper leo risus sit amet eros. Pellentesque lacinia molestie feugiat.

Mauris in commodo dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum elementum nulla, id lobortis dolor pellentesque eu. Mauris ante augue, volutpat at justo quis, fermentum cursus quam. Pellentesque dui ligula, accumsan a est vitae, fermentum tincidunt eros. Aliquam iaculis nunc eget purus iaculis, interdum fermentum orci venenatis. Ut ullamcorper erat tortor. Morbi velit mi, dignissim sit amet turpis quis, venenatis laoreet nunc. Proin consectetur venenatis eros.

Aenean vitae libero nec odio tincidunt aliquet ac eget turpis. In porta ullamcorper lorem, a finibus tortor dignissim at. Cras non gravida nisl, vel cursus neque. Nulla eu aliquet nibh. Aliquam elit lacus, mollis ac est sit amet, convallis vestibulum neque. Quisque congue mi vitae enim ornare, vitae tempus libero posuere. Quisque eros turpis, porta at massa in, pellentesque pellentesque odio. Integer felis erat, imperdiet eu metus ut, maximus vestibulum leo. Vestibulum at eros eget sapien luctus egestas. Curabitur congue, felis vitae hendrerit aliquet, leo arcu egestas nulla, nec iaculis mauris sem ut ipsum. Duis erat nibh, laoreet quis tellus et, maximus pulvinar turpis. Duis mollis tellus at eros scelerisque accumsan. Duis fringilla dignissim lacus, sit amet pellentesque augue scelerisque id. Proin bibendum augue non fringilla dignissim. "/>
      <div className="homePage">
            <MainBody imageSrc={Logo} title="GCSE " subText="Check back frequently for the latest COVID-19 travel and specific testing requirements for your destination, including any stops for connecting flights. You are required to come to the airport with the appropriate travel documents.'
"/>
</div>

      
      </>
)
}
export default homePage;