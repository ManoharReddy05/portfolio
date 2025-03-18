import './Projects.css'
const ProjectSet = (props) =>{
    return(
        <div id="project">
            <h3>{props.name}</h3>
            <p>{props.des}</p>
            <button onClick={props.link}>Know More</button>
        </div>
    );
}
const Projects = ()=>{
    return(
        <>
        <div id="projects">
        <h1>My Projects</h1>
            <div className='project_list'>
                <ProjectSet name="Project1" des="This is des"></ProjectSet>
                <ProjectSet name="Project2" des="This is des"></ProjectSet>
            </div>
            </div>
        </>
    );
}

export default Projects;