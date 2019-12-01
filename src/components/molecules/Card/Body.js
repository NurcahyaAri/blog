import React from 'react';

function Body(props){
    return (
        <div className="content">
            {props.children}
            <br/>
        </div>
    );
}

export default Body;