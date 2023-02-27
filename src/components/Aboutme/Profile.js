import React from "react";
import "./Profile.css";

const Profile = () => {
    return (
        <div className="historybox">
            <div className="history">About ME</div>
            <div className="history-info">
                <div className="history-line">
                    <div className="education-box">
                        <div className="title">학력</div>
                        <div className="first-info">
                            <div>2019.02</div>
                            <div>부산과학기술대학교 졸업</div>
                        </div>
                        <div className="second-info">항공전자통신과</div>
                        <div className="first-info">
                            <div>2021.02</div>
                            <div>동아대학교 졸업</div>
                        </div>
                        <div className="second-info">전자공학과</div>
                    </div>
                    <div className="academy-box">
                        <div className="title">교육</div>
                        <div className="first-info">
                            <div>2022.06 ~ 2022.12</div>
                            <div>부산IT 교육센터</div>
                        </div>
                        <div className="second-info">
                            블록체인 기반 핀테크 및 보안 플랫폼 개발
                            (자바/리액트)
                        </div>
                    </div>
                </div>
                <div className="history-line rightbox">
                    <div className="title">사회생활</div>
                    <div className="first-info">
                        <div>2021.06 ~ 2022.06</div>
                        <div>한국미래에너지</div>
                    </div>
                    <div className="second-info">H/W 개발부</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
