import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import PrintComponentFormular from '../../ComponenteTypeFormToPrint/PrintComponentFormular';
import { Pressable, StyleSheet, View } from 'react-native';
import AfiseazaReteteTreptat from './AfiseazaReteteTreptar';
import GetInfoIstoricUser from '../../GetInfoIstoricUser';
import { formularBackground,SelectedBorderColor } from '../../color';

const GetDataForUserChooseModal = ({ prop }: any) => {

    const { email, changePath, pathRetetaStorage } = prop
    const [ComponentFormularANDRetete, changeFormularANDRetete] = useState<object[]>([])


    useEffect(() => {
        const fetchPaths = async () => {
            changeFormularANDRetete(await GetInfoIstoricUser(email))
        }
        fetchPaths()
    }, []);

    return <View style={{paddingRight:15,paddingLeft:15}}><FlatList
        data={ComponentFormularANDRetete}
        renderItem={({ index, item }: any) => {
            const { Retete, formular, FolderPath } = item;
            return <Pressable key={index} onPress={() => { changePath(FolderPath) }} style={[styles.FormANDRetete,(pathRetetaStorage == FolderPath ? styles.Selected : styles.NotSelected)]}>
                <View style={{ width: '100%', backgroundColor: 'white', borderRadius: 30, paddingLeft: 5 }}>
                    <PrintComponentFormular DataToPrint={{ masterInputs: formular, index: index }} />
                </View>
                <AfiseazaReteteTreptat DataToPrint={{ Retete: Retete }} />
            </Pressable>
        }}
        keyExtractor={(item: any) => item.FolderPath}
        removeClippedSubviews={true}
        maxToRenderPerBatch={2}
        updateCellsBatchingPeriod={10000}
    />
    <View style={{height:'30%'}}></View>
    </View>

    /*<View>
        {
            ComponentFormularANDRetete.map((component: any, index: number) => {
                const { Retete, formular, FolderPath } = component
                return <Pressable key={index} onPress={() => { changePath(FolderPath) }} style={[(pathRetetaStorage==FolderPath?styles.Selected:styles.NotSelected),{ borderColor:'blue',borderWidth:10, marginBottom: 10 }]}>
                    <PrintComponentFormular DataToPrint={{ masterInputs: formular,index: index }} />
                    <AfiseazaReteteTreptat DataToPrint={{Retete:Retete}}/>
                </Pressable>
            })
        }
    </View>*/
}

const styles = StyleSheet.create({
    Selected: {
        borderWidth:2,
        borderColor:SelectedBorderColor,
        elevation:4,
        shadowColor:SelectedBorderColor,
    },
    NotSelected: {

    },
    FormANDRetete: {
        backgroundColor: formularBackground,
        marginBottom: 10,
        borderRadius: 30,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
    },
})


export default GetDataForUserChooseModal