import React, { useState } from 'react';
import { TextInput } from "react-native-gesture-handler";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { inputsEdges,inputsBackground, formularButtonSubmit } from '../../color';
import NewText from './TextObj';
import NewLinearInputsObj from './LinearInputsObj';

const NewParagraf = ({prop}:any) =>{
    const {inputs,id,handleParagrafAnyUpdate,masterText,handleParagrafMasterTextChange} = prop
    const [counter,changeCounter] = useState(0)

    const ParafaddInputHandler = () => {
        changeCounter(counter+1)
        const code = "1"+counter
        const newInputs = [...inputs,{ id: code, value: '' }]
        handleParagrafAnyUpdate(newInputs,prop.id)
    };
    const ParafaddLinearInputsHandler = () => {
        changeCounter(counter + 1)
        const code = "4" + counter
        const newInputs = [...inputs,{ id: code, value: [''] }]
        handleParagrafAnyUpdate(newInputs,prop.id)
    }

    const ParafhandleInputChange = (text:string, id:string) => {
        const newInputs = inputs.map((input:any) => {
            if (input.id === id) {
                return { ...input, value: text };
            }
            return input;
        });
        handleParagrafAnyUpdate(newInputs,prop.id)
    };
    const ParafHandleAddLinearInput = (id:string) =>{
        const newInputs = inputs.map((input: any) => {
            if (input.id == id)
                input.value.push('')
            return input
        })
        handleParagrafAnyUpdate(newInputs,prop.id)
    }
    const ParafHandlePopLastInputLinear = (id:string) =>{
        const newInputs = inputs.map((input: any) => {
            if (input.id == id)
                input.value.pop()
            return input
        })
        handleParagrafAnyUpdate(newInputs,prop.id)
    }
    const ParafhandleLinearInputChange = (text: string, id: string, poz: number) =>{
        const newInputs = inputs.map((input: any) => {
            if (input.id == id)
                input.value[poz] = text
            return input
        })
        handleParagrafAnyUpdate(newInputs,prop.id)
    }

    const deleteInputHandler = (id:string) => {
        const newInputs = inputs.filter((input:any) => input.id !== id);
        handleParagrafAnyUpdate(newInputs,prop.id)
    };

    return (
        <View style={styles.container}>
            <TextInput value = {masterText} multiline={true} onChangeText = {text=>{handleParagrafMasterTextChange(text,prop.id)}} style={styles.masterinput}/>
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{flex:1,flexDirection:'row',height:40,alignItems: 'center',paddingBottom: 15,justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress={ParafaddInputHandler} style={styles.actionBtnstyle}><Text style={styles.textCenter}>Text</Text></TouchableOpacity>
                    <TouchableOpacity onPress={ParafaddLinearInputsHandler} style={styles.actionBtnstyle}><Text style={styles.textCenter}>Texte Liniare</Text></TouchableOpacity>
                </View>
                
                <ScrollView>
                {inputs.map((input:any, index:number) => (
                    <View key={input.id} style={styles.inputContainer}>
                        {input.id[0]== "1" ?<NewText prop={{text:input.value,index:index,id:input.id,handleInputChange:ParafhandleInputChange}}/>:''}
                        {input.id[0]== "4" ?<NewLinearInputsObj prop={{values:input.value,index:index,id:input.id,handleAnyLinearInputsChange:ParafhandleLinearInputChange,HandleAddLinearInput:ParafHandleAddLinearInput,HandlePopLastInputLinear:ParafHandlePopLastInputLinear}}/>:''}
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => deleteInputHandler(input.id)}
                        >
                            <Text style={styles.deleteButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:'white',
        width:'90%',
        borderRadius:20,
    },
    inputContainer: {
        width:'100%',
        marginBottom: 10,
        paddingLeft:15,
        paddingRight:15,
        flex:1,
        flexDirection:'row',
    },
    deleteButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        width:35,
        alignSelf: 'flex-start',
    },
    deleteButtonText: {
        color: 'grey',
        fontWeight: 'bold',
        justifyContent:'center',
        fontSize:17
    },
    addbutton:{
        width:'20%',
        flex:1,
        alignSelf:'flex-end',

    },
    masterinput: {
        width:'100%',
        borderColor: inputsEdges,
        backgroundColor:inputsBackground,
        borderWidth: 2,
        marginBottom:10,
        borderRadius:20,
        paddingStart:10,
        paddingTop:3,
        paddingEnd:10,
    },
    actionBtnstyle: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: formularButtonSubmit,
        width: 90,
        height: '100%',
        borderRadius: 10,
        marginStart: 10,
    },
    textCenter: {
        textAlign: 'center',
    }
});

export default NewParagraf