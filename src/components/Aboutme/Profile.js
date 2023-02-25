import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Profile.css";

const Profile = () => {
    return (
        <div className="pictures">
            <img src="pictures/none_image.png" className="myimage" />
            <div className="information">
                <div className="info myname">
                    <div>이승희</div>
                    <div>Seung Hui Lee</div>
                </div>
                <div className="info">
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div>1998.12.25</div>
                </div>
                <div className="info">
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>gkfajsl1225@naver.com</div>
                </div>
                <div className="info">
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div>https://github.com/judyy22</div>
                </div>
            </div>
            <img src="pictures/profile.png" className="picture" />
        </div>
    );
};

export default Profile;
