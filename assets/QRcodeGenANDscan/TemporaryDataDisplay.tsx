import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import PrintComponentFormular from '../ComponenteTypeFormToPrint/PrintComponentFormular';
import { StyleSheet, View } from 'react-native';
import AfiseazaReteteTreptat from './TemporaryAfiseazaReteteTreptar';
import GetInfoIstoricUser from '../GetInfoIstoricUser';
import { formularBackground} from '../color';

const TemporaryDataDisplay = ({ prop }: any) => {

    const { email } = prop
    const [ComponentFormularANDRetete, changeFormularANDRetete] = useState<object[]>([])


    useEffect(() => {
        const fetchPaths = async () => {
            changeFormularANDRetete(await GetInfoIstoricUser(email))
        }
        fetchPaths()
    }, []);

    return <View style={{paddingRight:15,paddingLeft:15,paddingTop:30,backgroundColor:'white'}}>
        <FlatList
        data={ComponentFormularANDRetete}
        renderItem={({ index, item }: any) => {
            const { Retete, formular} = item;
            return <View key={index} style={styles.FormANDRetete}>
                <View style={{ width: '100%', backgroundColor: 'white', borderRadius: 30, paddingLeft: 5 }}>
                    <PrintComponentFormular DataToPrint={{ masterInputs: formular, index: index }} />
                </View>
                <AfiseazaReteteTreptat DataToPrint={{ Retete: Retete }} />
            </View>
        }}
        keyExtractor={(item: any) => item.FolderPath}
        removeClippedSubviews={true}
        maxToRenderPerBatch={2}
        updateCellsBatchingPeriod={10000}
    />
    <View style={{height:'10%'}}></View>
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
    FormANDRetete: {
        backgroundColor: formularBackground,
        marginBottom: 10,
        borderRadius: 30,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
    },
})


export default TemporaryDataDisplay