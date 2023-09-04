import {View, Text} from 'react-native'
import React from 'react'
import styleGlobal from '../../../globalStyle'
import { LinearGradient } from 'expo-linear-gradient';
import Delivery from '../../../assets/delivery.svg'
import Check from '../../../assets/check.svg'
import Close from '../../../assets/close.svg'

export function NewDelivery(){
  return (
    <View style={{justifyContent:'center',height:'100%', backgroundColor:'#fff'}}>
      <View style={{margin:20}}>
      <View style={{flexDirection:'row'}}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{fontFamily:styleGlobal.fonts.regular,fontSize:14,color:'#707070'}}>Tempo Estimado</Text>
          <Text style={{fontFamily:styleGlobal.fonts.bold,fontSize:20,color:'#FA641F'}}> 30 Min</Text>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{fontFamily:styleGlobal.fonts.regular,fontSize:14,color:'#707070'}}>Número de ID</Text>
          <Text style={{fontFamily:styleGlobal.fonts.bold,fontSize:20,color:'#FA641F'}}> #6789</Text>
        </View>
      </View>
      <View style={{height: 1,backgroundColor: '#ccc', marginEnd: 24, marginTop: 12, marginLeft: 8}}></View>
      <View style={{marginTop: 20, alignItems:'center'}}>
        <View>
          <Text style={{fontFamily:styleGlobal.fonts.regular,fontSize:14,color:'#707070', alignSelf:'center'}}>Valor da Entrega</Text>
          <Text style={{fontFamily:styleGlobal.fonts.bold,fontSize:35,color:'#FA641F',alignSelf:'center'}}>R$ 13,75</Text>
        </View>
      </View>
      <View>
      <LinearGradient colors={['#FF881F', '#FA641E']} start={{x:0,y:0}} end={{x:1,y:0}} style={{borderRadius:16,  marginRight:24, marginTop: 28}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Delivery style={{marginLeft:20}}/>
            <View style={{padding:8, marginLeft:10}}>
              <Text style={{fontFamily:styleGlobal.fonts.mediumRoboto,fontSize:18,color:'#fff'}}>Entrega</Text>
              <Text style={{fontFamily:styleGlobal.fonts.regularRoboto,fontSize:12,color:'#fff'}}>Percurso Total: 8km</Text>
            </View>
          </View>
          </LinearGradient>
          <View>
            <View>
            <View style={{width: 2,height:40,backgroundColor: '#ccc', marginEnd: 24, marginLeft: 32}}/>
            <View style={{flexDirection:'row',marginLeft: 25}}>
            <LinearGradient colors={['#FF881F', '#FA641E']} start={{x:0,y:0}} end={{x:1,y:0}} style={{borderRadius:16,width:16,height:16}}/>
            <Text style={{fontFamily:styleGlobal.fonts.medium,fontSize:18,color:'#FA641F',marginLeft:10,marginTop:-6}}>Coleta</Text>
            </View>
            <View style={{width: 2,height:20,backgroundColor: '#ccc', marginEnd: 24, marginLeft: 32, marginTop:-8}}/>
            <View style={{flexDirection:'row'}}>
              <View>
              <View style={{width:10,height:10,borderWidth:1,borderRadius:16,borderColor:'#FA641F', marginLeft:28}}/>
              <View style={{width: 2,height:50,backgroundColor: '#ccc', marginEnd: 20, marginLeft: 32}}/>
              </View>
              <View style={{marginTop:-4}}>
                <Text style={{fontFamily:styleGlobal.fonts.regular,fontSize:14,color:'#707070'}}>Restaurante Recanto da Peixada</Text>
                <Text style={{fontFamily:styleGlobal.fonts.regular,fontSize:14,color:'#707070'}}>Distancia: 2km</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',marginLeft: 25}}>
            <LinearGradient colors={['#FF881F', '#FA641E']} start={{x:0,y:0}} end={{x:1,y:0}} style={{borderRadius:16,width:16,height:16}}/>
            <Text style={{fontFamily:styleGlobal.fonts.medium,fontSize:18,color:'#FA641F',marginLeft:10,marginTop:-6}}>Entrega</Text>
            </View>
            <View style={{width: 2,height:20,backgroundColor: '#ccc', marginEnd: 24, marginLeft: 32, marginTop:-8}}/>
            <View style={{flexDirection:'row'}}>
              <View>
              <View style={{width:10,height:10,borderWidth:1,borderRadius:16,borderColor:'#FA641F', marginLeft:28}}/>
              </View>
              <View style={{marginTop:-4, marginLeft:16}}>
                <Text style={{fontFamily:styleGlobal.fonts.regular,fontSize:14,color:'#707070'}}>Av: Cabo dos Soldados - Caranã</Text>
                <Text style={{fontFamily:styleGlobal.fonts.regular,fontSize:14,color:'#707070'}}>Distancia: 6km</Text>
              </View>
            </View>
            </View>
          </View>
      </View>

      <View>
      <LinearGradient colors={['#FF881F', '#FA641E']} start={{x:0,y:0}} end={{x:1,y:0}} style={{borderRadius:16,  marginRight:24, marginTop: 28}}>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:48}}>
            <Check/>
            <Text style={{fontFamily:styleGlobal.fonts.mediumRoboto,fontSize:18,color:'#fff', marginLeft:4}}>Aceitar</Text>
          </View>
          </LinearGradient>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', borderWidth:1, borderRadius:16, marginRight:28,height:48,borderColor:'#E8453E', marginTop:20}}>
            <Close/>
            <Text style={{color:'#E8453E',fontFamily:styleGlobal.fonts.medium,fontSize:16,marginLeft:4}}>Rejeitar</Text>
          </View>
      </View>
      </View>
      
    </View>
  )
}