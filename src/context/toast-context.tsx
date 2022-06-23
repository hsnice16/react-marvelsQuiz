import { v4 as uuid } from "uuid";
import { Toast } from "components";
import React, { createContext, useContext, useState } from "react";

type ToastType = { _id: string; msg: string };

type ToastContextType = {
  toasts: ToastType[];
  handleRemoveToast: (idToRemove: number) => void;
  handleAddMoreToasts: (newToast: { msg: string }) => void;
};

const ToastContext = createContext<ToastContextType>({
  toasts: [],
  handleRemoveToast: () => {},
  handleAddMoreToasts: () => {},
});

const ToastProvider = ({ children }: { children: JSX.Element }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const handleAddMoreToasts = (newToast) => {
    setToasts((prevToasts) => [...prevToasts, { _id: uuid(), ...newToast }]);
  };

  const handleRemoveToast = (idToRemove) => {
    setToasts((prevToasts) =>
      prevToasts.filter(({ _id: prevId }) => prevId !== idToRemove)
    );
  };

  const value = { toasts, handleAddMoreToasts, handleRemoveToast };
  return (
    <ToastContext.Provider value={value}>
      {children}

      <ul className={`toast-fixed ${toasts.length > 0 ? "" : "d-none"}`}>
        {toasts.map(({ _id, msg }) => (
          <li key={_id} className="mt-1">
            <Toast
              msg={msg}
              handleToastClose={() => {
                handleRemoveToast(_id);
              }}
            />
          </li>
        ))}
      </ul>
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
