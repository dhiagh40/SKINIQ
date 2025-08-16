import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const AppNotificationsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Notifications</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Allow push notifications</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#D1A39C' }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9F5F0',
    padding: 15,
    borderRadius: 8,
  },
  settingText: {
    fontSize: 18,
    color: '#D1A39C',
  },
});

export default AppNotificationsScreen;