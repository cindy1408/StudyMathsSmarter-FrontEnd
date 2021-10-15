import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import {useSelector} from 'react-redux';
import './Profile.css'

const Profile = (props) => {
    const user = useSelector(state => state.user);
    return (
        <>
        <div className="profile-container">
        <div className="profile-left-card">
        <div className="profile-pic"><a href="#"><i class="fa fa-child"></i></a></div>
        <h2>User ID: {user.id}</h2>
        <h3>First Name: {user.first_name}</h3>
        <h3>Last Name: {user.last_name}</h3>
        <h4>Email: {user.email}</h4>
        <h4>Score: {user.score}</h4>
        <p class="user-role">{user.role}</p>
        <div>
            <a href="#"><i class="fa fa-dribbble"></i></a> 
            <a href="#"><i class="fa fa-twitter"></i></a>  
            <a href="#"><i class="fa fa-linkedin"></i></a>  
            <a href="#"><i class="fa fa-facebook"></i></a> 
        </div>
        <p><button>Edit Details</button></p>
        </div>

        <div className="profile-right-card">
            <ul className="profile-list-container">
                <li className="profile-list"><a href="#">Tasks</a></li>
                <li className="profile-list"><a href="#">Calendar</a></li>
                <li className="profile-list"><a href="#">Files</a></li>
                <li className="profile-list"><a href="#">Messages</a></li>
            </ul>
        <p><button>Users</button></p>
        <p><button>Questions</button></p>
        <p><button>Quiz</button></p>
        </div>
        </div>
       
        </>
    )

}

export default Profile;