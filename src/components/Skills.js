import React from "react";
import { skills } from "./../data/data";

function Skills() {
    const skillList = skills.map((skill) =>
        <div>
            <li>{skill.image}</li>
            <li>{skill.name}</li>
        </div>
    );
    return (
        <ul>{skillList}</ul>
    );}

export default Skills;