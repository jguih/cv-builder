import React from "react";

class CvPreviewWorkExp extends React.Component {
  render() {
    return(
      <div>
        <p>Experience {this.props.workExp['position']}</p>
      </div>
    );
  }
}

export default CvPreviewWorkExp;