import React, { useState } from "react";
import "./Button.css";

const Button = () => {
    const [open, setOpen] = useState(false);
    const onClick = () => {
        setOpen(true);
    };
    return (
        <div className="downloadbutton">
            <button className="learn-more" onClick={onClick}>
                <a href="downloadFile/portfolio.pdf" download>
                    Download PDF Portfolio
                </a>
            </button>
        </div>
    );
};

export default Button;
