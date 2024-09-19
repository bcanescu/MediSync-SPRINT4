import {getStorage,ref, uploadBytes} from 'firebase/storage'
import { getApp } from 'firebase/app'

const ConvertTimeToString = () =>{
    let currTime = new Date()
    const year = currTime.getFullYear().toString();
    const month = (currTime.getMonth()+1<10?'0'+(currTime.getMonth()+1):(currTime.getMonth()+1).toString());
    const day = currTime.getDate()<10?'0'+currTime.getDate():currTime.getDate().toString();

    const hour = currTime.getHours()<10?'0'+currTime.getHours():currTime.getHours().toString();
    const minute = currTime.getMinutes()<10?'0'+currTime.getMinutes():currTime.getMinutes().toString();
    const second = currTime.getSeconds()<10?'0'+currTime.getSeconds():currTime.getSeconds().toString();

    const key = `${day}${month}${year}${hour}${minute}${second}`;
    return key
}

const SubmitAnyForm = ({inputs,titlu,PrescriptionOrForm,email,RetetaPathSpecific}:any) =>{
    const app = getApp()
    const storage = getStorage(app,'gs://medisync-4ec40.appspot.com')

    let path = `/${email}/ISTORICMEDICAL`
    const jsonfile = JSON.stringify({titlu:titlu,inputs:inputs})
    const blobfile = new Blob([jsonfile],{type:"application/json"})

    if(PrescriptionOrForm===false)
    {
        path = path.concat(`/${ConvertTimeToString()}/formular.json`)
        const RefFormular = ref(storage,path)
        uploadBytes(RefFormular,blobfile).then((snapshot)=>{console.log(snapshot)})
    }
    else
    {
        const Retetapath = RetetaPathSpecific.concat(`/RETETE/${ConvertTimeToString()}.json`)
        const RefReteta = ref(storage,Retetapath)
        uploadBytes(RefReteta,blobfile).then((snapshot)=>{console.log(snapshot)})
    }

}

export default SubmitAnyForm