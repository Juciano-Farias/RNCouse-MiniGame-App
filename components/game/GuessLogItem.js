import { Text, View, StyleSheet } from "react-native"

import Color from "../../constants/colors"

const GuessLogItem = ({ roundsNumber, guess }) => {
  return (
    <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundsNumber}</Text>
        <Text style={styles.itemText}>Oponent's Guess: {guess}</Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: Color.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Color.secondary500,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans',
    },
})