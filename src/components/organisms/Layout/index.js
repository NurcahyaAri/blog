import React from 'react';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
export default (props) => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <Body>
                    {props.children}
                </Body>
            </div>
        </div>        
    );
}