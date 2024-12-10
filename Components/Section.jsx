/* eslint-disable react/prop-types */
import { View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container: {
        margin: "7px 0",
    }
});

const Section = ({children}) => {
  return (
    <View style={styles.container}>{children}</View>
  );
}

export default Section;