import React from "react";
import MainNavbar from "../../Navbars/MainNavbar/MainNavbar";
import { JigsawPuzzle } from "react-jigsaw-puzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import "./Puzzle.css"

// see: https://www.npmjs.com/package/react-jigsaw-puzzle
const Puzzle = (props) => {
  return (
      <div className="puzzle-wrapper">
        <MainNavbar />
        <h2>{props.title}</h2>
        <div className="puzzle">
          <JigsawPuzzle
            imageSrc={props.imageLink}
            rows={props.difficulty + 1}
            columns={props.difficulty + 1}
            onSolved={() => alert('Solved!')}
            />
        </div>
      </div>
  );
};

export default Puzzle;
