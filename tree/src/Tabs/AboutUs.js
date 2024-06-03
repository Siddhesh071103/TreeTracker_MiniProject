import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>About Project</Text>
            <Text style={styles.description}>
                The Tree Enumeration project aims to create a mobile application that facilitates the enumeration and cataloging of trees within a specified area. The application provides a user-friendly interface for users to record various attributes of trees, including species, location, height, diameter, health status, and other relevant information.
            </Text>

            <Text style={styles.subtitle}>Key Features:</Text>
            <Text style={styles.list}>
                • Tree Identification: The app allows users to identify tree species using visual recognition technology or by manual input.
                {'\n\n'}
                • Data Collection: Users can collect and input data on tree attributes such as height, diameter, canopy size, and health condition.
                {'\n\n'}
                • Geolocation: The app utilizes GPS technology to automatically capture the location of each tree.
                {'\n\n'}
                • Photo Documentation: Users can take photos of trees and attach them to their records for visual documentation.
                {'\n\n'}
                • Data Visualization: The collected data can be visualized through interactive maps and charts, providing insights into tree distribution and diversity.
                {'\n\n'}
                • Offline Functionality: The app supports offline data collection, allowing users to record tree data in areas with limited or no internet connectivity.
                {'\n\n'}
                • Data Export: Users can export their collected data in various formats for further analysis or reporting purposes.
                {'\n\n'}
                • Collaboration: The app enables collaboration among multiple users, allowing teams to work together on tree enumeration projects.
            </Text>

            <Text style={styles.subtitle}>Target Audience:</Text>
            <Text style={styles.list}>
                • Environmental organizations
                {'\n\n'}
                • Forestry departments
                {'\n\n'}
                • Urban planners
                {'\n\n'}
                • Conservationists
                {'\n\n'}
                • Researchers
                {'\n\n'}
                • Citizen scientists
            </Text>

            <Text style={styles.subtitle}>Benefits:</Text>
            <Text style={styles.list}>
                • Efficient tree inventory management
                {'\n\n'}
                • Enhanced tree conservation and management strategies
                {'\n\n'}
                • Data-driven decision-making for urban planning and environmental conservation initiatives
                {'\n\n'}
                • Engaging citizens in environmental monitoring and conservation efforts
            </Text>

            <Text style={styles.subtitle}>Future Enhancements:</Text>
            <Text style={styles.list}>
                • Integration with external databases for species identification and additional tree information
                {'\n\n'}
                • Advanced data analysis features for trend identification and predictive modeling
                {'\n\n'}
                • Gamification elements to incentivize and engage users in tree enumeration activities
                {'\n\n'}
                • Integration with social media platforms to raise awareness and promote community participation in tree conservation efforts
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    list: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default AboutScreen;
