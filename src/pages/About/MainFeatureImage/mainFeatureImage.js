import React from 'react';

const MainFeatureImage = props => {
    return (
        <div class={props.mainBgImage} id="feature-container">
            <span class="main-feature-verbage">{props.mainVerbage}</span>
            <div class="main-btn-container">
                <button id="main-button">Contact Us Today!</button>
            </div>
        </div>
    )
};

export default MainFeatureImage;