import React from 'react'
import LeftSiderbar from '../../components/LeftSidebar/LeftSidebar'
import Notification from './Notification.jsx'

const NotificationList = () => {
  return (
    <div>
    <div className='home-container-1'>
    <LeftSiderbar />
    <div className="home-container-2">
        <Notification/>
    </div>
  </div>
      
  </div>
  )
}

export default NotificationList