import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import './UserProfile.css'
import { updateProfile } from '../../actions/users'

const EditProfileForm = ({currentUser, setSwitch}) => {

    const [name, setName] = useState(currentUser?.result?.name)
    const [about, setAbout] = useState(currentUser?.result?.about)
    const [tags, setTags] = useState(currentUser?.result?.tags)
    const dispatch = useDispatch()

    const handleCancel = () => {
        setSwitch(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(tags.length === 0){
            dispatch(updateProfile(currentUser?.result?._id, { name, about, tags: currentUser?.result?.tags }))
        } else {
            dispatch(updateProfile(currentUser?.result?._id, { name, about, tags}))
        }
        setSwitch(false)
    }
  return (
    <div>
        <h1 className='edit-profile-title'>Edit Your Profile</h1>
        <h2 className="edit-profile-title-2">Public Information</h2>
        <form className="edit-profile-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
                <h3>Display name</h3>
                <input type="text" value={name} id="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label htmlFor="about">
                <h3>About me</h3>
                <textarea value={about} id="about" cols="30" rows="10" onChange={(e) => setAbout(e.target.value)} ></textarea>
            </label>
            <label htmlFor="tags">
                <h3>Watched tags</h3>
                <p>Add tags seperated by 1 space</p>
                <input type="text" id="name" onChange={(e) => setTags(e.target.value.split(' '))}/>
            </label><br/>

            <input type="submit" value='Save profile' className='user-submit-btn'/>
            <button type='button' className='user-cancel-btn' onClick={handleCancel}>Cancel</button>
        </form>
    </div>
  )
}

export default EditProfileForm