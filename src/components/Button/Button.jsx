import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ text, handleClick }) {
  return (
    <button
      className={s.button}
      type="button"
      name={text}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
