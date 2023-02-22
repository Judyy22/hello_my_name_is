import React from "react";
import "./SkillBox.css";

const SkillBox = (props) => {
    const name = props.name;
    const image = props.picture;

    return (
        <div className="box">
            <div className="box-name">{name}</div>
            <div className="img-box">
                {image.map((item) => {
                    return <img src={`pictures/${item}.png`} width="60px" />;
                })}
            </div>
        </div>
    );
};

export default SkillBox;
