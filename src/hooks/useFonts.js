import * as Font from 'expo-font'

export default useFonts = async () => {
  await Font.loadAsync({
    Montserrat: require('@hackernews/assets/fonts/Montserrat-Regular.ttf'),
  })
}
