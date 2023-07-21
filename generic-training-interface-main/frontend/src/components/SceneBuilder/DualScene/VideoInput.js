import React, { useState } from "react";
import "./VideoInput.css";
import MainNavbarInstructor from "../../Navbars/MainNavbar/MainNavbarInstructor";
import { Form, Button, Spinner } from "react-bootstrap";
export default function VideoInput(props) {
  const [state, setState] = React.useState({title: '', url: ''});
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      const url = 'http://34.221.185.65:5000/admin/insertAsset'
      const data = {
        assetType: 1,
        assetUrl: state.url,
        assetTitle: state.title,
        assetText: null
      }
      const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }

      })
      await result.json()
    } catch (error) {
      setSaving(false)
    }
    setSaving(false)
  }

  return (
    <div>
      <MainNavbarInstructor />
     <div className="container" style={{backgroundColor:"white"}}>
       <h3>Add Video</h3>
       <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={state.title} name="title" onChange={handleChange} />
            <Form.Text className="text-muted">
              Title of asset
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>YouTube Url</Form.Label>
            <Form.Control type="text" name="url" value={state.url} onChange={handleChange} placeholder="Youtube url" />
          </Form.Group>
          {saving ? <Spinner animation="border" /> : 
          <Button variant="primary" type="submit"> 
            Add
          </Button> }
        </Form>
      </div>
    </div>
    
    
  );
}