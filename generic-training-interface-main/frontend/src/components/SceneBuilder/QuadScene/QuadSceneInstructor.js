import MainNavbarInstructor from "../../Navbars/MainNavbar/MainNavbarInstructor";
import "./QuadScene.css";
import * as IoIcons from "react-icons/io";

const QuadScene = () => {
  return (
    <section>
      <MainNavbarInstructor />
      <div id="div1" className="alignment">
        <button className="basicButton">Upload Video</button>
      </div>
      <div id="div2" className="alignment">
        <div className="textPart">
          <textarea className="textArea" rows={5} cols={50}></textarea>
          <button className="postButton">Post</button>
          <button className="cancelButton">Cancel</button>
        </div>
      </div>
      <div id="div3" className="alignment">
        <div className="quiz">
          <h2 className="titleQuiz">Build a Quiz</h2>
          <button className="titleButton">
            Click to Insert Title of the Title
          </button>
          <button className="insButton">
            Click to add instructions for the quiz
          </button>
          <span className="icon">
            <IoIcons.IoIosAddCircleOutline />
          </span>
        </div>
      </div>
      <div id="div4" className="alignment">
        <button className="basicButton">Upload Puzzle</button>
        <div className="quizIcons">
          <IoIcons.IoIosRewind />
          &nbsp;&nbsp;
          <IoIcons.IoIosFastforward />
          &nbsp;&nbsp;
          <IoIcons.IoIosArrowRoundBack />
        </div>
      </div>
    </section>
  );
};

export default QuadScene;
