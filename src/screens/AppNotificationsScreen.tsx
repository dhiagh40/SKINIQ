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
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  settingItem: {
    alignItems: 'center',
    backgroundColor: '#F9F5F0',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  settingText: {
    color: '#D1A39C',
    fontSize: 18,
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default AppNotificationsScreen;