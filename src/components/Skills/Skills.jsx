import './Skills.css'
const SkillSet = (props) => {
    const items = props.items || [];
    return (
        <div id="skill">
            <h3>{props.name}</h3><br />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
const Skills = () => {
    const progamming_languages = ["Java", "Python"];
    const web_development = ["HTML", "CSS", "JavaScript", "MERN Stack"];
    const version_control = ["Git", "GitHub"];
    return (
        <>
            <div id="skills">
                <h1>My Skills</h1>
                <div className='skill_list'>
                    <SkillSet id="skill" name="Data Structures and Algorithms"></SkillSet>
                    <SkillSet id="skill" name="Programming Languages" items={progamming_languages}></SkillSet>
                    <SkillSet id="skill" name="Web Development" items={web_development}></SkillSet>
                    <SkillSet id="skill" name="Version Control" items={version_control}></SkillSet>
                </div>
            </div>
        </>
    );
}

export default Skills;