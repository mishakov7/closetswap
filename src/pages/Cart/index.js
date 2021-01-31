import React, { Component } from 'react';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: []
        }
    }

    retrieveData = () => {
        console.log(this.props.useFormInfo);
        this.props.useFormInfo.forEach(e => console.log(e));
    }

    render() {
        // this.retrieveData();
        
        return(
            <div id="cart-main">
                This is the <span class="current-page">cart</span> page.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                STUFF
                {/* <div>{this.props.useFormInfo.forEach(e => console.log(e))}</div> */}
            </div>
        );
    }
};

export default Cart;