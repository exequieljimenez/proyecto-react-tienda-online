import './CheckoutForm.css'
import { useState, useContext } from "react"
import Checkout from "../Checkout/Checkout"
import { NotificationContext } from "../../context/Notification/Notification"

const CheckoutForm = () => {
    const [userName, setUserName] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userEmail1, setUserEmail1] = useState("")
    const [userEmail2, setUserEmail2] = useState("")
    const [mailConfirmed, setMailConfirmed] = useState(false)

    const { setShortNotification } = useContext(NotificationContext)

    const checkEmail = () => {
        
        if (userEmail1 === userEmail2) {
            setMailConfirmed(true)
        } else {
            setShortNotification('Las direcciones de mail no coinciden')
        }
    }

   if (!mailConfirmed) {return (
        <div className="formStyle">
            <h1>Por favor Introduzca sus datos para continuar con la compra</h1>
            <div>
                <p>Nombre y Apellido</p>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div>
                <p>Número de Teléfono Celular</p>
                <input value={userPhone} onChange={(e) => setUserPhone(e.target.value)}/>
            </div>
            <div>
                <p>Dirección de e-mail</p>
                <input value={userEmail1} onChange={(e) => setUserEmail1(e.target.value)}/>
            </div>
            <div>
                <p>Confirme dirección de e-mail</p>
                <input value={userEmail2} onChange={(e) => setUserEmail2(e.target.value)}/>
            </div>
            <button onClick={checkEmail}>Terminar compra</button>
        </div>
    )}

    if (mailConfirmed) {
        return (
            <Checkout userName={userName} userEmail1={userEmail1} userPhone={userPhone}/>
        )
    }
}

export default CheckoutForm