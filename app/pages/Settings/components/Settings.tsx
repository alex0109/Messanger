import { StyleSheet } from 'react-native';

import { Settings } from './Settings.1';
export default Settings;

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  photoEditBlock: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 28,
  },
  photoEditText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoEditBlock: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '90%',
  },
  inputsInfo: {
    width: '100%',
    padding: 0,
    borderBottomWidth: 1,
    borderColor: '#9D9D9D',
    fontSize: 16,
    fontWeight: '500',
  },
  textInfo: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '500',
  },
  appSettingsBlock: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 30,
  },
  settingsText: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  iconTextBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  settingsMainText: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 15,
  },
  logOutText: {
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 10,
  },
});
