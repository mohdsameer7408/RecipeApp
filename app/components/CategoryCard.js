import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

const CategoryCard = ({ onCardPress, title, color }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.card}>
      <TouchableComponent style={{ flex: 1 }} onPress={onCardPress}>
        <View style={{ ...styles.cardContainer, backgroundColor: color }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 150,
    margin: 15,
    overflow: "hidden",
    borderRadius: 20,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
});
