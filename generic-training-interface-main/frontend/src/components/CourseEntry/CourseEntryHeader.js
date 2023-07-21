import "./CourseEntryHeader.css";

const CourseEntry = (props) => {
  return (
    <div>
      <div className="action">
        <button className="enroll">Status</button>
      </div>
      <div className="course-entry">
        <h6 className="course-name-head">Couresse Name</h6>
        <h6 className="topic-name-head">Current Topic</h6>
        <h6 className="date-upload-head">Start Date</h6>
      </div>
    </div>
  );
}

export default CourseEntry;