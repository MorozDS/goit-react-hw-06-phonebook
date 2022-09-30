import PropTypes from 'prop-types';
import Button from 'components/Button';
import s from './FeedBackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.group}>
      {options.map(option => (
        <Button key={option} text={option} handleClick={onLeaveFeedback} />
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
