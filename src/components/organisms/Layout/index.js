import React from 'react';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
export default (props) => {
    const isFullScreen = props.full === true ? true : false;
    const fullScreenLayout = (
        <div className="hero is-fullheight">
            <Navbar full={isFullScreen}/>
            <div>
                {props.children}
            </div>
        </div>    
    );
    const notFullScreen = (
        <div className="container" id="outer-container">
            <Navbar/>
            <Body>
                {props.children}
            </Body>
        </div>
    )
    
    return isFullScreen ? fullScreenLayout : notFullScreen;
}