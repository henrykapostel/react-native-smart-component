import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    position       : 'absolute',
    top            : 0,
    left           : 0,
    right          : 0,
    bottom         : 0,
    alignItems     : 'center',
    justifyContent : 'center',
    backgroundColor: 'gray',
    opacity        : 0.5
  },
})