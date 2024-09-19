import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { getDatabase, ref, set, onValue, off, } from "firebase/database";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const FrameForQRcodeGeneration = ({ route }: { route: any }) => {

  const nav = useNavigation<NativeStackNavigationProp<any>>();

  const email = route.params.email
  const userID = route.params.userID

  const [secondsPast, changeSeconds] = useState(30)

  const changeQRstate = async (value: boolean) => {
    try {
      const dbRef = getDatabase();
      await set(ref(dbRef, `users/${userID}/IsQRactive`), value)
        .then(() => { console.log("everything good") })
        .catch((err) => { console.error(err) })
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const wait30sec = async () => {
      await changeQRstate(true)

      const interval = setInterval(() => {
        changeSeconds(prevSeconds => {
          if (prevSeconds <= 1) {
            clearInterval(interval);
            nav.pop();
            return 0;
          }
          return prevSeconds - 1
        }
        )
      }, 1000)

      const dbRef = getDatabase();
      onValue(ref(dbRef, `users/${userID}/IsQRactive`), (snapshot) => {
        const data: boolean = snapshot.val();
        if (data === false) {
          clearInterval(interval)
          nav.pop();
        }
      });

      return () => {
        clearInterval(interval)
        changeQRstate(false)
      }
    }

    wait30sec()
  }, [])

  return (
    <View>
      <View style={{height:'100%',alignItems:'center',justifyContent:'center'}}>
      <QRCode
        value={email + " " + userID}
        size={300}
        backgroundColor="white"
        color="black"
      />
      <Text>{secondsPast}</Text>
      </View>
    </View>
  );
};

export default FrameForQRcodeGeneration;
