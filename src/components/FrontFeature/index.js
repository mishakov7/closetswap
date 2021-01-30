import React, { Component } from 'react';

// Other imports
import './style.css';
import ImgIcon1 from '../../assets/icons/front-logo.svg';
import ImgIcon2 from '../../assets/icons/paintball-icon1.svg';
import ImgIcon3 from '../../assets/icons/ribbon-icon.svg';
import ImgIcon4 from '../../assets/icons/paintball-icon2.svg';

// This is a simple component that allows you to pass props.
function FrontFeatureBase(props) {
    return(
        <div class={props.bgImageStyle} id="feature-container">
            <img class="feature-icon" src={props.iconSource}/>
            <hr></hr>
            <span class="white-verbage">{props.verbage}</span>
        </div>
    );
}

// This is a component that includes the page turning functionality.
function PageTurn(props) {
    return(
        <div class="pages-container">
            <div class={props.p1Page} id="p1" onClick={props.handlePages}></div>
            <div class={props.p2Page} id="p2" onClick={props.handlePages}></div>
            <div class={props.p3Page} id="p3" onClick={props.handlePages}></div>
            <div class={props.p4Page} id="p4" onClick={props.handlePages}></div>   
        </div>
    );
}

class FrontFeature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            p1: "current-page",
            p2: "",
            p3: "",
            p4: "",
            imageStyle: "feature1-bg",
            imageIcon: `${ImgIcon1}`,
            verbage: "paint your rage"
        }
        
    }

    changePage(event) {
        event.preventDefault();

        switch(event.target.id) {
            case "p1":
                this.setState({
                    p1: "current-page",
                    p2: "",
                    p3: "",
                    p4: "",
                    imageStyle: "feature1-bg",
                    imageIcon: `${ImgIcon1}`,
                    verbage: "paint your rage"
                });
                break;

            case "p2":
                this.setState({
                    p1: "",
                    p2: "current-page",
                    p3: "",
                    p4: "",
                    imageStyle: "feature2-bg",
                    imageIcon: `${ImgIcon2}`,
                    verbage: "unlimited use and play"
                });
                break;

            case "p3":
                this.setState({
                    p1: "",
                    p2: "",
                    p3: "current-page",
                    p4: "",
                    imageStyle: "feature3-bg",
                    imageIcon: `${ImgIcon3}`,
                    verbage: "#1 Paintball Park in the entire South Florida area."
                });
                break;
            
            case "p4":
                this.setState({
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: "current-page",
                    imageStyle: "feature4-bg",
                    imageIcon: `${ImgIcon4}`,
                    verbage: "experience the adrenaline rush of the fastest growing extreme sport"
                });
                break;
        }

    }

    render() {
        return(
            <div id="front-feature">
                <FrontFeatureBase 
                    bgImageStyle={this.state.imageStyle}
                    iconSource={this.state.imageIcon}
                    verbage={this.state.verbage}
                />

                <PageTurn
                    handlePages={(event) => this.changePage(event)}
                    p1Page={this.state.p1}
                    p2Page={this.state.p2}
                    p3Page={this.state.p3}
                    p4Page={this.state.p4}
                />
            </div>
        );
    }
}

export default FrontFeature;