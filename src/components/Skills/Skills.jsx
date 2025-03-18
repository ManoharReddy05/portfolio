import './Skills.css'
const SkillSet = (props) =>{
    return(
        <div id="skill">
            <h3>{props.name}</h3>
            <p>{props.des}</p>
        </div>
    );
}
const Skills = ()=>{
    return(
        <>
        <div id="skills">
        <h1>My Skills</h1>
            <div className='skill_list'>
                <SkillSet id="skill" name="Programming Languages"></SkillSet>
                <SkillSet id="skill" name="Frontend"></SkillSet>
                <SkillSet id="skill" name="Backend"></SkillSet>
                <SkillSet id="skill" name="Database"></SkillSet>
                <SkillSet id="skill" name="Git"></SkillSet>
                <SkillSet id="skill" name="Communication"></SkillSet>
            </div>
            </div>
        </>
    );
}

export default Skills;