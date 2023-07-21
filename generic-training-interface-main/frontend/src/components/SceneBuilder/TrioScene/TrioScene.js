import MainNavbarInstructor from "../../Navbars/MainNavbar/MainNavbarInstructor";
import * as IoIcons from "react-icons/io";
import "../QuadScene/QuadScene.css";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Form, Button, Spinner } from "react-bootstrap";
// import parse from "html-react-parser";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const TrioScene = () => {
  const [text, setText] = useState("");
  const [textButton, setTextButton] = useState(false);
  const [quizButton, setquizButton] = useState(false);
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

  function uploadTextHandler() {
    setTextButton(true);
  }

  function uploadQuizHandler() {
    setquizButton(true);
  }


  const inputRef = React.useRef();
  const [source, setSource] = React.useState();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  function alertpop() {
    alert("Question Saved");
  }
  return (
    <section>
      <MainNavbarInstructor />
      <div id="div7" className="alignment">
      <div className="TextEditor" style={{backgroundColor:"white"}}>
              <Editor />
            </div>
            <div className="Buttons">
              <form className="form-horizontal" >
                <button type="cancel" value='Post' className="btn btn-default">Cancel</button>
                <button onClick={alertpop} type="submit" value='Post' className="btn btn-default1">Submit</button>
              </form>              
            </div>

            <br></br>
        {/* <button className="basicButton">Upload Video</button> */}
        <div className="VideoInput">
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


    <div id="div8" className="alignment">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="MultipleChoice" title="Multiple Choice">
            <div className="Intro">
              <div className="QuestionNum">
                <h1> Question 1 </h1>
              </div>
              <div className="Points">
                <input type="text" id="points" placeholder="#" />
                <button>Enter</button>
              </div>
            </div>
            <div className="container">
              <div className="marBot40">
                <h2 className="inline">Add a Question</h2>
              </div>
              <form className="form-horizontal" >
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="question">Question:</label>
                  <div className="col-sm-10">
                    <input className="form-control" type='text' placeholder='Question..' name="question" />
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Option 1:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder='Option 1..' name="Option 1" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Option 2:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder='Option 2..' name="Option 2" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Option 3:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder='Option 3..' name="Option 3" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Option 4:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder='Option 4..' name="Option 4" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Correct Answer:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder='Correct Answer Number (one of 1,2,3,4 from above)..' name="Key" />
                    </div>
                  </div>
                  <div className="Buttons">
              <form className="form-horizontal" >
                <button type="cancel" value='Post' className="btn btn-default">Cancel</button>
                <button onClick={alertpop} type="submit" value='Post' className="btn btn-default1">Submit</button>
              </form>
              <div className="Buttons1">
                <form className="form-horizontal" >
                  <button type="next" value='Post' className="btn btn-default">Next Question</button>
                  <button type="previous" value='Post' className="btn btn-default1">Previous Question</button>
                </form>
              </div>
            </div>
                </div>
              </form>
            </div>
          </Tab>
          <Tab eventKey="OpenEnded" title="Open Ended">
            <div className="Intro">
              <div className="QuestionNum">Question 1</div>
              <div className="Points">
                <input type="text" id="points" placeholder="#" />
                <button>Enter</button>
              </div>
            </div>
            <h2 className="inline">Add a Question</h2>
            <div className="title">Open Ended Question:</div>
            <div className="TextEditor">
              <Editor />
            </div>
            <div className="Buttons">
              <form className="form-horizontal" >
                <button type="cancel" value='Post' className="btn btn-default">Cancel</button>
                <button onClick={alertpop} type="submit" value='Post' className="btn btn-default1">Submit</button>
              </form>
              <div className="Buttons1">
                <form className="form-horizontal" >
                  <button type="next" value='Post' className="btn btn-default">Next Question</button>
                  <button type="previous" value='Post' className="btn btn-default1">Previous Question</button>
                </form>
              </div>
            </div>
          </Tab>
            <Tab eventKey="DragAndDrop" title="Drag and Drop" disabled>
          </Tab>
        </Tabs>

      </div>
    </section>
  );
};

export default TrioScene;