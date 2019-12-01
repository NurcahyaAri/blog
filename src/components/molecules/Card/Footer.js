import React from 'react';

function Footer(props){
    return (
        <div className="media">
            <small>
                <div datetime="2016-1-1">{props.children}</div>
            </small>
        </div>
    );
}

export default Footer;