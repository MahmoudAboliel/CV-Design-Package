/* eslint-disable react/prop-types */
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Section, SectionHeader, Separate } from "../Components";
import { GraduationProject } from '.';

const styles = StyleSheet.create({
    row: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-evenly",
        margin: "3 0",
        gap: 3,
        flexWrap: "wrap",
    },
    dote: {
        height: 6, 
        width: 6, 
        backgroundColor: "black", 
        // margin: "0 5px",
        transform: "rotate(45deg)",
        // borderRadius: "50%", 
    },
    degree: {
        fontSize: 13.5
    },
    department: {
        textDecoration: "underline",
        fontSize: 14
    },
    university: {
        fontSize: 13
    },
    year: {
        fontSize: 15
    }
});

const Education = ({education}) => {
  return (
    education !== null &&
    <Section>
        <SectionHeader>Education</SectionHeader>
        <Separate />
        {education.map((edu, index) => (
        <View key={index}>
            <View style={styles.row}>
                <View style={styles.dote} />
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.department}>{edu.department}</Text>
                <Text style={styles.university}>{edu.university}</Text>
                <Text style={styles.year}>{edu.year}</Text>
            </View>
            {/* graduation project */}
            {edu.graduationProject !== null && <GraduationProject gProject={edu.graduationProject} />}
             
        </View>
        ))}
    </Section>
  );
}

export default Education;