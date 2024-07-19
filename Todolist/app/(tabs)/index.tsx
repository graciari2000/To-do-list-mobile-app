import React from 'react';
import { StyleSheet, View } from 'react-native';
import Todolist from '@/components/Todolist';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Todolist />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 70,
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
