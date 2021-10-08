
const UserList = (props) => {
    let userComponents = []; 

    for(let i=0; i < props.users.length; i++){
        console.log(props.users[i])
        let eachUser = props.users[i]
        userComponents.push(eachUser);
    }
    return (
        <div>
            <h1>Here are the list of Users</h1>
            <div>
                {JSON.stringify(userComponents)}
            </div>
        </div>
    )
}

export default UserList;