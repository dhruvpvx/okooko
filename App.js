import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LibraryList from './LibraryList';
import reducers from './redux/reducers';

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <LibraryList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
});
