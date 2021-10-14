import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService'
import {useSelector} from 'react-redux'

class AuthenticatedRoute extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        if (true ){
            return <Route {...this.props} />;
        } else{
            return <Redirect to="/login" />
        }
    }
}

export default AuthenticatedRoute;