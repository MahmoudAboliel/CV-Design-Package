/* eslint-disable react/prop-types */
import { Section, SectionHeader, Separate, ItemsTwo } from "../Components";

const WorkExperience = ({workExperience}) => {
  return (
    workExperience !== null &&
    <Section>
        <SectionHeader>Work Experience</SectionHeader>
        <Separate />
        <ItemsTwo items={workExperience} />
    </Section>
  );
}

export default WorkExperience;