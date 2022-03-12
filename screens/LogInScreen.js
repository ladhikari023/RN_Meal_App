import React, { useState } from 'react'
import { View, Text, StyleSheet,Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function LogInScreen(props) {

    const [name,setName] = useState('')
    const [showName,setShowName] = useState('')

    const setData = async () => {
        if (name.length == 0){
            Alert.alert('Warning!', 'Please enter username')
        }else{
            try{
                await AsyncStorage.setItem('UserName',name);
                console.log('Redirected')
            }
            catch(error){
                console.log('error')
            }
        }
    }

    const updateName = () => {
        try{
            AsyncStorage.getItem('UserName')
            .then(
                value => {
                    if(value != null) setShowName(value);
                }
            )
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <View style={styles.screen}>
            <Image 
                style={styles.logo} 
                source={{uri: 'https://cengage.force.com/resource/1607465003000/loginIcon'}}
            />
            <Text style={styles.text}>
                Login Screen
            </Text>
            <Text style={styles.text}>
                {showName}
            </Text>
            <TextInput 
                style={styles.textInput} 
                placeholder={'Username'} 
                textAlign={'center'}
                onChangeText={(value) => setName(value)}
            />
            <TextInput style={styles.textInput} placeholder={'Password'} textAlign={'center'} />
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>{setData()}}
                
            >
                <Text style={{fontSize: 20, color: 'white'}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>{updateName()}}
            >
                <Text style={{fontSize: 20, color: 'white'}}>UPDATE</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems:'center',
        backgroundColor: '#0080ff'
    },
    logo: {
        width:  100,
        height: 100,
        marginTop: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 40,
        color: 'white',
        marginBottom: 50,
        fontFamily: 'huballi'
    },
    textInput: {
        width:'80%',
        height: 50,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        marginVertical: 10,
        fontSize: 17,
    },
    btn: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        paddingVertical: 15,
        paddingHorizontal: 45,
        borderRadius: 5,
    }
})

export default LogInScreen