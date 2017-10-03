import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "../styles/dashboard.css";

export default class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state  = {
            loggedIn: false
        }
    }

    componentWillMount(){
        let loggedIn = this.props.checkLoginState();
        if (loggedIn){
            this.setState({
                loggedIn: true
            })
        }
        
    }
    

    render(){
        let redirect = this.state.loggedIn ? null : <Redirect to="/login" />
        return (
            <div className="main-dash-container">
                {redirect}
                <div className="left-action-nav-dash">

                </div>
                <div className="right-display-area">

                </div>
            </div>
        )
    }
}