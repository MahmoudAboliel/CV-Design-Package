/* eslint-disable react/prop-types */
import { Section, SectionHeader, Separate, CustomLink } from "../Components";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    row: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        margin: "3 0",
    },
    dote: {
        height: 6, 
        width: 6, 
        backgroundColor: "black", 
        margin: "0 15px",
        transform: "rotate(45deg)",
        // borderRadius: "50%", 
    },
    title: {
        fontSize: 15
    },
    state: {
        fontSize: 13,
    },
    description: {
        fontSize: 12.5,
        marginLeft: 40
    }
});

const Projects = ({projects}) => {
  return (
    projects !== null &&
    <Section>
        <SectionHeader>Projects</SectionHeader>
        <Separate />
        {projects.map((project, index) => (
        <View key={index} style={{marginBottom: 10}}>
            <View style={styles.row}>
                <View style={styles.dote} />
                <Text style={styles.title}>{project.title}: </Text>
                <Text style={styles.state}> {project.state}   </Text>
                <CustomLink src={project.github} />
            </View>
            <Text style={styles.description}>
            {project.description}
            </Text>
        </View>
        ))}
    </Section>
  );
}

export default Projects;