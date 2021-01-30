import React from 'react';

const SmallFeatureImage = props => {
    return (
        <div class={props.bgImage} id="small-feature-container">
            <img class="small-feature-icon" src={props.iconSource}/>
            <div class="small-feature-verbage">{props.verbage}</div>
        </div>
    )
};

export default SmallFeatureImage;
