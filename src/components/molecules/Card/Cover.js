import React from 'react';
import { baseUrl } from '../../../config/environment';

function Cover(props){
    const coverUrl = props.cover != undefined ? `${baseUrl}${props.cover.url}` : "https://bulma.io/images/placeholders/1280x960.png";
    return (
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={coverUrl} alt={"Cover"}/>
            </figure>
        </div>
    )
}

export default Cover;