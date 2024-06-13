import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
        }
        else {
            alert("Invalid credentials")
        }
        navigate("/");
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.email]: e.target.value })
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary mb-3" onSubmit={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
