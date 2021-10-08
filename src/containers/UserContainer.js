import React from 'react';
import UserList from '../components/UserList';

class UserContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false, 
            users: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:8080/study_maths_smarter/user")
        .then((response) => response.json())
        .then(data => this.setState({users: data, loaded: true}))
        .catch(error => console.log(error))
    }
    render(){
        return(
            <div>
                <UserList users={this.state.users}/>
            </div>
        )
    }
}
export default UserContainer;