import {View, Text, Button} from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from "@react-navigation/native";
import Logo from '../../../assets/pigz-logotipo.svg'
import styleGlobal from './../../../globalStyle'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import Google from '../../../assets/logo-google.svg'

export function SignIn(){

  const navigation = useNavigation();

  function navegar(){
    navigation.navigate('Navigation')
  }
  const [eye, setEye] = useState(true)

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{alignItems:'center'}}>
        <Logo/>
        <Text style={{fontSize:18, fontFamily: styleGlobal.fonts.semiBold}}>Para entregadores</Text>
      </View>
      <View style={{marginLeft: 23}}>
        <Text style={{fontSize: 16, 
          fontFamily:styleGlobal.fonts.semiBold}}>Login</Text>
        <Text style={{fontSize: 13, 
          fontFamily:styleGlobal.fonts.regular, 
          color:'#676767',
          marginTop: 10}}>Email ou Telefone</Text>
        <TextInput style={{
          borderWidth: 1, 
          height:50,
          borderRadius:16, 
          borderColor:'#FA641E', 
          padding: 10, 
          marginEnd: 24, 
          fontSize: 14}} 
          placeholder='example@pigz.com.br'/>
        <Text style={{fontSize: 13, 
          fontFamily:styleGlobal.fonts.regular, 
          color:'#676767',
          marginTop: 10}}>Senha</Text>
        <View style={{flexDirection:'row'}}>
            <TextInput style={{
              flex:1,
              height:50,
              borderWidth: 1, 
              borderRadius:16, 
              borderColor:"#FA641E", 
              paddingLeft: 10,
              fontSize: 14,
              marginEnd: 24}}
              secureTextEntry={eye} 
              placeholder='********'/>
              <View style={{flexDirection:'row', position:'absolute',width:'100%', justifyContent:'flex-end'}}>
              <TouchableOpacity style={{width: 50,height:50,right:20, alignItems:'center',justifyContent:'center', marginRight:8}} onPress={()=>{
                setEye(!eye)}}>
                <Feather
                  style={{}}
                  name={eye ? "eye" : 'eye-off'}
                  size={24}
                  color={"#FA641E"}
              />
          </TouchableOpacity>
              </View>
              
        </View>
        <TouchableOpacity>
        <Text style={{alignSelf:'flex-start',marginTop: 20,fontFamily:styleGlobal.fonts.regular, color:'#676767',fontSize:13,textDecorationLine:'underline'}}>Esqueci minha senha</Text>
        </TouchableOpacity>
        
        <View>
        <LinearGradient colors={['#FF881F', '#FA641E']} start={{x:0,y:0}} end={{x:1,y:0}} style={{borderRadius:16,  marginRight:24, marginTop: 28}}>
          <TouchableOpacity style={{height:48,justifyContent:'center',alignItems:'center'}} onPress={navegar}>
            <Text style={{color:'#fff', fontFamily:styleGlobal.fonts.medium, fontSize:16}}>Entrar</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center', margin:20}}>
          <Text style={{fontSize:13,color:'#676767', fontFamily:styleGlobal.fonts.medium, paddingEnd:8}}>Não tem uma Conta?</Text>
          <TouchableOpacity>
            <Text style={{color:'#FA641E'}}>Criar agora!</Text>
            </TouchableOpacity>          
        </View>
        <View style={{marginTop: 50}}>
          <View style={{flexDirection:'row'}}>
          <Text style={{color: '#333333', fontFamily: styleGlobal.fonts.semiBold}}>Entar com</Text>
          <View style={{flex: 1,height: 1,backgroundColor: '#676767', marginEnd: 24, marginTop: 12, marginLeft: 8}}></View>
          </View>
          <View>
            <TouchableOpacity style={{borderWidth: 1, borderRadius:16, justifyContent:'center',alignItems:'center', marginRight: 24,marginTop:24, height: 48, borderColor:'#9F9F9F'}} onPress={navegar}>
              <Text style={{fontFamily:styleGlobal.fonts.medium, fontSize:16, color:'#676767'}}>Continuar com o Google</Text>
              <Google style={{position:'absolute', alignSelf:'flex-start', marginLeft: 16}}/>
              </TouchableOpacity>
              
          </View>
        </View>
      </View>
      
      
    </View>
  )
}