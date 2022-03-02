import { useFormik } from "formik";
import { useState } from 'react'
const Login = () => {
    let [message, setMessage] = useState("")
    let [success, setSucess] = useState("")
    let [border, setBorder] = useState("todo-user-input")
    let formik = useFormik({
        initialValues: {
            password: "",
            username: "",
        },
        onSubmit(values) {
            let userObject = JSON.parse(localStorage.getItem("userDetails"));
            localStorage.setItem("loggedIn", 0)
            for (let i in userObject) {
                if (values.username === userObject[i].username && values.password === userObject[i].password) {
                    localStorage.setItem("loggeduser", values.username)
                    localStorage.setItem("loggedIn", 1)
                }
            }

            if (parseInt(localStorage.getItem("loggedIn"))) {
                setMessage("You are logged in")
                setSucess("success")
                setBorder("todo-user-input")

            }
            else {
                setMessage("You are not logged in ")
                setSucess("failed")
                setBorder("error")
            }


        },
        validate() {
            const errors = {}
            if ((formik.values.password.length <= 4) || (formik.values.password.length >= 20)) {

                errors.password = "* min 4 characters and max 20 characters"

            }
            if ((formik.values.username.length < 5) || (formik.values.username.length > 20)) {
                errors.username = "* min 5 characters and max 20 characters"
            }
            return errors

        }
    });

    return (
        <div class="card-container">
            <h1>Login page</h1>
            <div class="box">
                <form onSubmit={formik.handleSubmit} noValidate className="Border">
                    <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} className={border} placeholder="Enter Username" />
                    <div className="text-danger">{formik.errors.username ? formik.errors.username : null}</div>
                    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className={border} placeholder="Enter Password" />
                    <div className="text-danger">{formik.errors.password ? formik.errors.password : null}</div>
                    <div className="text">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
            <p className={success}>{message}</p>
        </div>
    )
}
export default Login;