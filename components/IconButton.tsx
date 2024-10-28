import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { FC } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type IconButtonProps = {
  label: string;
  onPress: () => void;
  icon: keyof typeof MaterialIcons.glyphMap;
};

const IconButton: FC<IconButtonProps> = ({ icon, label, onPress }) => {
  return (
    <>
      <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color="#fff" />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
    </>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
