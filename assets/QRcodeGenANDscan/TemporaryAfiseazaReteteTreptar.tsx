import React from "react"
import { useState } from "react"
import { View, Text, TouchableOpacity,StyleSheet } from "react-native"
import PrintComponentReteta from "../ComponenteTypeFormToPrint/PrintComponentReteta"
import { formularButtonSubmit } from "../color"


const TemporaryAfiseazaReteteTreptat = ({ DataToPrint }: any) => {
    const {Retete} = DataToPrint

    const [nrReteteDeAfisat, changeNrAfisare] = useState<number>(0)

    return <View>
        <View >
        <Text style={{ width: '100%' ,textAlign:'center',paddingTop:5,paddingBottom:5}}>La acest formular sunt atasate {Retete.length} Prescriptii</Text>
            <TouchableOpacity style={styles.showMoreBTN} onPress={() => {
                if (nrReteteDeAfisat == 0)
                    changeNrAfisare(Math.min(nrReteteDeAfisat + 2, Retete.length))
                else
                    changeNrAfisare(0)
            }}>{nrReteteDeAfisat === 0 ? <Text style={{textAlign:'center',fontSize:17}}>Afiseaza</Text> : <Text style={{textAlign:'center'}}>Inchide Prescriptiile</Text>}
            </TouchableOpacity>
        </View>
        <View>
            {
                Retete.map((Reteta: any, index: number) => {
                    if (index < nrReteteDeAfisat)
                        return <View style={{backgroundColor:'white',borderRadius:30,marginBottom:15}}>
                            <PrintComponentReteta DataToPrint={{ masterInputs: Reteta.value }} />
                        </View>
                })
            }
        </View>
        {nrReteteDeAfisat !== Retete.length&&nrReteteDeAfisat!==0 ? 
        <TouchableOpacity style={styles.showMoreBTN} onPress={() => { changeNrAfisare(Math.min(nrReteteDeAfisat + 2, Retete.length)) }}>
            <Text style={{textAlign:'center'}}>Afiseaza mai multe</Text>
        </TouchableOpacity> :
            <></>
        }
    </View>

}

const styles = StyleSheet.create({
    showMoreBTN:{
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: formularButtonSubmit,
        width: 90,
        height: 40,
        borderRadius: 10,
        marginBottom:10,
}
})

export default TemporaryAfiseazaReteteTreptat