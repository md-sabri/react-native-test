import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { RadioGroup } from 'react-native-radio-buttons-group';
import Button from './Button';
import Spacer from './Spacer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import QtsRadioGroup from './QtsRadioGroup';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { restart } from '../store/reducers/qtsList.reducer';

const { width, height } = Dimensions.get('window');

const radioButtonsData = [
  {
    id: '1',
    label: 'Option 1',
    value: 'option1',
  },
  {
    id: '2',
    label: 'Option 2',
    value: 'option2',
  },
];

export default function QtsCard() {
  const { qtsList } = useSelector((state: RootState) => state.qstReducer);
  const { qtsStep, isFinished, totalPoint } = useSelector(
    (state: RootState) => state.qstReducer,
  );

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.TitleText}>Question 1 :</Text>
        {!isFinished ? (
          <React.Fragment>
            {qtsList.map((qst) => {
              if (qtsStep !== qst.id) {
                return null;
              }

              return <QtsRadioGroup key={qst.id} qst={qst} />;
            })}
          </React.Fragment>
        ) : (
          <View style={styles.finished}>
            <Text style={styles.text}>félicitations</Text>
            <Text style={styles.text}>votre score est</Text>
            <Text style={styles.score}>{totalPoint}/30</Text>
            <View style={{ marginTop: 5 }}>
              <Button title="restart" onPress={() => dispatch(restart())} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height - 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '100%',
    height: height - 300,
    borderRadius: 11,
    backgroundColor: '#fff',
  },
  TitleText: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  qstText: {
    padding: 10,
    lineHeight: 20,
  },
  answrList: {
    // borderWidth: 1,
    height: 230,
    padding: 10,
  },
  radioContainer: {
    alignItems: 'flex-start',
  },
  finished: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 7,
  },
  score: {
    padding: 10,
    backgroundColor: '#a5f3fc',
    colors: '#0284c7',
    borderRadius: 11,
  },
});
