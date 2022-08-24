import React, {useEffect, useState} from 'react'
import { Dropdown } from '../assets';
import { NotificationData } from './NotificationData';
import "./Notification.css"

function Notification(){
    return (
        <>
        <div className="notificationContainer">
            {NotificationData.map((data, index) => {
                return (
                    <div key={index} className="notification">
                        <div className="notificationText">
                        <p>{data.text}</p>
                        </div>
                        <div className="notificationDropdownIcon">
                            <Dropdown/>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default Notification;