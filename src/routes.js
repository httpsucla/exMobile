import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Media from "./pages/Media";
import ListaAluno from "./pages/ListaAluno";
import Contador from "./pages/Contador";
import Galeria from "./pages/Galeria";
import ListaSQLite from "./pages/ListaSQLite";
import Passagem from "./pages/Home/passagem";
import Api from "./pages/Api"
import EditarNota from "./pages/Media/editar";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Voltar"
                component={HomeTabs}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Passagem"
                component={Passagem} />
            <Stack.Screen
                name="Editar Nota"
                component={EditarNota}
                 />
        </Stack.Navigator>

    )
}

function HomeTabs() {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: "#32264d",
            tabBarInactiveTintColor: "#c1bccc",
            tabBarActiveBackgroundColor: "#ebebf5",
            tabBarInactiveBackgroundColor: "#fafafc",
            tabBarLabelStyle: {
                fontSize: 13,
                position: 'absolute',
                top: 15,
                bottom: 0,
                left: 0,
                right: 0
            },
            tabBarIconStyle: { display: "none" }
        }}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Media" component={Media}
            options={{
                title: "Média"
            }}/>
            <Tab.Screen name="ListaAluno" component={ListaAluno}
            options={{
                title: "Lista de alunos"
            }}/>
            <Tab.Screen name="ListaSQLite" component={ListaSQLite}
            options={{
                title: "Lista SQLite"
            }} />
            <Tab.Screen name="Contador" component={Contador}/> 
            <Tab.Screen name="Galeria" component={Galeria}/> 
            <Tab.Screen name="Api" component={Api} />
        </Tab.Navigator>
    )
}