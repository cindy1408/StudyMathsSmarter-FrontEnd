
const UserList = (props) => {
    let userComponents = []; 

    for(let i=0; i < props.users.length; i++){
        let eachUser = props.users[i]
        userComponents.push(eachUser);
    }
    return (
        <div>
            <h1>Here are the list of Users</h1>
            {userComponents}
        </div>
    )
}

export default UserList;