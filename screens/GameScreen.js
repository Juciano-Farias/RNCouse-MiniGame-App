import { useState, useEffect, useMemo } from "react"

import { StyleSheet, View, Alert, Text, FlatList, useWindowDimensions } from "react-native"

import { Ionicons } from '@expo/vector-icons'

import Title from "../components/ui/Title"
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from "../components/ui/Card"
import InstructionText from '../components/ui/InstructionText'

import GuessLogItem from '../components/game/GuessLogItem'
import NumberContainer from '../components/game/NumberContainer'

let minBoudary = 1;
let maxBoudary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    
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
        setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds])
    }
    
    
    const initialGuess = useMemo(() => {
        return generateRandomNumber(minBoudary, maxBoudary, userNumber)
    }, [userNumber])
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    const guessRoundsListLenth = guessRounds.length

    const { width, height } = useWindowDimensions()
    
    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, onGameOver])
    
    useEffect(() => {
        minBoudary = 1;
        maxBoudary = 100;
    },[])
    
    let content = (
            <>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card>
                    <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name="md-remove" size={24} color="white" /></PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name="md-add" size={24} color="white" /></PrimaryButton>
                        </View>
                    </View>
                </Card>
            </>
        )

    if(width > 500) {
        content = (
            <>
                <View style={styles.buttonsContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name="md-remove" size={24} color="white" /></PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name="md-add" size={24} color="white" /></PrimaryButton>
                    </View>
                </View>
            </>
        )
    }

    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList 
                    data={guessRounds}
                    renderItem={({ item, index }) => <GuessLogItem roundsNumber={guessRoundsListLenth - index} guess={item}/>}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 40,
        alignItems: 'center',
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer:{
        flex: 1,
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listContainer: {
        flex: 1,
    }
})