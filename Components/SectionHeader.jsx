/* eslint-disable react/prop-types */
import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textTransform: "capitalize",
  }
});

const SectionHeader = ({children}) => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

export default SectionHeader;