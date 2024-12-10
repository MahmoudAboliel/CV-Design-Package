/* eslint-disable react/prop-types */
import { Text, StyleSheet } from "@react-pdf/renderer";
import { Section, SectionHeader, Separate } from '../Components';

const styles = StyleSheet.create({
  content: {
    fontSize: 14, 
    textAlign: "center", 
    lineHeight: 1.3,
    
  }
});

const Summary = ({summary}) => {
  return (
    summary !== null &&
    <Section>
        <SectionHeader>Summary</SectionHeader>
        <Separate />
        <Text style={styles.content}>{summary}</Text>
    </Section>
  );
}

export default Summary;