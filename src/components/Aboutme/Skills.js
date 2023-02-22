import React from "react";
import SkillBox from "./SkillBox";
import "./Skills.css";

const Skills = () => {
    const frontpic = ["html", "css", "javascript", "bootstrap", "react"];
    const backpic = ["java", "jsp", "spring"];
    const dbpic = ["oracle", "mysql"];
    const workspace = ["vscode", "eclipse", "developer", "workbench"];
    const design = ["illustrator", "figma"];
    const fronttext = ["fronttext", "2번째줄"];
    const backtext = ["backtext"];
    const dbtext = ["dbtext"];
    const worktext = ["workspace text"];
    const designtext = ["design text"];
    return (
        <div className="allskills">
            <div className="skills">
                <SkillBox
                    name="Front-End"
                    picture={frontpic}
                    text={fronttext}
                />
                <SkillBox name="Back-End" picture={backpic} text={backtext} />
                <SkillBox name="DB" picture={dbpic} text={dbtext} />
                <SkillBox
                    name="WorkSpace"
                    picture={workspace}
                    text={worktext}
                />
                <SkillBox
                    name="Design Tool"
                    picture={design}
                    text={designtext}
                />
            </div>
        </div>
    );
};

export default Skills;
