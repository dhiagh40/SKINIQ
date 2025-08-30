import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const NotificationsTipsScreen = () => {
  const notifications = [
    { id: 1, title: 'Drink Water', message: 'Remember to stay hydrated for glowing skin!' },
    { id: 2, title: 'Cleanse Your Face', message: 'Don\'t forget your evening routine tonight.' },
    { id: 3, title: 'New Article', message: 'Read our new article on antioxidants in skincare.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications & Tips</Text>
      <ScrollView style={styles.scrollView}>
        {notifications.map((notification) => (
          <TouchableOpacity key={notification.id} style={styles.notificationItem}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationMessage}>{notification.message}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  notificationItem: {
    backgroundColor: '#F9F5F0',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
  notificationMessage: {
    color: '#666',
    fontSize: 16,
  },
  notificationTitle: {
    color: '#D1A39C',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  scrollView: {
    width: '100%',
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default NotificationsTipsScreen;