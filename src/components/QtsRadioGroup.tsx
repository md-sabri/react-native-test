import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import Spacer from './Spacer';
import Button from './Button';
//@ts-ignore
import RadioButtonRN from 'radio-buttons-react-native';
import { nextQts } from '../store/reducers/qtsList.reducer';
const { width, height } = Dimensions.get('window');

export default function QtsRadioGroup({ qst }: any) {
  const [radioButtons, setRadioButtons] = useState(qst.answers);
  const [error, setError] = useState<null | string>(null);
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const { isFinished, totalPoint } = useSelector(
    (state: RootState) => state.qstReducer,
  );
  const dispatch = useDispatch();

  console.log(totalPoint);

  useEffect(() => {
    setRadioButtons(qst.answers);
  }, [qst]);

  function onPressRadioButton(radioButtonsArray: any) {
    setSelectedValue(radioButtonsArray);
    console.log(radioButtonsArray);
  }

  function handleNext() {
    if (!selectedValue) {
      setError('please select answer ');
      return;
    }

    dispatch(nextQts({ correct: selectedValue.correct }));
  }

  return (
    <View>
      <Text style={styles.qstText}>{qst.label}</Text>
      {error && <Text style={styles.error}> {error}</Text>}
      <View style={styles.answrList}>
        <RadioButtonRN
          data={radioButtons}
          //   @ts-ignore
          selectedBtn={(e: any) => onPressRadioButton(e)}
        />
        <Spacer />
        <Button
          title={isFinished ? 'check result' : 'next Qts'}
          onPress={handleNext}
        />
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
  error: {
    color: 'red',
    textAlign: 'center',
  },
});
