/* eslint-disable react/prop-types */
import { Section, SectionHeader, Separate, ItemsOne } from "../Components";

const Skills = ({skills}) => {
  return (
    skills !== null &&
    <Section>
        <SectionHeader>Skills</SectionHeader>
        <Separate />
        <ItemsOne items={skills} />
    </Section>
  );
}

export default Skills;