import React, { Component } from 'react';
import firebase from '../../firebase';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const usersRef = firebase.database().ref('users');
        usersRef.on('value', (snapshot)=>{
            let users = snapshot.val();
            let newState = [];

            for (let user in users) {
                newState.push({
                    id: user,
                    name: users[user].name,
                    gender: users[user].gender

                });
            }

            this.setState({ users: newState });
        });
    }

    render() {
        return (
            <div class="pricePage">
                { this.state.users.map((user) => {
                    return(
                        <li key={user.id}>
                            <h3>{user.name}</h3>
                            <span>{user.gender} | {user.id}</span>
                        </li>
                    )
                }) }
            </div>
    )}
};

export default About;