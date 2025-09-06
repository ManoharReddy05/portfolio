import './Projects.css'
const ProjectSet = (props) =>{
    return(
        <div id="project">
            <h3>{props.name}</h3>
            <p>{props.des}</p>
            <a href={props.link}><button>Know More</button></a>
        </div>
    );
}
const Projects = ()=>{
    return(
        <>
        <div id="projects">
        <h1>My Projects</h1>
            <div className='project_list'>
                <ProjectSet name="Online Book Store Web Application" des=" Developed a full-stack online book store using the MERN stack with distinct User and Admin roles. " link="https://github.com/ManoharReddy05/Online_bookstore"></ProjectSet>
                <ProjectSet name="Twitter Sentiment Analysis" des="Built a machine learning pipeline to classify tweet sentiment, applying natural language processing and 
classification techniques. " link="https://github.com/ManoharReddy05/twitter_sentiment_analysis"></ProjectSet>
            </div>
            </div>
        </>
    );
}

export default Projects;