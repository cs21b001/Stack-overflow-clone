import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import PostReview from './Pages/PostReview/PostReview'
import NotificationList from './Pages/Notification/NotificationList'


const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Auth' element={<Auth/>}/>
        <Route exact path= '/Questions' element={<Questions/>}/>
        <Route exact path= '/AskQuestion' element={<AskQuestion/>} />
        <Route exact path= '/Questions/:id' element={<DisplayQuestion/>} />
        <Route path='/Tags' element={<Tags/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Users/:id' element={<UserProfile/>}/>
        <Route path='/review/:id' element={<PostReview/>}/>
        <Route path ='/notification/:id' element={<NotificationList/>}/>


    </Routes>
  )
}

export default AllRoutes