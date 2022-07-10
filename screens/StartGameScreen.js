import { useState } from 'react'
import { StyleSheet ,View, TextInput, Alert } from 'react-native'

import Color from '../constants/colors'

import PrimaryButton from '../components/ui/PrimaryButton'

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
    <View style={styles.inputContainer}>
        <View style={styles.numberInputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
        </View>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Color.primary800,
        borderRadius: 9,
        elevation: 4, //shadows for android
        shadowColor: 'black', // shadows for IOS 
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
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
    numberInputContainer: {
        alignItems: 'center',
        padding: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainer:{
        flex: 1,
    }
})