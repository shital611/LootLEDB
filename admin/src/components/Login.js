import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const Login = () => {

    const [ user , setUser ] = useState({
        email: "",
        password: ""
    })

    const handleCharge = e => {
        const {name, value} = e.target
        console.log(name , value)
    }
    return (
        <>
        <div className="container">
        <div className='mt-5'>
            <h2 style={{textAlign:'center'}}>Admin Panel || Login</h2>
        </div>
        <div className='shadow-lg p-3 mb-5 bg-white rounded mx-auto mt-5'>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} onChange={handleCharge} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={handleCharge}/>
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
        </>
    )
}

export default Login




