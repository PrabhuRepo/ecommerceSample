import React, { useState, useEffect } from "react";
import './css/login.scss'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()

    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)

    const handleLoginClick = () => {
        if (userName && password) {
            navigate('/search')
        }
    }

    return (
        <div className="body">
            <div className="form">
                <Paper elevation={3}>
                    <TextField id="outlined-basic" placeholder={userName} onChange={(e) => { setUserName(e.target.value) }} label="Outlined23232" variant="outlined" />
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <Button variant="contained" onClick={() => { handleLoginClick() }}>Login</Button>
                </Paper>
            </div>

        </div>

    )
}

export default Login