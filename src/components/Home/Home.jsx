import Socials from '../Socials';
import './Home.css';
import pic from './pic1.jpg'
const Header = () => {
    return (
        <header>
            <div className="header-links">
                <h1>My Portfolio</h1>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}
const Hero = () => {
    return (
        <div>
            <p>Welcome, I am <span>Lenkala Manohar Reddy</span></p>
        </div>
    );
}
function Home() {
    return (
        <>
            <Header></Header>
            <div id="home">
            <img src={pic} alt="" />
                <div id="hero-section">
                    <Hero></Hero>
                    <Socials></Socials>
                </div>
            </div>
        </>
    );
}

export default Home;