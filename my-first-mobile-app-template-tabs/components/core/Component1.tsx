import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Component1: React.FC = () => {
    return (
        <View>
            <Text style={styles.text}>
                Hello from <Text style={{color: 'red'}}>Component1!</Text>
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 10,
        backgroundColor: 'blue',
        padding: 4,
        alignItems: 'center'
    }
});
export default Component1;