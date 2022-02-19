import React from "react";
import { hero } from "../data/data";

function Skills() {
    const skills = hero.skills;
    const skillList = skills.map((skill) =>
        <li>{skill}</li>
    );
    return (
        <ul>{skillList}</ul>
    );
}

export default Skills;