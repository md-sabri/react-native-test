import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Main from './src/screens/Main';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bae6fd',
  },
});
