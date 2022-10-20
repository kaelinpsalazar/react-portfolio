import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  // formId = 'YniAffcH'
  // const formUrl = `https://submit-form.com/YniAffcH/${formId}`
  return (
    <Form action="https://submit-form.com/YniAffcH">
      <h1>Contact Me</h1>
      <Form.Group className="mb-3" name="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Enter Name" />
        <Form.Text className="text-muted">
          Please Provide Your Name
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" name="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" name="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control name="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Contact