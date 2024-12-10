import { View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  line: {
    height: "1.5px",
    backgroundColor: "black",
    margin: "5 0",
    position: "relative"
  },
  doteLeft: {
    position: "absolute",
    left: -7,
    top: -3,
    width: 7,
    height: 7,
    backgroundColor: "black",
    borderRadius: "50%"
  },
  doteRight: {
    position: "absolute",
    right: -7,
    top: -3,
    width: 7,
    height: 7,
    backgroundColor: "black",
    borderRadius: "50%"
  }
});

const Separate = () => {
  return (
    <View style={styles.line}>
      <View style={styles.doteRight} />
      <View style={styles.doteLeft} />
    </View>
  );
}

export default Separate;