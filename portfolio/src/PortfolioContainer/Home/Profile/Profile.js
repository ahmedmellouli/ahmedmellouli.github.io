import React from "react";
import Typical from "react-typical";
import Typewriter from 'typewriter-effect';
import "./Profile.css";
import ScrollService from "../../../Utilities/ScrollService";


export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                        <a href="https://www.facebook.com/ahmed.mellouli.1675">
                            <i className="fa fa-facebook-square"></i>
                        </a> 
                        <a href="https://www.instagram.com/ahmed__mellouli/?hl=fr">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://github.com/MellouliiAhmed" >
                            <i className="fa fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ahmedmellouli/">
                        <i className="fa fa-linkedin"></i>
                        </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I am <span className="highlighted">Ahmed</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typewriter
                                    options={{
                                        strings: ['Java Development',
                                         'Full Stack Dev',
                                         'Cross Platform Dev',
                                         'React/React Native Dev'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                knack of building applications with front and back end
                                operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="AhmedMELLOULI__CV.pdf" download='AhmedMELLOULI__CV.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}