import React from 'react';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));
FeedbackOptions.propTypes = {
  // консоль ругалась на isRequired в option, я его убрал
  option: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
