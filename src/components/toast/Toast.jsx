import { useEffect } from "react";
import PropTypes from "prop-types";

export const Toast = ({ msg, handleToastClose }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      handleToastClose();
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="toast">
      <div className="toast-head">
        Message from marvelsQuiz
        <button className="toast-cross" onClick={handleToastClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <p className="toast-msg">{msg}</p>
    </div>
  );
};

Toast.propTypes = {
  msg: PropTypes.string,
  handleToastClose: PropTypes.func,
};

Toast.defaultProps = {
  msg: "",
  handleToastClose: () => {},
};
