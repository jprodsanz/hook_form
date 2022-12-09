import React, { useState } from 'react'

const RegistrantForm = (props)=> {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createRegistrant = (e)=> {
        // this synthetic event prevents the page from refreshing on form submission
        e.preventDefault()

        const newRegistrant = { firstName, lastName, email, password, confirmPassword }
        console.log(`Welcome, ${newRegistrant}!`)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return(
        <form onSubmit={ createRegistrant }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e)=> setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e)=> setLastName(e.target.value)}></input>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e)=> setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e)=> setPassword(e.target.value)}></input>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={(e)=> setConfirmPassword(e.target.value)}></input>
            </div>
            <input type="submit" value="Create Registrant"></input>

            <div>
                <h3>First Name: { firstName }</h3>
                <h3>Last Name: { lastName }</h3>
                <h3>Email: { email }</h3>
                <h3>Password: { password }</h3>
                <h3>Confirm Password: { confirmPassword }</h3>
            </div>
        </form>
    )
}

export default RegistrantForm