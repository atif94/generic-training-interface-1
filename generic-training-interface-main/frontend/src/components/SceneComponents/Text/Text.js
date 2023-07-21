import MainNavbarInstructor from "../../Navbars/MainNavbar/MainNavbarInstructor";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useModal } from "react-hooks-use-modal";
import "./Text.css"
import React, { useState } from "react";
import { EditorState } from "draft-js";

const Text = ({ user }) => {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  
  const [textQuestion, setTextQuestion] = useState('')
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://34.221.185.65:5000/admin/insertAsset'
    const data = {
      assetType: 2,
      assetUrl: null,
      assetTitle: "Sample Text",
      assetText: textQuestion
    }
    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }

    })
    await result.json()
    close();
  }

const onEditorStateChange = (editorState) => {
  setEditorState(editorState)
  setTextQuestion(editorState.getCurrentContent().getPlainText('\u0001'))
  };


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
  return (
    <section>

      <MainNavbarInstructor />

      <div  className="container" style={{backgroundColor:"white"}}>          
            
            <div className="TextEditor">
              <Editor
               editorState={editorState}
               toolbarClassName="toolbarClassName"
               wrapperClassName="wrapperClassName"
               editorClassName="editorClassName"
               onEditorStateChange={onEditorStateChange}
                />
                 
            </div>
            <div className="Buttons">
              <form className="form-horizontal" >
                <button type="cancel" value='Post' className="btn btn-default">Cancel</button>
                <button onClick={handleSubmit} type="submit" value='Post' className="btn btn-default1">Submit</button>
              </form>              
            </div>
      </div>
      
    </section>
  );
};

export default Text;
