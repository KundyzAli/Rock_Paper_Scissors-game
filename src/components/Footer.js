import React, { useState } from 'react';
import Modal from '../components/Modal';

const Footer = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
            <footer className="footer">
                <div class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                    Coded by <a href="#">Your Name Here</a>.
                </div>
                <button className="rules" onClick={toggle}>
                    Rules
                </button>
            </footer>
            {modal ?
                <Modal toggle={toggle} />
                : null
            }
        </>
    )
}

export default Footer