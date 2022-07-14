import { useWindowDimensions, Image, StyleSheet, Text, View, ScrollView} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'

import Title from '../components/ui/Title'

import Color from '../constants/colors'

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {

  const { width, height } = useWindowDimensions()

  let imageSize = 300

  if(width < 380) {
    imageSize = 150
  }

  if(height < 420) {
    imageSize = 80
  }

  const imageSizeStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageSizeStyle]}>
          <Image style={styles.image} source={require('../assets/images/success.png')}/>
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highLight}>{userNumber}</Text>.</Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Color.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    marginBottom: 24,
    //fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
  },
  highLight: {
    fontFamily: 'open-sans-bold',
    color: Color.primary500,
  }
})