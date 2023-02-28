import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faClose,
    faEnvelopeOpen,
    faFile,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contactmodal.css";

const modal = ({ onClose }) => {
    const handleClose = () => {
        onClose?.();
    };
    return (
        <div className="overlay">
            <div className="modalWrap">
                <div onClick={handleClose} className="closeButton">
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <div className="contents">
                    <h1>Contact</h1>
                    <div>
                        <div className="contents-list">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="iconmargin"
                            />
                            <div className="contactName">
                                이 승 희 (SeungHui Lee)
                            </div>
                        </div>
                        <div className="contents-list">
                            <FontAwesomeIcon
                                icon={faEnvelopeOpen}
                                className="iconmargin"
                            />
                            <div>gkfajsl1225 @ naver.com</div>
                        </div>
                        <div className="contents-list">
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="iconmargin"
                            />
                            <a
                                href="https://github.com/Judyy22"
                                target="_blank"
                            >
                                https://github.com/Judyy22
                            </a>
                        </div>
                        <div className="contents-list">
                            <FontAwesomeIcon
                                icon={faFile}
                                className="iconmargin"
                            />
                            <a href="downloadFile/resume.pdf" download>
                                Download Resume
                            </a>
                        </div>
                    </div>
                    <button onClick={handleClose} className="button">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default modal;
