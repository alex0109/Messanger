import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import type { FC } from 'react';

const EmptyChat: FC = () => (
  <View style={style.emptyBlock}>
    <Text style={style.title}>Chat’s clear!</Text>
    <Text style={style.subtitle}>Send your first message to start a dialog ;)</Text>
    <Text style={style.text}>wish you good luck</Text>
  </View>
);

export default EmptyChat;

const style = StyleSheet.create({
  emptyBlock: {
    width: 320,
    height: 350,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    width: '75%',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#989898',
    marginBottom: 40,
  },
});
