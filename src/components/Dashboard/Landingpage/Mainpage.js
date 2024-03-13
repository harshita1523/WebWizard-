import React from "react";
import AnimationSec from "./AnimationSec";
// import CursorAnimation from "./CursorAnimation";
import Courses from "./Courses";
import Alumini from "./Alumni";
import Footer from "./Footer";
import Features from "./Features";
import ContactUs from "./ContactUs";
import PremiumCourses from "./PremiumCourses";
import Teacher from "./Teacher";
function Mainpage(){
    return(
        <>
            <AnimationSec/>
            {/* <CursorAnimation /> */}
            <hr/>
            <Features/>
            <hr/>
            {/* <Alumini/>
            <hr/> */}
            <PremiumCourses/>
            <hr/>
            <Teacher/>
            <hr/>
            <ContactUs/>
            <hr/>
            <Footer/>
            <hr/>
            
            

        </>
    )
}
export default Mainpage;