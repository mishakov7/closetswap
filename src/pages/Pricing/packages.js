import React from 'react';

// Notes on function vs class and arrow function vs regular function
// https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable
// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
// https://dev.to/danielleye/react-class-component-vs-function-component-with-hooks-13dg

function peopleFactory(persons) {
    let crowd = [];
    for (let i=0; i < persons; i++) {
        crowd.push(<svg class="productPerson" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.44 371.62"><defs></defs><title>products-person</title><path id="Path_329" data-name="Path 329" class="cls-1" d="M117.12,26.05a30.41,30.41,0,1,0,30.4,30.44,30.4,30.4,0,0,0-30.4-30.44h0ZM83.53,94.67a39.11,39.11,0,0,0-39.14,39v94.28a13.17,13.17,0,0,0,13,13.28h.1A13.29,13.29,0,0,0,70.85,228V142.89h6.78s.15,222,.15,236.6a17.84,17.84,0,1,0,35.67.67c0-.22,0-.45,0-.67V242.1h7.32V379.49a17.88,17.88,0,0,0,35.75,0V142.89h6.86v85A13.33,13.33,0,0,0,176.7,241.2,13.16,13.16,0,0,0,189.84,228V133.64A39.12,39.12,0,0,0,150.71,94.7Z" transform="translate(-44.39 -26.05)"/></svg>);
    }
    return (crowd)
}

const Package = props => {
    return (
        <div>
            <div class="packagePriceBoxText">
                <span class="slime packageTitle">{props.title}</span>
                <br/>
                <span class="robot packagePlayers">{props.players} PLAYERS</span>
            </div>
            <div class="packagePriceBox">
                <div>
                    <div style={{display: 'inline-block'}}>
                        <span class="slime packagePrice">{props.price}</span>
                    </div>
                    <div class="perPlayer">
                        <span>per</span>
                        <span>player</span>
                    </div>
                </div>
                <div>
                    <span class="robot paintballs">{props.paintballs} paintballs/player</span>
                </div>
                <div class="people">
                    <div>
                        {peopleFactory(props.persons1)}
                    </div>
                    <div>
                        {peopleFactory(props.persons2)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Package;