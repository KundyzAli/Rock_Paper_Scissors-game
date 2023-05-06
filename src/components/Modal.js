import React from 'react';
import ReactDOM from 'react-dom';
import iconClose from '../images/icon-close.svg';
import imageRules from '../images/image-rules.svg';

const Modal = ({ toggle }) => {
    return ReactDOM.createPortal(

        <div className="modal-container">
            <div className="modal-box">
                <div className="modal__header">
                    <h1>Rules</h1>
                    <button onClick={toggle}>
                        <img src={iconClose} alt="Close" />
                    </button>
                </div>
                <img src={imageRules} alt="Rules" />
            </div>
        </div>
        ,

        document.getElementById("modal")

    )
}

export default Modal