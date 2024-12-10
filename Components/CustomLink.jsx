/* eslint-disable react/prop-types */
import { Link, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    link: {
        color: "#03A9F4",
        fontSize: 14,
    }
});

const CustomLink = ({src}) => {
  return (
    <Link src={src} style={styles.link}>Link on GitHub</Link>
  );
}

export default CustomLink;