import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactPortal from "../ReactPortal";
import "./modalStyles.css";

type Listener = (this: HTMLElement, ev: KeyboardEvent) => any;

const useOnEscapeClick = (callback: () => void) => {
  useEffect(() => {
    const closeOnEscapeKey: Listener = (e) =>
      e.key === "Escape" ? callback() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [callback]);
};

function Modal({
  children,
  isOpen,
  handleClose
}: {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}) {
  useOnEscapeClick(handleClose);
  const nodeRef = useRef(null);
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <div className="modal-content">{children}
          </div>
          <button onClick={handleClose} className="close-btn">
            done
          </button>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}
export default Modal;
