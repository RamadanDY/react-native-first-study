import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header.jsx";

const Index = () => {
  return (
    <View style={styles.container}>
      <Header title="ramad" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
});

export default Index;
