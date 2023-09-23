import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from '../../Utilities/ScrollService'
import Animations from "../../Utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id)
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 60 },
        { skill: "React JS", ratingPercentage: 60 },
        { skill: "React Native", ratingPercentage: 50 },
        { skill: "Express JS", ratingPercentage: 60 },
        { skill: "Node JS", ratingPercentage: 60 },
        { skill: "Mongo Db", ratingPercentage: 70 },
        { skill: "Core Java", ratingPercentage: 80 },
        { skill: "HTML", ratingPercentage: 85 },
        { skill: "CSS", ratingPercentage: 85 },
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2022", toDate: "2023" },
            description: "A Personal Portfolio website to showcase all my details and projects at one place",
            subHeading: "Technologies Used: React JS, Bootsrap",
        },
        {
            title: "Desktop application and website for a company",
            duration: { fromDate: "2022", toDate: "2023" },
            description: "Development of a website and a desktop software that share the same database",
            subHeading: "Technologies Used: java EE, Symfony, Phpmyadmin",
        },
        {
            title: "Desktop application for restaurant ",
            duration: { fromDate: "2021", toDate: "2022" },
            description: "Development of a desktop software for the management of stock in a restaurant",
            subHeading: "Technologies Used: Programmation C, Glade, Linux/Ubuntu",
        },

    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
          <ResumeHeading
            heading={"ESPRIT (Ecole Sup Privée d'Ingénierie et de Technologies)"}
            subHeading={"On Going"}
            fromDate={"2021"}
            toDate={"2024"}
          />
    
          <ResumeHeading
            heading={"faculty of sciences of sfax"}
            subHeading={"Preparatory degree"}
            fromDate={"2018"}
            toDate={"2021"}
          />
          <ResumeHeading
            heading={"High School "}
            subHeading={"Hbib Thamer Secondary School "}
            fromDate={"2015"}
            toDate={"2018"}
          />
        </div>,
    
        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
          <div className="experience-container">
            <ResumeHeading
              heading={"EEEEEEE Technoloy"}
              subHeading={"FULL STACK DEVELOPER INTERN"}
              fromDate={"2021"}
              toDate={"Present"}
            />
            <div className="experience-description">
              <span className="resume-description-text">
                Currently working as MERN stack web and mobile developer and also an
                online instructor on udemy.
              </span>
            </div>
            <div className="experience-description">
              <span className="resume-description-text">
                - Developed an ecommerce website for client with the dashboard for
                managing the products, managing reviews, users, payment etc. .
              </span>
              <br />
              <span className="resume-description-text">
                - Integrated the web app with backend services to create new user
                onboarding application with dynamic form content.{" "}
              </span>
              <br />
              <span className="resume-description-text">
                - I stretch my mental capacity to develope UI as per the given
                designs.
              </span>
              <br />
            </div>
          </div>
        </div>,
    
        /* PROGRAMMING SKILLS */
        <div
          className="resume-screen-container programming-skills-container"
          key="programming-skills"
        >
          {programmingSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage-bar"
                ></div>
              </div>
            </div>
          ))}
        </div>,
    
        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
          {projectDetails.map((projectsDetails, index) => (
            <ResumeHeading
              key={index}
              heading={projectsDetails.title}
              subHeading={projectsDetails.subHeading}
              description={projectsDetails.description}
              fromDate={projectsDetails.duration.fromDate}
              toDate={projectsDetails.duration.toDate}
            />
          ))}
        </div>,
    
        /* Interests */
        <div className="resume-screen-container" key="interests">
          <ResumeHeading
            heading="Teaching"
            description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
          />
          <ResumeHeading
            heading="Music"
            description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
          />
          <ResumeHeading
            heading="Competitive Gaming"
            description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
          />
        </div>,
      ];








    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <img className="bullet-logo"
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt="oops,,, no internet connection"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    };

    const getResumeScreen = () => {
        return (
            <div
                style={carousalOffSetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }

    useEffect(() => {
      return () => {
        /* UNSUBSCRIBE THE SUBSCRIPTIONS */
        fadeInSubscription.unsubscribe();
      };
    }, [fadeInSubscription]);

    return (
        <div className="resume-container screen-container " id={props.id || ''}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>

        </div>
    )
}