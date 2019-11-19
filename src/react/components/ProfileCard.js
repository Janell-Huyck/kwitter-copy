import React, { Component } from 'react'
import './ProfileCard.css'

const fakeUser = {
    pictureLocation: 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782',
    username: 'jordans-Test',
    displayName: 'Jordan\'s Test',
    about: 'testing bio',
    googleId: null,
    createdAt: '',
    updatedAt: ''
};
const bio = 'bio: '
class ProfileCard extends Component {
    render() {
        return (
            <>
                <div id='profile-card'>
                    <div id='pfp'>
                        <img src={fakeUser.pictureLocation} alt='profile' />
                    </div>
                    <h2>{fakeUser.displayName}</h2>
                    <p>{fakeUser.username}</p>
                    <p id='userBio'>{fakeUser.about && bio + fakeUser.about}</p>
                </div>
            </>
        )
    }
}

export default ProfileCard