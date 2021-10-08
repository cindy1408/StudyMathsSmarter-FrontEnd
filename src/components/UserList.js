const UserList = (props) => {
    let userComponents = []; 

    for(let i=0; i < props.users.length; i++){
        let eachUser = JSON.stringify(props.users[i])
        userComponents.push(eachUser);
    }
    return (
        <div>
            <h1>Here are the list of Users</h1>
            <div>
                {userComponents}
            </div>
        </div>
    )
}

export default UserList;