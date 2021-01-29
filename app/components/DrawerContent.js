import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Colors from "../constants/Colors";

const DrawerContent = (props) => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderTitle}>Recipe App</Text>
      </View>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  drawerHeader: {
    paddingTop: StatusBar.currentHeight,
    marginBottom: -20,
    backgroundColor: Colors.primaryColor,
    height: 100,
    justifyContent: "center",
  },
  drawerHeaderTitle: {
    marginLeft: 20,
    color: "#fff",
    fontSize: 23,
    fontWeight: "700",
  },
});
