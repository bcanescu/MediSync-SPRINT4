import Formular from "./FormularAnalize";
import React, { useState } from "react";
import Prescriptie from "./Prescriptie";
import { View, StyleSheet, TouchableOpacity, Text, Modal,Image } from 'react-native';
import { formularBackground, formularButtonSubmit } from '../color'
import SubmitAnyForm from "./SubmitAnyForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import GetDataForUserChooseModal from "./ModalSelector/GetDataForUserChooseModal";

const GetCurrDate = () =>{
    let currTime = new Date()
    const year = currTime.getFullYear().toString();
    const month = (currTime.getMonth()+1<10?'0'+(currTime.getMonth()+1):(currTime.getMonth()+1).toString());
    const day = currTime.getDate()<10?'0'+currTime.getDate():currTime.getDate().toString();

    const date = `${day}/${month}/${year}`;
    return date
}

const ChooseWhich = ({ email }: any) => {

    email = 'cineva@gmail.com'
    const nav = useNavigation<NativeStackNavigationProp<any>>();

    const [PrescriptionOrForm, changePrescriptionOrForm] = useState<boolean>(false)
    const [titlu, changeTitlu] = useState('')
    const [inputsFormular, setInputsFormular] = useState<object[]>([]);
    const [inputsReteta, setInputsReteta] = useState<object[]>([
        { id: 'unitate', val: '' }, { id: 'data', val: GetCurrDate() }, { id: 'serie', val: '' }, { id: 'nr', val: '' }, { id: 'DateP', val: '' }
        , { id: 'varsta', val: '' }, { id: 'CNP', val: '' }, { id: 'diagnostic', val: '' }, { id: 'detalimed', val: '' }
        , { id: 'dencomert', val: '' }, { id: 'concentratia', val: '' }, { id: 'durata', val: '' }, { id: 'numedoc', val: '' }
        , { id: 'codparaf', val: '' }
    ]);
    const [isModalActive, ChangeModalState] = useState<boolean>(false)
    const [pathRetetaStorage,changePath]  = useState<string>('')

    return <View style={styles.container}>
        <View style={styles.spacebetweentop}></View>
        <View style={styles.twoOptionsContainer}>
            <TouchableOpacity style={[styles.FormularBTN, (PrescriptionOrForm === false ? styles.Selected : styles.NotSelected)]}
                onPress={() => { changePrescriptionOrForm(false) }}>
                <Text style={styles.textalignment}>Formular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.RetetaBTN, (PrescriptionOrForm === false ? styles.NotSelected : styles.Selected)]}
                onPress={() => { changePrescriptionOrForm(true) }}>
                <Text style={styles.textalignment}>Prescriptie</Text>
            </TouchableOpacity>
        </View>
        <Modal
            visible={isModalActive && PrescriptionOrForm}
            onRequestClose={()=>{ChangeModalState(false)}}
        >
            <View>
            <View style={{height:40,flexDirection:'row-reverse',paddingTop:5}}>
                <TouchableOpacity style={styles.leaveModalBTN} onPress={()=>{ChangeModalState(false)}}>
                    <Image source={require('../icons/cancel_icon.jpg')} style={styles.Imgstyle} />
                </TouchableOpacity>
            </View>
            <Text style={{alignSelf:'center',fontSize:16,marginBottom:5}}>Selecta-ti carui formular sa i se ataseze reteta</Text>    
            <View style={{height:'94%'}}>
                <GetDataForUserChooseModal prop = {{email:email,changePath:changePath,pathRetetaStorage:pathRetetaStorage}} />
            </View>
            <TouchableOpacity 
                onPress={()=>{
                    SubmitAnyForm({ inputs: inputsReteta, titlu: 'PRESCRIPȚIE MEDICALĂ', PrescriptionOrForm: PrescriptionOrForm, email: email,RetetaPathSpecific:pathRetetaStorage })
                    nav.pop()
                }}
                >
                    <Text>Adaugati subscriptia</Text>
                </TouchableOpacity>
            </View>    
        </Modal>
        <View style={{ height: '79%' }}>
            {PrescriptionOrForm === false ?
                <Formular prop={{
                    inputs: inputsFormular
                    , setInputs: setInputsFormular
                    , titlu: titlu
                    , changeTitlu: changeTitlu
                }} />
                : <Prescriptie prop={{
                    inputs: inputsReteta
                    , setInputs: setInputsReteta
                    , titlu: titlu
                    , changeTitlu: changeTitlu
                }} />}
        </View>
        <View style={{ height: '12%', backgroundColor: formularBackground }}>
            <TouchableOpacity style={styles.submit} onPress={() => {
                if (PrescriptionOrForm === false)
                    {SubmitAnyForm({ inputs: inputsFormular, titlu: titlu, PrescriptionOrForm: PrescriptionOrForm, email: email })
                    nav.pop()
                    }
                else
                   ChangeModalState(true)
            }}>
                <Text style={{ textAlign: 'center', fontSize: 16 }}>Trimite</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    twoOptionsContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        flexDirection: 'row',
        borderRadius: 30,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    FormularBTN: {
        width: '50%',
        direction: 'ltr',
    },
    RetetaBTN: {
        width: '50%',
        direction: 'rtl',
    },
    textalignment: {
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
    },
    Selected: {
        backgroundColor: formularBackground,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    NotSelected: {
        opacity: 0.5,
    },
    submit: {
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: formularButtonSubmit,
        width: '40%',
        height: '45%',
        borderRadius: 10,
    },
    spacebetweentop:{
        height:'3%',
    },
    leaveModalBTN:{
        marginEnd:10,
        height: 35,
        width: 35,
        backgroundColor: 'lime',
        borderRadius: 10,
        justifyContent:'center',
    },
    Imgstyle: {
        height: 25,
        width: 25,
        alignSelf: 'center',
    },
})

export default ChooseWhich

