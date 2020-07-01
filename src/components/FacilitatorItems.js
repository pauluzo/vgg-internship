import React from "react";
import PropTypes from "prop-types";

const FacilitatorItems = ({ facilitator }) => {
  const { tutorName, tutorTrack, twitterInfo, githubInfo, tutorImage} = facilitator;
  const twitterLink = `https://twitter.com/${twitterInfo}`
  const githubLink = `https://github.com/${githubInfo}`
    

  return (
    <div className="tutor-card">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px",marginBottom: "25px"}}>
        <div>
        <div className="img-div">
        <img
          src={tutorImage}
          height="130"
          width="150"
          className="card-img-top"
          alt={tutorName}
        />
      </div>
      <div className="facilitators-name p-2" style={{borderBottom: "1px solid #DAA520"}}>
        {tutorName}
      </div>
      <div className="facilitators-track p-2">
        {tutorTrack}
      </div>
      <div>
        <ul className="social-media-list list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <button type="button" className="btn btn-circle" style={{backgroundColor: "#DAA520"}}>
              <a href={githubLink} rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </button>
          </li>
          <li className="list-inline-item">
            <button type="button" className="btn btn-circle" style={{backgroundColor: "#DAA520"}}>
              <a href={twitterLink} rel="noopener noreferrer" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </button>
          </li>
        </ul>
      </div>
        </div>
      </div>
    </div>
  )
}


FacilitatorItems.propTypes = {
  facilitator: PropTypes.object,
};

export default FacilitatorItems;
