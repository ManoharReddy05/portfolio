import './About.css'
import pic from './dp2.jpg'
const About = () =>{
    return(
        <>
        <div id="about">
            <h1>About me</h1>
            <br />
            <p><img src={pic} alt="" />I'm a passionate computer science student on a mission to turn lines of code into powerful tools. 
            I'm constantly fascinated by the potential of technology to solve problems and make a difference. 
            I'm always eager to learn new things and collaborate with others who share my enthusiasm for the 
            ever-evolving world of computer science.
Constantly seeking ways to learn, grow, and contribute to the incredible world of technology.
            </p>
        </div>
        </>
    );
}
export default About;