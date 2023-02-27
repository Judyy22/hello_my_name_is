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
    const fronttext = [
        "HTML 문서를 구성하는 태그와 요소에 대한 이해 및 레이아웃 구성",
        "반응형 구현 가능",
        "ES6 문법 사용 가능",
        "Jquary 사용 가능",
        "Bootstrap을 이용한 다양한 기능 구현 가능",
        "React lifecycle 이해",
        "Redux, middleware 사용 가능",
    ];
    const backtext = [
        "객체지향 프로그래밍의 특징 이해",
        "추상 클래스와 인터페이스 비교",
        "상속과 메소드의 사용 범위 이해",
        "JSP 기본 문법 활용",
        "JDBC를 이용하여 DB와 연동",
    ];
    const dbtext = [
        "DB설치 및 기본환경설정",
        "DDL, DCL, DML 구별과 각 언어의 사용",
        "INDEX의 생성 원리와 동장 원리 이해",
    ];
    const worktext = [
        "HTML, CSS, Javascript, react 사용시 vscode 사용",
        "Spring, Java 사용시 eclipse 사용",
        "Oracle DB사용시 SQL developer 사용",
        "MY SQL 사용시 MySQL Workbench 사용",
    ];
    const designtext = [
        "기본적인 illustrator 툴 사용",
        "피그마를 활용하여 UI/UX 디자인과 프로토타입 제작",
    ];
    return (
        <div>
            <div className="allskills">
                <div className="skills">
                    <SkillBox
                        name="Front-End"
                        picture={frontpic}
                        text={fronttext}
                    />
                    <SkillBox
                        name="Back-End"
                        picture={backpic}
                        text={backtext}
                    />
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
        </div>
    );
};

export default Skills;
