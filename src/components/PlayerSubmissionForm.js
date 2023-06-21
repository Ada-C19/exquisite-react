import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({ index, sendSubmission, fields }) => {
  const [ adj1, setAdj1 ] = useState('');

  const handleAdj1Change = (e) => {
    setAdj1(e.target.value);
  };

  const handleSubmit = (e) => {
    // prevent default
    e.preventDefault();

    // use function to send data to parent
    sendSubmission(adj1);
    
    // clear out fields
    setAdj1('');
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={handleSubmit} >

        <div className="PlayerSubmissionForm__poem-inputs">

          <input
            placeholder="adjective"
            type="text"
            name="adj1"
            className={adj1 ? '' : 'PlayerSubmissionFormat__input--invalid'}
            value={adj1}
            onChange={handleAdj1Change}
          />

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  // fields: PropTypes.arrayOf(PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.shape({
  //     key: PropTypes.string.isRequired,
  //     placeholder: PropTypes.string.isRequired,
  //   }),
  // ])).isRequired,
}

export default PlayerSubmissionForm;
