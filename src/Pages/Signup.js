import React from 'react'
import SignupImg from "../assets/signup.png"
import Template from '../Components/Template'

const Signup = ({setIsLoggedIn}) => {
    return (
        <Template 
                title="Join the million learnings to code with StudyNotion for free" 
                desc1="Build skills for today, tomorrow , and beyond."
                desc2="Education to future-proof your carrer."
                image={SignupImg}
                formtype="signup"
                setIsLoggedIn={setIsLoggedIn}            
        />
    )
}
export default Signup