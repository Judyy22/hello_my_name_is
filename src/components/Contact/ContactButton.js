import React, { useState } from "react";
import "./ContactButton.css";
import Contactmodal from "./Contactmodal";

const ContactButton = () => {
    const [open, setOpen] = useState(false);
    const onClick = () => {
        setOpen(true);
    };
    return (
        <div className="contactbutton">
            <button className="learn-more" onClick={onClick}>
                Contact me
            </button>
            {open && (
                <Contactmodal
                    open={open}
                    onClose={() => {
                        setOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default ContactButton;
