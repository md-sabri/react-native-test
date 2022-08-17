import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function InfoCard() {
  const { qtsStep, qtsList } = useSelector(
    (state: RootState) => state.qstReducer,
  );

  return (
    <View style={styles.container}>
      <View style={styles.qstCount}>
        <Text style={styles.text}>
          {qtsStep}/{qtsList.length}
        </Text>
      </View>
      <View style={styles.timeContainer}>
        <View style={styles.qstCount}>
          <Text style={styles.text}>60 </Text>
        </View>
        <View style={styles.qstCount}>
          <Text style={styles.text}>20</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 70,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -30,
    left: '5%',
    borderRadius: 11,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  qstCount: {
    width: 50,
    height: 50,
    backgroundColor: '#bae6fd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 5,
  },
  text: {
    color: '#0284c7',
  },
  timeContainer: {
    flexDirection: 'row',
  },
});
