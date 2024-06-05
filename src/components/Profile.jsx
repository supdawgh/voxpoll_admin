import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../styles/profile.css'
import userImage from'../assets/image.png'
const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader/>
      <div className='user--detail'>
        <img src={userImage} alt=''></img>
        <h3 className='username'>Candace Doe</h3>
        <span className='description'>goodone</span>
      </div>

    </div>
  )
}

export default Profile
