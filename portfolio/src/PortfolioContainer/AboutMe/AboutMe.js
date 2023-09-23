/*import React,{useEffect} from "react";*/
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animations';
import './AboutMe.css'



export default function AboutMe(props){
    let fadeInScreenHandler= (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
   /* const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);*/
    const SCREEN_CONSTANTS={
        description: "Engineering student in 2nd year at Esprit (Ecole Sup Privée d'Ingénierie et de Technologies) option SE (Software Engineering). Passionate about all that touch the web and software development. Autonomous and very rigorous, I value teamwork and adapt easily for a good conduct of the project.",
        highlights: {
            bullets:[
                "Full Stack web and mobile development",
                "Interactive Front End as per the design",
                "React and React Native",
                "Java development",
                "building REST API",
                "Managing database",
            ],
            heading :"Here are a Few Highlights:"
        }
    }
    const renderHighlight =() =>{
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return(
        <div className="about-me-container screen-container " id={props.id}>
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"}/>
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
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
                </div>
            </div>

        </div>
    )
}