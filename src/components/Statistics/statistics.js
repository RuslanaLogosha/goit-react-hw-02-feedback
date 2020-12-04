import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <div>
    <span> Good:{good} </span>
    <span> Neutral:{neutral} </span>
    <span> Bad:{bad} </span>
    <span> Total:{total} </span>
    <span> Positive feedback: {positiveFeedbackPercentage}% </span>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
