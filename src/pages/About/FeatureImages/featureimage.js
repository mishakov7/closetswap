import React from 'react';

const FeatureImage = props => {
    return (
        <div class={props.bgImage} id="feature-container">
            <img class="feature-icon" src={props.iconSource}/>
            <hr></hr>
            <span class="feature-verbage">{props.verbage}</span>
        </div>
    )
};

export default FeatureImage;
