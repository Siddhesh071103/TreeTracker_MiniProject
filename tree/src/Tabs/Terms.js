import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TermsAndConditionsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Terms and Conditions</Text>
            <Text style={styles.sectionTitle}>1. Introduction</Text>
            <Text style={styles.paragraph}>
                These terms and conditions govern your use of the mobile application (the "App") provided by
                [Your Company Name] (the "Company", "we", "us", or "our").
            </Text>
            <Text style={styles.sectionTitle}>2. Acceptance of Terms</Text>
            <Text style={styles.paragraph}>
                By downloading, accessing, or using the App, you agree to be bound by these terms and
                conditions. If you do not agree to these terms and conditions, you may not use the App.
            </Text>
            <Text style={styles.sectionTitle}>3. License</Text>
            <Text style={styles.paragraph}>
                We grant you a limited, non-exclusive, non-transferable, and revocable license to use the
                App for your personal, non-commercial use.
            </Text>
            <Text style={styles.sectionTitle}>4. Privacy Policy</Text>
            <Text style={styles.paragraph}>
                Your use of the App is also governed by our Privacy Policy, which is incorporated herein by
                reference.
            </Text>
            <Text style={styles.sectionTitle}>5. Disclaimer of Warranties</Text>
            <Text style={styles.paragraph}>
                The App is provided "as is" and "as available" without warranties of any kind, whether
                express or implied. We do not warrant that the App will be uninterrupted or error-free.
            </Text>
            <Text style={styles.sectionTitle}>6. Limitation of Liability</Text>
            <Text style={styles.paragraph}>
                We shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages, including but not limited to loss of profits, data, or use, arising out of or in
                connection with your use of the App.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black'
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 15,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 15,
    },
});

export default TermsAndConditionsScreen;
