import "./toast.css";
import { useEffect } from "react";
import { useTheme } from "context";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Toast = ({ msg, handleToastClose }) => {
  const { theme } = useTheme();

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
    <div className={classNames("toast", theme === "dark" ? "dark-toast" : "")}>
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
