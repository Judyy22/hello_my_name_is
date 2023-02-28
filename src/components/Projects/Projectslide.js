import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projectslide.css";
const Projectslide = () => {
    const [open, setOpen] = useState(false);
    const onClick = () => {
        setOpen(true);
    };
    return (
        <div className="cardbox">
            <Container>
                <Row>
                    <Col>
                        <a
                            href="https://github.com/Judyy22/yhtour"
                            target="_blank"
                        >
                            <div className="card card0">
                                <div className="border">
                                    <h2>HTML-CSS</h2>
                                    <div className="icons">
                                        <div className="fa">
                                            YH tour’는 여행을 좋아하는 사람이
                                            가고 싶은 여행지를 찾을 때 쓸 수
                                            있는 페이지로 만들었습니다. 반응형
                                            페이지로 모바일 버전으로도 사용
                                            가능합니다. 현재 다른 기능은 없이
                                            홈페이지만 구현 했습니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a
                            href="https://judymovieproject.netlify.app"
                            target="_blank"
                        >
                            <div className="card card1">
                                <div className="border">
                                    <h2>React</h2>
                                    <div className="icons">
                                        <div className="fa">
                                            현재 상영중인 영화정보와 가장
                                            인기있는 영화 곧 개봉될 영화의
                                            정보를 알 수 있는 사이트 입니다.
                                            보고싶은 영화를 검색 할 수 있으며
                                            영화의 자세한 정보와 리뷰,
                                            관련영상을 볼 수 있습니다. 반응형
                                            페이지로 모바일에서도 볼 수
                                            있습니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a
                            href="https://github.com/Judyy22/ccproject"
                            target="_blank"
                        >
                            <div className="card card2">
                                <div className="border">
                                    <h2>Spring</h2>
                                    <div className="icons">
                                        <div className="fa">
                                            교육기관등에서 사용할 수 있는 비대면
                                            출결관리 시스템 입니다. 수강신청 및
                                            취소가 가능하며 수업별로 출결을 관리
                                            할 수 있습니다. 각 수업마다 게시판을
                                            이용하여 공지사항 전달 및 강의노트
                                            작성이 가능합니다. 관리자가
                                            강의추가, 수강신청 관리, 게시판
                                            관리를 할 수 있습니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a
                            href="https://github.com/Judyy22/mycoffee"
                            target="_blank"
                        >
                            <div className="card card3">
                                <div className="border">
                                    <h2>JSP</h2>
                                    <div className="icons">
                                        <div className="fa">
                                            카페에 가서 주문을 한 후 음료를
                                            기다리는 시간을 아끼기 위해 개발하게
                                            되었습니다. 모바일 주문 가능한 곳이
                                            현재 있지만 웹으로 주문 할 수
                                            있는곳은 별로 없는것으로 파악하여
                                            프로젝트 주제로 선정하였습니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a>
                            <div className="card card4">
                                <div className="border">
                                    <h2>Figma</h2>
                                    <div className="icons">
                                        <div className="fa">
                                            우드어스 사회협동조합의
                                            홈페이지입니다. 주된 기능은 클래스
                                            신청과 주문제작 문의 입니다.
                                            (개발중)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projectslide;
