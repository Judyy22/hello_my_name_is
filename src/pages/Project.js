import React, { useState } from "react";
import Carasoul from "../components/Projects/Carasoul";
import "./Project.css";

const Project = () => {
    return (
        <div className="allprojects">
            <>
                <div className="projecttitle">Project</div>
                <div>
                    <Carasoul />
                </div>
            </>
        </div>
    );
};

export default Project;
