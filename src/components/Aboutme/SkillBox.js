import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./SkillBox.css";

const SkillBox = (props) => {
    const name = props.name;
    const image = props.picture;
    const [menuActive, setMenuActive] = useState(false);

    console.log("menuactive", menuActive);

    return (
        <div className="box container">
            <div className="item front">
                <div className="mobilename">
                    <div className="box-name">{name}</div>
                    <div
                        onClick={() => setMenuActive(!menuActive)}
                        className="bars"
                    >
                        {menuActive ? (
                            <FontAwesomeIcon icon={faXmark} className="xmark" />
                        ) : (
                            <FontAwesomeIcon icon={faBars} />
                        )}
                    </div>
                </div>
                <div className="img-box">
                    {image.map((item) => {
                        return (
                            <img src={`pictures/${item}.png`} width="60vw" />
                        );
                    })}
                </div>
                <div className={menuActive ? "img-box-mobile" : "img-box-none"}>
                    {image.map((item) => {
                        return (
                            <img src={`pictures/${item}.png`} width="60vw" />
                        );
                    })}
                </div>
            </div>
            <div className="item back">뒷면</div>
        </div>
    );
};

export default SkillBox;
