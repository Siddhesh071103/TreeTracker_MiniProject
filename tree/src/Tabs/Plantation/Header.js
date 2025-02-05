import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Shopping List",
};

const styles = StyleSheet.create({
  header: {
    height: 75,
    marginTop: -25,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
});

export default Header;