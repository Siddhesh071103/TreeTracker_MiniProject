import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
  Text,
  StatusBar,
  Modal,
  Image,
} from "react-native";

import AddItem from "./AddItem";
import ListItem from "./ListItem";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([
    { id: Math.random().toString(), text: "Tulsi" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTree, setSelectedTree] = useState('');

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("❗Enter item to add", " Item name cannot be empty.", [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK" },
      ]);
      return;
    } else {
      setItems((prevItems) => {
        return [{ id: Math.random().toString(), text }, ...prevItems];
      });
    }
  };

  const handlePlantButtonPress = () => {
    if (items.length === 0) {
      Alert.alert("No plants added", "Please add plants before planting.", [
        {
          text: "OK",
        },
      ]);
    } else {
      const lastItem = items[0]; // Get the latest added item
      setSelectedTree(lastItem.text);
      console.log(`Tree planted: ${lastItem.text}`);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Header title=" PLANTING TREE 🌱" />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handlePlantButtonPress}
        >
          <Text style={styles.addButtonText}>Plant</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                style={styles.plantImage}
                source={{ uri: 'https://i5.walmartimages.com/asr/9023099f-ee58-45a5-ae9e-d9aa9274b862_1.9eb6965e141f1297b749bf25932113a8.jpeg' }}
              />
              <Text style={styles.modalText}>Your {selectedTree} has been Planted</Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: "white",
    position: "relative",
  },
  addButton: {
    display: 'flex',
    width: '50%',
    position: "absolute",
    bottom: 20,
    backgroundColor: "#71b637",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  addButtonText: {
    textAlign: 'center',
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  plantImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#71b637',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Main;
