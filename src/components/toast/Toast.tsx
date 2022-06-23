import "./toast.css";
import { useTheme } from "context";
import classNames from "classnames";
import React, { useEffect } from "react";

type ToastPropTypes = {
  msg: string;
  handleToastClose: () => void;
};

export const Toast = ({ msg, handleToastClose }: ToastPropTypes) => {
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

Toast.defaultProps = {
  msg: "",
  handleToastClose: () => {},
};
