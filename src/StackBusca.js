import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaBusca from './BuscaCliente'
import TelaLista from './ListaDadosCliente'
import TelaLista2 from './ListaDadosCartaoDoCliente'

const Stack = createStackNavigator()

export default function StackFunc (props){
    return(
        <Stack.Navigator initialRouteName="Busca"
            screenOptions={{headerShown: true}}> 
            <Stack.Screen name="Busca" 
                options={{title:"Busca cliente por ID"}} 
                component={TelaBusca}>
                </Stack.Screen>
            <Stack.Screen name="Lista" 
                component={TelaLista}/>
                <Stack.Screen name="Lista2" 
                component={TelaLista2}/>
            </Stack.Navigator>
            
        
    );
}


