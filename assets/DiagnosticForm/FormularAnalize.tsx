import React, {useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import NewText from './inputObjects/TextObj';
import NewParagraf from './inputObjects/ParagrafObj';
import NewBooleanInput from './inputObjects/BooleanObj';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { formularBackground, inputsBackground, inputsEdges, formularButtonSubmit } from '../color';
import NewLinearInputsObj from './inputObjects/LinearInputsObj';
import TemplateHematologie from './TemplatesFormulare/TemplateHematologie';
import TemplateBiochimie from './TemplatesFormulare/TemplateBiochimie';
import TemplateExamenUrina from './TemplatesFormulare/TemplateExamenUrina';
import TemplateImunologie from './TemplatesFormulare/TemplateImunologie';

const Formular = ({ prop }: any) => {
    const [counter, changeCounter] = useState(0)
    const { inputs, setInputs, titlu, changeTitlu } = prop
    const [activeBtn, changeBtn] = useState<boolean>(true)

    ///text structure: {id:code,value:string}
    ///paragraf structure: {id:code,masterText:string,value:[]}
    ///boolean structure: {id:code,valuebool:boolean,valuetext:string}
    ///linear inputs structure: {id:code,value:string[]}
    const addInputHandler = () => {
        changeCounter(counter + 1)
        const code: string = "1" + counter
        setInputs([...inputs, { id: code, value: '' }]);
    }
    const addParagrafHandler = () => {
        changeCounter(counter + 1)
        const code: string = "2" + counter
        setInputs([...inputs, { id: code, masterText: '', value: [] }]);
    }
    const addBooleanHandler = () => {
        changeCounter(counter + 1)
        const code: string = "3" + counter
        setInputs([...inputs, { id: code, valuetext: '', valuebool: 0 }]);
    }
    const addLinearInputsHandler = () => {
        changeCounter(counter + 1)
        const code: string = "4" + counter
        setInputs([...inputs, { id: code, value: [''] }])
    }


    const HandleAddLinearInput = (id: string) => {
        const NewInputs = inputs.map((input: any) => {
            if (input.id == id)
                input.value.push('')
            return input
        })
        setInputs(NewInputs)
    }
    const HandlePopLastInputLinear = (id: string) => {
        const NewInputs = inputs.map((input: any) => {
            if (input.id == id)
                input.value.pop()
            return input
        })
        setInputs(NewInputs)
    }
    const handleAnyLinearInputsChange = (text: string, id: string, poz: number) => {
        const NewInputs = inputs.map((input: any) => {
            if (input.id == id)
                input.value[poz] = text
            return input
        })
        setInputs(NewInputs)
    }
    const handleParagrafMasterTextChange = (text: string, id: string) => {
        const newinputs = inputs.map((input: any) => {
            if (input.id == id)
                return { ...input, masterText: text }
            return input
        })
        setInputs(newinputs)
    }
    const handleBooleanTextChange = (text: string, id: string) => {
        const newinputs = inputs.map((input: any) => {
            if (input.id == id)
                return { ...input, valuetext: text }
            return input
        })
        setInputs(newinputs)
    }
    const handleBooleanChange = (val: number, id: string) => {
        const newinputs = inputs.map((input: any) => {
            if (input.id == id)
                return { ...input, valuebool: val }
            return input
        })
        setInputs(newinputs)
    }
    const handleInputChange = (text: string, id: string) => {
        const newInputs = inputs.map((input: any) => {
            if (input.id === id) {
                return { ...input, value: text };
            }
            return input;
        });
        setInputs(newInputs);
    };
    const handleParagrafAnyUpdate = (texts: [], id: string) => {
        const NewObjs = inputs.map((input: any) => {
            if (input.id === id)
                return { ...input, value: texts }
            return input
        })
        setInputs(NewObjs)
    }

    const deleteInputHandler = (id: string) => {
        setInputs(inputs.filter((input: any) => input.id !== id));
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { changeBtn(!activeBtn) }} style={styles.showBtnstyle}>
                    {activeBtn === false ?
                        <Text style={{ fontSize: 20, alignSelf: 'center'}}>+</Text> :
                        <Text style={{ fontSize: 20, alignSelf: 'center'}}>x</Text>
                    }
                </TouchableOpacity>
                {activeBtn === true ? <ScrollView style={styles.actionBtnContainer} horizontal={true}>
                    <TouchableOpacity onPress={addInputHandler} style={styles.actionBtnstyle}>
                        <Text style={[styles.textCenter,{fontSize:20}]}>Text</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addParagrafHandler} style={styles.actionBtnstyle}>
                        <Text style={[styles.textCenter,{fontSize:18}]}>Paragraph</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addBooleanHandler} style={styles.actionBtnstyle}>
                        <Text style={[styles.textCenter,{fontSize:16}]}>Text Da/Nu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addLinearInputsHandler} style={styles.actionBtnstyle}>
                        <Text style={[styles.textCenter,{fontSize:15}]}>Texte Liniare</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        changeCounter(counter + 1)
                        TemplateHematologie(inputs, setInputs, "2" + counter)
                    }}
                        style={styles.actionBtnstyle}>
                        <Text style={styles.textCenter}>Schita Hematologie</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        changeCounter(counter + 1)
                        TemplateBiochimie(inputs, setInputs, "2" + counter)
                    }}
                        style={styles.actionBtnstyle}>
                        <Text style={styles.textCenter}>Schita BioChimie</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        changeCounter(counter + 1)
                        TemplateExamenUrina(inputs, setInputs, "2" + counter)
                    }}
                        style={styles.actionBtnstyle}>
                        <Text style={styles.textCenter}>Schita Examen Urina</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        changeCounter(counter + 1)
                        TemplateImunologie(inputs, setInputs, "2" + counter)
                    }}
                        style={styles.actionBtnstyle}>
                        <Text style={styles.textCenter}>Schita Imunologie</Text>
                    </TouchableOpacity>
                </ScrollView> : <></>
                }
            </View>
            <TextInput multiline={true} placeholder="Titlu document" value={titlu} onChangeText={text => { changeTitlu(text) }} style={styles.titlu} />
            <View style={{ width: '100%', height: '78%' }}>
                <FlatList
                    data={inputs}
                    renderItem={({index,item}:any) => {
                        
                        return <View key={item.id} style={styles.inputContainer}>
                            {item.id[0] == "1" ? <NewText prop={{ text: item.value, index: index, id: item.id, handleInputChange: handleInputChange }} /> : ''}
                            {item.id[0] == "2" ? <NewParagraf prop={{ inputs: item.value, id: item.id, handleParagrafAnyUpdate: handleParagrafAnyUpdate, masterText: item.masterText, handleParagrafMasterTextChange: handleParagrafMasterTextChange }} /> : ''}
                            {item.id[0] == "3" ? <NewBooleanInput prop={{ valuebool: item.valuebool, valuetext: item.valuetext, id: item.id, handleBooleanChange: handleBooleanChange, handleBooleanTextChange: handleBooleanTextChange }} /> : ''}
                            {item.id[0] == "4" ? <NewLinearInputsObj prop={{ index: index, values: item.value, id: item.id, handleAnyLinearInputsChange: handleAnyLinearInputsChange, HandleAddLinearInput: HandleAddLinearInput, HandlePopLastInputLinear: HandlePopLastInputLinear }} /> : ''}
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => deleteInputHandler(item.id)}
                            >
                                <Text style={styles.deleteButtonText}>X</Text>
                            </TouchableOpacity>
                        </View>
                    }}
                    keyExtractor={input => input.id}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={2}
                    updateCellsBatchingPeriod={50000}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%',
        backgroundColor: formularBackground,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
    },
    titlu: {
        marginBottom: 15,
        textAlign: "center",
        marginRight: "10%",
        marginLeft: "10%",
        borderColor: inputsEdges,
        backgroundColor: inputsBackground,
        borderWidth: 2,
        borderRadius: 20,
        paddingStart:10,
        paddingTop:3,
        paddingEnd:10,
    },
    deleteButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: 35,
        alignSelf: 'flex-start',
    },
    deleteButtonText: {
        color: 'grey',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 17
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
        height: 70,
    },
    actionBtnContainer: {
        height: '100%',
    },
    actionBtnstyle: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: formularButtonSubmit,
        width: 90,
        height: '80%',
        borderRadius: 10,
        marginStart: 10,
    },
    showBtnstyle: {
        backgroundColor: formularButtonSubmit,
        height: 35,
        width: 35,
        borderRadius: 100,
        justifyContent:'center'
    },
    textCenter: {
        textAlign: 'center',
    }
});

export default Formular;