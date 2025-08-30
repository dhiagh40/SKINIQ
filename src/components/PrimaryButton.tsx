import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

type Props = {
  title: string;
  onPress: () => void;
};

const PrimaryButton = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PrimaryButton;