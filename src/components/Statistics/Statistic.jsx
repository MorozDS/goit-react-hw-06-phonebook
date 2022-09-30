import PropTypes from 'prop-types';
import s from './Statistic.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        Good: <span className={s.good}>{good}</span>
      </li>
      <li className={s.item}>
        Neutral: <span className={s.neutral}>{neutral}</span>
      </li>
      <li className={s.item}>
        Bad: <span className={s.bad}>{bad}</span>
      </li>
      <li className={s.item}>Total: {total}</li>
      <li className={s.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
