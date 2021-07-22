import { useState } from "react";

import Menu from "./layouts/Menu";
import Footer from "./layouts/Footer";
import "./index.css"

const Custom = () => {
  // const [selected, setSelected] = useState("");
  // const [data, setData] = useState({});

  // const setColor = (color) => {
  //   document.getElementById(selected).style.fill = color;
  //   setData({ ...data, [selected]: color });
  // };




  return (
    <>
      <Menu />
      <h1>CUSTOM DSIGN PAGE</h1>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      {/* <div>Seleted: {selected}</div>
      <button onClick={() => setColor("red")}>Color Red</button>
      <button onClick={() => setColor("black")}>Color Black</button> */}
      
      <div style={{ width: 400 }}>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 200 300" style={{enableBackground:"new 0 0 200 300"}} xmlSpace="preserve">

<g id="XMLID_7_">
	<g id="XMLID_9_">
		<g id="XMLID_37_">
			<path id="XMLID_38_" class="st0" d="M181.2,185.1c0,0-9.3,8.1-20.1,4.5l-17.9-82.7l-66.7-0.7l-19.2,5.1l-1.3,9.4l-15.9,68.8
				c0,0-7,3.8-20-4.6l1.7-10.1c0,0-2.2-3.8-0.5-9.7c0,0,19.5-117.4,28.4-124.1c0,0,77.2,0.5,77.9,0.5c5.7,0,11.4-0.3,17-0.5
				c1.7,0-3-4.9-1.4-5c1.7,0,9.3,6,10.2,7.6c1.5,2.6,2.3,5.8,3.1,8.6c0.9,2.9,1.8,5.7,2.6,8.6c0,0,0,0.1,0,0.1l7.9,32.6l13.4,75.3
				l-0.9,6.7L181.2,185.1z"
        opacity="0.99"
        fill="#323829"
        // Both Arms
        />
		</g>
	</g>

	<path id="XMLID_5_" class="st1" d="M49.4,40.8l9.1-5.7l19.8-8.5c0,0,22.6-8.2,43.5,0.4c5.4,2.2,10.8,4.5,16.2,6.7
		c3.2,1.3,6.9,2.6,9.7,4.6c1.4,1,2.6,2.2,3.9,3.3L147,74.5l2.1,108.4l4.6,75.9c0,0-9.6,19.4-52.1,22c-42.5,2.7-59.5-22-59.5-22
		l9.3-87l3.8-71.8l-2.6-27.5L49.4,40.8z"
    fill="#323829"
      //body
    />

	<rect id="XMLID_8_" x="96.8" y="41.2" class="st2" width="7.2" height="55.2"
  fill="#A67E2D"
  stroke="#F7F7F7"
  stroke-width="0.1"
  stroke-miterlimit="10"
  
  
  //phati

  />
	
	<g id="XMLID_4_">
		<circle id="XMLID_12_" class="st6" cx="100.4" cy="65.1" r="1.6"
    //btn 2nd
    />
		<circle id="XMLID_17_" class="st6" cx="100.4" cy="78.5" r="1.6"
    //btn 3rd
    
    />
		<circle id="XMLID_18_" class="st6" cx="100.2" cy="52.4" r="1.6"
    // btn 1st
    />
	</g>


	<g id="XMLID_6_">
		<path id="XMLID_10_" class="st5" d="M179.7,175.7c-7.6-1.9-20.6,4.5-20.6,4.5l2,9.4c4.3-5.1,20.1-4.5,20.1-4.5L179.7,175.7z"
    // left Coff
    />
		<path id="XMLID_15_" class="st5" d="M20.1,184.8c6-3,20,4.6,20,4.6l2.1-9.1c-6.2-4.7-20.5-5.5-20.5-5.5L20.1,184.8z"
    // Right Coff
    
    />
	</g>


	<path id="XMLID_3_" class="st2" d="M118.4,20c0,0.1,0,0.2,0,0.2l-0.2-0.7c-18.5-4.2-35.6-0.1-35.6-0.1l-1.3,2.6l0,0l-2.7,4.8
		c0,0,3.9,12.2,19.9,14.1c0,0,0.5-6.6-4.3-8.7c0,0-6.1-3.1-9.5-7c14.9-3.6,27.5-0.7,31.5,0.2c-3.4,4-9.7,6.8-9.7,6.8
		c-4.8,2.2-4.2,8.7-4.2,8.7c16.1-1.9,19.8-14,19.8-14L118.4,20z"
    fill="#A67E2D"
    stroke="#F7F7F7"
    stroke-width="0.1"
    stroke-miterlimit="10"

  // ban
    
    />
	<rect id="XMLID_1_" x="115.9" y="69.8" class="st5" width="20.1" height="23"
  //pocket
  />
</g>
</svg>











        
      </div>

   

    

    
      

      
      <Footer />
    </>
  );
};

export default Custom;
