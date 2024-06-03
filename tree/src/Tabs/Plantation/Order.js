import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Order = () => {
    const [location, setLocation] = useState({
        latitude: 19.3907, // Default to Vasai, Mumbai latitude
        longitude: 72.8397, // Default to Vasai, Mumbai longitude
    });

    const handleLocationChange = (latitude, longitude) => {
        setLocation({ latitude, longitude });
    };

    return (
        <View style={{ flex: 1, marginTop: 50, backgroundColor: "#76ff7a" }}>
            <View
                style={{
                    backgroundColor: "white",
                    margin: 10,
                    borderRadius: 6,
                    padding: 10,
                }}
            >
                <Text style={{ textAlign: "center", fontSize: 15 }}>
                    Order has been Approved
                </Text>
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    Plants in 1 Hours
                </Text>
            </View>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 300,
                    width: "100%",
                }}
            >
                <MapView
                    style={{ flex: 1, width: "100%" }}
                    initialRegion={{
                        ...location,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker coordinate={location} />
                </MapView>
            </View>
            <View
                style={{
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    margin: 10,
                    borderRadius: 8,
                    marginTop: 10,
                }}
            >
                <Image
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        borderColor: "#fff0f5",
                        borderWidth: 1,
                    }}
                    source={{
                        uri: "https://torontotreeremoval.ninja/wp-content/uploads/plant-a-tree-toronto.jpg",
                    }}
                />
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#ff6e4a" }}>
                        189 Plants Near Your Location
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
                        Anyone will pick your order
                    </Text>
                </View>
            </View>
            <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 6,
                }}
                onChangeText={(text) => console.log(text)}
                placeholder="Enter your location"
            />
            <Button
                title="Set Location"
                onPress={() => {
                    // Implement logic to set location based on user input
                }}
            />
        </View>
    );
};

export default Order;

const styles = StyleSheet.create({});
