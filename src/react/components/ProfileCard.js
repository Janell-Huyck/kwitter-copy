import React, { Component } from 'react'
import './ProfileCard.css'


const fakeUser = {
    pictureLocation: 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782',
    username: 'jordans-Test',
    displayName: 'Jordan\'s Test',
    about: '',
    googleId: null,
    createdAt: '2019-11-18T15:10:16.100Z',
    updatedAt: ''
};
const month = fakeUser.createdAt.split('-').splice(1, 1)
const year = fakeUser.createdAt.split('-').splice(0, 1)
const day = fakeUser.createdAt.slice(0, fakeUser.createdAt.indexOf('T')).split('-').reverse().shift()
const date = month + '-' + day + '-' + year

const date2 = fakeUser.createdAt.slice(0, fakeUser.createdAt.indexOf('T')).split('-').reverse()
console.log(date2)
class ProfileCard extends Component {
    render() {
        return (
            <>
                <div id='pfp-card'>
                    <div id='user-info'>
                        <img src={fakeUser.pictureLocation} alt='user profile' />
                        <div id='user-names'>
                            <div id='header2'>
                                <h2>{fakeUser.displayName}</h2>
                            </div>
                            <p>{fakeUser.username}</p>
                            <h4>joined: {date}</h4>
                        </div>
                    </div>
                    <div id='counters'>
                        <span>0 kweets</span>
                        <span>0 following</span>
                        <span>0 followers</span>
                        <span>0 likes</span>
                    </div>
                    <div id='bio'>{fakeUser.about ? 'Bio: ' + fakeUser.about : 'No bio provided by this user'} </div>
                </div>
            </>
        )
    }
}

export default ProfileCard