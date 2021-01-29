import React from "react";
import { Platform, StyleSheet, Switch, Text, View } from "react-native";

import Colors from "../constants/Colors";

const Filter = ({ label, state, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterLabel}>{label}</Text>
      <Switch
        trackColor={{ true: Colors.activeIconColor, false: "#ccc" }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={state}
        onValueChange={onChange}
      />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 5,
  },
  filterLabel: {
    fontSize: 15,
    fontWeight: "600",
  },
});
