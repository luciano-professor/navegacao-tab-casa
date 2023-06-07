import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import NavegacaoTab from './src/NavegacaoTab';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavegacaoTab />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
