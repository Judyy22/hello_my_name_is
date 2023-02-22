import React from "react";
import SkillBox from "./SkillBox";
import "./Skills.css";

const Skills = () => {
    const frontpic = ["html", "css", "javascript", "bootstrap", "react"];
    const backpic = ["java", "jsp", "spring"];
    const dbpic = ["oracle", "mysql"];
    const workspace = ["vscode", "eclipse", "developer", "workbench"];
    const design = ["illustrator", "figma"];
    return (
        <div className="allskills">
            <div className="skills">
                <SkillBox name="Front-End" picture={frontpic} />
                <SkillBox name="Back-End" picture={backpic} />
                <SkillBox name="DB" picture={dbpic} />
                <SkillBox name="WorkSpace" picture={workspace} />
                <SkillBox name="Design Tool" picture={design} />
            </div>
        </div>
    );
};

export default Skills;
