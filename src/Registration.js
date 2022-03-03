import { useState } from 'react'
import { useFormik } from "formik";
const Registration = () => {
    let [success, setSucess] = useState("")
    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            username: "",
        },

        onSubmit(values) {
            setSucess("you have succesfully registered")
            if (localStorage.getItem("userDetails")) {
                let userObject = JSON.parse(localStorage.getItem("userDetails"));
                userObject.push(values);
                userObject = JSON.stringify(userObject);
                localStorage.setItem("userDetails", userObject);
            }
            else {
                let userObject = [];
                userObject.push(values);
                userObject = JSON.stringify(userObject);
                localStorage.setItem("userDetails", userObject);
            }

        },
        validate() {
            let userObject = JSON.parse(localStorage.getItem("userDetails"));
            const errors = {}
            if ((formik.values.password.length <= 4) || (formik.values.password.length >= 20)) {

                errors.password = "* min 4 characters and max 20 characters"

            }
            if ((formik.values.email.length <= 5) || (formik.values.email.length >= 30)) {
                errors.email = "* should be more than 5 characters and less than 30 characters"
            }
            for (let i in userObject) {
                if (userObject[i].username == formik.values.username) {
                    errors.username = "*username already exists"
                }
            }
            return errors

        }
    });
    return (
        <div class="card-container">
            <h1>Registration page</h1>
            <div class="box">
                <form onSubmit={formik.handleSubmit} noValidate className="Border">
                    <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className="todo-user-input" placeholder="Enter Email" /><br />
                    <div className="text-danger">{formik.errors.email ? formik.errors.email : null}</div>
                    <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} className="todo-user-input" placeholder="Enter Username" />
                    <div className="text-danger">{formik.errors.username ? formik.errors.username : null}</div>
                    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="todo-user-input" placeholder="Enter Password" />
                    <div className="text-danger">{formik.errors.password ? formik.errors.password : null}</div>
                    <div className="text">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="success">{success}</div>
        </div>
    )
}
export default Registration;