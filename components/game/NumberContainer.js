import { View, StyleSheet, Text, Dimensions } from "react-native"

import Color from "../../constants/colors"

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Color.secondary500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Color.secondary500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontWeight: 'open-sans-bold',
        //fontWeight: 'bold',
    }
})