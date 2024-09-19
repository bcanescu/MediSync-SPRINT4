import { TextInput } from "react-native-gesture-handler";
import { StyleSheet } from "react-native"
import React from "react";
import { inputsEdges,inputsBackground } from '../../color';

const NewText = ({prop}:any) =>{
    const {text,index,id,handleInputChange} = prop
    return <TextInput
        style={styles.input}
        onChangeText={(text) => handleInputChange(text, id)}
        value={text}
        multiline={true}
    />
}

const styles = StyleSheet.create({
    input: {
        width:'90%',
        borderColor: inputsEdges,
        backgroundColor:inputsBackground,
        borderWidth: 2,
        borderRadius:20,
        paddingStart:10,
        paddingTop:3,
        paddingEnd:10,
    },
})

export default NewText