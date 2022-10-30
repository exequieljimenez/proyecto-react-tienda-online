import './Notification.css'
import { createContext, useState } from "react"

const Notification = ({msg}) => {
    
    if(msg === '') return
    
    return (
        <div className="notification">
            {msg}
        </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState("")

    const setShortNotification = (msg) => {
        setMessage(msg)

        setTimeout(() => {
            setMessage("")
        }, 2000)
    }

    const setLongNotification = (msg) => {
        setMessage(msg)

        setTimeout(() => {
            setMessage("")
        }, 10000)
    }

    return (
        <NotificationContext.Provider value={{setShortNotification, setLongNotification}}>
            <Notification msg={message}/>
            {children}
        </NotificationContext.Provider>
    )
}