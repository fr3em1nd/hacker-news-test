import { StyleSheet, Dimensions } from 'react-native'

function adjustIconTopMargin() {
  const screenHeight = Dimensions.get('screen').height
  return screenHeight >= 812 ? screenHeight * 0.1 : screenHeight * 0.07
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 45,
    width: '80%',
  },
  iconStyle: {
    alignSelf: 'center',
    marginTop: adjustIconTopMargin(),
    width: 159,
    height: 156,
    position: 'absolute',
  },
  bgContainer: {
    marginTop: Dimensions.get('screen').height * 0.3,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderTopColor: '#5134FF',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginBottom: 0,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    marginBottom: 15,
  },
  scrollViewContainer: {
    backgroundColor: 'transparent',
    minHeight: Dimensions.get('screen').height,
  },
  bottomSection: {
    alignItems: 'center',
    width: '80%',
    marginBottom: 30,
  },
})
