import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return ( 
        <>
        <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        
        

        <div style={{marginTop:"20px"}}>
              <select
                  className="selection"
                  value={room}
                  onChange={(e) => {
                   setRoom(e.target.value);
                  }} className="joinInput"
                 >
                  <option value="">Select Tailor</option>
                  <option value="Male">Male</option>
                  <option value="Female">FeMale</option>
                </select>
        </div>

        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>

      </div>
    </div>
        </>
     );
}
 
export default Join;
