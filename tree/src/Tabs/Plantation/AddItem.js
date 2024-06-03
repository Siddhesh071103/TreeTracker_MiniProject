import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import  Ionicons  from 'react-native-vector-icons/Ionicons';

const AddItem = ({ title, addItem }) => {
  const [text, setText] = useState("");

  const onChangeHandler = (textValue) => {
    setText(textValue);
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChangeHandler}
        value={text}
      />
      <Pressable
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText("");
        }}
      >
        <Ionicons name="add" size={28} color="green" />
        <Text style={styles.btnText}>Add Item</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    height: 60,
    padding: 8,
    fontSize: 16,
    borderBottomWidth: 1,
    marginHorizontal: 12,
    paddingBottom: 2,
  },
  btn: {
    flexDirection: "row",
    backgroundColor: "#71b637",
    paddingVertical: 6,
    marginTop: 8,
    marginHorizontal: 12,
    marginBottom: 25,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  btnText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
});

export default AddItem;