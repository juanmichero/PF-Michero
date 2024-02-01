import classes from './OrderForm.module.css'
import { useState } from 'react'

const OrderForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const handleConfirm = (form) => {
        form.preventDefault()

        const userData = {
            name, phone, email, address
        }

        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm}>
                <h3 className='m-5 fs-2'>Please fill the following form to complete your order.</h3>
                <label className={classes.label}>
                    Name
                    <input className={classes.input} type="text" placeholder='Name' value={name} onChange={({ target }) => setName(target.value)} required/>
                </label>
                <label className={classes.label}>
                    Phone number
                    <input className={classes.input} type="number" placeholder='Phone number' value={phone} onChange={({ target }) => setPhone(target.value)} minLength={8} required/>
                </label>
                <label className={classes.label}>
                    E-mail
                    <input className={classes.input} type="email" placeholder='E-mail' value={email} onChange={({ target }) => setEmail(target.value)} required/>
                </label>
                <label className={classes.label}>
                    Address
                    <input className={classes.input} type="text" placeholder='Address' value={address} onChange={({ target }) => setAddress(target.value)} required/>
                </label>
                <input type="submit" value='Place order' className={classes.button}/>
            </form>
        </div>
    )

}

export default OrderForm