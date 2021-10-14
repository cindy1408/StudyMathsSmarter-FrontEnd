import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService'
import {useSelector} from 'react-redux'

function AuthenticatedRoute(props) {
    const userId = useSelector(state => state.user.id);
    return(
        (userId == 0) ? <Redirect to="/login" /> :<Route {...props} /> 
    )  
    }

export default AuthenticatedRoute;