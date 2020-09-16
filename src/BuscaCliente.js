import React,{useState} from 'react'
import {Text, View, TextInput, Button, Alert} from 'react-native'

export default function Busca (props){

    const [id, setId] = useState("")

    return(
        <View>
            <Text>Informe o id do cliente:</Text>
            <TextInput  
                placeholder="Digite o id do cliente"
                value={id}
                onChangeText={id => setId(id)}
            />
            <Button title="Buscar" onPress={() => {
                props.navigation.navigate("Lista", {idCliente:id})}}/>
        </View>
    );
}

