import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "../components/Projects/Card";

const Project = () => {
    const projects = [
        {
            id: 1,
            name: "YHtour",
            skills: "html,css,bootstrap",
            summary:
                "‘YH tour’는 여행을 좋아하는 사람이 가고 싶은 여행지를 찾을 때 쓸 수 있는 페이지로 만들었습니다",
        },
        {
            id: 2,
            name: "Netflix",
            skills: "html,css,javascript, react, bootstrap",
            summary:
                "현재 상영중인 영화정보와 가장 인기있는 영화 곧 개봉될 영화의 정보를 알 수 있는 사이트 입니다. 보고싶은 영화를 검색 할 수 있으며 영화의 자세한 정보와 리뷰, 관련영상을 볼 수 있습니다. ",
        },
        {
            id: 3,
            name: "CCproject",
            skills: "html,css, javascript, java, spring, oracle",
            summary:
                "교육기관등에서 사용할 수 있는 비대면 출결관리 시스템 입니다.",
        },
        {
            id: 4,
            name: "MyCoffee",
            skills: "html,css,javascript,java, jsp, oracle",
            summary:
                "카페에 가서 주문을 한 후 음료를 기다리는 시간을 아끼기 위해 개발하게 되었습니다. 모바일 주문 가능한 곳이 현재 있지만 웹으로 주문 할 수 있는곳은 별로 없는것으로 파악하여 프로젝트 주제로 선정하였습니다.",
        },
        {
            id: 5,
            name: "Woodus",
            skills: "Figma",
            summary: "우드어스 사회협동조합의 홈페이지 구축예정",
        },
    ];
    return <Card project={projects} />;
};

export default Project;
