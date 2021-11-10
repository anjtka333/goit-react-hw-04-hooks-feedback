import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonName = options.map((item, id) => (
    <button className={s.button} key={id} onClick={onLeaveFeedback} name={item}>
      {item}
    </button>
  ));
  return buttonName;
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
