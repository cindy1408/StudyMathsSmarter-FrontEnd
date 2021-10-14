import axios from 'axios';
import React from 'react';


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
           { this.state.user.map((user)=><div>{user.email}</div>)}
            </>
        )
    }
}

export default ProfileContainer;