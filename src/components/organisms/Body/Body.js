import React from 'react';
export default function Body(props){
    return (
        <body>
            <section className="section">
                {props.children}
            </section>
        </body>
    );
}