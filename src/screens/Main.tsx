import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import HeaderCard from '../components/HeaderCard';
import QtsCard from '../components/QtsCard';

export default function Main() {
  const { qtsList } = useSelector((state: RootState) => state.qstReducer);

  return (
    <View>
      <HeaderCard />
      <QtsCard />
    </View>
  );
}
