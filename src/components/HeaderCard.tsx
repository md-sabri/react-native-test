import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import InfoCard from './InfoCard';

export default function HeaderCard() {
  return (
    <View style={styles.container}>
      <InfoCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#0ea5e9',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    position: 'relative',
  },
});
