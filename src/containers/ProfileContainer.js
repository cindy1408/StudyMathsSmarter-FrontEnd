import axios from 'axios';
import React from 'react';
import Profile from '../components/Profile'

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            user : []
        }
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData() {
     
    }

    render() {
        return (
            <>
           {/* { this.state.user.map((user)=><div>{user.email}</div>)} */}
           <Profile />
            </>
        )
    }
}

export default ProfileContainer;