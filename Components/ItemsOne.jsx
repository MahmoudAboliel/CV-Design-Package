/* eslint-disable react/prop-types */
import { View, Text, StyleSheet } from "@react-pdf/renderer";

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
    item: {
        fontSize: 14,
    }

});

const ItemsOne = ({items}) => {
  return (
    <View style={styles.container}>
        {items.map((item, index) => (
            <View key={index} style={styles.row}>
                <View style={styles.dote} />
                <Text style={styles.item}>{item}</Text>
            </View>
        ))}
    </View>
  );
}

export default ItemsOne;