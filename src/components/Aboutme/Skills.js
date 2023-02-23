import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
        <Container>
            {/* < className="allskills">
                < className="skills"> */}
            <Row md={3}>
                <Col>
                    <SkillBox
                        name="Front-End"
                        picture={frontpic}
                        text={fronttext}
                    />
                </Col>
                <Col>
                    <SkillBox
                        name="Back-End"
                        picture={backpic}
                        text={backtext}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <SkillBox name="DB" picture={dbpic} text={dbtext} />
                </Col>
                <Col>
                    <SkillBox
                        name="WorkSpace"
                        picture={workspace}
                        text={worktext}
                    />
                </Col>
            </Row>
            <Row>
                <SkillBox
                    name="Design Tool"
                    picture={design}
                    text={designtext}
                />
            </Row>
            {/* </>
            </div> */}
        </Container>
    );
};

export default Skills;
