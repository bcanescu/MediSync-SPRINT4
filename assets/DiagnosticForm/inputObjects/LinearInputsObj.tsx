import { View, Text, StyleSheet } from "react-native"
import React from 'react'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { formularButtonSubmit, inputsBackground, inputsEdges } from "../../color"

const NewLinearInputsObj = ({ prop }: any) => {
    const { index, values, handleAnyLinearInputsChange, id,HandleAddLinearInput,HandlePopLastInputLinear } = prop

    return <View id={`${index}`} style={{width:'90%'}}>
        <View id="btn add/delete" style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity onPress={()=>{HandleAddLinearInput(id)}} style={styles.btnstyle}>
                <Text style={{fontSize:30,textAlign:'center'}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{HandlePopLastInputLinear(id)}} style={styles.btnstyle}>
                <Text style={{fontSize:30,textAlign:'center'}}>-</Text>
            </TouchableOpacity>
        </View>
        <View id="inputsText" style={{ flex: 1, flexDirection: 'row' ,width:'100%'}}>
            {
                values.map((text: string, index: number) => {
                    return <TextInput
                        multiline={true}
                        style={[styles.input, { width: `${100 / values.length}%` }]}
                        value={text}
                        onChangeText={(str) => { handleAnyLinearInputsChange(str, id, index) }}
                    />
                })
            }
        </View>
    </View>
}

const styles = StyleSheet.create({
    input: {
        borderColor: inputsEdges,
        backgroundColor: inputsBackground,
        borderWidth: 2,
        borderRadius: 20,
        paddingStart: 10,
        paddingTop: 3,
        paddingEnd: 10,
    },
    btnstyle:{
        backgroundColor: formularButtonSubmit,
        height: 30,
        width: 30,
        borderRadius: 100,
    }
})

export default NewLinearInputsObj