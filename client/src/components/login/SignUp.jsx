import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../context/authContext.js";

const SignUp = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signUp } = useAuth();
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setError("Passwords do not match");
            return;
        }

        try {
            setError("");
            setLoading(true);
            signUp(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError("Failed to create an account");
        }
        setLoading(false);
    } 

    return (
        <div>
            <div>
                <h2>Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <p>Email</p>
                    <input type="email" ref={emailRef} required />
                    <p>Password</p>
                    <input type="password" ref={passwordRef} required />
                    <p>Confirm Password</p>
                    <input type="password" ref={confirmPasswordRef}/>
                    <p></p>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                Already have an account? Log In
            </div>
        </div>
    )
}

export default SignUp;




{/* <Card>
    <Card.Body> */}
    // <h2>Sign Up</h2>
    // {error && <Alert variant="danger">{error}</Alert>}
    {/* <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required ></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required ></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" ref={confirmPasswordRef} required ></Form.Control>
        </Form.Group>
        <Button disabled={loading}>Submit</Button>
    </Form> */}
{/* </Card.Body>
</Card> */}