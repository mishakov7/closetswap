import React from 'react';

const Rate = props => {
    return (
        <div class="rateBox">
            <span class="slime ratePrice">{props.price}</span>
            <span class="robot rateDescription">{props.description1}</span>
            <span class="robot rateDescription">{props.description2}</span>
        </div>
    )
};

export default Rate;