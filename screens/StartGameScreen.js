import { useState } from 'react'
import { StyleSheet ,View, TextInput, Alert } from 'react-native'

import Color from '../constants/colors'

import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import InstructionText from '../components/ui/InstructionText'
import Card from '../components/ui/Card'

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return
        }

        onPickNumber(chosenNumber)
    }

    return (
    <View style={styles.rootContainer}>
        <Title>Guess My number</Title>
        <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
    </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 70,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Color.secondary500,
        borderBottomWidth: 2,
        color: Color.secondary500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer:{
        flex: 1,
    }
})