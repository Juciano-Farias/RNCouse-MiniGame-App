import { Text, StyleSheet } from "react-native"

const Title = ({ children }) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        padding: 12,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddbf52',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddbf52',
    },
})