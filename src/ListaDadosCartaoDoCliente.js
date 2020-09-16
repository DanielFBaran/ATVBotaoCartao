import React,{useState, useEffect} from 'react'
import {Text, View, Alert, Button, FlatList} from 'react-native'

export default function Lista2 (props){
    const id = props.route.params.idCliente
    const [data, setData] = useState([])
    const string = 'https://cartoes-piotto.herokuapp.com/api/cartao/cliente/'+id 
    useEffect(() => {
        fetch(string, {
        method: 'GET',
        headers: {
            'Accept' : 'application/json',
            'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDg0ODY4MjAwMiIsInJvbGUiOiJST0xFX0VYQ0xVU0FPIiwiY3JlYXRlZCI6MTYwMDIxMzEzNDcwMiwiZXhwIjoxNjAwODE3OTM0fQ.n-WcLGNWsSThswAc7ISPb6sMHli-5-vRJmcqXK9nOMHm6CyBktCPBHGQxkVQpl7uMkOrGU2FbijPA9A6sEsblw'
        }
    })
    .then((response) => {   
        if(!response.ok){
            if(response.status == 400){
                Alert.alert("Cartao nao encontrado!");
                props.navigation.goBack()
            }
        }
        return response.json()
    })
    .then((json) => {
            setData(json.dados)
        }
    )
    .catch((error) => {
        console.error(error)})
    }, []);

    if(data != null){
    return(
        <View style={{flex:1, padding: 24}}>
          <View style={{alignItems:'center'}}>
          <Text style={{fontSize:24, color:'blue', fontWeight:'bold'}}>Cartoes dos Clientes:</Text>
          </View>
            <FlatList
                data={data}
                keyExtractor={({id}) => id}
                renderItem={({item}) => (
                <Text>ID: {item.id} - Numero: {item.numero} - Vencimento: {item.dataValidade} - Bloqueado?: {item.bloqueado}</Text>
                )}
            />
            <Button title="Voltar" onPress={() => props.navigation.goBack()}/> 
        </View>
    );
                }  
}