import React, { useState } from "react";
import Projectslide from "../components/Projects/Projectslide";
import "./Project.css";
import Button from "../components/Projects/Button";

const Project = () => {
    return (
        <div>
            <div className="PC">
                <Projectslide />
            </div>
            <div>
                <Button />
            </div>
        </div>
    );
};

export default Project;
