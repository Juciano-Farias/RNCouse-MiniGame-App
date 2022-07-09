import { StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Oponents Guess</Title>
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