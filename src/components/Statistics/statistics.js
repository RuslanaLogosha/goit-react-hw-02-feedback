import PropTypes from 'prop-types';
import s from './statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <div className={s.box}>
    <span className={s.options}> Good:{good} </span>
    <span className={s.options}> Neutral:{neutral} </span>
    <span className={s.options}> Bad:{bad} </span>
    <span className={s.options}> Total:{total} </span>
    <span className={s.options}>
      {' '}
      Positive feedback: {positiveFeedbackPercentage}%{' '}
    </span>
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
