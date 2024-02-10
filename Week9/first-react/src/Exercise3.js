import React from 'react';
import './Exercise.css'; 

class Exercise3 extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>Styled Header</h1>
        <p className="para">Styled Paragraph</p>
      </div>
    );
  }
}

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

export default Exercise3;
