import {View, Text, TouchableOpacity,TextInput} from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styleGlobal from '../../../globalStyle'
import { Feather } from "@expo/vector-icons";
import Qrcode from '../../../assets/qrcode.svg'
import { useNavigation } from "@react-navigation/native";

export function Home(){

  const navigation = useNavigation();

  function navegar(){
    navigation.navigate('NewDelivery')
  }

  const [eye, setEye] = useState(true)

  return (
    <View style={{height:'100%', backgroundColor:'#fff', justifyContent:'center'}}>
      <View style={{margin:35}}>
        <View>
          <LinearGradient colors={['#FF881F', '#FA641E']} start={{x:0,y:0}} end={{x:1,y:0}} style={{borderRadius:16}}>
            <View>
              <View style={{flexDirection:'row', margin: 20}}>
                <Text style={{fontFamily:styleGlobal.fonts.medium,fontSize:16,color:'#fff'}}>Ganhos do Dia</Text>
                <Text style={{fontFamily:styleGlobal.fonts.medium,fontSize:16,color:'#fff', position:'absolute', right:0}}>29/07</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection:'row', margin: 20, marginTop: -8}}>
                <Text style={{fontFamily:styleGlobal.fonts.boldRoboto,fontSize:30,color:'#fff'}}>R$ 150</Text>
                <View style={{flex:1}}>
                  <TouchableOpacity style={{alignSelf:'flex-end',padding:10}} onPress={()=>{
                setEye(!eye)}}>
                <Feather
                  style={{}}
                  name={eye ? "eye" : 'eye-off'}
                  size={24}
                  color={"#fff"}
              />
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={{marginTop: 20,borderWidth:1,borderRadius:16, borderColor:'#ccc',borderBottomWidth:3,borderEndWidth:3}}>
          <View>
            <Text style={{fontFamily:styleGlobal.fonts.bold,fontSize:16,color:'#000', marginLeft:8, marginTop:10}}>Resumos das Entregas</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:16, marginBottom:40}}>
            <View style={{flex:1, borderWidth:1,borderRadius:16, borderColor:'#F0F0F0',marginLeft:8,alignItems:'center'}}>
              <View>
                <Text style={{fontFamily:styleGlobal.fonts.regular,fontSize:11,color:'#9F9F9F'}}>Aceitas</Text>
                <Text style={{fontFamily:styleGlobal.fonts.medium,fontSize:40,color:'#000',alignSelf:'center'}}>15</Text>
              </View>
            </View>
            <View style={{flex:1, borderWidth:1,borderRadius:16, borderColor:'#F0F0F0', marginLeft:4,marginRight:4,alignItems:'center'}}>
            <View>
                <Text style={{fontFamily:styleGlobal.fonts.regular,fontSize:11,color:'#9F9F9F'}}>Rejeitadas</Text>
                <Text style={{fontFamily:styleGlobal.fonts.medium,fontSize:40,color:'#000',alignSelf:'center'}}>5</Text>
              </View>
            </View>
            <View style={{flex:1, borderWidth:1,borderRadius:16, borderColor:'#F0F0F0', marginEnd:8, alignItems:'center'}}>
            <View>
                <Text style={{fontFamily:styleGlobal.fonts.regular,fontSize:11,color:'#9F9F9F'}}>Total</Text>
                <Text style={{fontFamily:styleGlobal.fonts.medium,fontSize:40,color:'#000',alignSelf:'center'}}>20</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{marginTop:40,borderWidth:1,borderRadius:16, borderColor:'#ccc',borderBottomWidth:3,borderEndWidth:3}}>
          <View style={{marginLeft:10, marginRight:10}}>
          <Text style={{marginLeft:8,fontFamily:styleGlobal.fonts.bold,fontSize:16,color:'#000', marginTop:10}}>Iniciar Nova Entrega</Text>
          <Text style={{marginLeft:8,fontFamily:styleGlobal.fonts.regular,fontSize:12,color:'#707070'}}>Número de Identificação</Text>
          <View style={{flexDirection:'row'}}>
            <TextInput style={{flex:1,borderWidth:1, borderRadius:16,borderColor:'#FF671F',height:44, marginTop:4}}/>
            <LinearGradient colors={['#FF881F', '#FA641E']} start={{x:0,y:0}} end={{x:1,y:0}} style={{borderRadius:16, marginLeft:10}}>
            <TouchableOpacity onPress={navegar} style={{paddingLeft:16, paddingTop:10, paddingEnd:16}}><Text style={{fontFamily:styleGlobal.fonts.medium,fontSize:17,color:'#fff' }}>OK</Text></TouchableOpacity>
            </LinearGradient>
          </View>
          <LinearGradient colors={['#FF881F', '#FA641E']} start={{x:0,y:0}} end={{x:1,y:0}} style={{borderRadius:16, marginTop:20, marginBottom:24}}>
            <View style={{flexDirection:'row',height:46, alignItems:'center', justifyContent:'center'}}>
              <Qrcode/>
              <Text style={{marginLeft:8,fontFamily:styleGlobal.fonts.medium,fontSize:16,color:'#fff'}}>Escanear QrCode</Text>
            </View>
          </LinearGradient>
          </View>
          
        </View>
      </View>
    </View>
  )
}