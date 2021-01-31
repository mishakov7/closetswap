import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Routes to other pages
import * as Routes from './constants/routes';
import Home from './pages/Home/index.js';
import About from './pages/About/index.js';
import Pricing from './pages/Pricing/index.js';
import Cart from './pages/Cart/index.js';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Styles
// import './App.css';

class App extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            formData: []
        }

        this.transferFormData = this.transferFormData.bind(this);
    }

    transferFormData = (newData) => {
        this.setState({
            formData: newData
        });
    }

    render() {

        console.log(this.state.formData);

        return (
            <div>
                <Router>
                    <Navigation/>

                    {/* All of the routes go here. */}
                    <main>
                    <Switch>
                        <Route exact path={Routes.HomePath} component={Home}/>

                        <Route path={Routes.AboutPath} component={About}/>

                        <Route path={Routes.PricingPath} 
                               component={() => <Pricing useFormInfo={this.state.formData}
                                                         changeFormInfo={this.transferFormData} />}/>

                        <Route path={Routes.CartPath} 
                               component={() => <Cart />}/>

                        {/* <Route path={Routes.CartPath} 
                               component={() => <Cart useFormInfo={this.state.formData} />}/> */}
                    </Switch>
                    </main>

                </Router>

                <Footer/>
            </div>
        )};
};

export default App;