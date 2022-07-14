import { Text, StyleSheet } from "react-native"

const Title = ({ children }) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        width: 400,
        maxWidth: '80%',
        fontFamily: 'open-sans-bold',
        padding: 12,
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
})