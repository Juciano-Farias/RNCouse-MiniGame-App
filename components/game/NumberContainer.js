import { View, StyleSheet, Text } from "react-native"

import Color from "../../constants/colors"

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Color.secondary500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Color.secondary500,
        fontSize: 36,
        fontWeight: 'open-sans-bold',
        //fontWeight: 'bold',
    }
})