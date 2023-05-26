import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from "./pages/Home";
import Media from "./pages/Media";
import ListaAluno from "./pages/ListaAluno";
import Contador from "./pages/Contador";
import Galeria from "./pages/Galeria";
import ListaSQLite from "./pages/ListaSQLite";

const Tab = createBottomTabNavigator();

export default function Routes() {
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
        </Tab.Navigator>
    )
}