import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

const SignUp = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2>Sign Up</h2>
                    <Form>
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
                        <Button>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div>
                Already have an account? Log In
            </div>
        </div>
    )
}

export default SignUp;