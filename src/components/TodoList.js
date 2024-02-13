import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

import { ThemeContext } from "../contexts/ThemeContext";

class TodoList extends Component {
    static contextType = ThemeContext;

    render() {
        const { isDarkTheme, lightTheme, darkTheme, changeTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        const { TodoContainer, item, buttonContainer, buttonText } = styles;

        return (
            <View style={[TodoContainer, theme]} >
                <Text style={[item, theme]} >Plan the family trip</Text>
                <Text style={[item, theme]} >Go shopping for dinner</Text>
                <Text style={[item, theme]} >Go for a walk</Text>
                <TouchableOpacity onPress={changeTheme} style={buttonContainer}>
                    <Text style={buttonText}>Change Theme</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TodoContainer: {
        backgroundColor: 'dimgrey',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    item: {
        color: 'black',
        fontSize: 18,
        paddingVertical: 10
    }, 

    buttonContainer: {
        backgroundColor: 'dodgerblue',
        paddingVertical: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    buttonText: {
        color: 'white',
        fontSize: 18
    }
});

export default TodoList;