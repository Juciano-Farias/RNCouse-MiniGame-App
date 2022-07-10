import { useState } from "react"

import { StyleSheet, Text, View } from "react-native"

import Title from "../components/ui/Title"
import NumberContainer from '../components/game/NumberContainer'

const GameScreen = ({ userNumber }) => {

    const generateRandomNumber = (min, max, exclude) => {
        const rndNum = Math.floor(Math.random() * (max -min)) + min

        if(rndNum === exclude) {
            return generateRandomNumber(min, max, exclude)
        } else {
            return rndNum
        }
    }

    const initialGuess = generateRandomNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    return (
        <View style={styles.screen}>
            <Title>Oponents Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lowers?</Text>
            </View>
            {/* <Text>LOG ROUNDS</Text> */}
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 40,
    },
})