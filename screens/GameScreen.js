import { useState } from "react"

import { StyleSheet, Text, View, Alert } from "react-native"

import Title from "../components/ui/Title"
import PrimaryButton from '../components/ui/PrimaryButton'
import NumberContainer from '../components/game/NumberContainer'

let minBoudary = 1;
let maxBoudary = 100;

const GameScreen = ({ userNumber }) => {
    
    const generateRandomNumber = (min, max, exclude) => {
        const rndNum = Math.floor(Math.random() * (max -min)) + min
        
        if(rndNum === exclude) {
            return generateRandomNumber(min, max, exclude)
        } else {
            return rndNum
        }
    }
    
    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie!!", "You know this i wrong...", [{text: 'Sorry', style: 'cancel'}])
            return 
        }
        if(direction === 'lower'){
            maxBoudary = currentGuess
        } else {
            minBoudary = currentGuess + 1
        }
        const newRandomNumber = generateRandomNumber(minBoudary, maxBoudary, currentGuess)
        setCurrentGuess(newRandomNumber)
    }
    
    const initialGuess = generateRandomNumber(minBoudary, maxBoudary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    
    return (
        <View style={styles.screen}>
            <Title>Oponents Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lowers?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
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