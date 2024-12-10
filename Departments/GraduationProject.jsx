/* eslint-disable react/prop-types */
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { ItemsOne, CustomLink } from "../Components";

const styles = StyleSheet.create({
    secondaryTitle: {
        fontSize: 16,
    },
    row: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-evenly",
        margin: "3 0",
        gap: 3,
        flexWrap: "wrap",
    },
    row2: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        marginBottom: 5
    },
    dote: {
        height: 6, 
        width: 6, 
        backgroundColor: "black", 
        margin: "0 7px",
        transform: "rotate(45deg)",
        // borderRadius: "50%", 
    },
    department: {
        textDecoration: "underline",
        fontSize: 15
    },
    desc: {
        fontSize: 14,
        margin: "7px 0",
    },
    featureSection: {
        marginBottom: 5,
    },
    featureTitle: {
        fontSize: 15
    },
    featureDesc: {
        fontSize: 13, 
        marginLeft: 20,
    },
});

const GraduationProject = ({gProject}) => {
  return (
    <View>
        <View style={styles.row}>
            <Text style={styles.secondaryTitle}>{gProject.title}: </Text>
            <Text style={styles.department}>Graduation Project</Text>
            <CustomLink src={gProject.gitHub} />
        </View>
        <Text style={styles.desc}>{gProject.description.desc}</Text>
        {gProject.description.features !== null &&
        Object.entries(gProject.description.features).map((feature, index) => (
        <View key={index} style={styles.featureSection}>
            <View  style={styles.row2}>
                <View style={styles.dote} />
                <Text style={styles.featureTitle}>{feature[0]}: </Text>
            </View>
            <Text style={styles.featureDesc}>{feature[1]}</Text>
        </View>
        ))}
        {gProject.tools !== null && 
        <View>
            <Text style={styles.secondaryTitle}>Tools used:</Text>
            <ItemsOne items={gProject.tools} />
        </View>}
    </View>
  );
}

export default GraduationProject;