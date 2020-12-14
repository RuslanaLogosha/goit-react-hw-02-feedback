import PropTypes from 'prop-types';
import s from './statistics.module.css';
import Notification from '../Notification/notification';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <>
    {total ? (
      <ul className={s.box}>
        <li className={s.options}> Good:{good} </li>
        <li className={s.options}> Neutral:{neutral} </li>
        <li className={s.options}> Bad:{bad} </li>
        <li className={s.options}> Total:{total} </li>
        <li className={s.options}>
          Positive feedback: {positiveFeedbackPercentage}%
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
