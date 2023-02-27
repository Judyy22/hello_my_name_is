import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";

const Cards = (projects) => {
    const project = projects.projects;
    const name = project.name;
    const skills = project.skills;
    const summary = project.summary;
    const git = project.git;
    const link = project.Link;
    const skillarr = skills.split(",");
    return (
        <>
            <Card>
                <Card.Img variant="top" src={`card-pictures/${name}.jpg`} />
                <Card.Body>
                    <Card.Text style={{ color: "black" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <div className="projectname">{name}</div>
                            {link ? (
                                <div>
                                    <a href={link}>
                                        <FontAwesomeIcon
                                            icon={faLink}
                                            style={{ fontSize: "1.5em" }}
                                        />
                                    </a>
                                </div>
                            ) : (
                                ""
                            )}
                            {git ? (
                                <div>
                                    <a href={git}>
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            style={{ fontSize: "1.5em" }}
                                        />
                                    </a>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>

                        <div>
                            {skillarr.map((item) => {
                                return (
                                    <img
                                        src={`pictures/${item}.png`}
                                        className="cardskill"
                                    />
                                );
                            })}
                        </div>
                        <div className="ellipsis">{summary}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Cards;
