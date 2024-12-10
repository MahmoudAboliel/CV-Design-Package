/* eslint-disable react/prop-types */
import { Section, SectionHeader, Separate, ItemsOne } from "../Components";

const OtherSkills = ({otherSkills}) => {
  return (
    otherSkills !== null &&
    <Section>
        <SectionHeader>Other Skills</SectionHeader>
        <Separate />
        <ItemsOne items={otherSkills} />
    </Section>
  );
}

export default OtherSkills;