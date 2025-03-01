import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!!!</Text>
      <Image
        source={require("../images/passport.jpeg")} // Use require() for local images
        style={styles.image} // Add styles for the image
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    color: "blue",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100 / 2,
  },
});

export default Index;
