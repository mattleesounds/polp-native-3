import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Feed from './screens/Feed';

export default function App() {
  return (
    <View>
      <Feed />

      <StatusBar style="auto" />
    </View>
  );
}

