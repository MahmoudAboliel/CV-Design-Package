/* eslint-disable react/prop-types */
import { View, Text, StyleSheet } from "@react-pdf/renderer"
import { Separate, CustomLink } from '../Components';

const styles = StyleSheet.create({
    section: {
        textAlign: "center",
    },
    name: {
        fontSize: 25, 
        fontWeight: "bold"
    },
    info: {
        fontSize: 14,
        
    },
});

const PersonalInfo = ({personalInfo}) => {
  return (
    <View style={styles.section}>
        <Text style={styles.name}>
            {personalInfo.name}
        </Text>
        <Separate />
        <Text style={styles.info}>
            {personalInfo.phone} | {personalInfo.email} | {' '}
            <CustomLink src={personalInfo.github} />
               
        </Text>
    </View>
  )
}

export default PersonalInfo