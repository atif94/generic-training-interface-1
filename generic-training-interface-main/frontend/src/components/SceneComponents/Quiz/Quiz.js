import MainNavbarInstructor from "../../Navbars/MainNavbar/MainNavbarInstructor";
import "./Quiz.css"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useModal } from "react-hooks-use-modal";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Quiz = ({ user }) => {
  const [questionData,setQuestionData] = React.useState({
    points: "",
    question: "",
    option1: "",
    option2: "",
    option3: "", 
    option4: "", 
    correctAnswer: "",
  });
  const [saving, setSaving] = React.useState(false)
  const [points,setPoints] = React.useState(null)
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  function alertpop() {
    alert("Question Saved");
    close();
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

  const handleChange = (field,value) => {
    setQuestionData({
      ...questionData,
      [field]: value,
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const url = ''//'http://34.221.185.65:5000/admin/insertAsset'
      const data = questionData
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
      setQuestionData({
        points: "",
        question: "",
        option1: "",
        option2: "",
        option3: "", 
        option4: "", 
        correctAnswer: "",
      })
      setPoints("")
    }
    setSaving(false)
  }
  return (
    <section>

      <MainNavbarInstructor />

      <div  className="container" style={{backgroundColor:"white"}}>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="MultipleChoice" title="Multiple Choice">
            <div className="Intro">
              <div className="QuestionNum">
                <h1> Question 1 </h1>
              </div>
              <div className="Points">
                <input value={points} type="text" id="points" placeholder="#" onChange={(event)=>setPoints(event.target.value)} />
                <button onClick={()=>{handleChange("points",points)}}>Enter</button>
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
                    <input value={questionData.question} className="form-control" type='text' placeholder='Question..' name="question" onChange={(event)=>handleChange("question",event.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Option 1:</label>
                    <div className="col-sm-10">
                      <input value={questionData.option1} onChange={(event)=>handleChange("option1",event.target.value)} type="text" className="form-control" placeholder='Option 1..' name="Option 1" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Option 2:</label>
                    <div className="col-sm-10">
                      <input value={questionData.option2} onChange={(event)=>handleChange("option2",event.target.value)} type="text" className="form-control" placeholder='Option 2..' name="Option 2" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Option 3:</label>
                    <div className="col-sm-10">
                      <input value={questionData.option3} onChange={(event)=>handleChange("option3",event.target.value)} type="text" className="form-control" placeholder='Option 3..' name="Option 3" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Option 4:</label>
                    <div className="col-sm-10">
                      <input value={questionData.option4} onChange={(event)=>handleChange("option4",event.target.value)} type="text" className="form-control" placeholder='Option 4..' name="Option 4" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Correct Answer:</label>
                    <div className="col-sm-10">
                      <input value={questionData.correctAnswer} onChange={(event)=>handleChange("correctAnswer",event.target.value)} type="text" className="form-control" placeholder='Correct Answer Number (one of 1,2,3,4 from above)..' name="Key" />
                    </div>
                  </div>
                  <div className="Buttons">
              <form className="form-horizontal" >
                <button type="cancel" value='Post' className="btn btn-default">Cancel</button>
                <button onClick={handleSubmit} className="btn btn-default1">{saving ? <Spinner animation="border" />:"Submit"}</button>
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

export default Quiz;