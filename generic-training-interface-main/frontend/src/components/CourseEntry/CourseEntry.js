import "./CourseEntry.css";

const CourseEntry = (props) => {
  return (
    <div>
      <div className="action">
        <button className="enroll">{props.action}</button>
      </div>
      <div className="course-entry">
        <h6 className="course-name">{props.name}</h6>
        <p className="last-updated">{props.update.toString().split(" ")[4]}</p>
        <h6 className="topic-name">{props.topic}</h6>
        <p className="topic-date">{props.update.toDateString()}</p>
        <h6 className="date-upload">{props.time.toDateString()}</h6>
        <p className="time-upload">{props.time.toString().split(" ")[4]}</p>
      </div>
    </div>
  );
}

export default CourseEntry;
