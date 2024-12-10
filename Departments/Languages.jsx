/* eslint-disable react/prop-types */
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Section, SectionHeader, Separate } from "../Components";

const styles = StyleSheet.create({
  container: {
      margin: "5px 0 5px 10px",
  },
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
      fontSize: 18,
    },
    degree: {
      fontSize: 15,
  }

});

const Languages = ({languages}) => {
  return (
    languages !== null &&
    <Section>
      <SectionHeader>Languages</SectionHeader>
        <Separate />
        {Object.entries(languages).map((language, index) => (
        <View key={index} style={styles.row}>
            <View style={styles.dote} />
            <Text style={styles.title}>{language[0]}: </Text>
            <Text style={styles.degree}>{language[1]}</Text>
        </View>
        ))}
    </Section>
  );
}

export default Languages;