import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const LoginPage = () => {
    return (
            <Form className="container w-50">
                <Form.Group className="mx-auto my-3 w-50 text-center" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mx-auto my-3 text-center w-50" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="text-center">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </div>
            </Form>
    )
}

export default LoginPage