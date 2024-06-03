import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>

      {/* Siddhesh Thakarkar */}
      <View style={styles.memberContainer}>
        <Image
          source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&P=0&h=180' }} // Replace 'https://example.com/siddhesh.jpg' with the actual image URL
          style={styles.image}
        />
        <Text style={styles.memberName}>Siddhesh Thakarkar</Text>
        <Text style={styles.memberInfo}>
          Siddhesh is a passionate and dedicated computer engineering student currently pursuing his
          third year at Vidyavardhini's College of Engineering & Technology. He has a keen interest in mobile app development and
          has actively contributed to various projects during his academic journey.
        </Text>
      </View>

      {/* Nishant Bhandigare */}
      <View style={styles.memberContainer}>
        <Image
          source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.gvJOXgwfUeS-TfUtPxal2AHaHa&pid=Api&P=0&h=180' }} // Replace 'https://example.com/nishant.jpg' with the actual image URL
          style={styles.image}
        />
        <Text style={styles.memberName}>Nishant Bhandigare</Text>
        <Text style={styles.memberInfo}>
          Nishant is a motivated and detail-oriented computer engineering student in his third year
          at Vidyavardhini's College of Engineering & Technology. He possesses strong problem-solving skills and has a knack for
          developing innovative solutions using technology.
        </Text>
      </View>

      {/* Mohak Tamore */}
      <View style={styles.memberContainer}>
        <Image
          source={{ uri: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg' }} // Replace 'https://example.com/mohak.jpg' with the actual image URL
          style={styles.image}
        />
        <Text style={styles.memberName}>Mohak Tamore</Text>
        <Text style={styles.memberInfo}>
          Mohak is an enthusiastic and proactive computer engineering student currently enrolled
          in his third year at Vidyavardhini's College of Engineering & Technology. He has a strong foundation in software
          development and enjoys collaborating on challenging projects.
        </Text>
      </View>

      {/* Prathmesh Tiwari */}
      <View style={styles.memberContainer}>
        <Image
          source={{ uri: 'https://images.huffingtonpost.com/2014-07-24-ino2.jpg' }} // Replace 'https://example.com/prathmesh.jpg' with the actual image URL
          style={styles.image}
        />
        <Text style={styles.memberName}>Prathmesh Tiwari</Text>
        <Text style={styles.memberInfo}>
          Prathmesh is a dedicated and hardworking computer engineering student currently pursuing
          his third year at Vidyavardhini's College of Engineering & Technology. He is passionate about technology and is
          committed to leveraging his skills to create impactful solutions.
        </Text>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  memberContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  memberInfo: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AboutUs;
