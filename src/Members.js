import { useState, useEffect } from 'react'
const Members = () => {
    let [username, setUsename] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    useEffect(() => {
        let userDetails = JSON.parse(localStorage.getItem("userDetails"))
        let loggeduser = localStorage.getItem("loggeduser")
        console.log(userDetails)
        for (let i in userDetails) {
            if (userDetails[i].username == loggeduser) {
                setUsename(userDetails[i].username)
                setEmail(userDetails[i].email)
                setPassword(userDetails[i].password)
            }
        }
    }, [])
    return (
        <div className="card-container">
            <h1>Login user Details</h1>
            <div className="card1">
                <div className="member-box">
                    <p>Username : {username}</p>
                    <p> Email: {email}</p>
                    <p>Password : {password}</p>

                </div>
            </div>

        </div>
    )
}
export default Members