import ReactDOM from "react-dom";
import "./Modal.scss";

const Overlay = ({ onHideCart }) => {
  return <div className="overlay" onClick={onHideCart}/>;
};

const ModalOverlay = ({ children }) => {
  return <div className="modal-overlay">{children}</div>;
};

const Modal = ({ children, onHideCart }) => {
  return (
    <>
      {ReactDOM.createPortal(<Overlay onHideCart={onHideCart}/>, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
