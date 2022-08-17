import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Spacer() {
  return <View style={styles.space} />;
}

const styles = StyleSheet.create({
  space: {
    marginTop: 20,
  },
});
